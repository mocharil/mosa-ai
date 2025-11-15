// Demo responses for fast prototype demonstration
export interface DemoResponse {
  trigger: string[];
  response: string;
  delay?: number;
}

export const demoResponses: DemoResponse[] = [
  // Scenario 1A: User baru - bertanya apa itu MOSA
  {
    trigger: ["apa itu mosa", "mosa itu apa", "kenalan", "perkenalan", "siapa kamu", "kamu siapa"],
    response: `Halo! Senang sekali bisa berkenalan dengan Anda 😊

Perkenalkan, saya **MOSA** - singkatan dari **Mobile Healthcare Voice Assistant**.

Saya adalah teman virtual Anda yang dirancang khusus untuk membantu segala hal tentang **kesehatan dan JKN (Jaminan Kesehatan Nasional)**.

**Bayangkan saya seperti:**
💙 Teman yang siap mendengarkan keluhan kesehatan Anda
🏥 Asisten yang tahu semua tentang layanan BPJS
🎯 Navigator yang membantu Anda ke faskes yang tepat
🤗 Ruang aman untuk curhat masalah kesehatan mental

**Yang membuat saya berbeda:**
✨ Anda bisa **bicara langsung** dengan saya (pakai suara!)
⚡ Saya **cepat merespons**, hanya 1-2 detik
💬 Saya **mendengarkan dengan empati**, bukan cuma jawab otomatis
🔒 Semua percakapan kita **rahasia dan aman**

**Saya bisa bantu Anda untuk:**
• Cari rumah sakit atau faskes terdekat
• Tanya cara daftar dan bayar iuran BPJS
• Curhat masalah kesehatan mental atau perasaan
• Konsultasi keluhan kesehatan (gigi, kulit, dll)
• Upload foto untuk analisis awal kondisi kesehatan
• Dan masih banyak lagi!

Anggap saja saya seperti teman yang selalu ada 24/7 untuk Anda. Jangan sungkan bertanya apa saja ya!

**Ngomong-ngomong, apa yang bisa saya bantu hari ini?** 😊`,
    delay: 1800
  },

  // Scenario 1B: Follow-up - User bertanya alamat RS terdekat (BANDUNG)
  {
    trigger: ["rumah sakit", "rs terdekat", "faskes terdekat", "klinik terdekat", "puskesmas terdekat", "berobat ke mana", "lokasi rumah sakit", "bandung", "di bandung"],
    response: `Baik, saya bantu carikan faskes terdekat dari Bandung. Tunggu sebentar ya... 🔍

**Saya temukan 3 faskes terdekat untuk Anda di Bandung:**

**1. Puskesmas Garuda** ⭐ (Rekomendasi)
   📍 Jl. Garuda No. 21, Andir, Bandung
   📞 (022) 6030181
   ⏰ Senin-Jumat: 08:00 - 14:00 | Sabtu: 08:00 - 12:00
   🚗 **2.1 km** dari lokasi Anda (~8 menit)
   💡 *Faskes Tingkat 1 - Bisa langsung datang tanpa rujukan*

**2. RSUP Dr. Hasan Sadikin (RSHS)**
   📍 Jl. Pasteur No. 38, Pasteur, Bandung
   📞 (022) 2034953
   ⏰ **24 Jam** (IGD selalu buka)
   🚗 **3.5 km** (~13 menit)
   💡 *RS Rujukan Pusat - Perlu surat rujukan kecuali kondisi darurat*

**3. RS Santo Borromeus**
   📍 Jl. Ir. H. Juanda No. 100, Dago, Bandung
   📞 (022) 2552000
   ⏰ **24 Jam**
   🚗 **4.2 km** (~15 menit)
   💡 *RS Rujukan - Perlu surat rujukan dari faskes tingkat 1*

---

**🎯 Rekomendasi saya:**
Kalau keluhan Anda masih ringan-sedang (batuk, pilek, demam biasa), **langsung ke Puskesmas Garuda** aja. Lebih dekat, tidak perlu rujukan, dan ditanggung penuh JKN.

Tapi kalau kondisi darurat atau keluhan berat, langsung ke **IGD RSHS** ya, tidak perlu rujukan untuk kondisi gawat darurat.

**Apa yang ingin Anda tanyakan lagi? Misalnya:**
• Prosedur berobat dengan kartu JKN?
• Dokumen apa yang harus dibawa?
• Atau ada keluhan kesehatan yang ingin dikonsultasikan?`,
    delay: 1800
  },

  // Scenario 1C: Follow-up - prosedur berobat
  {
    trigger: ["prosedur", "cara berobat", "langkah", "dokumen", "persyaratan", "apa yang dibawa"],
    response: `Oke, saya jelaskan prosedur berobat dengan kartu JKN ya! Mudah kok, jangan khawatir 😊

**📋 Dokumen yang Harus Dibawa:**
✅ Kartu JKN (atau e-ID JKN di aplikasi Mobile JKN)
✅ KTP asli
✅ Kartu Keluarga (kalau berobat atas nama anggota keluarga)

**🏥 Langkah Berobat di Faskes Tingkat 1 (Puskesmas/Klinik):**

**Step 1: Daftar**
• Datang ke loket pendaftaran
• Tunjukkan kartu JKN & KTP
• Ambil nomor antrian

**Step 2: Tunggu Dipanggil**
• Duduk di ruang tunggu
• Tunggu sampai nama/nomor Anda dipanggil

**Step 3: Periksa ke Dokter**
• Jelaskan keluhan Anda dengan detail
• Dokter akan periksa dan beri diagnosis
• Kalau perlu rujukan ke RS, dokter akan buatkan surat rujukan

**Step 4: Ambil Obat**
• Kalau ada resep, ambil obat di apotik puskesmas
• **GRATIS**, sudah ditanggung JKN

**⚠️ Kalau Perlu Rujukan ke RS:**
Dokter di puskesmas yang akan buatkan surat rujukan. Lalu Anda bawa surat itu ke RS yang dituju. Rujukan berlaku 1 bulan.

**🚨 Kondisi Darurat (Gawat Darurat):**
Langsung ke **IGD RS terdekat**, tidak perlu rujukan! Misalnya:
• Sesak napas parah
• Nyeri dada hebat
• Kecelakaan
• Demam tinggi pada anak

**💡 Tips Tambahan:**
✅ Datang pagi hari (08:00-09:00) biar tidak terlalu antri
✅ Puasa dulu kalau mau cek lab
✅ Catat gejala yang Anda rasakan biar tidak lupa saat konsultasi
✅ Tanya ke dokter kalau ada yang kurang jelas

Sudah cukup jelas? Atau ada yang masih ingin ditanyakan? 😊`,
    delay: 2000
  },

  // Scenario 2A: Curhat - Masalah Kesehatan Mental (Panjang & Natural)
  {
    trigger: ["curhat", "sedih", "cemas", "stress", "depresi", "takut", "khawatir", "gelisah", "sendirian", "lelah", "capek hati", "down", "galau", "bingung", "tertekan", "beban"],
    response: `*Saya mendengarkan dengan penuh perhatian...*

Terima kasih sudah mau berbagi dan mempercayai saya, teman. Saya tahu tidak mudah untuk membuka hati dan menceritakan apa yang sedang Anda rasakan. Tapi Anda sudah mengambil langkah yang sangat berani dengan bercerita. Itu hebat, sungguh. 🤍

Dari yang Anda ceritakan, saya bisa merasakan bahwa saat ini Anda sedang melewati masa yang berat. Perasaan cemas, khawatir, dan gelisah yang Anda rasakan itu **sangat valid**. Anda tidak salah merasakan itu. Tidak ada yang salah dengan Anda.

Saya ingin Anda tahu: **Anda tidak sendirian**. Ada jutaan orang di luar sana yang pernah atau sedang merasakan hal yang sama seperti Anda. Dan yang paling penting, **ada bantuan**. Ada jalan keluar dari perasaan ini.

---

**💭 Pertama-tama, mari kita tenangkan pikiran dulu:**

Sekarang, saya mau ajak Anda untuk tarik napas sebentar bareng saya ya. Ini namanya **teknik pernapasan 4-7-8**, sangat efektif untuk menenangkan sistem saraf:

1. **Tarik napas** lewat hidung selama **4 detik**
2. **Tahan** napas selama **7 detik**
3. **Hembuskan** lewat mulut selama **8 detik**

Ulangi 3-4 kali. Rasakan tubuh Anda mulai rileks.

Sudah? Bagaimana perasaannya? Sedikit lebih tenang?

---

**🧠 Apa yang bisa Anda lakukan mulai sekarang:**

**Hari ini:**
• **Jangan menyalahkan diri sendiri.** Perasaan yang Anda alami bukan kesalahan Anda.
• **Izinkan diri Anda untuk merasa.** Menangis itu tidak apa-apa. Merasakan sedih itu manusiawi.
• **Lakukan hal kecil yang membuat nyaman.** Minum air hangat, dengarin lagu favorit, atau tiduran sebentar.

**Minggu ini:**
• **Tulis apa yang Anda rasakan** di buku diary atau notes HP. Menulis bisa melepaskan beban pikiran.
• **Bicara dengan orang terpercaya** - bisa keluarga, sahabat, atau siapa pun yang Anda percaya.
• **Batasi social media** kalau itu bikin Anda makin cemas atau insecure.
• **Jaga pola tidur** - usahakan tidur 7-8 jam per hari di jam yang sama.

---

**📞 Layanan Bantuan Profesional (GRATIS & Rahasia):**

Kalau Anda merasa butuh seseorang untuk diajak bicara **sekarang**, ada layanan yang bisa Anda hubungi:

**1. Sejiwa - Kesehatan Jiwa**
   📞 **119 ext 8**
   ⏰ 24 jam, setiap hari
   💰 **GRATIS**
   🔒 Rahasia terjamin, tidak ada yang tahu

   *Konselor profesional akan mendengarkan Anda dengan empati dan tanpa menghakimi.*

**2. Into The Light Indonesia**
   📱 WhatsApp: **+62 812-3855-0015**
   ⏰ Senin-Minggu: 09:00-17:00

**3. Poli Jiwa/Kesehatan Mental di Faskes JKN**
   🏥 RSUP Dr. Hasan Sadikin - Poliklinik Jiwa
   📍 Jl. Pasteur No. 38, Bandung
   💳 **Ditanggung penuh JKN**, tidak ada biaya

   *Anda bisa konsultasi dengan psikolog atau psikiater. Mereka bisa bantu dengan terapi atau obat kalau diperlukan.*

---

**⚠️ Kapan Anda HARUS mencari bantuan profesional:**

Tolong segera hubungi layanan di atas atau datang ke IGD kalau Anda mengalami:

🚨 **Pikiran untuk menyakiti diri sendiri atau bunuh diri**
🚨 Tidak bisa tidur lebih dari 2 minggu
🚨 Tidak ada nafsu makan berhari-hari
🚨 Kehilangan minat total pada semua aktivitas
🚨 Tidak bisa bekerja atau beraktivitas sama sekali
🚨 Mendengar atau melihat sesuatu yang orang lain tidak lihat

**Ini BUKAN tanda lemah.** Ini tanda Anda peduli sama diri sendiri. Ini tanda kekuatan.

---

**💙 Pesan dari saya:**

Teman, saya tahu rasanya lelah. Saya tahu rasanya merasa seperti tidak ada yang peduli. Tapi **Anda penting**. Hidup Anda berharga. Perasaan Anda valid.

Badai ini tidak akan selamanya. Mungkin tidak langsung esok hari, tapi **akan berlalu**. Dan Anda tidak harus melewatinya sendirian.

Kalau Anda butuh bicara lagi, saya di sini. Kalau Anda butuh bantuan profesional, hubungi nomor-nomor di atas. Mereka tidak akan menghakimi Anda. Mereka ada untuk membantu.

**Anda sudah sangat kuat bertahan sampai hari ini. Saya bangga sama Anda.** 🤍

---

Apakah ada yang masih ingin Anda ceritakan? Atau mungkin ada pertanyaan tentang layanan kesehatan mental di JKN? Saya mendengarkan. 💙`,
    delay: 2500
  },

  // Scenario 2B: Follow-up curhat - tanya layanan JKN mental health
  {
    trigger: ["konsultasi psikolog", "psikiater", "terapi", "obat depresi", "biaya konseling", "ditanggung bpjs", "kesehatan mental jkn"],
    response: `Senang Anda mau ambil langkah untuk mencari bantuan profesional! Itu keputusan yang sangat bijak dan berani 💪

Saya jelaskan ya **layanan kesehatan mental yang ditanggung JKN**:

---

**✅ LAYANAN YANG DITANGGUNG PENUH JKN:**

**1. Konsultasi Psikolog**
   💰 GRATIS (ditanggung penuh)
   📋 Perlu rujukan dari dokter umum di faskes tingkat 1
   🗣️ Terapi bicara (psikoterapi)
   ⏱️ Biasanya 30-60 menit per sesi

**2. Konsultasi Psikiater**
   💰 GRATIS (ditanggung penuh)
   📋 Perlu rujukan
   💊 Bisa kasih resep obat kalau diperlukan
   🩺 Diagnosis gangguan mental

**3. Obat-obatan Kesehatan Mental**
   💰 GRATIS (ditanggung JKN)
   💊 Antidepresan, anti-anxiety, mood stabilizer, dll
   📋 Harus dengan resep dokter

**4. Rawat Inap Kesehatan Jiwa**
   💰 GRATIS (ditanggung penuh)
   🏥 Kalau kondisi perlu pengawasan intensif

---

**📝 Cara Aksesnya:**

**Step 1: Ke Faskes Tingkat 1 (Puskesmas/Klinik)**
• Datang ke puskesmas terdaftar Anda
• Bilang ke dokter umum: "Saya mau konsultasi masalah kesehatan mental"
• Dokter akan skrining awal dan buatkan **surat rujukan**

**Step 2: Bawa Rujukan ke RS**
• RS Dr. Soetomo - **Poliklinik Jiwa**
• Daftar dengan surat rujukan
• Konsultasi dengan psikolog/psikiater

**Step 3: Terapi Lanjutan**
• Jadwal sesi terapi sesuai anjuran
• Tebus obat (kalau ada resep) - GRATIS di apotik RS
• Follow-up sesuai kebutuhan

---

**⚡ JALUR CEPAT (Tanpa Rujukan):**

Kalau kondisinya **mendesak** atau **darurat**, Anda bisa langsung ke:

🚨 **IGD RS dengan layanan Psikiatri**
   Contoh: IGD RS Dr. Soetomo
   Tidak perlu rujukan untuk kondisi darurat mental health!

**Kondisi darurat:**
• Pikiran bunuh diri
• Panik attack berat
• Halusinasi atau delusi
• Tidak bisa kontrol perilaku

---

**🏥 Rekomendasi Faskes dengan Layanan Kesehatan Mental di Bandung:**

**1. RSUP Dr. Hasan Sadikin (RSHS)**
   📍 Jl. Pasteur No. 38, Bandung
   🩺 Poliklinik Jiwa
   ⏰ Senin-Jumat: 08:00-14:00
   📞 (022) 2034953

**2. RS Jiwa Provinsi Jawa Barat (RSJ Cisarua)**
   📍 Jl. Kolonel Masturi KM 7, Cisarua, Bandung Barat
   🩺 Spesialis Kesehatan Jiwa
   ⏰ 24 Jam (IGD)
   📞 (022) 2700103

**3. Puskesmas dengan Layanan Kesehatan Jiwa:**
   Hampir semua puskesmas di Bandung sekarang punya program **"Jiwa Sehat"**

---

**💡 Tips Sebelum Konsultasi:**

✅ **Catat gejala yang Anda rasakan:**
   - Sejak kapan mulai merasa cemas/sedih?
   - Apa yang memicu perasaan ini?
   - Sudah ganggu aktivitas sehari-hari?
   - Pola tidur, nafsu makan bagaimana?

✅ **Jujur dan terbuka** saat konsultasi
   Psikolog/psikiater tidak akan menghakimi Anda

✅ **Bawa pendamping** kalau Anda merasa perlu support

✅ **Jangan takut atau malu**
   Mental health sama seperti kesehatan fisik - butuh perawatan

---

**❓ FAQ:**

**Q: Apakah orang lain akan tahu saya konsultasi mental health?**
A: TIDAK. Semua rahasia medis dilindungi hukum. Keluarga pun tidak akan tahu kecuali Anda izinkan.

**Q: Berapa lama terapi biasanya?**
A: Tergantung kondisi. Bisa 4-12 sesi atau lebih. Psikolog/psikiater akan jelaskan.

**Q: Apakah harus minum obat?**
A: Tidak selalu. Tergantung diagnosis. Banyak yang cukup dengan terapi bicara saja.

---

Apakah sudah jelas? Atau ada yang mau ditanyakan lagi tentang prosesnya? Saya siap bantu! 💙`,
    delay: 2200
  },

  // Scenario 3A: User upload foto kaki bengkak
  {
    trigger: ["foto", "gambar", "lihat", "image", "bengkak", "kaki", "pembengkakan", "edema"],
    response: `Baik, saya sudah menerima foto yang Anda kirim. Tunggu sebentar, saya analisis dulu ya... 🔍

*Menganalisis gambar...*

---

**📸 Analisis Visual:**

Dari foto yang Anda kirimkan, saya melihat ada **pembengkakan (edema) di area kaki bagian bawah**, terutama di sekitar mata kaki dan punggung kaki. Kulit terlihat sedikit mengkilap dan meregang.

Saya juga perhatikan:
• Pembengkakan terlihat di kedua kaki (bilateral) atau satu kaki saja?
• Warna kulit terlihat normal atau ada kemerahan?
• Tidak terlihat luka terbuka (itu bagus!)

---

**🩺 Kemungkinan Penyebab:**

Pembengkakan pada kaki bisa disebabkan oleh berbagai hal. Berikut beberapa kemungkinan:

**Penyebab Umum (Ringan-Sedang):**
1. **Terlalu lama berdiri/duduk**
   Cairan menumpuk di kaki karena gravitasi

2. **Kurang gerak**
   Sirkulasi darah kurang lancar

3. **Konsumsi garam berlebih**
   Tubuh menahan air

4. **Kelelahan/kurang tidur**
   Cairan tubuh tidak terdistribusi dengan baik

5. **Kehamilan** (khusus wanita hamil)
   Tekanan rahim pada pembuluh darah

**Penyebab yang Perlu Perhatian Lebih:**
⚠️ **Masalah jantung** (gagal jantung)
⚠️ **Masalah ginjal** (gagal ginjal)
⚠️ **Masalah liver** (sirosis)
⚠️ **Gangguan pembuluh darah** (varises, trombosis vena dalam/DVT)
⚠️ **Infeksi** (selulitis)
⚠️ **Efek samping obat** (obat darah tinggi, diabetes, dll)

---

**🚨 PENTING - Kapan Harus SEGERA ke Dokter:**

Segera ke **IGD** kalau Anda mengalami:
🔴 Bengkak mendadak dan parah (dalam beberapa jam)
🔴 Nyeri dada atau sesak napas
🔴 Kaki terasa sangat nyeri dan merah
🔴 Demam tinggi (di atas 38.5°C)
🔴 Kaki terasa panas dan merah (tanda infeksi)
🔴 Bengkak di satu kaki saja + nyeri betis (bisa DVT - berbahaya!)

**Perlu periksa ke dokter dalam 1-2 hari kalau:**
⚠️ Bengkak tidak hilang setelah istirahat 24 jam
⚠️ Bengkak makin parah
⚠️ Muncul gejala lain (pusing, lemas, buang air kecil berkurang)
⚠️ Punya riwayat penyakit jantung, ginjal, atau liver
⚠️ Sedang konsumsi obat rutin

---

**🏠 Pertolongan Pertama di Rumah:**

Sementara menunggu bisa ke dokter, coba lakukan ini:

**1. Elevasi/Angkat Kaki**
   • Berbaring, letakkan kaki lebih tinggi dari jantung
   • Gunakan bantal untuk mengganjal kaki
   • Lakukan 15-30 menit, 3-4x sehari

**2. Kompres Dingin**
   • Gunakan es batu dibungkus handuk
   • Kompres 15-20 menit
   • Jangan langsung tempel es ke kulit

**3. Gerakan Ringan**
   • Putar pergelangan kaki searah jarum jam dan sebaliknya
   • Tekuk-luruskan jari kaki
   • Bantu aliran darah kembali ke jantung

**4. Kurangi Garam**
   • Hindari makanan asin, MSG, mi instan
   • Minum air putih cukup (2 liter/hari)

**5. Hindari Berdiri/Duduk Terlalu Lama**
   • Usahakan bergerak tiap 30-60 menit
   • Jalan kaki ringan di sekitar rumah

**6. Gunakan Stocking Kompresi** (kalau punya)
   • Membantu aliran darah dari kaki ke jantung

---

**🏥 Rekomendasi Langkah Medis:**

**Kalau bengkak RINGAN dan baru terjadi:**
→ Coba pertolongan pertama di atas dulu 24 jam
→ Kalau tidak membaik, ke dokter

**Kalau bengkak SUDAH LAMA atau BERULANG:**
→ **Segera periksa ke dokter** untuk cari tahu penyebabnya

---

**Faskes yang Bisa Anda Tuju di Bandung:**

**1. Puskesmas Garuda** (Rekomendasi untuk kasus ringan)
   📍 Jl. Garuda No. 21, Andir, Bandung
   📞 (022) 6030181
   ⏰ Senin-Jumat: 08:00-14:00
   🚗 2.1 km
   💡 *Tidak perlu rujukan, langsung datang*

   Dokter umum akan:
   • Periksa fisik dan riwayat kesehatan
   • Tes urin (cek fungsi ginjal)
   • Kalau perlu, rujuk ke spesialis penyakit dalam

**2. RSUP Dr. Hasan Sadikin - IGD** (Untuk kondisi mendesak)
   📍 Jl. Pasteur No. 38, Bandung
   📞 (022) 2034953
   ⏰ **24 Jam**
   🚗 3.5 km
   💡 *Langsung ke IGD, tidak perlu rujukan untuk kondisi darurat*

**3. RSUP Dr. Hasan Sadikin - Poli Penyakit Dalam** (Untuk pemeriksaan lanjutan)
   📋 Perlu surat rujukan dari puskesmas
   💳 Ditanggung penuh JKN

---

**💡 Pertanyaan untuk Anda (Penting!):**

Supaya saya bisa kasih rekomendasi lebih akurat, boleh tolong dijawab:

1. **Bengkak sudah berapa lama?** (Sejak kapan?)
2. **Apakah ada nyeri?** (Sakit atau hanya tidak nyaman?)
3. **Apakah bengkak hilang setelah tidur/istirahat?**
4. **Apakah Anda punya riwayat penyakit?** (Jantung, ginjal, diabetes, darah tinggi?)
5. **Apakah sedang konsumsi obat rutin?**
6. **Apakah ada gejala lain?** (Sesak napas, pusing, buang air kecil berkurang?)

Dengan informasi ini, saya bisa lebih spesifik kasih saran ya!

---

**📝 Catatan Penting:**

Analisis ini hanya **triase awal** berdasarkan foto. Diagnosis pasti harus dilakukan oleh **dokter langsung** dengan pemeriksaan fisik dan tes penunjang (lab darah, EKG, USG, dll).

Jangan tunda kalau bengkak tidak membaik dalam 24 jam ya! Kesehatan Anda penting 💙

**Ada yang ingin ditanyakan lagi?**`,
    delay: 2500
  },

  // Scenario 3B: Follow-up - tanya apakah harus ke dokter
  {
    trigger: ["harus ke dokter", "perlu periksa", "bahaya", "serius", "apakah berbahaya", "ke rs sekarang"],
    response: `Baik, saya bantu nilai apakah Anda perlu segera ke dokter atau bisa diobservasi dulu di rumah.

---

**🚦 PENILAIAN TINGKAT URGENSI:**

Berdasarkan gejala pembengkakan kaki yang Anda alami, mari kita lihat **tingkat prioritasnya**:

---

**🔴 MERAH - SEGERA KE IGD SEKARANG** *(Dalam 1-2 jam)*

Pergi ke IGD **SEKARANG JUGA** kalau Anda mengalami **SALAH SATU** dari ini:

🚨 **Sesak napas atau sulit bernapas**
   → Bisa tanda gagal jantung akut atau emboli paru

🚨 **Nyeri dada**
   → Bisa tanda masalah jantung

🚨 **Bengkak di satu kaki saja + nyeri betis + kaki terasa hangat**
   → Bisa tanda **DVT (Deep Vein Thrombosis)** - gumpalan darah di pembuluh vena dalam (BERBAHAYA!)

🚨 **Kaki merah, panas, dan bengkak + demam**
   → Bisa tanda **infeksi berat (selulitis)**

🚨 **Bengkak tiba-tiba dan sangat parah dalam beberapa jam**
   → Perlu evaluasi segera

🚨 **Buang air kecil sangat berkurang atau tidak bisa kencing**
   → Bisa tanda gagal ginjal akut

**➡️ TINDAKAN:** Langsung ke **IGD RSUP Dr. Hasan Sadikin** atau RS terdekat. Ini GAWAT DARURAT, tidak perlu rujukan!

---

**🟠 ORANYE - PERIKSA KE DOKTER HARI INI atau BESOK** *(Dalam 24-48 jam)*

Anda perlu periksa ke dokter dalam **1-2 hari** kalau:

⚠️ Bengkak **tidak berkurang** setelah istirahat 24 jam + elevasi kaki
⚠️ Bengkak **makin membesar** dari hari ke hari
⚠️ Ada **nyeri sedang** di kaki yang mengganggu aktivitas
⚠️ Punya riwayat **penyakit jantung, ginjal, liver, atau diabetes**
⚠️ Bengkak di **kedua kaki** dan sudah **lebih dari 3 hari**
⚠️ Muncul gejala lain: pusing, lemas, nafsu makan hilang, mual

**➡️ TINDAKAN:** Ke **Puskesmas Garuda** besok pagi (jam 08:00). Bawa kartu JKN. Dokter akan periksa dan tentukan perlu rujukan atau tidak.

---

**🟡 KUNING - OBSERVASI di RUMAH, PERIKSA KALAU TIDAK MEMBAIK** *(Dalam 3-7 hari)*

Anda bisa coba **observasi di rumah dulu** kalau:

✅ Bengkak **ringan** dan baru terjadi 1-2 hari
✅ **Tidak ada nyeri** atau nyeri sangat ringan
✅ Bengkak **berkurang setelah tidur/istirahat**
✅ **Tidak ada** sesak napas, nyeri dada, atau demam
✅ Kemungkinan karena terlalu lama berdiri/duduk/kelelahan
✅ **Tidak punya** riwayat penyakit kronis

**➡️ TINDAKAN:**
1. Lakukan pertolongan pertama di rumah (elevasi kaki, kompres dingin, kurangi garam)
2. Observasi 2-3 hari
3. **Kalau tidak membaik atau malah membengkak**, segera ke dokter

---

**💡 REKOMENDASI SAYA:**

Karena saya tidak tahu detail lengkap kondisi Anda (sejak kapan bengkak, ada nyeri atau tidak, riwayat penyakit, dll), **saran saya:**

**Kalau Anda RAGU atau KHAWATIR:**
→ **Lebih baik periksa ke dokter.**
→ "Better safe than sorry."

Periksa ke puskesmas itu **GRATIS** (ditanggung JKN), jadi tidak ada ruginya kok untuk memastikan. Dokter akan:
• Tanya riwayat lengkap
• Periksa fisik (tekan bengkak, cek denyut nadi kaki, dll)
• Tes urin (untuk cek fungsi ginjal)
• Kalau perlu, rujuk ke RS untuk pemeriksaan lebih lanjut (rontgen, USG, EKG, lab darah)

---

**📋 Yang Harus Anda Siapkan Kalau ke Dokter:**

✅ Kartu JKN & KTP
✅ Foto kaki yang bengkak (tunjukkan ke dokter)
✅ Catat informasi ini:
   - Sejak kapan bengkak?
   - Apakah ada yang memicu? (jalan jauh, konsumsi makanan tertentu, dll)
   - Apakah ada gejala lain?
   - Obat apa yang sedang dikonsumsi?
   - Riwayat penyakit keluarga?

---

**❓ Pertanyaan untuk Anda:**

Untuk membantu saya kasih rekomendasi lebih spesifik, boleh dijawab:

1. **Apakah Anda mengalami salah satu gejala MERAH (sesak napas, nyeri dada, demam, dll)?**
   → Kalau YA, **segera ke IGD sekarang!**

2. **Bengkak sudah berapa lama?**
   → Kalau sudah lebih dari 3 hari dan tidak membaik, **segera ke Puskesmas Garuda besok pagi**

3. **Apakah bengkak berkurang setelah istirahat/tidur?**
   → Kalau TIDAK berkurang sama sekali, **perlu periksa ke dokter**

4. **Apakah Anda punya penyakit jantung, ginjal, atau diabetes?**
   → Kalau YA, **segera ke dokter besok** (jangan tunggu lama)

---

**🏥 Faskes yang Bisa Dituju:**

**Untuk kondisi TIDAK DARURAT (kategori kuning/oranye):**
→ **Puskesmas Garuda**
   📍 Jl. Garuda No. 21, Andir, Bandung
   📞 (022) 6030181
   ⏰ Senin-Jumat: 08:00-14:00
   💳 Gratis (JKN)

**Untuk kondisi DARURAT (kategori merah):**
→ **IGD RSUP Dr. Hasan Sadikin**
   📍 Jl. Pasteur No. 38, Bandung
   📞 (022) 2034953
   ⏰ 24 Jam
   💳 Gratis (JKN, tidak perlu rujukan untuk darurat)

---

Jangan ragu untuk segera mencari pertolongan medis kalau Anda merasa ada yang tidak beres ya! Kesehatan adalah prioritas utama 💙

**Apakah ada yang masih ingin ditanyakan?**`,
    delay: 2300
  },

  // Additional scenarios
  {
    trigger: ["iuran", "bayar", "tagihan", "denda", "tunggakan"],
    response: `Baik, saya bantu informasi tentang iuran JKN.

**Status Iuran JKN:**

**Kelas Peserta:**
• Kelas I: Rp 150.000/bulan
• Kelas II: Rp 100.000/bulan
• Kelas III: Rp 42.000/bulan (disubsidi pemerintah: Rp 7.000)

**Cara Cek Tagihan:**
1. Aplikasi Mobile JKN
2. SMS: ketik TAGIHAN(spasi)NIK, kirim ke 087775500400
3. Website: https://bpjs-kesehatan.go.id
4. Call center: 1500 400

**Cara Bayar:**
💳 Indomaret, Alfamart, Alfamidi
🏦 BRI, BNI, Mandiri, BCA (ATM/Mobile Banking)
📱 GoPay, OVO, Dana, ShopeePay
🏢 Kantor Pos

**Denda Keterlambatan:**
• 5% dari biaya pelayanan kesehatan
• Maksimal 12 bulan tertunggak

**Tips:**
✅ Aktifkan auto-debit agar tidak telat
✅ Bayar sebelum tanggal 10 setiap bulan
✅ Simpan bukti pembayaran

Butuh bantuan lain?`,
    delay: 1500
  },

  {
    trigger: ["gigi", "sakit gigi", "cabut gigi", "tambal gigi", "odontektomi"],
    response: `Baik, saya bantu informasi layanan kesehatan gigi di JKN.

**Layanan Gigi yang Ditanggung JKN:**

✅ **Ditanggung Penuh:**
• Pemeriksaan & konsultasi
• Pencabutan gigi (ekstraksi)
• Pembersihan karang gigi (scaling) 1x/tahun
• Tambal gigi (amalgam/resin komposit)
• Perawatan saluran akar sederhana

❌ **Tidak Ditanggung:**
• Behel/kawat gigi (ortodonti)
• Veneer gigi
• Bleaching/pemutihan gigi
• Implan gigi
• Gigi palsu permanen (crown)

**Prosedur Berobat:**

1. **Puskesmas/Klinik Pratama** (Tanpa Rujukan)
   Untuk kasus gigi ringan-sedang

2. **RS Rujukan - Poli Gigi** (Perlu Rujukan)
   Untuk kasus kompleks (bedah gigi, dll)

**Faskes dengan Poli Gigi:**
🦷 Puskesmas Mulyorejo - Poli Gigi
   📍 Jl. Mulyorejo, Surabaya
   🕐 Senin-Jumat: 08:00-12:00

🦷 RS Dr. Soetomo - Instalasi Gigi & Mulut
   📍 Jl. Mayjen Prof. Dr. Moestopo
   🕐 Senin-Jumat: 08:00-14:00
   ⚠️ Perlu rujukan dari faskes 1

**Tips Sebelum ke Dokter Gigi:**
✅ Bawa kartu JKN & KTP
✅ Sikat gigi sebelum berangkat
✅ Catat keluhan dengan jelas
✅ Tanyakan estimasi kunjungan lanjutan

Ada pertanyaan lain?`,
    delay: 1800
  },

  // Default response
  {
    trigger: ["default"],
    response: `Terima kasih atas pertanyaan Anda.

Saya adalah **MOSA (Mobile Healthcare Voice Assistant)**, asisten kesehatan JKN yang siap membantu Anda.

**Saya bisa membantu Anda dengan:**

🏥 **Informasi JKN**
• Cara daftar & aktivasi
• Iuran & cara bayar
• Prosedur berobat & rujukan
• Fasilitas kesehatan terdekat

💊 **Konsultasi Kesehatan**
• Gejala & keluhan umum
• Triase awal ke poli yang tepat
• Layanan kesehatan yang ditanggung JKN

💬 **Ruang Curhat Aman**
• Berbagi masalah kesehatan mental
• Dukungan emosional
• Rujukan ke tenaga profesional

📷 **Analisis Visual**
• Upload foto untuk analisis awal
• Rekomendasi tindakan

Silakan tanyakan apa saja, saya di sini untuk membantu Anda! 😊

Apa yang bisa saya bantu hari ini?`,
    delay: 1500
  }
];

export function getDemoResponse(query: string): DemoResponse | null {
  const lowerQuery = query.toLowerCase();

  // Check for specific triggers first
  for (const demo of demoResponses) {
    if (demo.trigger[0] === "default") continue;

    for (const trigger of demo.trigger) {
      if (lowerQuery.includes(trigger.toLowerCase())) {
        return demo;
      }
    }
  }

  // Return default response if no match
  return demoResponses.find(d => d.trigger[0] === "default") || null;
}
