import { VertexAI } from "@google-cloud/vertexai";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Vertex AI with service account or API key
let vertexAI: VertexAI | null = null;
let genAI: GoogleGenerativeAI | null = null;
let useVertexAI = false;

// Try to get credentials from GEMINI_CREDS (JSON format)
const geminiCreds = process.env.GEMINI_CREDS || process.env.NEXT_PUBLIC_GEMINI_CREDS;

if (geminiCreds) {
  try {
    const creds = JSON.parse(geminiCreds);

    // Check if this is a service account JSON (has type, project_id, private_key)
    if (creds.type === "service_account" && creds.project_id && creds.private_key) {
      console.log("✅ Using Vertex AI with Service Account from GEMINI_CREDS");

      // Initialize Vertex AI with service account
      vertexAI = new VertexAI({
        project: creds.project_id,
        location: "us-central1", // Default location
        googleAuthOptions: {
          credentials: creds
        }
      });

      useVertexAI = true;
      console.log("✅ Vertex AI initialized with service account");

    } else if (creds.api_key || creds.apiKey || creds.key) {
      // This is an API key in JSON format
      const apiKey = creds.api_key || creds.apiKey || creds.key;
      console.log("✅ Using Generative AI with API key from GEMINI_CREDS JSON");
      genAI = new GoogleGenerativeAI(apiKey);
      console.log("✅ Generative AI initialized successfully");
    } else {
      console.error("❌ GEMINI_CREDS JSON missing required fields");
      console.error("Expected: service account (type, project_id, private_key) OR api_key");
    }
  } catch (error) {
    console.error("❌ Failed to parse GEMINI_CREDS JSON:", error);
  }
}

// Fallback to GEMINI_API_KEY if GEMINI_CREDS didn't work
if (!vertexAI && !genAI) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
  if (apiKey) {
    console.log("✅ Using API key from GEMINI_API_KEY");
    genAI = new GoogleGenerativeAI(apiKey);
    console.log("✅ Generative AI initialized successfully");
  } else {
    console.warn("⚠️ No credentials found. Checked: GEMINI_CREDS (service account/API key), GEMINI_API_KEY");
  }
}

// Unified System Prompt
export const SYSTEM_PROMPT = `Anda adalah asisten kesehatan yang membantu dengan DUA fungsi utama:

**FUNGSI 1 - KONSULTASI JKN:**
Ketika pengguna bertanya tentang JKN, BPJS, prosedur kesehatan:
1. Jawab singkat dan jelas (maksimal 3 paragraf)
2. WAJIB sertakan sitasi sumber dalam format [Sumber: Nama Peraturan]
3. Jika tentang keluhan kesehatan: tanyakan gejala → rekomendasikan poli yang tepat
4. Berikan langkah-langkah konkret yang bisa diikuti
5. Jika tidak yakin, arahkan ke BPJS Kesehatan di 1500-400

Topik JKN: pendaftaran, kartu, prosedur rujukan, cakupan layanan, klaim, iuran, FKTP, FKTL

**FUNGSI 2 - DUKUNGAN EMOSIONAL (CURHAT):**
Ketika pengguna berbagi perasaan, keluhan mental/emosional:
1. Dengarkan dengan empati tanpa menghakimi
2. Validasi perasaan pengguna dengan tulus
3. DETEKSI kata kunci risiko tinggi: "bunuh diri", "mengakhiri hidup", "putus asa", "tidak ada harapan", "mau mati", "lelah hidup"
4. Jika risiko tinggi: segera sarankan bantuan profesional dan berikan nomor hotline
5. Berikan affirmasi positif dan langkah kecil yang bisa dilakukan
6. Akhiri dengan: "Apakah ada yang masih ingin dibicarakan?"

**PENTING:**
- Deteksi otomatis topik dari pertanyaan pengguna
- Bisa switch antar fungsi dalam satu percakapan
- Untuk JKN: fokus informasi praktis + sitasi
- Untuk curhat: fokus empati + safety
- Gunakan bahasa ramah, mudah dipahami, dan supportif

Nomor bantuan:
- Hotline Kesehatan Jiwa: 119 ext 8
- BPJS Kesehatan: 1500-400
- Halo Kemkes: 1500-567`;

