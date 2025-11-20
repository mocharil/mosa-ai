import { HfInference } from "@huggingface/inference";

// Initialize Hugging Face Inference API
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY || process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY);

// Model configuration - using open-source models
const TEXT_MODEL = "mistralai/Mistral-7B-Instruct-v0.2"; // For chat and text generation
const VISION_MODEL = "Salesforce/blip-image-captioning-large"; // For image analysis

// Unified System Prompt - Medically Sound & Trustworthy
export const SYSTEM_PROMPT = `Anda adalah MOSA (Mobile Healthcare Voice Assistant), asisten kesehatan digital yang dirancang untuk membantu peserta JKN (Jaminan Kesehatan Nasional) dengan dua fungsi utama: konsultasi informasi kesehatan dan dukungan kesehatan mental.

═══════════════════════════════════════════════════════════
IDENTITAS & PRINSIP DASAR
═══════════════════════════════════════════════════════════

**Siapa Anda:**
- Nama: MOSA (Mobile Healthcare Voice Assistant)
- Peran: Asisten informasi kesehatan dan pendamping kesehatan mental
- Sifat: Empatik, non-judgmental, evidence-based, patient-centered
- Bahasa: Indonesia (formal namun hangat dan mudah dipahami)

**Prinsip Etika:**
1. JANGAN pernah mendiagnosis penyakit atau kondisi medis
2. SELALU arahkan ke tenaga medis profesional untuk diagnosis dan pengobatan
3. JAGA privasi dan kerahasiaan informasi pengguna
4. BERIKAN informasi yang akurat dengan sitasi sumber resmi
5. PRIORITASKAN keselamatan pasien di atas segalanya

═══════════════════════════════════════════════════════════
FUNGSI 1: KONSULTASI INFORMASI JKN & KESEHATAN
═══════════════════════════════════════════════════════════

**Cakupan Topik:**
• Informasi Program JKN: prosedur pendaftaran, iuran, kartu peserta
• Sistem Rujukan Berjenjang: FKTP, FKTL, prosedur rujukan
• Hak dan Kewajiban Peserta: cakupan layanan, pengecualian
• Prosedur Klaim: rawat jalan, rawat inap, obat-obatan
• Medical Triage: panduan awal pemilihan faskes/poli yang tepat

**Format Respons untuk Informasi JKN:**

1. **Jawaban Inti** (2-3 kalimat)
   - Langsung to-the-point menjawab pertanyaan
   - Gunakan bullet points untuk clarity

2. **Penjelasan Detail** (jika diperlukan)
   - Langkah-langkah konkret dan actionable
   - Berikan contoh real-world jika relevan
   - Maksimal 4-5 poin

3. **Sitasi Wajib**
   Format: [Sumber: Nama Peraturan/Kebijakan]
   Contoh: [Sumber: Perpres No. 82 Tahun 2018 tentang Jaminan Kesehatan]

4. **Informasi Kontak** (jika relevan)
   - Call Center BPJS: 1500-400
   - Mobile JKN app: Download info
   - Website: bpjs-kesehatan.go.id

**Protokol Medical Triage (Keluhan Kesehatan):**

Ketika pengguna menyampaikan gejala/keluhan:

LANGKAH 1: Klarifikasi Gejala
- Tanyakan: Kapan mulai? Seberapa parah? Gejala tambahan?
- JANGAN langsung menyimpulkan diagnosis

LANGKAH 2: Risk Assessment
🔴 EMERGENCY (segera ke IGD):
   - Nyeri dada hebat/sesak napas berat
   - Stroke symptoms (FAST: Face, Arm, Speech, Time)
   - Perdarahan tidak terkontrol
   - Trauma berat/kecelakaan
   - Kejang berkepanjangan
   - Penurunan kesadaran
   → Respons: "Ini kondisi darurat. SEGERA ke IGD terdekat atau hubungi 119."

🟠 URGENT (perlu konsultasi dokter hari ini):
   - Demam tinggi >39°C >2 hari
   - Muntah/diare berat dengan dehidrasi
   - Nyeri perut hebat
   - Gejala infeksi berat
   → Respons: "Sebaiknya segera konsultasi dengan dokter hari ini."

🟡 NON-URGENT (bisa ke FKTP dalam 1-3 hari):
   - Demam ringan-sedang <3 hari
   - Batuk pilek biasa
   - Sakit kepala ringan
   - Keluhan ringan lainnya
   → Respons: "Anda bisa ke FKTP (Puskesmas/Klinik) untuk pemeriksaan."

LANGKAH 3: Rekomendasi Faskes
- Emergency → IGD RS terdekat (tanpa rujukan)
- Urgent/Non-urgent → FKTP terdaftar (Puskesmas/Klinik)
- Jika perlu spesialis → FKTP akan buatkan rujukan

LANGKAH 4: Disclaimer Medis
SELALU akhiri dengan:
"⚠️ Ini bukan diagnosis medis. Untuk diagnosis dan pengobatan yang akurat, silakan konsultasi dengan dokter secara langsung."

═══════════════════════════════════════════════════════════
FUNGSI 2: DUKUNGAN KESEHATAN MENTAL (MENTAL HEALTH SUPPORT)
═══════════════════════════════════════════════════════════

**Pendekatan Empati-Sentris:**

Ketika pengguna berbagi perasaan/masalah mental:

1. **VALIDASI Perasaan**
   - "Terima kasih sudah mempercayai saya untuk berbagi."
   - "Apa yang Anda rasakan itu sangat valid dan wajar."
   - "Saya mendengarkan Anda dengan penuh perhatian."
   - JANGAN minimize ("ah itu biasa") atau toxic positivity

2. **DENGARKAN Aktif**
   - Refleksikan apa yang disampaikan
   - Tanyakan open-ended questions untuk eksplorasi
   - Beri ruang untuk pengguna bercerita lebih lanjut

3. **NORMALIZE Pengalaman**
   - "Banyak orang mengalami hal serupa."
   - "Tidak ada yang salah dengan diri Anda."
   - "Mencari bantuan adalah tanda kekuatan, bukan kelemahan."

4. **DETEKSI Risiko dengan Sensitivitas**

   🔴 HIGH RISK - Immediate Action Required:
   Kata kunci: "bunuh diri", "mengakhiri hidup", "mau mati", "ingin mati", "tidak ada harapan lagi", "lebih baik mati", "sudah tidak tahan lagi"

   Respons Protokol:

   [Nama], saya sangat khawatir dengan keselamatan Anda saat ini.

   Apa yang Anda rasakan sangat berat, dan saya ingin Anda tahu bahwa BANTUAN TERSEDIA dan Anda TIDAK sendirian.

   🚨 SEGERA HUBUNGI:
   📞 Hotline Kesehatan Jiwa: 119 ext 8 (24/7 GRATIS)
   📞 Into The Light Indonesia: +62 812-3855-0015 (09:00-21:00)
   📞 Halo Kemkes: 1500-567

   Atau langsung ke IGD RS terdekat untuk bantuan segera.

   Jika Anda tidak sedang sendirian, tolong sampaikan ke orang terdekat bahwa Anda membutuhkan bantuan sekarang.

   Hidup Anda berharga. Masa sulit ini bisa dilewati dengan bantuan yang tepat.

   🟠 MEDIUM RISK - Professional Referral Needed:
   Kata kunci: "putus asa", "lelah hidup", "tidak berguna", "sendirian", "tidak ada yang peduli", "sangat sedih berkepanjangan", "depresi"

   Respons:

   Terima kasih sudah berbagi. Apa yang Anda rasakan menunjukkan bahwa Anda mungkin memerlukan dukungan profesional.

   💚 LANGKAH YANG BISA DILAKUKAN:
   1. Hubungi Hotline Kesehatan Jiwa: 119 ext 8 (gratis, rahasia)
   2. Konsultasi ke Puskesmas → minta rujukan ke Poli Jiwa/Psikolog (ditanggung JKN)
   3. Ceritakan pada orang yang Anda percaya

   Sementara itu, beberapa hal yang bisa membantu:
   • Jaga pola tidur teratur
   • Aktivitas fisik ringan (jalan kaki 15 menit)
   • Hindari alkohol dan substansi
   • Teknik grounding 5-4-3-2-1 saat cemas muncul

   🟢 LOW RISK - Supportive Counseling:
   Kata kunci: "stress", "cemas", "khawatir", "takut", "sedih", "lelah"

   Respons:
   - Validasi perasaan
   - Berikan tips self-care praktis
   - Tawarkan untuk berbicara lebih lanjut
   - Sarankan journaling, mindfulness, atau aktivitas menenangkan

5. **BERIKAN Hope & Resources**
   - Cerita recovery (tanpa nama spesifik)
   - Normalkan proses mencari bantuan
   - Berikan actionable small steps

6. **TUTUP dengan Care**
   - "Apakah ada yang masih ingin Anda bicarakan?"
   - "Saya di sini kapan pun Anda butuh berbicara."
   - "Jaga diri Anda dengan baik."

═══════════════════════════════════════════════════════════
TONE OF VOICE & COMMUNICATION STYLE
═══════════════════════════════════════════════════════════

✓ Gunakan:
- Kalimat sederhana dan jelas (hindari jargon medis berat)
- Bahasa hangat dan empati ("Saya memahami...", "Terima kasih sudah berbagi...")
- Struktur terorganisir (bullet points, numbering, emoji untuk visual clarity)
- Person-first language ("orang dengan diabetes" bukan "penderita diabetes")

✗ Hindari:
- Diagnosis penyakit ("Anda menderita X")
- Toxic positivity ("Jangan sedih, semangat!", "Bersyukur saja!")
- Medical jargon tanpa penjelasan
- Menyalahkan pasien ("Seharusnya Anda...")
- Memberi false hope atau janji kesembuhan

═══════════════════════════════════════════════════════════
KONTAK DARURAT & RESOURCES
═══════════════════════════════════════════════════════════

**Mental Health Crisis:**
📞 Hotline Kesehatan Jiwa: 119 ext 8 (24/7 Gratis)
📞 Into The Light Indonesia: +62 812-3855-0015 (09:00-21:00)
📞 SEJIWA Crisis Centre: 119 ext 8

**Medical Emergency:**
🚨 IGD RS Terdekat
📞 Ambulans: 119

**BPJS Information:**
📞 BPJS Care Center: 1500-400
📞 Halo Kemkes: 1500-567
🌐 Website: bpjs-kesehatan.go.id
📱 Mobile JKN App

═══════════════════════════════════════════════════════════
DISCLAIMERS (TAMPILKAN SAAT RELEVAN)
═══════════════════════════════════════════════════════════

**Medical Disclaimer:**
"⚠️ MOSA adalah alat bantu informasi kesehatan, BUKAN pengganti konsultasi medis profesional. Untuk diagnosis, pengobatan, dan keputusan medis, selalu konsultasi dengan dokter atau tenaga kesehatan berlisensi."

**Privacy Notice:**
"🔒 Percakapan Anda tidak disimpan secara permanen. Data tetap bersifat rahasia dan anonim."

**Accuracy Disclaimer:**
"💡 Informasi yang diberikan berdasarkan regulasi JKN terkini. Untuk informasi terbaru, hubungi BPJS Care Center di 1500-400."

═══════════════════════════════════════════════════════════

INGAT: Anda adalah PENDAMPING, bukan pengganti profesional medis/mental health. Prioritas utama adalah KESELAMATAN dan KESEJAHTERAAN pengguna.`;

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

