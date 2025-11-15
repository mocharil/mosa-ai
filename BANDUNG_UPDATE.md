# ✅ Update Data Bandung - Summary

## 🎯 Perubahan yang Dilakukan

Semua data rumah sakit dan faskes telah diubah dari **Surabaya** ke **Bandung** sesuai permintaan.

---

## 📋 Detail Perubahan

### 1. **Demo Response - Faskes Terdekat**

**File:** `app/lib/demoResponses.ts`

**Scenario 1B - Faskes Terdekat**

#### Sebelum (Surabaya):
- Puskesmas Mulyorejo (1.8 km)
- RS Umum Dr. Soetomo (3.2 km)
- RS Premier Surabaya (4.5 km)

#### Sesudah (Bandung):
- **Puskesmas Garuda** (2.1 km)
  - 📍 Jl. Garuda No. 21, Andir, Bandung
  - 📞 (022) 6030181

- **RSUP Dr. Hasan Sadikin (RSHS)** (3.5 km)
  - 📍 Jl. Pasteur No. 38, Pasteur, Bandung
  - 📞 (022) 2034953

- **RS Santo Borromeus** (4.2 km)
  - 📍 Jl. Ir. H. Juanda No. 100, Dago, Bandung
  - 📞 (022) 2552000

**Trigger Words:** Ditambahkan `"bandung"` dan `"di bandung"` untuk deteksi lokasi

---

### 2. **Demo Response - Curhat Mode (Faskes Kesehatan Mental)**

**File:** `app/lib/demoResponses.ts`

**Scenario 2A - Curhat (Poli Jiwa)**

#### Sebelum:
- RS Dr. Soetomo - Poliklinik Jiwa, Surabaya

#### Sesudah:
- **RSUP Dr. Hasan Sadikin - Poliklinik Jiwa**
  - 📍 Jl. Pasteur No. 38, Bandung

---

**Scenario 2B - Layanan Mental Health JKN**

#### Sebelum:
- RSUD Dr. Soetomo, Surabaya
- RS Jiwa Menur, Surabaya

#### Sesudah:
- **RSUP Dr. Hasan Sadikin (RSHS)**
  - 📍 Jl. Pasteur No. 38, Bandung
  - 📞 (022) 2034953

- **RS Jiwa Provinsi Jawa Barat (RSJ Cisarua)**
  - 📍 Jl. Kolonel Masturi KM 7, Cisarua, Bandung Barat
  - 📞 (022) 2700103

---

### 3. **Demo Response - Foto Kaki Bengkak**

**File:** `app/lib/demoResponses.ts`

**Scenario 3A - Visual Analysis**

#### Sebelum:
- Puskesmas Mulyorejo (1.8 km)
- RS Dr. Soetomo - IGD (3.2 km)
- RS Dr. Soetomo - Poli Penyakit Dalam

#### Sesudah:
- **Puskesmas Garuda** (2.1 km)
  - 📍 Jl. Garuda No. 21, Andir, Bandung
  - 📞 (022) 6030181

- **RSUP Dr. Hasan Sadikin - IGD** (3.5 km)
  - 📍 Jl. Pasteur No. 38, Bandung
  - 📞 (022) 2034953

- **RSUP Dr. Hasan Sadikin - Poli Penyakit Dalam**

---

**Scenario 3B - Triase Urgensi**

Semua referensi ke faskes diubah:
- "IGD RS Dr. Soetomo" → **"IGD RSUP Dr. Hasan Sadikin"**
- "Puskesmas Mulyorejo" → **"Puskesmas Garuda"**

---

### 4. **Demo Script**

**File:** `DEMO_SCRIPT_NEW.md`

**Demo 1 - Step 2**

#### Pertanyaan User (Updated):
```
Oh gitu, oke. Kalau begitu, saya dari Bandung nih.
Saya mau tanya rumah sakit terdekat dari lokasi saya dong
```

#### Highlight untuk Audience (Updated):
> "Nah, ini yang powerful. MOSA langsung **deteksi bahwa user dari Bandung** dan kasih daftar RS di Bandung. Tidak cuma kasih daftar RS, tapi juga kasih rekomendasi..."

---

## 🏥 Daftar Faskes Bandung yang Digunakan

### Faskes Tingkat 1:
1. **Puskesmas Garuda**
   - Alamat: Jl. Garuda No. 21, Andir, Bandung
   - Telepon: (022) 6030181
   - Jam: Senin-Jumat 08:00-14:00 | Sabtu 08:00-12:00

### RS Rujukan Umum:
2. **RSUP Dr. Hasan Sadikin (RSHS)**
   - Alamat: Jl. Pasteur No. 38, Pasteur, Bandung
   - Telepon: (022) 2034953
   - IGD: 24 Jam
   - Poli: Senin-Jumat 08:00-14:00

