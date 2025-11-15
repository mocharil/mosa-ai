# 📝 Demo Update Summary

## 🎯 Perubahan yang Dilakukan

Sesuai permintaan untuk membuat demo dengan **dialog multi-step (3-4 langkah)** dan **bahasa yang natural**, berikut perubahan yang sudah dilakukan:

---

## ✅ File yang Diperbarui

### 1. `app/lib/demoResponses.ts` - MAJOR UPDATE

**Perubahan:**

#### **Demo 1: User Baru Mengenal MOSA (Multi-step)**

**Scenario 1A - User bertanya "Apa itu MOSA?"**
- **Trigger:** `["apa itu mosa", "mosa itu apa", "kenalan", "perkenalan", "siapa kamu", "kamu siapa"]`
- **Response:** Perkenalan lengkap MOSA dengan tone ramah
  - Penjelasan singkatan MOSA
  - Analogi: "Bayangkan saya seperti..."
  - Yang membuat MOSA berbeda (voice, cepat, empati, aman)
  - Daftar kemampuan MOSA
  - Ajakan berinteraksi
- **Delay:** 1.8 detik

**Scenario 1B - User tanya faskes terdekat** (follow-up)
- **Trigger:** `["rumah sakit", "rs terdekat", "faskes terdekat", ...]`
- **Response:** Lebih detail dan personal
  - Daftar 3 faskes dengan emoji dan format rapi
  - Rekomendasi spesifik (⭐ badge untuk yang direkomendasikan)
  - Jarak tempuh dengan estimasi waktu
  - Penjelasan faskes tingkat 1 vs rujukan
  - Rekomendasi berdasarkan kondisi
  - Pertanyaan follow-up untuk user
- **Delay:** 1.8 detik

**Scenario 1C - User tanya prosedur berobat** (follow-up lanjutan)
- **Trigger:** `["prosedur", "cara berobat", "langkah", "dokumen", ...]`
- **Response:** Panduan step-by-step lengkap
  - Dokumen yang harus dibawa
  - 4 langkah berobat di faskes tingkat 1
  - Penjelasan rujukan
  - Kondisi darurat (langsung IGD)
  - Tips tambahan (datang pagi, puasa lab, dll)
- **Delay:** 2.0 detik

---

#### **Demo 2: Curhat Panjang (Natural & Empathetic)**

**Scenario 2A - Curhat masalah kesehatan mental**
- **Trigger:** `["curhat", "sedih", "cemas", "stress", "depresi", "lelah", "capek hati", "down", "galau", ...]`
- **Response:** SANGAT PANJANG dan natural (seperti teman sungguhan)
  - Validasi perasaan dengan empati tinggi
  - Asterisk untuk narasi: `*Saya mendengarkan dengan penuh perhatian...*`
  - Teknik pernapasan 4-7-8 (step-by-step)
  - Saran jangka pendek (hari ini & minggu ini)
  - Layanan bantuan profesional:
    - Sejiwa 119 ext 8 (24 jam, gratis)
    - Into The Light Indonesia (WA)
    - Poli Jiwa RS (ditanggung JKN)
  - Red flags kapan harus ke profesional (pikiran bunuh diri, dll)
  - Pesan dukungan emosional yang kuat
  - Ajakan untuk terus bercerita
- **Delay:** 2.5 detik

**Scenario 2B - Follow-up tentang layanan mental health JKN**
- **Trigger:** `["konsultasi psikolog", "psikiater", "terapi", "obat depresi", ...]`
- **Response:** Detail layanan kesehatan mental JKN
  - Layanan yang ditanggung (psikolog, psikiater, obat, rawat inap)
  - Prosedur step-by-step (faskes 1 → rujukan → terapi)
  - Jalur cepat untuk darurat (langsung IGD)
  - Rekomendasi faskes (RSUD, RS Jiwa, Puskesmas)
  - Tips sebelum konsultasi (catat gejala, jujur, bawa pendamping)
  - FAQ (privasi, durasi, obat)
- **Delay:** 2.2 detik

---

#### **Demo 3: Foto Kaki Bengkak (Visual Analysis)**

