# 🏥 MOSA - Mobile Healthcare Voice Assistant

[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-brightgreen)](https://github.com)
[![AI Model](https://img.shields.io/badge/AI-Hugging%20Face-yellow)](https://huggingface.co)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org)

**MOSA (Mobile Healthcare Voice Assistant)** adalah asisten kesehatan berbasis AI yang dirancang khusus untuk membantu peserta JKN (Jaminan Kesehatan Nasional) mengakses informasi kesehatan dan mendapatkan dukungan kesehatan mental dengan mudah, cepat, dan empati.

> 🤗 **100% Open-Source AI** - Menggunakan model Mistral 7B & BLIP dari Hugging Face untuk transparansi dan customizability penuh.

---

## 🌟 Mengapa MOSA?

### Masalah yang Diselesaikan
- ⏰ **Antrian panjang** di faskes untuk pertanyaan sederhana
- ❓ **Kebingungan** tentang prosedur JKN, rujukan, dan klaim
- 🚫 **Stigma** dalam mencari bantuan kesehatan mental
- 📱 **Akses terbatas** ke informasi kesehatan 24/7

### Solusi MOSA
- ✅ **Instant Response** - Jawaban dalam 1-2 detik
- ✅ **Always Available** - 24/7, di mana pun, kapan pun
- ✅ **Privacy First** - Percakapan tidak disimpan permanen
- ✅ **Evidence-Based** - Setiap jawaban menyertakan dasar hukum/regulasi
- ✅ **Empathetic** - Mendengarkan dengan empati tanpa menghakimi

---

## 🎯 Fitur Utama

### 1. 🏥 Konsultasi JKN Cerdas
Dapatkan jawaban akurat tentang layanan JKN dengan sitasi resmi:
- **Prosedur Klaim** - Cara klaim rawat inap, rawat jalan, obat-obatan
- **Sistem Rujukan** - Kapan perlu rujukan, cara mendapat rujukan
- **Cakupan Layanan** - Apa saja yang ditanggung JKN
- **Medical Triage** - Rekomendasi poli/faskes yang tepat berdasarkan gejala
- **Iuran & Pendaftaran** - Cara daftar, biaya, dan cara bayar

**Contoh Percakapan:**
```
User: "Saya batuk dan demam 3 hari, ke poli apa ya?"

MOSA: "Berdasarkan gejala batuk dan demam 3 hari, Anda sebaiknya ke:
🏥 POLI UMUM di Puskesmas/FKTP Anda

Alasan:
• Gejala masih kategori ringan-sedang
• Dokter umum bisa menangani ISPA (Infeksi Saluran Pernapasan Atas)
• Gratis dengan BPJS

⚠️ Segera ke IGD jika:
• Demam >39°C lebih dari 3 hari
• Sesak napas
• Batuk berdarah

[Sumber: Permenkes No. 71 Tahun 2013 - Pelayanan Kesehatan pada JKN]"
```

### 2. 💚 Curhat Aman (Mental Health Support)
Ruang aman untuk berbagi perasaan dengan AI yang empatik:
- **Emotional Support** - Mendengarkan dengan empati dan validasi perasaan
- **Risk Detection** - Deteksi dini risiko bunuh diri atau self-harm
- **Professional Referral** - Rujukan otomatis ke hotline/psikolog jika diperlukan
- **Crisis Intervention** - Respons cepat untuk situasi darurat mental health
- **Anonymous** - Tidak perlu login, privasi terjaga

**Deteksi Risiko 3 Tingkat:**
- 🟢 **Low Risk** - Stress normal, tips self-care
- 🟡 **Medium Risk** - Gejala depresi/anxiety, rujukan ke konseling
- 🔴 **High Risk** - Ideasi bunuh diri, segera hubungi hotline darurat

### 3. 🎤 Voice Interface
Bicara langsung dengan MOSA seperti berbicara dengan teman:
- **Speech-to-Text** - Teknologi Web Speech API
- **Text-to-Speech** - Dengar respons dengan suara natural
- **Real-time Transcription** - Lihat teks saat berbicara
- **Multi-language** - Indonesia & English support

### 4. 📸 Multimodal (Image Analysis)
Upload foto untuk analisis visual:
- **Skin Conditions** - Analisis ruam, gatal, bentol
- **Medical Documents** - Baca hasil lab, resep dokter
- **Health Records** - Scan kartu BPJS, surat rujukan

### 5. 📊 Conversation Summary
Ekspor ringkasan percakapan untuk referensi:
- **Markdown Format** - Mudah dibaca dan di-share
- **Key Highlights** - Poin-poin penting percakapan
- **Action Items** - Langkah selanjutnya yang perlu dilakukan

---

## 🚀 Tech Stack & Architecture

### AI Engine (Open-Source)
| Component | Model | Purpose |
|-----------|-------|---------|
| 💬 Chat Generation | [Mistral-7B-Instruct-v0.2](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2) | Conversational AI for JKN & mental health support |
| 🖼️ Image Analysis | [BLIP Image Captioning](https://huggingface.co/Salesforce/blip-image-captioning-large) | Medical image understanding |
| 🎤 Speech-to-Text | Web Speech API | Voice input |
| 🔊 Text-to-Speech | Web Speech API | Voice output |

### Frontend & Backend
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18 + Tailwind CSS 3
- **State Management**: Zustand
- **Type Safety**: TypeScript
- **API**: Next.js API Routes (serverless)

### Why Open-Source Models?

| Benefit | Description |
|---------|-------------|
| 🔍 **Transparency** | Lihat model yang digunakan, tidak ada black box |
| 🎨 **Customizable** | Fine-tune model untuk use case spesifik |
| 🆓 **Cost-Effective** | Gratis untuk rate limit tertentu (5000 req/month) |
| 🌐 **No Vendor Lock-in** | Ganti model kapan saja tanpa rewrite code |
| 👥 **Community** | Didukung komunitas AI global |

---

## 📋 Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** atau **yarn** package manager
- **Hugging Face Account** (Gratis - [Sign up](https://huggingface.co/join))
- **Modern Browser** dengan Web Speech API support (Chrome, Edge recommended)

---

## 🛠️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/mosa-ai.git
cd mosa-ai
```

### 2. Install Dependencies
```bash
npm install
# atau
yarn install
```

### 3. Get Hugging Face API Token

1. **Sign up** di [Hugging Face](https://huggingface.co/join)
2. Pergi ke [Settings → Access Tokens](https://huggingface.co/settings/tokens)
3. Klik **"New token"**
4. Pilih **"Read"** permission
5. Copy token yang dihasilkan

### 4. Setup Environment Variables

```bash
# Copy template
cp .env.example .env.local

# Edit .env.local dengan token Anda
```

**File `.env.local`:**
```env
# Hugging Face API Token (REQUIRED)
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="MOSA - Voice JKN Agent"
NEXT_PUBLIC_DEFAULT_LANGUAGE=id
```

### 5. Run Development Server

```bash
npm run dev
# atau
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
mosa-ai/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts              # Main chat API endpoint
│   │   └── speech/
│   │       └── route.ts              # TTS API endpoint
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatBubble.tsx        # Individual message bubble
│   │   │   ├── ChatContainer.tsx     # Message list container
│   │   │   ├── UnifiedInput.tsx      # Text/voice input component
│   │   │   └── WelcomeScreen.tsx     # Initial landing screen
│   │   ├── voice/
│   │   │   ├── VoiceButton.tsx       # Mic button with animation
│   │   │   ├── AudioVisualizer.tsx   # Real-time audio waves
│   │   │   └── VoiceSphere.tsx       # 3D speaking animation
│   │   ├── camera/
│   │   │   └── CameraCapture.tsx     # Image capture for analysis
│   │   └── ConversationSummary.tsx   # Summary modal
│   ├── lib/
│   │   ├── huggingface.ts            # Hugging Face API wrapper
│   │   ├── speechRecognition.ts      # Speech utilities
│   │   ├── store.ts                  # Zustand global state
│   │   ├── utils.ts                  # Helper functions
│   │   └── markdown.ts               # Markdown parser
│   ├── styles/
│   │   └── globals.css               # Global Tailwind styles
│   ├── chat/
│   │   └── page.tsx                  # Main chat interface
│   ├── voice-agent/
│   │   └── page.tsx                  # Voice-only mode
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Landing page
├── public/
│   ├── audio/                        # Sound effects
│   └── images/                       # Static images
├── .env.local                        # Environment variables (gitignored)
├── .env.example                      # Template for env vars
├── next.config.js                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS config
├── tsconfig.json                     # TypeScript config
├── package.json                      # Dependencies
└── README.md                         # This file
```

---

## 📖 Usage Guide

### Mode 1: Text Chat
1. Klik **"Mulai Chat"** dari homepage
2. Ketik pertanyaan di input box
3. MOSA akan merespons dengan jawaban terstruktur
4. Klik icon speaker untuk dengar respons

### Mode 2: Voice Chat
1. Klik **tombol microphone** 🎤
2. Bicara dengan jelas
3. MOSA akan transcribe dan respons
4. Dengar respons secara otomatis (jika auto-speak aktif)

### Mode 3: Image Analysis
1. Klik **icon camera** 📷
2. Upload foto atau ambil foto baru
3. Tambahkan pertanyaan (opsional)
4. MOSA akan analisis dan berikan feedback

### Fitur Tambahan
- **📄 Summary**: Klik icon document untuk ringkasan percakapan
- **🗑️ Clear Chat**: Hapus riwayat percakapan
- **⚙️ Settings**: Ubah bahasa, auto-speak, dll
- **🚨 Emergency**: Tombol merah untuk hotline darurat

---

## 🔧 Configuration & Customization

### System Prompt Customization

Edit `app/lib/huggingface.ts` untuk mengubah behavior AI:

```typescript
export const SYSTEM_PROMPT = `
Anda adalah MOSA, asisten kesehatan JKN...
// Customize prompt di sini
`;
```

### Model Configuration

Ganti model AI di `app/lib/huggingface.ts`:

```typescript
// Text Generation
const TEXT_MODEL = "mistralai/Mistral-7B-Instruct-v0.2";

// Image Analysis
const VISION_MODEL = "Salesforce/blip-image-captioning-large";
```

**Model Alternatif:**
- Text: `HuggingFaceH4/zephyr-7b-beta`, `meta-llama/Llama-2-7b-chat-hf`
- Vision: `nlpconnect/vit-gpt2-image-captioning`, `microsoft/git-base`

### Risk Detection Keywords

Modify keyword detection di `app/lib/huggingface.ts`:

```typescript
const highRiskKeywords = [
  "bunuh diri",
  "mengakhiri hidup",
  "mau mati",
  // tambahkan keyword custom
];
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mosa-ai)

**Steps:**
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com/new)
3. Add environment variables:
   - `HUGGINGFACE_API_KEY`
4. Deploy! 🚀

**Auto HTTPS, CDN, dan Scaling** included.

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Self-Hosted (VPS/Cloud)

```bash
# Build for production
npm run build

# Start server
npm start

# Or use PM2 for production
pm2 start npm --name "mosa" -- start
```

---

## 🧪 Testing

### Browser Compatibility

| Browser | Speech Recognition | Speech Synthesis | Status |
|---------|-------------------|------------------|--------|
| Chrome 80+ | ✅ Full Support | ✅ Full Support | ✅ Recommended |
| Edge 80+ | ✅ Full Support | ✅ Full Support | ✅ Recommended |
| Firefox | ⚠️ Limited | ✅ Full Support | ⚠️ Partial |
| Safari | ❌ Not Supported | ⚠️ Limited | ❌ Not Recommended |

### Mobile Support
- ✅ iOS 14+ (text-only, no voice)
- ✅ Android 8+ (full voice support di Chrome)
- ✅ Responsive design (optimized for portrait)

---

## 🔒 Privacy & Security

### Data Privacy
- ✅ **No Login Required** - Tidak perlu akun atau email
- ✅ **No Data Storage** - Percakapan tidak disimpan ke database
- ✅ **Local State Only** - Data di browser, hilang saat refresh
- ✅ **No Tracking** - Tidak ada analytics atau cookies tracking
- ✅ **HTTPS Only** - Enkripsi end-to-end di production

### Medical Disclaimer
⚠️ **PENTING**: MOSA adalah alat bantu informasi, **BUKAN pengganti konsultasi medis profesional**.

- Selalu konsultasi dengan dokter untuk diagnosis dan pengobatan
- Jangan gunakan MOSA untuk kasus darurat medis
- Informasi yang diberikan bersifat umum dan edukatif
- Keputusan medis harus dibuat oleh tenaga medis berlisensi

### Crisis Support
Jika Anda dalam krisis mental health, hubungi segera:
- 📞 **Hotline Kesehatan Jiwa**: 119 ext 8 (24/7 Gratis)
- 📞 **Halo Kemkes**: 1500-567
- 📞 **Into The Light**: +62 812-3855-0015
- 🏥 **IGD Terdekat** untuk emergency

---

## 🆘 Troubleshooting

### Microphone Not Working
```
Error: "Speech recognition not available"
```
**Fix:**
- ✅ Use Chrome or Edge browser
- ✅ Allow microphone permission in browser
- ✅ Use HTTPS (or localhost for dev)
- ✅ Check microphone is not used by other apps

### API Error
```
Error: "Failed to fetch from Hugging Face API"
```
**Fix:**
- ✅ Check API token in `.env.local`
- ✅ Verify token has "Read" permission
- ✅ Check rate limit (5000 req/month free tier)
- ✅ Wait for model cold start (10-30 seconds first time)

### Build Error
```
Error: Module not found
```
**Fix:**
```bash
# Clear cache
rm -rf .next node_modules

# Reinstall
npm install

# Rebuild
npm run build
```

---

## 📚 Documentation & Resources

### Official Docs
- [📘 Full Documentation](./docs/README.md)
- [🎨 Design System](./docs/DESIGN.md)
- [🔌 API Reference](./docs/API.md)
- [🧠 AI Models Guide](./docs/MODELS.md)

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Hugging Face Inference API](https://huggingface.co/docs/api-inference)
- [Mistral 7B Model Card](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.2)
- [BLIP Model Card](https://huggingface.co/Salesforce/blip-image-captioning-large)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

### BPJS Resources
- [BPJS Kesehatan Official](https://bpjs-kesehatan.go.id)
- [Perpres No. 82 Tahun 2018](https://peraturan.bpk.go.id/Home/Details/77543/perpres-no-82-tahun-2018)
- [Permenkes No. 71 Tahun 2013](https://peraturan.bpk.go.id/Home/Details/113270/permenkes-no-71-tahun-2013)

---

## 🤝 Contributing

Contributions are welcome! 🎉

### How to Contribute
1. Fork this repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Code Style
- Use TypeScript strict mode
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic

### Ideas for Contribution
- 🌐 Add more language support
- 🎨 Improve UI/UX
- 🧠 Fine-tune model for Indonesian medical terms
- 📊 Add analytics dashboard
- 🔊 Better TTS voices
- 📱 Native mobile app (React Native)

---

## 📊 Roadmap

### Version 1.0 (Current)
- ✅ Basic JKN Q&A
- ✅ Mental health support
- ✅ Voice interface
- ✅ Image analysis
- ✅ Open-source models

### Version 1.1 (Planned)
- 🔄 Fine-tuned model for Indonesian medical terms
- 🔄 Offline mode (local LLM)
- 🔄 Multi-turn conversation context
- 🔄 Appointment booking integration

### Version 2.0 (Future)
- 🔮 Personalized health tracking
- 🔮 Integration with BPJS API (if available)
- 🔮 Telemedicine video call
- 🔮 Prescription refill reminder

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**TL;DR**: You can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.

---

## 👨‍💻 Authors & Acknowledgments

### Core Team
- **Your Name** - Initial work - [@yourusername](https://github.com/yourusername)

### Acknowledgments
- [Hugging Face](https://huggingface.co) for amazing open-source models
- [Mistral AI](https://mistral.ai) for Mistral-7B model
- [Salesforce Research](https://www.salesforce.com/company/research/) for BLIP model
- BPJS Kesehatan for public health data
- All contributors and testers

---

## 📞 Support & Contact

### Get Help
- 📖 [Documentation](./docs)
- 💬 [GitHub Discussions](https://github.com/yourusername/mosa-ai/discussions)
- 🐛 [Report Bug](https://github.com/yourusername/mosa-ai/issues)
- 💡 [Request Feature](https://github.com/yourusername/mosa-ai/issues)

### Social
- 💼 LinkedIn: [Moch Aril Indra Permana]([https://linkedin.com/in/yourname](https://www.linkedin.com/in/moch-aril-indra-permana-52887b138/))
- 📧 Email: arilindra21@gmail.com

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/mosa-ai&type=Date)](https://star-history.com/#yourusername/mosa-ai&Date)

---

<div align="center">

**Made with ❤️ for Indonesian Healthcare**

**Powered by Open-Source AI** 🤗

[Website](https://mosa.vercel.app) • [Documentation](./docs) • [Report Bug](https://github.com/yourusername/mosa-ai/issues)

---

© 2024 MOSA - Voice JKN Agent. All rights reserved.

</div>
"# mosa-ai" 
