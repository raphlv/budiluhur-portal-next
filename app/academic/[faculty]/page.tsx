import { notFound } from 'next/navigation';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export const revalidate = 0;

export default async function FacultyDetailPage({
  params,
}: {
  params: { faculty: string };
}) {
  const faculty = await prisma.faculty.findUnique({
    where: { slug: params.faculty.toLowerCase() },
    include: {
      studyPrograms: true,
    },
  });

  if (!faculty) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* FACULTY HERO */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <Link href="/academic" className="text-slate-300 hover:text-white text-xs font-semibold">
              <i className="fa-solid fa-arrow-left mr-1"></i> Kembali ke Direktori Fakultas
            </Link>
            <span className="text-slate-500">•</span>
            <span className="text-[#FFE600] font-black text-xs uppercase">{faculty.code}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {faculty.name}
          </h1>

          <p className="text-slate-200 text-lg max-w-3xl leading-relaxed italic">
            "{faculty.tagline}"
          </p>
        </div>
      </section>

      {/* FACULTY OVERVIEW & DEAN */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: ABOUT & DESCRIPTION */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-black text-[#00255A]">Tentang {faculty.name}</h2>
            <p className="text-slate-600 text-base leading-relaxed">{faculty.description}</p>
            
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-black text-[#004FC2]">{faculty.studyPrograms.length}</span>
                <span className="text-xs text-slate-500 font-semibold">Program Studi</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-black text-[#10B981]">UNGGUL</span>
                <span className="text-xs text-slate-500 font-semibold">Akreditasi BAN-PT</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-black text-[#00255A]">100%</span>
                <span className="text-xs text-slate-500 font-semibold">Lab Berstandar Industri</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DEAN MESSAGE & CONTACT */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#00255A] to-[#001433] text-white rounded-3xl p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src={faculty.deanImage} 
                alt={faculty.deanName} 
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#FFE600]" 
              />
              <div>
                <h3 className="font-bold text-base leading-tight text-white">{faculty.deanName}</h3>
                <p className="text-xs text-[#FFE600] font-semibold">{faculty.deanTitle}</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed italic border-t border-white/10 pt-4">
              "Kami berkomitmen mendidik generasi penerus bangsa yang tidak hanya unggul secara intelektual dan teknologi, tetapi juga berjiwa luhur, berintegritas, dan solutif."
            </p>

            <Link 
              href="/admissions" 
              className="block text-center w-full bg-[#FFE600] hover:bg-white text-[#00255A] font-extrabold py-3.5 rounded-xl transition-all shadow-md text-sm"
            >
              Daftar di {faculty.code} Sekarang <i className="fa-solid fa-arrow-right ml-1"></i>
            </Link>
          </div>

        </div>

        {/* STUDY PROGRAMS LIST */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-black text-[#00255A]">
              Pilihan Program Studi ({faculty.code})
            </h3>
            <p className="text-slate-600 text-sm">Kurikulum terstruktur yang disesuaikan dengan kebutuhan revolusi industri 5.0.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.studyPrograms.map((prodi) => (
              <div 
                key={prodi.id} 
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-[#004FC2] transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#00255A] text-white font-extrabold text-xs px-3 py-1.5 rounded-xl">
                      Jenjang {prodi.degree}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-emerald-200">
                      Akreditasi {prodi.accreditation}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-[#00255A]">{prodi.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{prodi.description}</p>
                  
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
                    <p><strong>Peluang Karir:</strong> {prodi.careerProspects}</p>
                    <p><strong>Total Beban:</strong> {prodi.totalCredits} SKS (8 Semester)</p>
                    <p><strong>Estimasi Biaya:</strong> {prodi.tuitionPerSemester} / semester</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    href="/admissions" 
                    className="block text-center w-full bg-[#004FC2] hover:bg-[#00255A] text-white font-bold py-3.5 rounded-xl transition-colors shadow text-sm"
                  >
                    Daftar Program Studi Ini <i className="fa-solid fa-paper-plane ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