**Scenario 3A - User upload foto kaki bengkak**
- **Trigger:** `["foto", "gambar", "lihat", "image", "bengkak", "kaki", ...]`
- **Response:** Analisis visual lengkap
  - Narasi: `*Menganalisis gambar...*`
  - Analisis visual (pembengkakan di area mata kaki, kulit mengkilap)
  - Kemungkinan penyebab (ringan & berat)
  - Red flags - kapan harus SEGERA ke IGD
  - Pertolongan pertama di rumah (6 langkah)
  - Rekomendasi faskes (puskesmas vs IGD)
  - Pertanyaan balik untuk triase lebih akurat
  - Disclaimer: triase awal, bukan diagnosa
- **Delay:** 2.5 detik

**Scenario 3B - Follow-up: apakah harus ke dokter?**
- **Trigger:** `["harus ke dokter", "perlu periksa", "bahaya", "serius", ...]`
- **Response:** Sistem triase warna (merah/oranye/kuning)
  - 🔴 MERAH: Segera ke IGD (red flags seperti sesak napas, DVT, infeksi)
  - 🟠 ORANYE: Periksa dalam 24-48 jam (bengkak tidak hilang, ada nyeri)
  - 🟡 KUNING: Observasi di rumah 3-7 hari (bengkak ringan, tidak ada red flags)
  - Rekomendasi spesifik berdasarkan tingkat urgensi
  - Yang harus disiapkan kalau ke dokter
  - Pertanyaan untuk membantu triase
  - Rekomendasi faskes untuk masing-masing kategori
- **Delay:** 2.3 detik

---

### 2. `DEMO_SCRIPT_NEW.md` - FILE BARU ✨

**Konten:**

Script presentasi lengkap untuk 3 demo dengan multi-step conversation:

#### **DEMO 1: User Baru Mengenal MOSA (3-4 Step)**
- Step 1: Tanya apa itu MOSA → Perkenalan
- Step 2: Tanya RS terdekat → Daftar faskes + rekomendasi
- Step 3: Tanya prosedur berobat → Panduan step-by-step
- Step 4: (Optional) Closing

**Dilengkapi:**
- Timing yang jelas (⏱️ Tunggu X detik)
- Highlight untuk audience (💡)
- What MOSA akan jawab (preview)

---

#### **DEMO 2: Curhat Panjang dengan Voice Mode (4 Step)**
- Step 1: Curhat panjang dengan emosional → Response empati + support
- Step 2: Tanya layanan mental health JKN → Penjelasan lengkap
- Step 3: (Optional) User merasa terbantu
- Step 4: Keluar dari voice mode + review chat

**Dilengkapi:**
- Instruksi aktivasi voice mode
- Script curhat yang natural dan emosional
- Highlight fitur "Safe Talk"
- Penekanan pada empati dan actionable advice

---

#### **DEMO 3: Upload Foto Kaki Bengkak (4 Step)**
- Step 1: Upload foto + tanya → Analisis visual lengkap
- Step 2: Tanya apakah harus ke dokter → Triase warna (merah/oranye/kuning)
- Step 3: User merasa jelas
- Step 4: Review chat history

**Dilengkapi:**
- Highlight intelligent triaging
- Penjelasan sistem triase warna
- Impact untuk sistem kesehatan

---

#### **FULL DEMO FLOW (8 Menit)**
- Opening (1 menit)
- Demo 1 (3 menit)
- Demo 2 (4 menit)
- (Optional) Demo 3 (3.5 menit)
- Closing (1 menit)

**Bonus:**
- Tips presentasi (DO's & DON'Ts)
- Key metrics untuk disebutkan
- Backup Q&A

---

## 🎯 Highlight Perubahan

### Dialog Lebih Natural:
- ✅ Bahasa conversational, seperti teman berbicara
- ✅ Penggunaan narasi: `*Saya mendengarkan...*`, `*Menganalisis gambar...*`
- ✅ Validasi emosional: "Perasaan Anda valid", "Anda tidak sendirian"
- ✅ Pertanyaan balik untuk engagement: "Sudah? Bagaimana perasaannya?"

### Multi-Step Conversation:
- ✅ Setiap demo punya 3-4 langkah
- ✅ Follow-up questions yang natural
- ✅ Context-aware responses (jawaban mengacu pada pertanyaan sebelumnya)