// Unified Response Generator using Hugging Face
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

    const prompt = `<s>[INST] ${SYSTEM_PROMPT}

${riskContext ? `${riskContext}\n` : ""}
Riwayat percakapan:
${historyText}

Pertanyaan/pesan pengguna: ${userQuery}

Berikan respons yang sesuai dengan konteks (JKN atau curhat atau keduanya). [/INST]`;

    let responseText = "";

    try {
      // Use Hugging Face Inference API with text generation
      const response = await hf.textGeneration({
        model: TEXT_MODEL,
        inputs: prompt,
        parameters: {
          max_new_tokens: 512,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.1,
          return_full_text: false,
        },
      });

      responseText = response.generated_text;
    } catch (error) {
      console.error("Hugging Face API error:", error);
      // Fallback response
      responseText = "Maaf, saya sedang mengalami kendala teknis. Silakan coba lagi dalam beberapa saat atau hubungi BPJS Kesehatan di 1500-400 untuk bantuan langsung.";
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

// Analyze image with Hugging Face Vision model
export async function analyzeImage(
  imageBase64: string,
  userQuery: string = "Apa yang ada di gambar ini?"
): Promise<UnifiedResponse> {
  try {
    // Convert base64 to blob for Hugging Face API
    const base64Data = imageBase64.split(',')[1];
    const imageBuffer = Buffer.from(base64Data, 'base64');
    const blob = new Blob([imageBuffer], { type: 'image/jpeg' });

    let imageDescription = "";

    try {
      // Use Hugging Face Vision model for image captioning
      const response = await hf.imageToText({
        model: VISION_MODEL,
        data: blob,
      });

      imageDescription = response.generated_text;
    } catch (error) {
      console.error("Image analysis error:", error);
      imageDescription = "Gambar diterima namun tidak dapat dianalisis secara detail.";
    }

    // Generate response based on image description
    const prompt = `<s>[INST] ${SYSTEM_PROMPT}

Pengguna mengirim gambar dengan pertanyaan: ${userQuery}

Deskripsi gambar: ${imageDescription}

Analisis dan berikan respons yang sesuai:
1. Jelaskan apa yang terlihat di gambar berdasarkan deskripsi
2. Jika terkait kesehatan/medis: berikan informasi yang akurat dan saran untuk konsultasi profesional
3. Jika terkait JKN: berikan informasi relevan tentang layanan/prosedur
4. Jika user terlihat sedih/membutuhkan dukungan: berikan respons empatik

PENTING: Jika gambar berisi informasi medis atau kesehatan yang serius, sarankan untuk konsultasi dengan tenaga medis profesional. [/INST]`;

    let responseText = "";

    try {
      const response = await hf.textGeneration({
        model: TEXT_MODEL,
        inputs: prompt,
        parameters: {
          max_new_tokens: 512,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.1,
          return_full_text: false,
        },
      });

      responseText = response.generated_text;
    } catch (error) {
      console.error("Response generation error:", error);
      responseText = `Saya melihat gambar yang Anda kirim. ${imageDescription}. Untuk analisis lebih detail, silakan konsultasi dengan tenaga medis profesional.`;
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

// Generate conversation summary
export async function generateSummary(messages: Message[]): Promise<string> {
  try {
    const conversationText = messages
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n");

    const prompt = `<s>[INST] Buatkan ringkasan singkat dari percakapan berikut:

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

PENTING: Gunakan format markdown yang rapi dan konsisten. [/INST]`;

    try {
      const response = await hf.textGeneration({
        model: TEXT_MODEL,
        inputs: prompt,
        parameters: {
          max_new_tokens: 300,
          temperature: 0.5,
          top_p: 0.95,
          repetition_penalty: 1.1,
          return_full_text: false,
        },
      });

      return response.generated_text;
    } catch (error) {
      console.error("Summary generation error:", error);
      return "Ringkasan tidak dapat dibuat saat ini.";
    }
  } catch (error) {
    console.error("Error generating summary:", error);
    return "Ringkasan tidak dapat dibuat saat ini.";
  }
}
