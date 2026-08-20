import Link from 'next/link';
import prisma from '@/lib/prisma';

export const revalidate = 0;

export default async function AcademicPage() {
  const faculties = await prisma.faculty.findMany({
    include: {
      studyPrograms: true,
    },
    orderBy: { id: 'asc' },
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HEADER HERO */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase text-[#FFE600] border border-white/20">
            <i className="fa-solid fa-graduation-cap"></i> ACADEMIC DIRECTORY
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Fakultas & Program Studi Universitas Budi Luhur
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Menyelenggarakan pendidikan tinggi jenjang Sarjana (S1), Magister (S2), Doktoral (S3), dan Diploma (D3) berakreditasi UNGGUL dengan kurikulum inovatif berbasis teknologi dan nilai luhur budi pekerti.
          </p>
        </div>
      </section>

      {/* FACULTIES AND PROGRAMS LIST */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-16">
        
        {faculties.map((faculty) => (
          <div 
            key={faculty.id} 
            id={faculty.slug}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* FACULTY HEADER BANNER */}
            <div className="bg-gradient-to-r from-[#00255A] to-[#004FC2] text-white p-8 lg:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="bg-[#FFE600] text-[#00255A] font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider">
                  {faculty.code}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {faculty.name}
                </h2>
                <p className="text-slate-200 text-sm italic">
                  "{faculty.tagline}"
                </p>
              </div>
              <div>
                <Link 
                  href={`/academic/${faculty.slug}`}
                  className="inline-flex items-center gap-2 bg-white text-[#00255A] hover:bg-[#FFE600] font-extrabold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
                >
                  Detail Fakultas <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* FACULTY DESCRIPTION & DEAN INFO */}
            <div className="p-8 lg:p-10 border-b border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-slate-50/50">
              <div className="lg:col-span-2 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Profil Fakultas</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faculty.description}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-4">
                <img 
                  src={faculty.deanImage} 
                  alt={faculty.deanName} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#004FC2]" 
                />
                <div>
                  <h5 className="font-bold text-[#00255A] text-sm leading-tight">{faculty.deanName}</h5>
                  <p className="text-xs text-slate-500">{faculty.deanTitle}</p>
                </div>
              </div>
            </div>

            {/* STUDY PROGRAMS GRID */}
            <div className="p-8 lg:p-10 space-y-6">
              <h3 className="text-lg font-black text-[#00255A] uppercase tracking-wider">
                Program Studi di Bawah {faculty.code}:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {faculty.studyPrograms.map((prodi) => (
                  <div 
                    key={prodi.id} 
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#004FC2] hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="bg-[#00255A] text-white font-extrabold text-xs px-2.5 py-1 rounded-lg">
                          {prodi.degree}
                        </span>
                        <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-2.5 py-1 rounded-lg border border-emerald-200">
                          Akreditasi {prodi.accreditation}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-[#00255A] leading-snug">
                        {prodi.name}
                      </h4>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {prodi.description}
                      </p>

                      <div className="text-xs text-slate-500 pt-2 border-t border-slate-100 space-y-1">
                        <p><strong>Beban SKS:</strong> {prodi.totalCredits} SKS</p>
                        <p><strong>Biaya Kuliah:</strong> {prodi.tuitionPerSemester} / semester</p>
                      </div>
                    </div>

                    <Link 
                      href="/admissions" 
                      className="text-center block w-full bg-slate-100 hover:bg-[#00255A] text-[#00255A] hover:text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
                    >
                      Daftar Prodi Ini <i className="fa-solid fa-arrow-right ml-1"></i>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}

      </section>

    </div>
  );
}