### Response Lebih Panjang & Lengkap:
- ✅ Curhat response sangat panjang (seperti teman sungguhan)
- ✅ Visual analysis sangat detail (penyebab, red flags, first aid, triase)
- ✅ Prosedur berobat step-by-step dengan tips tambahan

### Trigger Words Lebih Banyak:
- ✅ "apa itu mosa", "kenalan", "siapa kamu" → perkenalan
- ✅ "curhat", "lelah", "capek hati", "down", "galau" → curhat mode
- ✅ "bengkak", "kaki", "pembengkakan", "edema" → visual analysis
- ✅ "harus ke dokter", "bahaya", "serius" → triase urgensi

---

## 📊 Comparison: Lama vs Baru

| Aspect | Demo Lama | Demo Baru |
|--------|-----------|-----------|
| **Dialog Steps** | 1-2 step | 3-4 step multi-conversation |
| **Response Length** | Sedang (~200 kata) | Panjang (~500-800 kata) |
| **Tone** | Formal, informational | Natural, conversational, empathetic |
| **Personalization** | Generic | Personalized dengan rekomendasi |
| **Follow-up** | Tidak ada | Ada pertanyaan follow-up |
| **Narasi** | Tidak ada | Ada narasi (*Menganalisis...*) |
| **Triase** | Basic | Intelligent (sistem warna merah/oranye/kuning) |
| **Curhat** | Template support | Empati tinggi, seperti teman |

---

## 🎬 Cara Menggunakan

### Untuk Demo Mode:
1. Aktifkan **Demo Mode** di settings (☰)
2. Aktifkan **Auto-speak** untuk voice response
3. Buka `DEMO_SCRIPT_NEW.md`
4. Ikuti script step-by-step
5. Baca pertanyaan dengan natural
6. Tunggu 1.5-2.5 detik untuk response
7. Highlight key points untuk audience

### Untuk Testing:
- **Demo 1:** Ketik "apa itu mosa" → "rumah sakit terdekat" → "prosedur berobat"
- **Demo 2:** Ketik "curhat" + pesan panjang → "konsultasi psikolog"
- **Demo 3:** Ketik "foto kaki bengkak" → "apakah harus ke dokter"

---

## 💡 Key Selling Points untuk Presentasi

1. **Multi-step conversation** - Bukan cuma tanya-jawab 1x, tapi dialog berkelanjutan
2. **Natural & empathetic** - Seperti bicara dengan teman, bukan robot
3. **Intelligent triaging** - Sistem triase warna untuk prioritas medis
4. **Comprehensive responses** - Lengkap dengan tips, FAQ, rujukan
5. **Voice + Text** - Bisa bicara atau ketik, fleksibel
6. **Safe Talk** - Ruang curhat aman untuk mental health
7. **Visual analysis** - Bisa analisis foto untuk triase awal
8. **JKN-aware** - Semua rekomendasi berdasarkan layanan JKN

---

## 📂 File Structure

```
voice-jkn-agent/
├── app/
│   └── lib/
│       └── demoResponses.ts       ← UPDATED (multi-step, natural)
├── DEMO_SCRIPT_NEW.md             ← NEW (ready-to-read script)
├── DEMO_SCRIPT.md                 ← OLD (masih ada, bisa dipakai)
├── DEMO_GUIDE.md                  ← Existing (cara pakai demo mode)
└── DEMO_UPDATE_SUMMARY.md         ← THIS FILE (ringkasan update)
```

---

## ✅ Checklist Demo

Sebelum presentasi, pastikan:
- [ ] Demo Mode aktif (toggle ON)
- [ ] Auto-speak aktif (toggle ON)
- [ ] Volume device cukup untuk voice output
- [ ] Baca `DEMO_SCRIPT_NEW.md` sekali untuk familiar
- [ ] Test semua 3 scenario (1 menit quick test)
- [ ] Prepare backup jika ditanya (lihat Q&A di script)

---

**Status:** ✅ READY FOR DEMO
**Last Updated:** 2025-11-14
**Files Changed:** 2 (1 updated, 1 new)
