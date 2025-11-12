# Voice JKN Agent + Curhat Aman

Aplikasi asisten suara dwibahasa (Indonesia-Inggris) untuk peserta JKN yang memberikan jawaban cepat tentang layanan kesehatan dan dukungan kesehatan mental.

## 🌟 Fitur Utama

### Mode Konsultasi JKN
- ✅ Jawaban pertanyaan tentang prosedur klaim, cakupan layanan, cara daftar, syarat rujukan
- ✅ Sistem triage untuk rekomendasi poli/faskes yang tepat
- ✅ Setiap jawaban menyertakan sitasi sumber resmi (Perpres, Permenkes, dll)
- ✅ Format jawaban singkat, jelas, dengan langkah-langkah actionable

### Mode Curhat Aman
- ✅ Tone empati tinggi dan non-judgmental
- ✅ Deteksi early warning signs untuk risiko kesehatan mental
- ✅ Emotional scoring sederhana (0-10 scale)
- ✅ Rujukan otomatis ke profesional jika diperlukan
- ✅ Data privasi terjaga

### Fitur Tambahan
- 🎤 Voice input/output dengan Web Speech API
- 🌐 Dukungan bahasa Indonesia dan Inggris
- 📊 Ringkasan percakapan yang bisa diekspor
- 🚨 Tombol emergency untuk nomor hotline darurat
- 📱 Responsive design untuk mobile dan web

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI**: React, Tailwind CSS
- **AI Engine**: Google Gemini API (gemini-1.5-flash)
- **Voice**: Web Speech API, react-speech-recognition
- **State Management**: Zustand
- **TypeScript**: Full type safety

## 📋 Prerequisites

- Node.js 18+
- npm atau yarn
- Google Gemini API Key ([Dapatkan di sini](https://makersuite.google.com/app/apikey))
- Browser modern yang mendukung Web Speech API (Chrome, Edge)

## 🛠️ Installation

1. **Clone repository**
\`\`\`bash
git clone <repository-url>
cd voice-jkn-agent
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Setup environment variables**

Salin file `.env.example` menjadi `.env.local`:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edit `.env.local` dan masukkan Gemini API key Anda:
\`\`\`env
GEMINI_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LANGUAGE=id
\`\`\`

4. **Run development server**
\`\`\`bash
npm run dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🏗️ Project Structure

\`\`\`
voice-jkn-agent/
├── app/
│   ├── api/
│   │   └── gemini/
│   │       └── route.ts          # Gemini API endpoint
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatBubble.tsx    # Chat message component
│   │   │   └── ChatContainer.tsx # Chat list container
│   │   ├── voice/
│   │   │   ├── VoiceButton.tsx   # Mic button component
│   │   │   └── AudioVisualizer.tsx # Audio wave visualization
│   │   ├── ConversationSummary.tsx # Summary modal
│   │   └── EmergencyButton.tsx   # Emergency hotline button
│   ├── lib/
│   │   ├── gemini.ts             # Gemini API wrapper
│   │   ├── speechRecognition.ts  # Speech utilities
│   │   ├── store.ts              # Zustand state management
│   │   └── utils.ts              # Helper functions
│   ├── styles/
│   │   └── globals.css           # Global styles
│   ├── chat/
│   │   └── page.tsx              # Main chat interface
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
├── public/
│   ├── audio/                    # Audio assets
│   └── docs/                     # JKN documentation
├── .env.local                    # Environment variables (gitignored)
├── .env.example                  # Environment template
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
\`\`\`

## 📖 Usage Guide

### Mode JKN
1. Pilih "Tanya JKN" dari halaman utama
2. Tekan tombol mikrofon
3. Tanyakan tentang layanan JKN (contoh: "Bagaimana cara klaim rawat inap?")
4. Sistem akan memberikan jawaban dengan sitasi sumber
5. Jika tentang keluhan kesehatan, akan ada rekomendasi poli

### Mode Curhat Aman
1. Pilih "Curhat Aman" dari halaman utama
2. Tekan tombol mikrofon
3. Ceritakan apa yang Anda rasakan
4. Sistem akan mendengarkan dengan empati
5. Jika terdeteksi risiko tinggi, akan ada rujukan ke profesional

### Fitur Lainnya
- **Auto-speak**: Toggle icon speaker di header untuk mendengar respons
- **Ringkasan**: Klik icon dokumen untuk membuat ringkasan percakapan
- **Clear chat**: Klik icon tempat sampah untuk menghapus percakapan
- **Emergency**: Tombol merah di pojok kanan bawah untuk nomor darurat

## 🔧 Configuration

### System Prompts

System prompts bisa disesuaikan di `app/lib/gemini.ts`:

- `SYSTEM_PROMPT_JKN`: Prompt untuk mode konsultasi JKN
- `SYSTEM_PROMPT_CURHAT`: Prompt untuk mode curhat

### Emotion Detection

Keyword risiko bisa dimodifikasi di fungsi `getCurhatResponse()` dalam `app/lib/gemini.ts`:

\`\`\`typescript
const highRiskKeywords = [
  "bunuh diri",
  "mengakhiri hidup",
  // tambahkan keyword lain...
];
\`\`\`

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push kode ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Tambahkan environment variables:
   - `GEMINI_API_KEY`
4. Deploy!

### Build untuk Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🧪 Testing

Browser compatibility checklist:
- ✅ Chrome 80+ (Recommended)
- ✅ Edge 80+
- ⚠️ Firefox (Web Speech API terbatas)
- ❌ Safari (Web Speech API tidak didukung penuh)

## 📱 Mobile Support

Aplikasi fully responsive dan dioptimalkan untuk mobile:
- Touch-friendly interface
- Portrait mode optimized
- Mobile speech recognition support

## 🔒 Privacy & Security

- ✅ Data percakapan disimpan di local state (tidak persistent)
- ✅ Mode curhat tidak menyimpan data tanpa consent
- ✅ Tidak ada tracking atau analytics
- ✅ HTTPS enforced di production

## 🆘 Troubleshooting

### Speech Recognition tidak bekerja
- Pastikan menggunakan Chrome atau Edge
- Periksa permission mikrofon di browser
- Pastikan HTTPS (atau localhost untuk development)

### Gemini API Error
- Periksa API key di `.env.local`
- Cek quota API di Google AI Studio
- Pastikan koneksi internet stabil

### Build Error
- Hapus folder `.next` dan `node_modules`
- Jalankan `npm install` ulang
- Pastikan Node.js versi 18+

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Gemini API](https://ai.google.dev/docs)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [BPJS Kesehatan](https://bpjs-kesehatan.go.id)

## 🤝 Contributing

Contributions are welcome! Silakan buat issue atau pull request.

## 📄 License

MIT License - silakan gunakan untuk tujuan edukasi dan non-komersial.

## 📞 Support

Untuk pertanyaan atau issue:
- Buka GitHub Issues
- Email: [your-email]

---

**Disclaimer**: Aplikasi ini adalah prototype untuk tujuan edukasi. Bukan pengganti konsultasi medis atau psikologis profesional.

**Nomor Darurat**:
- Hotline Kesehatan Jiwa: **119 ext 8**
- BPJS Kesehatan: **1500-400**
- Halo Kemkes: **1500-567**
"# mosa" 
