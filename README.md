<div align="center">

# ðŸ›ï¸ Universitas Budi Luhur - Modern University Web Portal

### *Next-Generation Academic, Research, and Admissions Web Platform*

![Next.js](https://img.shields.io/badge/Next.js-14.x-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma ORM](https://img.shields.io/badge/Prisma-5.x-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Accreditation](https://img.shields.io/badge/BAN--PT-Akreditasi_Unggul-10B981?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

</div>

## ðŸŒŸ Overview

**Universitas Budi Luhur Web Portal** is the next-generation digital web portal for Universitas Budi Luhur ([budiluhur.ac.id](https://www.budiluhur.ac.id/)), re-engineered from legacy WordPress into a blazing-fast, modern architecture built on **Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma ORM, and MySQL**.

It features full academic directories for 5 flagship faculties (FTI, FEB, FKDK, FISSIG, FTCB, and Pascasarjana), online PMB admission lead workflows, national innovation showcases (BLITS Electric Car & BLSEV-01 Sport Motorcycle), news journalism, campus life, and an internal CMS dashboard.

---

## ðŸš€ Key Features

### 1. ðŸŽ“ Comprehensive Faculty & Academic Directory
- Interactive directory for 5 Faculties & Graduate School:
  - **FTI** (Fakultas Teknologi Informasi)
  - **FEB** (Fakultas Ekonomi dan Bisnis)
  - **FKDK** (Fakultas Komunikasi dan Desain Kreatif)
  - **FISSIG** (Fakultas Ilmu Sosial dan Studi Global)
  - **FTCB** (Fakultas Teknik & Creative Built Environment)
  - **Pascasarjana** (Magister S2 & Doktoral S3)
- Dynamic prodi routes with tuition fee estimations, accreditation status (Unggul), total SKS credits, and career path insights.

### 2. âš¡ National EV & Green Tech Innovation Showcase
- Detailed specs and achievements for **BLITS** (Mobil Listrik Penjelajah Nusantara 15.000 KM) and **BLSEV-01** (Motor Listrik Sport Balap Sirkuit Sentul).
- **Bank Sampah Budi Luhur** circular economy model and **WVO Ford Ranger** biofuel explorer.

### 3. ðŸ“ Integrated PMB Admissions Hub & Lead Management
- Registration tracks: Reguler Pagi, Kelas Karyawan Malam/Sabtu, Beasiswa Prestasi & DKKA 100%.
- Interactive online application form with live MySQL persistence (`AdmissionLead` table) and WhatsApp click-to-chat integration.

### 4. ðŸ“° Campus Journalism & BLU Berdampak Portal
- Category filters (Akademik, Riset, Prestasi Mahasiswa, Kerjasama, Event) with automatic view count tracking and social sharing.

### 5. ðŸ“ Multi-Campus Directory & Google Maps Embed
- Kampus Pusat (Petukangan, Jakarta Selatan), Kampus Roxy (Jakarta Pusat), and Kampus Salemba (Jakarta Pusat).

### 6. ðŸ“Š Internal CMS Admin Dashboard
- Metrics overview, recent PMB applicants list, and WhatsApp lead responder.

---

## ðŸ› ï¸ Technology Stack

- **Framework**: Next.js 14 (App Router, Server Components & Server Actions)
- **Frontend UI**: React 18, Tailwind CSS, FontAwesome 6, Poppins & Inter Google Fonts
- **Database & ORM**: MySQL with Prisma ORM
- **Deployment**: 100% production ready for Vercel, Node.js VPS, or Docker container

---

## ðŸ’» Installation & Quick Start

```bash
# 1. Clone repository
git clone https://github.com/raphlv/budiluhur-portal-next.git
cd budiluhur-portal-next

# 2. Install dependencies
npm install

# 3. Environment configuration
cp .env.example .env

# Configure .env:
# DATABASE_URL="mysql://root:@127.0.0.1:3306/budiluhur_univ_next"

# 4. Generate Prisma Client & Database Migration
npx prisma generate
npx prisma db push
node prisma/seed.js

# 5. Run Development Server
npm run dev

# 6. Production Build
npm run build
npm start
```

---

## ðŸ‘¤ Author & Maintainer

- **Developer**: Pangeran Ryan Pahlevi ([@raphlv](https://github.com/raphlv))
- **Email**: pangeranryan080504@gmail.com
- **Institution**: Universitas Budi Luhur

---

<div align="center">
  <sub>Â© 2026 Universitas Budi Luhur. Cerdas Berbudi Luhur. All Rights Reserved.</sub>
</div>


<!-- Last updated: 2026-08-21 09:00:04 -->
