# Panduan Deployment ke Vercel

## Prasyarat

1. Akun Vercel (gratis): https://vercel.com/signup
2. Gemini API Key dari Google AI Studio: https://aistudio.google.com/app/apikey
3. Repository Git (GitHub, GitLab, atau Bitbucket)

## Langkah-langkah Deployment

### 1. Persiapan Kode

Pastikan kode Anda sudah di-push ke Git repository:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Import Project ke Vercel

#### Opsi A: Melalui Dashboard Vercel

1. Buka https://vercel.com/new
2. Pilih "Import Git Repository"
3. Pilih repository `voice-jkn-agent`
4. Klik "Import"

#### Opsi B: Menggunakan Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel
```

### 3. Konfigurasi Environment Variables

Setelah import project, **SEBELUM deploy pertama kali**, tambahkan environment variables:

1. Di dashboard Vercel, buka project Anda
2. Pergi ke **Settings** > **Environment Variables**
3. Tambahkan variable berikut:

| Key | Value | Environment |
|-----|-------|-------------|
| `GEMINI_API_KEY` | `your_actual_api_key_here` | Production, Preview, Development |

**Cara mendapatkan Gemini API Key:**
1. Buka https://aistudio.google.com/app/apikey
2. Klik "Create API Key"
3. Pilih project atau buat baru
4. Copy API key yang di-generate

### 4. Deploy

Setelah environment variables di-set:

1. Klik tab **Deployments**
2. Klik **Redeploy** pada deployment terakhir
3. Atau push commit baru untuk trigger deployment otomatis

```bash
git commit --allow-empty -m "Trigger Vercel deployment"
git push
```

### 5. Verifikasi Deployment

1. Tunggu hingga status deployment menjadi "Ready"
2. Klik link deployment (misalnya: `https://voice-jkn-agent.vercel.app`)
3. Test fitur-fitur aplikasi:
   - Voice chat
   - Text chat
   - Image upload
   - Summary generation

## Konfigurasi Custom Domain (Opsional)

### Menambahkan Domain Custom

1. Di dashboard Vercel, buka project Anda
2. Pergi ke **Settings** > **Domains**
3. Tambahkan domain Anda (misalnya: `voice-jkn.yourdomain.com`)
4. Ikuti instruksi untuk konfigurasi DNS:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`

### Menunggu Propagasi DNS

- Propagasi DNS bisa memakan waktu 24-48 jam
- Gunakan https://dnschecker.org untuk cek status propagasi

## Monitoring & Debugging

### Melihat Logs

1. Di dashboard Vercel, buka project
2. Klik tab **Deployments**
3. Klik deployment yang ingin di-check
4. Klik **View Function Logs** atau **Runtime Logs**

### Common Issues

#### 1. Build Failed: "GEMINI_API_KEY not found"

**Solusi:**
- Pastikan environment variable `GEMINI_API_KEY` sudah di-set di Vercel
- Redeploy setelah menambahkan environment variable

#### 2. API Error: "Failed to generate response"

**Solusi:**
- Check API key masih valid di https://aistudio.google.com/app/apikey
- Pastikan quota API belum habis
- Check logs di Vercel untuk error detail

#### 3. Image Upload Gagal

**Solusi:**
- Vercel ada limit ukuran request body (4.5MB untuk free tier)
- Compress image sebelum upload atau upgrade Vercel plan

#### 4. Function Timeout

**Solusi:**
- Vercel free tier: 10 detik timeout
- Pro tier: 60 detik timeout
- Optimize API calls atau upgrade plan

## Performance Optimization

### 1. Edge Functions

Aplikasi ini sudah optimized untuk Vercel Edge Network dengan:
- Automatic static optimization
- Incremental Static Regeneration (ISR)
- API routes running on Edge

### 2. Caching

Vercel secara otomatis cache static assets. Untuk API responses:

```typescript
// Di api route, tambahkan cache header
export const revalidate = 60; // Cache 60 detik
```

### 3. Analytics

Enable Vercel Analytics untuk monitoring performa:

1. Di dashboard Vercel, buka project
2. Pergi ke **Analytics** tab
3. Enable **Web Analytics**

## Continuous Deployment

Vercel otomatis deploy setiap kali ada push ke branch:

- **main/master** → Production deployment
- **develop** → Preview deployment
- **feature branches** → Preview deployment

### Disable Auto Deploy (Opsional)

1. Pergi ke **Settings** > **Git**
2. Nonaktifkan "Automatic deployments"

## Rollback

Jika deployment baru ada masalah:

1. Buka tab **Deployments**
2. Cari deployment yang stabil sebelumnya
3. Klik titik tiga (**...**)
4. Pilih **Promote to Production**

## Environment Management

### Production vs Preview vs Development

```bash
# Production
https://voice-jkn-agent.vercel.app

# Preview (dari branch develop)
https://voice-jkn-agent-git-develop-yourteam.vercel.app

# Preview (dari PR)
https://voice-jkn-agent-git-feature-abc-yourteam.vercel.app
```

### Environment-specific Variables

Tambahkan variable berbeda untuk tiap environment jika diperlukan:

- Production only: Uncheck "Preview" dan "Development"
- Preview only: Uncheck "Production" dan "Development"
- All environments: Check semua

## Cost & Limits

### Vercel Hobby (Free) Plan

- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ⚠️ 10s serverless function timeout
- ⚠️ 4.5MB request body limit

### Vercel Pro Plan ($20/month)

- ✅ 1TB bandwidth/month
- ✅ 60s serverless function timeout
- ✅ 4.5MB request body limit (sama)
- ✅ Advanced analytics

### Gemini API Limits

- Free tier: 15 requests/minute
- Paid tier: Custom limits

## Security Best Practices

### 1. Jangan Commit Secrets

```bash
# .gitignore sudah include:
.env
.env.local
.env.production
skilled-compass.json
```

### 2. Rotate API Keys Secara Berkala

- Update Gemini API key setiap 3-6 bulan
- Hapus key lama setelah update

### 3. Enable Branch Protection

Di GitHub:
1. Settings > Branches
2. Add rule untuk `main` branch
3. Require pull request reviews

## Support & Troubleshooting

### Vercel Support

- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Support: https://vercel.com/support

### Gemini API Support

- Documentation: https://ai.google.dev/docs
- Issue tracker: https://issuetracker.google.com/issues?q=componentid:1228536

## Checklist Pre-Deployment

- [ ] Code di-push ke Git repository
- [ ] `.env.example` file sudah update
- [ ] Build sukses locally (`npm run build`)
- [ ] Environment variables ready (Gemini API Key)
- [ ] Git repository connected ke Vercel
- [ ] Custom domain ready (jika pakai)

## Checklist Post-Deployment

- [ ] Deployment status "Ready"
- [ ] Website bisa diakses
- [ ] Test voice chat functionality
- [ ] Test text chat functionality
- [ ] Test image upload functionality
- [ ] Test summary generation
- [ ] Check error logs di Vercel
- [ ] Setup monitoring/analytics
- [ ] Document production URL

## Quick Commands

```bash
# Deploy to production
vercel --prod

# Deploy to preview
vercel

# Check deployment status
vercel ls

# View logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-url]

# Link local project to Vercel
vercel link
```

---

**Selamat! Aplikasi Anda sekarang live di Vercel! 🎉**
