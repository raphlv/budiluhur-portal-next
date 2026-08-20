const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Universitas Budi Luhur database...');

  // 1. CLEAR EXISTING DATA
  await prisma.admissionLead.deleteMany();
  await prisma.studyProgram.deleteMany();
  await prisma.faculty.deleteMany();
  await prisma.newsArticle.deleteMany();
  await prisma.campusEvent.deleteMany();
  await prisma.innovation.deleteMany();
  await prisma.facility.deleteMany();
  await prisma.campusBranch.deleteMany();

  // 2. SEED FACULTIES
  const fti = await prisma.faculty.create({
    data: {
      name: 'Fakultas Teknologi Informasi',
      code: 'FTI',
      slug: 'fti',
      tagline: 'Leading the Future with Cutting-Edge Digital & Computing Technology',
      description: 'FTI Budi Luhur merupakan pelopor pendidikan komputer dan teknologi informasi di Indonesia sejak 1979. Menghasilkan lulusan kompeten di bidang Artificial Intelligence, Cyber Security, Software Engineering, dan Data Science.',
      deanName: 'Dr. Deni Mahdiana, S.Kom., M.M., M.Kom.',
      deanTitle: 'Dekan Fakultas Teknologi Informasi',
      deanImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop',
      bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop',
      colorAccent: '#0284C7',
      studyPrograms: {
        create: [
          {
            name: 'Teknik Informatika',
            degree: 'S1',
            slug: 'teknik-informatika-s1',
            accreditation: 'Unggul',
            description: 'Fokus pada pengembangan rekayasa perangkat lunak, AI/Machine Learning, Cloud Computing, Game Development, dan Cyber Defense.',
            careerProspects: 'AI Engineer, Full-Stack Developer, Cyber Security Analyst, Cloud Architect, Game Programmer.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Sistem Informasi',
            degree: 'S1',
            slug: 'sistem-informasi-s1',
            accreditation: 'Unggul',
            description: 'Mengintegrasikan teknologi informasi dengan strategi bisnis modern, Data Analytics, Enterprise Resource Planning (ERP), dan Digital Transformation.',
            careerProspects: 'Data Analyst, IT Business Analyst, ERP Consultant, Database Administrator, Product Manager.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.200.000',
            bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Sistem Komputer',
            degree: 'S1',
            slug: 'sistem-komputer-s1',
            accreditation: 'Baik Sekali',
            description: 'Keahlian dalam Internet of Things (IoT), Embedded Systems, Robotika Cerdas, Otomasi Industri, dan Jaringan Komputer Telekomunikasi.',
            careerProspects: 'IoT Engineer, Embedded Systems Developer, Robotics Specialist, Network Security Engineer.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.000.000',
            bannerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop',
            isPopular: false,
          },
          {
            name: 'Magister Ilmu Komputer',
            degree: 'S2',
            slug: 'magister-ilmu-komputer-s2',
            accreditation: 'Unggul',
            description: 'Program pascasarjana berbasis riset terapan mutakhir dalam Computer Vision, Big Data Architecture, dan Advanced Intelligent Systems.',
            careerProspects: 'Chief Technology Officer (CTO), Senior Data Scientist, IT Researcher, Dosen Akademisi.',
            totalCredits: 36,
            tuitionPerSemester: 'Rp 11.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
            isPopular: false,
          },
          {
            name: 'Doktor Ilmu Komputer',
            degree: 'S3',
            slug: 'doktor-ilmu-komputer-s3',
            accreditation: 'Baik Sekali',
            description: 'Program doktoral tingkat lanjut untuk melahirkan pakar riset teknologi komputer berstandar global.',
            careerProspects: 'Principal Scientist, Guru Besar / Profesor, Konsultan Utama Transformasi Digital Nasional.',
            totalCredits: 42,
            tuitionPerSemester: 'Rp 16.000.000',
            bannerImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop',
            isPopular: false,
          }
        ]
      }
    }
  });

  const feb = await prisma.faculty.create({
    data: {
      name: 'Fakultas Ekonomi dan Bisnis',
      code: 'FEB',
      slug: 'feb',
      tagline: 'Empowering Next-Generation Sustainable Business Leaders & Entrepreneurs',
      description: 'FEB Budi Luhur mencetak profesional bisnis, akuntan bersertifikasi, manajer kebencanaan, dan technopreneur berkarakter budi luhur yang tangguh di era ekonomi digital.',
      deanName: 'Dr. Ir. Arief Wibowo, M.Kom.',
      deanTitle: 'Dekan Fakultas Ekonomi dan Bisnis',
      deanImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop',
      bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop',
      colorAccent: '#059669',
      studyPrograms: {
        create: [
          {
            name: 'Manajemen',
            degree: 'S1',
            slug: 'manajemen-s1',
            accreditation: 'Unggul',
            description: 'Konsentrasi Digital Marketing, Financial Technology (Fintech), Human Capital Strategy, dan Sustainable Entrepreneurship.',
            careerProspects: 'Marketing Director, Financial Analyst, HR Business Partner, Startup Founder, Investment Consultant.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.000.000',
            bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Akuntansi',
            degree: 'S1',
            slug: 'akuntansi-s1',
            accreditation: 'Unggul',
            description: 'Pendidikan akuntansi berbasis digital auditing, sistem perpajakan digital, akuntansi forensik, dan Corporate Governance.',
            careerProspects: 'Auditor Big 4, Tax Consultant, Financial Controller, Forensic Accountant, CFO.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.000.000',
            bannerImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop',
            isPopular: false,
          },
          {
            name: 'Manajemen Bencana',
            degree: 'S1',
            slug: 'manajemen-bencana-s1',
            accreditation: 'Baik Sekali',
            description: 'Program studi visioner pertama di Indonesia yang mengkaji mitigasi risiko bencana, logistik darurat, CSR resilience, dan manajemen krisis.',
            careerProspects: 'Disaster Risk Analyst (BNPB/BPBD), ESG Consultant, Humanitarian Officer (UN/NGOs), Risk Manager.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 7.800.000',
            bannerImage: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Kesekretariatan',
            degree: 'D3',
            slug: 'kesekretariatan-d3',
            accreditation: 'A',
            description: 'Mempersiapkan Executive Administrative Professional dengan penguasaan komunikasi bilingual, manajemen protokol eksekutif, dan digital office tools.',
            careerProspects: 'Executive Assistant, Office Manager, Corporate Secretary, Event Organizer Specialist.',
            totalCredits: 110,
            tuitionPerSemester: 'Rp 6.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop',
            isPopular: false,
          },
          {
            name: 'Magister Manajemen',
            degree: 'S2',
            slug: 'magister-manajemen-s2',
            accreditation: 'Unggul',
            description: 'Program MBA/MM berorientasi pada kepemimpinan strategik, transformasi digital korporasi, dan keberlanjutan bisnis global.',
            careerProspects: 'Executive Director, General Manager, Business Consultant, Konsultan Manajemen Strategis.',
            totalCredits: 36,
            tuitionPerSemester: 'Rp 11.000.000',
            bannerImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop',
            isPopular: false,
          }
        ]
      }
    }
  });

  const fkdk = await prisma.faculty.create({
    data: {
      name: 'Fakultas Komunikasi dan Desain Kreatif',
      code: 'FKDK',
      slug: 'fkdk',
      tagline: 'Inspiring Creative Minds in Broadcasting, Digital Media & Visual Communication',
      description: 'FKDK Budi Luhur merupakan pusat keunggulan media kreatif terkemuka dengan fasilitas studio broadcast TV berstandar industri (BLTV), radio FM, lab editing, dan creative visual design studios.',
      deanName: 'Dr. Nawiroh Vera, M.Si.',
      deanTitle: 'Dekan Fakultas Komunikasi dan Desain Kreatif',
      deanImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop',
      bannerImage: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&auto=format&fit=crop',
      colorAccent: '#D97706',
      studyPrograms: {
        create: [
          {
            name: 'Ilmu Komunikasi',
            degree: 'S1',
            slug: 'ilmu-komunikasi-s1',
            accreditation: 'Unggul',
            description: 'Konsentrasi Broadcasting & Digital Media, Public Relations, Advertising & Marketing Communications dengan praktik siaran langsung berstandar TV.',
            careerProspects: 'TV/News Producer, PR Consultant, Social Media Strategist, Broadcast Journalist, Content Creator.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Desain Komunikasi Visual',
            degree: 'S1',
            slug: 'desain-komunikasi-visual-s1',
            accreditation: 'Unggul',
            description: 'Pendidikan desain visual modern: Brand Identity Design, Animasi 2D/3D, UI/UX Design, Sinematografi, dan Ilustrasi Digital.',
            careerProspects: 'Art Director, UI/UX Designer, Motion Graphic Artist, Creative Brand Strategist, 3D Animator.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Magister Ilmu Komunikasi',
            degree: 'S2',
            slug: 'magister-ilmu-komunikasi-s2',
            accreditation: 'Unggul',
            description: 'Program pascasarjana strategic corporate communication, media convergence policy, and digital public diplomacy.',
            careerProspects: 'Senior PR Director, Media Analyst, Corporate Communications Head, Komisioner Media.',
            totalCredits: 36,
            tuitionPerSemester: 'Rp 11.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
            isPopular: false,
          }
        ]
      }
    }
  });

  const fissig = await prisma.faculty.create({
    data: {
      name: 'Fakultas Ilmu Sosial dan Studi Global',
      code: 'FISSIG',
      slug: 'fissig',
      tagline: 'Navigating Global Diplomacy, Criminology Insights & Sustainable Tourism',
      description: 'FISSIG Budi Luhur menyiapkan calon diplomat, kriminolog forensik, dan pakar pariwisata berwawasan internasional dengan fondasi integritas budi luhur.',
      deanName: 'Dr. Rusdiyanta, M.Si.',
      deanTitle: 'Dekan Fakultas Ilmu Sosial dan Studi Global',
      deanImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop',
      bannerImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop',
      colorAccent: '#7C3AED',
      studyPrograms: {
        create: [
          {
            name: 'Hubungan Internasional',
            degree: 'S1',
            slug: 'hubungan-internasional-s1',
            accreditation: 'Baik Sekali',
            description: 'Kajian diplomasi global, ekonomi politik internasional, keamanan transnasional, dan negosiasi multilateral.',
            careerProspects: 'Diplomat / Staff Kemenlu, International NGO Officer, Global Trade Analyst, Jurnalis Internasional.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 7.800.000',
            bannerImage: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Kriminologi',
            degree: 'S1',
            slug: 'kriminologi-s1',
            accreditation: 'Unggul',
            description: 'Salah satu program studi Kriminologi terkemuka di Indonesia. Fokus pada cybercrime analysis, sosiologi kejahatan, investigasi forensik, dan viktimologi.',
            careerProspects: 'Crime & Security Analyst, Cybercrime Investigator, Peneliti Badan Intelijen/Kepolisian, Analis Kebijakan Hukum.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.000.000',
            bannerImage: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Pariwisata',
            degree: 'S1',
            slug: 'pariwisata-s1',
            accreditation: 'Baik Sekali',
            description: 'Pengembangan ekowisata berkelanjutan, MICE (Meetings, Incentives, Conferences, Exhibitions), dan manajemen destinasi wisata internasional.',
            careerProspects: 'Destination Manager, Tourism Consultant, MICE Specialist, Hotel & Resort General Manager.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 7.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop',
            isPopular: false,
          }
        ]
      }
    }
  });

  const ftcb = await prisma.faculty.create({
    data: {
      name: 'Fakultas Teknik & Creative Built Environment',
      code: 'FTCB',
      slug: 'ftcb',
      tagline: 'Engineering Green Smart Cities, Sustainable Architecture & Renewable Power',
      description: 'FTCB Budi Luhur berfokus pada perancangan arsitektur tropis ramah lingkungan, smart electric grid, otomasi sistem energi terbarukan, dan kendaraan listrik nasional (BLITS & BLSEV).',
      deanName: 'Dr. Ir. Sujono, M.T.',
      deanTitle: 'Dekan Fakultas Teknik & Creative Built Environment',
      deanImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop',
      bannerImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop',
      colorAccent: '#EA580C',
      studyPrograms: {
        create: [
          {
            name: 'Arsitektur',
            degree: 'S1',
            slug: 'arsitektur-s1',
            accreditation: 'Unggul',
            description: 'Perancangan arsitektur berwawasan Green Building, Smart Urban Design, pemodelan BIM (Building Information Modeling), dan konservasi ruang tropis.',
            careerProspects: 'Principal Architect, Urban Designer, BIM Specialist, Green Building Consultant, Landscape Architect.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.500.000',
            bannerImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop',
            isPopular: true,
          },
          {
            name: 'Teknik Elektro',
            degree: 'S1',
            slug: 'teknik-elektro-s1',
            accreditation: 'Unggul',
            description: 'Pengembangan teknologi Electric Vehicle powertrain, pembangkit energi surya, sistem kontrol PLC/SCADA, dan telekomunikasi nirkabel 5G.',
            careerProspects: 'EV Powertrain Engineer, Renewable Energy Specialist, Automation & Control Engineer, Power System Planner.',
            totalCredits: 144,
            tuitionPerSemester: 'Rp 8.200.000',
            bannerImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop',
            isPopular: true,
          }
        ]
      }
    }
  });

  // 3. SEED INNOVATIONS
  await prisma.innovation.createMany({
    data: [
      {
        name: 'BLITS - Budi Luhur ITS Electric Rally Car',
        slug: 'blits-electric-car',
        category: 'Electric Vehicle',
        description: 'Mobil listrik penjelajah pertama karya kolaborasi Universitas Budi Luhur dan ITS yang sukses menjelajahi nusantara sejauh 15.000 KM keliling Indonesia serta dipersiapkan untuk ajang Rally Dakar dunia.',
        specs: 'Motor Listrik 50 kW, Baterai Lithium-Ion 100 kWh, Daya Jelajah 300 KM per charge, Top Speed 140 km/h, Tubular Steel Chassis.',
        imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop',
        youtubeVideoId: 'L_LUpnjgPso',
        achievement: 'Rekor MURI Penjelajahan Mobil Listrik Keliling Nusantara 15.000 KM & Partisipasi Uji Ekstrem Rally Medan Berat.'
      },
      {
        name: 'BLSEV-01 - Budi Luhur Sport Electric Vehicle',
        slug: 'blsev-01-motor-sport-listrik',
        category: 'Electric Vehicle',
        description: 'Motor sport listrik bertenaga tinggi karya mahasiswa dan dosen Fakultas Teknik Universitas Budi Luhur yang dirancang khusus untuk performa balap sirkuit Mandalika dan Sentul.',
        specs: 'Motor Listrik BLDC 25 kW, Baterai 96V 56Ah, Akselerasi 0-100 km/h dalam 4.2 detik, Top Speed 160 km/h, Fairing Aerodinamis Karbon.',
        imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop',
        youtubeVideoId: 'L_LUpnjgPso',
        achievement: 'Uji Kecepatan dan Ketahanan di Sirkuit Sentul Internasional serta Pameran Inovasi Otomotif Nasional IIMS.'
      },
      {
        name: 'Bank Sampah Budi Luhur & Green Campus Eco-Center',
        slug: 'bank-sampah-budi-luhur',
        category: 'Green Technology',
        description: 'Pusat daur ulang sampah terpadu dan pemberdayaan ekonomi sirkular civitas akademika dan masyarakat sekitar kampus dengan teknologi digital waste management.',
        specs: 'Kapasitas Pengolahan 5 Ton/Bulan, Sistem Tabungan Sampah Berbasis Aplikasi Mobile, Rumah Kompos Organik, Mesin Cacah Plastik.',
        imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop',
        youtubeVideoId: null,
        achievement: 'Penghargaan Bank Sampah Terbaik Tingkat DKI Jakarta & Pelopor Kampus Hijau Berkelanjutan UI GreenMetric.'
      },
      {
        name: 'WVO Ford Ranger - Biofuel Eco Explorer',
        slug: 'wvo-ford-ranger',
        category: 'Renewable Energy',
        description: 'Kendaraan penjelajah berbasis bahan bakar minyak jelantah (Waste Vegetable Oil) yang telah melalui proses purifikasi mandiri di laboratorium Kimia Budi Luhur.',
        specs: 'Mesin Diesel 2.5L Turbocharged, Sistem Konversi Dual-Tank WVO, Pre-Heater Fuel Injection, Emisi Karbon Rendah.',
        imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop',
        youtubeVideoId: null,
        achievement: 'Ekspedisi Touring Jelajah Pulau Jawa dan Bali 100% Menggunakan Bahan Bakar Minyak Jelantah Daur Ulang.'
      }
    ]
  });

  // 4. SEED NEWS & BLU BERDAMPAK
  await prisma.newsArticle.createMany({
    data: [
      {
        title: 'Budi Luhur University and Universitas Fort De Kock Strengthen Cross-Regional Collaboration for Impact-Driven Higher Education',
        slug: 'budi-luhur-and-fort-de-kock-strengthen-collaboration',
        category: 'Kerjasama',
        summary: 'Universitas Budi Luhur dan Universitas Fort De Kock menandatangani nota kesepahaman strategis guna memperkuat implementasi Tri Dharma Perguruan Tinggi dan program Diktisaintek Berdampak.',
        content: 'JAKARTA - Universitas Budi Luhur (UBL) terus memperluas jejaring kemitraan lintas daerah guna mendorong terciptanya pendidikan tinggi yang berorientasi pada dampak nyata bagi masyarakat. Dalam pertemuan resmi di Grha Budi Luhur, pimpinan kedua institusi menyepakati program pertukaran mahasiswa, riset bersama teknologi mitigasi bencana, serta kolaborasi pengabdian masyarakat berkelanjutan.',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
        author: 'Humas Budi Luhur',
        views: 1240,
        isFeatured: true,
        publishedAt: new Date('2026-08-15'),
      },
      {
        title: 'Budi Luhur University Hosts "Double Tap" Production, Giving FKDK Students Direct Industry Experience',
        slug: 'budi-luhur-hosts-double-tap-production',
        category: 'Prestasi Mahasiswa',
        summary: 'Mahasiswa Fakultas Komunikasi dan Desain Kreatif (FKDK) Budi Luhur terjun langsung ke dalam produksi film dan serial profesional "Double Tap" di studio siaran kampus.',
        content: 'JAKARTA - Memperkuat komitmen experiential learning, FKDK Universitas Budi Luhur menjadi tuan rumah produksi serial kreatif "Double Tap". Mahasiswa dilibatkan secara aktif sebagai asisten sutradara, camera crew, tata artistik, dan operator audio, memberikan pengalaman kerja nyata di industri perfilman nasional sebelum lulus kuliah.',
        imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop',
        author: 'Redaksi BLTV',
        views: 980,
        isFeatured: true,
        publishedAt: new Date('2026-08-12'),
      },
      {
        title: 'Universitas Budi Luhur Raih Akreditasi "Unggul" dari BAN-PT: Bukti Mutu Pendidikan Berstandar Nasional & Internasional',
        slug: 'ubl-raih-akreditasi-unggul-ban-pt',
        category: 'Akademik',
        summary: 'Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT) secara resmi menganugerahkan peringkat Akreditasi Unggul kepada Universitas Budi Luhur atas keunggulan kurikulum, riset, dan tata kelola universitas.',
        content: 'JAKARTA - Prestasi membanggakan kembali diraih Universitas Budi Luhur dengan diraihnya predikat Akreditasi Institusi "Unggul" dari BAN-PT. Pencapaian ini merupakan hasil dedikasi seluruh dosen, mahasiswa, alumni, dan tenaga kependidikan dalam menghadirkan ekosistem pembelajaran cerdas dan berbudi luhur.',
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
        author: 'Pusat Penjaminan Mutu UBL',
        views: 2450,
        isFeatured: true,
        publishedAt: new Date('2026-08-01'),
      },
      {
        title: 'FTI Budi Luhur Selenggarakan International Workshop on Artificial Intelligence and Quantum Computing Trends',
        slug: 'fti-international-workshop-ai-quantum-computing',
        category: 'Riset & Inovasi',
        summary: 'Menghadirkan narasumber profesor internasional dari Jepang dan Jerman guna membedah akselerasi AI generatif dan komputasi kuantum untuk industri 5.0.',
        content: 'Fakultas Teknologi Informasi Universitas Budi Luhur menggelar konferensi dan workshop internasional bertajuk Next-Gen AI Applications. Kegiatan ini diikuti oleh ratusan peneliti, praktisi teknologi, dan mahasiswa pascasarjana dari berbagai perguruan tinggi terkemuka.',
        imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop',
        author: 'Laboratorium Riset FTI',
        views: 870,
        isFeatured: false,
        publishedAt: new Date('2026-07-28'),
      }
    ]
  });

  // 5. SEED CAMPUS EVENTS
  await prisma.campusEvent.createMany({
    data: [
      {
        title: 'Secretary Study Program: Closer to Industry & Executive Masterclass',
        slug: 'secretary-study-program-closer-to-industry',
        date: '15 Agustus 2026',
        time: '08:30 - 16:00 WIB',
        location: 'Auditorium Grha Budi Luhur, Kampus Pusat Jakarta',
        organizer: 'Program Studi D3 Kesekretariatan FEB UBL',
        category: 'Workshop & Seminar',
        description: 'Sesi interaktif bersama praktisi Corporate Secretary terkemuka mengenai manajemen komunikasi eksekutif dan diplomasi korporasi di era AI.',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop',
        registrationUrl: 'https://infopmb.budiluhur.ac.id/',
        isUpcoming: true,
      },
      {
        title: 'Semesta Berpesta x Budi Luhur University Festival 2026',
        slug: 'semesta-berpesta-x-budi-luhur',
        date: '28 - 29 Agustus 2026',
        time: '13:00 - 22:00 WIB',
        location: 'Plaza Parkir Timur Senayan & Kampus Budi Luhur',
        organizer: 'Direktorat Kemahasiswaan & BEM Universitas Budi Luhur',
        category: 'Festival & Musik',
        description: 'Festival musik, pameran inovasi mobil listrik BLITS, kompetisi e-sport kampus, dan bazaar kuliner UMKM terbesar tahun 2026.',
        imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop',
        registrationUrl: 'https://budiluhur.ac.id/event-post/',
        isUpcoming: true,
      },
      {
        title: 'Budi Luhur Job & Career Fair 2026: 50+ Top Multinational Companies',
        slug: 'budi-luhur-job-career-fair-2026',
        date: '10 - 11 September 2026',
        time: '09:00 - 17:00 WIB',
        location: 'Sport Hall Universitas Budi Luhur Jakarta',
        organizer: 'Budi Luhur Career Center (BLCC)',
        category: 'Career & Expo',
        description: 'Bursa kerja eksklusif bagi mahasiswa tingkat akhir dan alumni UBL dengan walk-in interview langsung dari 50+ perusahaan multinasional dan BUMN.',
        imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop',
        registrationUrl: 'https://karir.budiluhur.ac.id/',
        isUpcoming: true,
      }
    ]
  });

  // 6. SEED FACILITIES
  await prisma.facility.createMany({
    data: [
      {
        name: 'Grha Budi Luhur (Auditorium Utama)',
        category: 'Akademik',
        description: 'Auditorium megah berkapasitas 2.500 orang dengan tata suara akustik profesional, sistem pencahayaan panggung mutakhir untuk wisuda, seminar internasional, dan festival seni.',
        location: 'Gedung Utama Kampus Pusat Petukangan',
        imageUrl: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&auto=format&fit=crop',
      },
      {
        name: 'Studio Penyiaran Televisi & Radio (BLTV & Radio BLU)',
        category: 'Laboratorium',
        description: 'Studio broadcast broadcast-grade lengkap dengan OB Van, ruang kontrol siaran multi-kamera 4K, teleprompter, dan studio podcast radio FM.',
        location: 'Gedung FKDK Lantai 4',
        imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&auto=format&fit=crop',
      },
      {
        name: 'Pusat Riset Komputer Cerdas & AI Laboratory',
        category: 'Laboratorium',
        description: 'Lab komputasi berperforma tinggi dilengkapi server GPU NVIDIA, workstation AI modeling, perangkat IoT, dan platform simulasi cyber security.',
        location: 'Gedung FTI Lantai 6',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop',
      },
      {
        name: 'Gelanggang Olahraga (Sport Center & Arena Futsal/Basket)',
        category: 'Olahraga & Seni',
        description: 'Fasilitas olahraga indoor berstandar nasional untuk basket, futsal, bulu tangkis, panjat tebing wall-climbing, dan arena bela diri.',
        location: 'Kompleks Olahraga Budi Luhur',
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
      },
      {
        name: 'Perpustakaan Digital & Smart Co-Working Space',
        category: 'Area Komunal',
        description: 'Akses ke jutaan e-journal internasional (IEEE, Scopus, Springer), ruang diskusi privat ber-AC, dan area belajar mandiri 24/7.',
        location: 'Gedung Perpustakaan Pusat',
        imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop',
      },
      {
        name: 'Masjid Budi Luhur & Pusat Pembinaan Karakter',
        category: 'Ibadah',
        description: 'Pusat ibadah dan kajian keagamaan yang asri di tengah taman kampus, menjadi wadah pembinaan akhlak budi luhur.',
        location: 'Area Utama Kampus Budi Luhur',
        imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&auto=format&fit=crop',
      }
    ]
  });

  // 7. SEED CAMPUS BRANCHES
  await prisma.campusBranch.createMany({
    data: [
      {
        name: 'Kampus Pusat Budi Luhur (Jakarta Selatan)',
        city: 'Jakarta Selatan',
        address: 'Jl. Ciledug Raya, RT 10/RW 2, Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan, DKI Jakarta 12260',
        phone: '+62 21 5853753',
        email: 'info@budiluhur.ac.id',
        googleMapsUrl: 'https://maps.app.goo.gl/yaFw9h4AGJN2ypiz5',
        isMainCampus: true,
        imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop',
      },
      {
        name: 'Kampus Budi Luhur Roxy (Jakarta Pusat)',
        city: 'Jakarta Pusat',
        address: 'Kompleks Pertokoan Roxy Mas Blok E2 No. 12-14, Jl. KH. Hasyim Ashari, Gambir, Jakarta Pusat',
        phone: '+62 21 6328328',
        email: 'roxy@budiluhur.ac.id',
        googleMapsUrl: 'https://maps.google.com/?q=Universitas+Budi+Luhur+Roxy',
        isMainCampus: false,
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
      },
      {
        name: 'Kampus Budi Luhur Salemba (Jakarta Pusat)',
        city: 'Jakarta Pusat',
        address: 'Jl. Salemba Raya No. 45, Paseban, Senen, Jakarta Pusat 10440',
        phone: '+62 21 3907788',
        email: 'salemba@budiluhur.ac.id',
        googleMapsUrl: 'https://maps.google.com/?q=Universitas+Budi+Luhur+Salemba',
        isMainCampus: false,
        imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&auto=format&fit=crop',
      }
    ]
  });

  console.log('Universitas Budi Luhur database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