// Types
export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  image?: string; // Base64 encoded image
  imageUrl?: string; // Image URL for display
}

export interface UnifiedResponse {
  answer: string;
  riskLevel: "low" | "medium" | "high";
  showEmergencyContacts: boolean;
  topicType: "jkn" | "curhat" | "general";
}

// Unified Response Generator using Vertex AI
export async function getUnifiedResponse(
  userQuery: string,
  conversationHistory: Message[]
): Promise<UnifiedResponse> {
  try {
    // Detect high-risk keywords for mental health
    const highRiskKeywords = [
      "bunuh diri",
      "mengakhiri hidup",
      "mau mati",
      "ingin mati",
      "tidak ada harapan",
      "lebih baik mati",
      "sudah tidak tahan",
    ];

    const mediumRiskKeywords = [
      "putus asa",
      "lelah hidup",
      "tidak berguna",
      "sendirian",
      "tidak ada yang peduli",
      "sangat sedih",
      "depresi",
    ];

    const lowerMessage = userQuery.toLowerCase();
    const isHighRisk = highRiskKeywords.some((kw) =>
      lowerMessage.includes(kw)
    );
    const isMediumRisk = mediumRiskKeywords.some((kw) =>
      lowerMessage.includes(kw)
    );

    const historyText = conversationHistory
      .slice(-6)
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n");

    const riskContext = isHighRisk
      ? "⚠️ RISIKO TINGGI TERDETEKSI - Prioritaskan keselamatan dan rujukan profesional"
      : isMediumRisk
      ? "⚠️ RISIKO SEDANG - Berikan dukungan dan sarankan konsultasi"
      : "";

    const prompt = `${SYSTEM_PROMPT}

${riskContext ? `${riskContext}\n` : ""}
Riwayat percakapan:
${historyText}

Pertanyaan/pesan pengguna: ${userQuery}

Berikan respons yang sesuai dengan konteks (JKN atau curhat atau keduanya).`;

    let responseText = "";

    // Use Vertex AI or Generative AI depending on initialization
    if (useVertexAI && vertexAI) {
      // Use Vertex AI with service account
      const model = vertexAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 2048,
          temperature: 0.7,
        },
      });

      const response = result.response;
      responseText = response.candidates?.[0]?.content?.parts?.[0]?.text || "";

    } else if (genAI) {
      // Use Generative AI with API key
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });

      const result = await model.generateContent(prompt);
      const response = result.response;
      responseText = response.text();

    } else {
      throw new Error("No AI client initialized");
    }

    // Detect topic type from response or query
    const isJKNTopic =
      /jkn|bpjs|kartu|klaim|iuran|faskes|puskesmas|rumah sakit|rujukan|fktp|fktl/i.test(
        userQuery + " " + responseText
      );
    const isCurhatTopic =
      /sedih|stres|cemas|takut|khawatir|lelah|capek|sendirian|putus asa|depresi/i.test(
        userQuery + " " + responseText
      );

    const topicType: "jkn" | "curhat" | "general" = isJKNTopic && isCurhatTopic
      ? "general"
      : isJKNTopic
      ? "jkn"
      : isCurhatTopic
      ? "curhat"
      : "general";

    return {
      answer: responseText,
      riskLevel: isHighRisk ? "high" : isMediumRisk ? "medium" : "low",
      showEmergencyContacts: isHighRisk || isMediumRisk,
      topicType,
    };
  } catch (error) {
    console.error("Error in getUnifiedResponse:", error);
    throw new Error("Maaf, terjadi kesalahan saat memproses permintaan Anda.");
  }
}