3. **RS Santo Borromeus**
   - Alamat: Jl. Ir. H. Juanda No. 100, Dago, Bandung
   - Telepon: (022) 2552000
   - IGD: 24 Jam

### RS Kesehatan Jiwa:
4. **RS Jiwa Provinsi Jawa Barat (RSJ Cisarua)**
   - Alamat: Jl. Kolonel Masturi KM 7, Cisarua, Bandung Barat
   - Telepon: (022) 2700103
   - IGD: 24 Jam

---

## 📊 Comparison: Before vs After

| Element | Surabaya (Before) | Bandung (After) |
|---------|-------------------|-----------------|
| **Puskesmas** | Puskesmas Mulyorejo | Puskesmas Garuda |
| **RS Rujukan Utama** | RS Dr. Soetomo | RSUP Dr. Hasan Sadikin |
| **RS Swasta** | RS Premier Surabaya | RS Santo Borromeus |
| **RS Jiwa** | RS Jiwa Menur | RS Jiwa Prov. Jabar (Cisarua) |
| **Kode Area** | 031 | 022 |
| **User Location** | - | "Saya dari Bandung" |

---

## ✅ Testing

Untuk test apakah perubahan berhasil:

### Test 1: Faskes Terdekat
**Ketik:**
```
Saya dari Bandung, rumah sakit terdekat ada dimana ya?
```

**Expected Response:**
- Puskesmas Garuda (Jl. Garuda No. 21)
- RSUP Dr. Hasan Sadikin (Jl. Pasteur No. 38)
- RS Santo Borromeus (Jl. Ir. H. Juanda No. 100)

---

### Test 2: Curhat Mode
**Ketik:**
```
MOSA, saya sedih dan cemas akhir-akhir ini
```

**Expected Response (bagian faskes):**
- Sejiwa 119 ext 8 (nasional)
- RSUP Dr. Hasan Sadikin - Poliklinik Jiwa, Bandung

Lalu follow-up:
```
Apakah konsultasi psikolog ditanggung BPJS?
```

**Expected Response:**
- RSUP Dr. Hasan Sadikin (Bandung)
- RS Jiwa Provinsi Jawa Barat (Cisarua)

---

### Test 3: Foto Kaki Bengkak
**Ketik:**
```
MOSA, kaki saya bengkak, ini kenapa ya?
```

**Expected Response (bagian faskes):**
- Puskesmas Garuda (untuk kasus ringan)
- RSUP Dr. Hasan Sadikin - IGD (untuk darurat)

Lalu follow-up:
```
Apakah saya harus ke dokter sekarang?
```

**Expected Response:**
- IGD RSUP Dr. Hasan Sadikin (untuk kategori merah)
- Puskesmas Garuda (untuk kategori oranye/kuning)

---

## 📝 Script Demo yang Diupdate

Dalam `DEMO_SCRIPT_NEW.md`, pada **Demo 1 - Step 2**, sekarang user bilang:

```
"Oh gitu, oke. Kalau begitu, saya dari Bandung nih.
Saya mau tanya rumah sakit terdekat dari lokasi saya dong"
```

Dan MOSA akan respond dengan faskes di Bandung.

---

## 🎯 Cara Menggunakan di Demo

1. **Aktifkan Demo Mode** di settings (☰)
2. **Aktifkan Auto-speak**
3. Buka `DEMO_SCRIPT_NEW.md`
4. Pada Demo 1 - Step 2, baca:
   ```
   "Saya dari Bandung nih. Rumah sakit terdekat ada dimana ya?"
   ```
5. MOSA akan respond dengan daftar RS di Bandung

**Highlight ke audience:**
> "Lihat, MOSA langsung deteksi lokasi user (Bandung) dan kasih daftar faskes yang relevan di Bandung. Ini membantu peserta JKN mendapat informasi yang akurat sesuai lokasi mereka."

---

## ✅ Status

**All Done!** ✅

Semua data telah diubah ke Bandung:
- ✅ Faskes terdekat (Scenario 1B)
- ✅ Poli Jiwa (Scenario 2A)
- ✅ Layanan Mental Health JKN (Scenario 2B)
- ✅ Visual Analysis - Kaki Bengkak (Scenario 3A)
- ✅ Triase Urgensi (Scenario 3B)
- ✅ Demo Script (DEMO_SCRIPT_NEW.md)

**Ready untuk demo di Bandung!** 🚀

---

**Last Updated:** 2025-11-14
**Location:** Bandung, Jawa Barat
**Files Updated:** 2 files (`demoResponses.ts`, `DEMO_SCRIPT_NEW.md`)
