import Link from 'next/link';
import prisma from '@/lib/prisma';

export const revalidate = 0; // Ensure fresh data

export default async function HomePage() {
  // Fetch data from database
  const faculties = await prisma.faculty.findMany({
    include: {
      studyPrograms: true,
    },
    orderBy: { id: 'asc' },
  });

  const newsArticles = await prisma.newsArticle.findMany({
    take: 3,
    orderBy: { publishedAt: 'desc' },
  });

  const upcomingEvents = await prisma.campusEvent.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' },
  });

  const innovations = await prisma.innovation.findMany({
    take: 4,
    orderBy: { id: 'asc' },
  });

  const facilities = await prisma.facility.findMany({
    take: 6,
    orderBy: { id: 'asc' },
  });

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-[#001433] via-[#00255A] to-[#004FC2] text-white flex items-center overflow-hidden py-20 px-6 lg:px-16">
        {/* Background glow overlay */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFE600_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#004FC2] rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FFE600] rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#FFE600] shadow-sm">
              <span className="w-2.5 h-2.5 bg-[#10B981] rounded-full animate-ping"></span>
              Penerimaan Mahasiswa Baru 2026 Dibuka
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Transforming Knowledge into <span className="text-[#FFE600] underline decoration-wavy decoration-[#FFE600]/40">Meaningful Impact</span>
            </h1>

            <p className="text-slate-200 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              Universitas Budi Luhur berakreditasi <strong>UNGGUL BAN-PT</strong>. Mencetak generasi cerdas, berintegritas luhur, dan berdaya saing global melalui 5 Fakultas unggulan dan ekosistem riset kendaraan listrik nasional.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/admissions" 
                className="bg-[#FFE600] hover:bg-white text-[#00255A] font-extrabold px-8 py-4 rounded-2xl shadow-xl hover:shadow-yellow-500/20 text-base flex items-center gap-2.5 transition-all hover:-translate-y-1"
              >
                <i className="fa-solid fa-paper-plane"></i> Daftar PMB Online
              </Link>
              <Link 
                href="/academic" 
                className="bg-white/10 hover:bg-white hover:text-[#00255A] text-white border border-white/30 backdrop-blur-md font-bold px-8 py-4 rounded-2xl text-base flex items-center gap-2.5 transition-all"
              >
                <i className="fa-solid fa-graduation-cap"></i> Jelajahi Fakultas & Prodi
              </Link>
            </div>

            {/* KEY STATS BADGES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/15">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-2xl">
                <span className="block text-2xl lg:text-3xl font-black text-[#FFE600]">UNGGUL</span>
                <span className="text-xs text-slate-300 font-semibold">Akreditasi BAN-PT</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-2xl">
                <span className="block text-2xl lg:text-3xl font-black text-white">45+ Thn</span>
                <span className="text-xs text-slate-300 font-semibold">Sejak 1979</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-2xl">
                <span className="block text-2xl lg:text-3xl font-black text-white">5 Fak</span>
                <span className="text-xs text-slate-300 font-semibold">20+ Program Studi</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-2xl">
                <span className="block text-2xl lg:text-3xl font-black text-[#10B981]">15.000 KM</span>
                <span className="text-xs text-slate-300 font-semibold">Inovasi Mobil Listrik</span>
              </div>
            </div>

          </div>

          {/* HERO RIGHT: HIGHLIGHT BOX & QUICK ADMISSION */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="bg-red-500 text-white font-extrabold text-xs px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span> PMB 2026 GELOMBANG 1
              </span>
              <span className="text-slate-300 text-xs font-semibold">
                <i className="fa-solid fa-bolt text-[#FFE600]"></i> Beasiswa s/d 100%
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white">Pilih Masa Depan Anda di Universitas Budi Luhur</h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Tersedia kelas Reguler Pagi, Kelas Karyawan Malam/Weekend, serta Program Pascasarjana (Magister & Doktoral) dengan fasilitas modern dan kurikulum berbasis industri 5.0.
              </p>
            </div>

            {/* PROGRAM SELECTOR SHORTCUTS */}
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-between text-sm font-bold">
                <span className="flex items-center gap-2"><i className="fa-solid fa-laptop-code text-[#FFE600]"></i> Fakultas Teknologi Informasi</span>
                <span className="text-xs bg-sky-500/30 text-sky-200 px-2 py-0.5 rounded-full">S1, S2, S3</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-between text-sm font-bold">
                <span className="flex items-center gap-2"><i className="fa-solid fa-chart-line text-emerald-400"></i> Fak. Ekonomi & Bisnis</span>
                <span className="text-xs bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded-full">S1, S2, S3, D3</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-between text-sm font-bold">
                <span className="flex items-center gap-2"><i className="fa-solid fa-film text-amber-400"></i> Fak. Komunikasi & Desain</span>
                <span className="text-xs bg-amber-500/30 text-amber-200 px-2 py-0.5 rounded-full">S1, S2</span>
              </div>
            </div>

            <Link 
              href="/admissions" 
              className="block text-center w-full bg-[#FFE600] hover:bg-white text-[#00255A] font-extrabold py-4 rounded-xl shadow-lg transition-all"
            >
              Konsultasi Pendaftaran Gratis <i className="fa-solid fa-arrow-right ml-1.5"></i>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. RUNNING TICKER / ANNOUNCEMENT */}
      <div className="bg-[#FFE600] text-[#00255A] py-3.5 px-6 font-extrabold text-sm overflow-hidden flex items-center shadow-md">
        <div className="flex items-center gap-2 pr-6 border-r border-[#00255A]/20 shrink-0 font-black uppercase text-xs">
          <i className="fa-solid fa-bullhorn text-red-600 text-base animate-bounce"></i> INFO KAMPUS:
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-marquee font-bold">
            🎓 Pendaftaran Mahasiswa Baru Tahun Akademik 2026/2027 telah resmi dibuka! Dapatkan potongan biaya kuliah dan beasiswa prestasi hingga 100% • 🏆 Universitas Budi Luhur meraih Akreditasi UNGGUL BAN-PT • ⚡ Inovasi Mobil Listrik BLITS & Motor Sport Listrik BLSEV-01 siap tampil pada agenda pameran nasional.
          </div>
        </div>
      </div>

      {/* 3. FACULTIES EXPLORER SECTION */}
      <section className="py-24 px-6 lg:px-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#004FC2] font-black text-xs tracking-widest uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              ACADEMIC EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00255A] tracking-tight">
              Fakultas & Program Studi Unggulan
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Pilihan jenjang sarjana (S1), diploma (D3), magister (S2), dan doktoral (S3) dengan akreditasi Unggul yang dirancang untuk menjawab tantangan masa depan.
            </p>
          </div>

          {/* FACULTIES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty) => (
              <div 
                key={faculty.id} 
                className="bg-white rounded-3xl border border-slate-200 hover:border-[#004FC2] shadow-sm hover:shadow-2xl transition-all group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 relative overflow-hidden bg-slate-800">
                    <img 
                      src={faculty.bannerImage} 
                      alt={faculty.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00255A] text-[#FFE600] font-black text-xs px-3 py-1.5 rounded-xl shadow border border-white/20">
                        {faculty.code}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#00255A] group-hover:text-[#004FC2] transition-colors">
                      {faculty.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {faculty.description}
                    </p>

                    {/* STUDY PROGRAM TAGS */}
                    <div className="pt-2">
                      <span className="text-xs font-bold text-slate-400 block mb-2">Program Studi:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {faculty.studyPrograms.map((prodi) => (
                          <span 
                            key={prodi.id} 
                            className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200"
                          >
                            {prodi.degree} {prodi.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href={`/academic/${faculty.slug}`}
                    className="w-full text-center block bg-slate-50 hover:bg-[#00255A] text-[#00255A] hover:text-white font-bold text-sm py-3 rounded-xl border border-slate-200 hover:border-[#00255A] transition-all"
                  >
                    Lihat Program Studi & Kurikulum <i className="fa-solid fa-angle-right ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INNOVATION & GREEN TECH (BLITS & BLSEV) */}
      <section className="py-24 px-6 lg:px-16 bg-[#001433] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[#FFE600] font-black text-xs tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                NATIONAL RESEARCH & INNOVATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Pelopor Kendaraan Listrik & Teknologi Hijau Nasional
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Universitas Budi Luhur membuktikan kepemimpinan riset Indonesia dengan menciptakan karya inovasi mobil reli listrik, motor sport balap, dan pengolahan energi terbarukan.
              </p>
            </div>
            <div>
              <Link 
                href="/innovation" 
                className="inline-flex items-center gap-2 bg-[#FFE600] hover:bg-white text-[#00255A] font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-lg"
              >
                Lihat Seluruh Showroom Inovasi <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* INNOVATIONS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((inv) => (
              <div 
                key={inv.id} 
                className="bg-white/5 border border-white/15 rounded-3xl p-6 lg:p-8 hover:bg-white/10 transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-56 rounded-2xl overflow-hidden relative">
                    <img 
                      src={inv.imageUrl} 
                      alt={inv.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                    <div className="absolute top-3 left-3 bg-[#00255A]/90 backdrop-blur-sm text-[#FFE600] text-xs font-extrabold px-3 py-1 rounded-full border border-white/20">
                      {inv.category}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{inv.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{inv.description}</p>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                    <p><strong>Spesifikasi:</strong> {inv.specs}</p>
                    <p className="text-[#FFE600]"><strong>Capaian:</strong> {inv.achievement}</p>
                  </div>
                </div>

                <Link 
                  href="/innovation" 
                  className="text-center block bg-white/10 hover:bg-[#FFE600] text-white hover:text-[#00255A] font-extrabold text-sm py-3 rounded-xl transition-all"
                >
                  Detail Riset & Spesifikasi <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. NEWS & BLU BERDAMPAK */}
      <section className="py-24 px-6 lg:px-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-[#004FC2] font-black text-xs tracking-widest uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
                CAMPUS UPDATES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#00255A] tracking-tight">
                Berita & BLU Berdampak
              </h2>
            </div>
            <Link 
              href="/news" 
              className="text-[#004FC2] font-bold text-sm hover:underline flex items-center gap-1.5"
            >
              Lihat Semua Berita <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-[#00255A] text-[#FFE600] font-extrabold text-[11px] px-3 py-1 rounded-full shadow">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar"></i> {new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <h3 className="text-lg font-bold text-[#00255A] group-hover:text-[#004FC2] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link 
                    href={`/news/${article.slug}`}
                    className="text-[#004FC2] font-bold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    Baca Selengkapnya <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 6. UPCOMING EVENTS & AGENDA */}
      <section className="py-20 px-6 lg:px-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-600 font-black text-xs tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              CAMPUS EVENTS
            </span>
            <h2 className="text-3xl font-black text-[#00255A] tracking-tight">
              Agenda & Kegiatan Mendatang
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((ev) => (
              <div 
                key={ev.id} 
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:border-[#004FC2] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#004FC2]">
                  <span><i className="fa-regular fa-calendar-check mr-1"></i> {ev.date}</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-md">{ev.category}</span>
                </div>
                <h3 className="text-lg font-bold text-[#00255A] leading-snug">{ev.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{ev.description}</p>
                <div className="pt-2 text-xs text-slate-500 space-y-1 border-t border-slate-200">
                  <p><i className="fa-regular fa-clock mr-1 text-slate-400"></i> {ev.time}</p>
                  <p><i className="fa-solid fa-location-dot mr-1 text-slate-400"></i> {ev.location}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CAMPUS FACILITIES & VIRTUAL TOUR */}
      <section className="py-24 px-6 lg:px-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[#FFE600] font-black text-xs tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              CAMPUS LIFE & FACILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Fasilitas Modern & Lingkungan Belajar Asri
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Jelajahi berbagai fasilitas kampus Budi Luhur: studio siaran televisi, auditorium megah, lab komputer AI mutakhir, dan pusat olahraga.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac) => (
              <div 
                key={fac.id} 
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={fac.imageUrl} 
                    alt={fac.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-[#00255A]/90 text-[#FFE600] text-xs font-bold px-2.5 py-1 rounded-lg">
                    {fac.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white leading-snug">{fac.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{fac.description}</p>
                  <p className="text-[#FFE600] text-xs font-semibold pt-1">
                    <i className="fa-solid fa-map-pin mr-1"></i> {fac.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link 
              href="/campus-life" 
              className="inline-flex items-center gap-2 bg-[#FFE600] hover:bg-white text-[#00255A] font-extrabold px-8 py-4 rounded-2xl shadow-xl transition-all"
            >
              <i className="fa-solid fa-compass"></i> Jelajahi Seluruh Fasilitas & UKM
            </Link>
          </div>

        </div>
      </section>

      {/* 8. ADMISSION CONSULTATION CALL TO ACTION */}
      <section className="py-20 px-6 lg:px-16 bg-gradient-to-r from-[#00255A] to-[#004FC2] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-[#FFE600] text-[#00255A] font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              KONSULTASI PMB 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Siap Menjadi Bagian dari Generasi Cerdas Berbudi Luhur?
            </h2>
            <p className="text-slate-200 text-base leading-relaxed">
              Tim admisi kami siap membantu memberikan informasi program beasiswa, perkiraan biaya kuliah, dan panduan pendaftaran secara personal.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://wa.me/62811803330?text=Halo%20Admin%20PMB%20Universitas%20Budi%20Luhur,%20saya%20ingin%20konsultasi%20pendaftaran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold px-7 py-4 rounded-xl shadow-lg flex items-center gap-2 transition-all"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> Chat WhatsApp Admisi
              </a>
              <Link 
                href="/admissions" 
                className="bg-white/10 hover:bg-white text-white hover:text-[#00255A] border border-white/30 font-bold px-7 py-4 rounded-xl transition-all"
              >
                Formulir PMB Online
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-2xl space-y-4">
            <h3 className="text-xl font-black text-[#00255A]">Butuh Brosur & Rincian Biaya?</h3>
            <p className="text-slate-600 text-sm">Tinggalkan kontak Anda untuk menerima brosur resmi dan rincian biaya kuliah per semester via WhatsApp.</p>
            
            <form action="/admissions" method="GET" className="space-y-3 pt-2">
              <input 
                type="text" 
                placeholder="Nama Lengkap" 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]" 
                required 
              />
              <input 
                type="tel" 
                placeholder="Nomor WhatsApp Aktif" 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]" 
                required 
              />
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]">
                <option value="FTI">Fakultas Teknologi Informasi (FTI)</option>
                <option value="FEB">Fakultas Ekonomi dan Bisnis (FEB)</option>
                <option value="FKDK">Fakultas Komunikasi & Desain Kreatif (FKDK)</option>
                <option value="FISSIG">Fakultas Ilmu Sosial & Studi Global (FISSIG)</option>
                <option value="FTCB">Fakultas Teknik & Creative Built (FTCB)</option>
                <option value="Pascasarjana">Program Pascasarjana (S2/S3)</option>
              </select>
              <button 
                type="submit" 
                className="w-full bg-[#00255A] hover:bg-[#004FC2] text-white font-extrabold py-3.5 rounded-xl transition-colors shadow-md"
              >
                Kirim & Dapatkan Brosur Lengkap
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