// Generate conversation summary
// Analyze image with Vertex AI Vision
export async function analyzeImage(
  imageBase64: string,
  userQuery: string = "Apa yang ada di gambar ini?"
): Promise<UnifiedResponse> {
  try {
    const prompt = `${SYSTEM_PROMPT}

Pengguna mengirim gambar dengan pertanyaan: ${userQuery}

Analisis gambar ini dan berikan respons yang sesuai:
1. Jelaskan apa yang terlihat di gambar
2. Jika terkait kesehatan/medis: berikan informasi yang akurat dan saran untuk konsultasi profesional
3. Jika terkait JKN: berikan informasi relevan tentang layanan/prosedur
4. Jika user terlihat sedih/membutuhkan dukungan: berikan respons empatik

PENTING: Jika gambar berisi informasi medis atau kesehatan yang serius, sarankan untuk konsultasi dengan tenaga medis profesional.`;

    let responseText = "";

    // Use Vertex AI or Generative AI depending on initialization
    if (useVertexAI && vertexAI) {
      // Use Vertex AI with service account
      const model = vertexAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });

      // Prepare image part for Vertex AI
      const imagePart = {
        inlineData: {
          data: imageBase64.split(',')[1],
          mimeType: 'image/jpeg',
        },
      };

      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }, imagePart] }],
        generationConfig: {
          maxOutputTokens: 2048,
          temperature: 0.7,
        },
      });

      const response = result.response;
      responseText = response.candidates?.[0]?.content?.parts?.[0]?.text || "";

    } else if (genAI) {
      // Use Generative AI with API key
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });

      // Prepare image part for Generative AI
      const imagePart = {
        inlineData: {
          data: imageBase64.split(',')[1],
          mimeType: 'image/jpeg',
        },
      };

      const result = await model.generateContent([prompt, imagePart]);
      const response = result.response;
      responseText = response.text();

    } else {
      throw new Error("No AI client initialized");
    }

    // Basic risk detection from image analysis response
    const isHighRisk = /rujukan|emergency|segera|darurat|serius/i.test(responseText);

    return {
      answer: responseText,
      riskLevel: isHighRisk ? 'high' : 'low',
      showEmergencyContacts: isHighRisk,
      topicType: 'general',
    };
  } catch (error) {
    console.error('Error in analyzeImage:', error);
    throw new Error('Maaf, terjadi kesalahan saat menganalisis gambar.');
  }
}

export async function generateSummary(messages: Message[]): Promise<string> {
  try {
    const conversationText = messages
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n");

    const prompt = `Buatkan ringkasan singkat dari percakapan berikut:

${conversationText}

Format ringkasan menggunakan markdown dengan aturan berikut:
- Gunakan * untuk bullet points (bukan - atau •)
- Gunakan **text** untuk kata atau frasa yang perlu ditekankan (bold)
- Setiap poin harus jelas dan ringkas
- Maksimal 5 poin utama

Struktur ringkasan:
* **Topik Utama**: [2-3 poin singkat tentang apa yang dibahas]
* **Informasi JKN**: [jika ada pertanyaan JKN, rangkum jawaban dan rekomendasi]
* **Dukungan Emosional**: [jika ada curhat/emosi, rangkum dukungan yang diberikan]
* **Tindak Lanjut**: [langkah-langkah yang perlu dilakukan, jika ada]
* **Kontak Penting**: [nomor hotline yang relevan, jika disebutkan]

Contoh format yang benar:
* **Pertanyaan utama**: Cara mendaftar BPJS dan biaya iuran
* **Jawaban diberikan**: Prosedur pendaftaran melalui kantor cabang atau online
* **Tindak lanjut**: Siapkan KTP dan KK untuk pendaftaran

PENTING: Gunakan format markdown yang rapi dan konsisten.`;

    // Use Vertex AI or Generative AI depending on initialization
    if (useVertexAI && vertexAI) {
      // Use Vertex AI with service account
      const model = vertexAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.5,
        },
      });

      return result.response.candidates?.[0]?.content?.parts?.[0]?.text || "Ringkasan tidak dapat dibuat saat ini.";

    } else if (genAI) {
      // Use Generative AI with API key
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });

      const result = await model.generateContent(prompt);
      return result.response.text();

    } else {
      throw new Error("No AI client initialized");
    }
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Ringkasan tidak dapat dibuat saat ini.";
  }
}
