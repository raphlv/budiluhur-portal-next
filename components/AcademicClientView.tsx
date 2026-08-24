'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface FacultyData {
  id: number;
  name: string;
  code: string;
  slug: string;
  tagline: string;
  description: string;
  deanName: string;
  deanTitle: string;
  deanImage: string;
  bannerImage: string;
  studyPrograms: Array<{
    id: number;
    name: string;
    degree: string;
    slug: string;
    accreditation: string;
    description: string;
    careerProspects: string;
    totalCredits: number;
    tuitionPerSemester: string;
  }>;
}

export default function AcademicClientView({ faculties }: { faculties: FacultyData[] }) {
  const { lang, t, isEn } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HEADER HERO */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase text-[#fced17] border border-white/20">
            <i className="fa-solid fa-graduation-cap"></i> {t('academicPage.heroBadge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('academicPage.heroTitle')}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t('academicPage.heroDesc')}
          </p>
        </div>
      </section>

      {/* FACULTIES AND PROGRAMS LIST */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        
        {faculties.map((faculty) => (
          <div 
            key={faculty.id} 
            id={faculty.slug}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* FACULTY HEADER BANNER */}
            <div className="bg-gradient-to-r from-[#173860] to-[#1ca3dc] text-white p-6 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="bg-[#fced17] text-[#173860] font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider">
                  {faculty.code}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {faculty.name}
                </h2>
                <p className="text-slate-100 text-sm italic">
                  "{faculty.tagline}"
                </p>
              </div>
              <div>
                <Link 
                  href={`/academic/${faculty.slug}`}
                  className="inline-flex items-center gap-2 bg-white text-[#173860] hover:bg-[#fced17] font-black text-sm px-6 py-3.5 rounded-xl shadow transition-all border border-transparent"
                >
                  <span>{t('academicPage.facultyDetailBtn')}</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* FACULTY DESCRIPTION & DEAN INFO */}
            <div className="p-6 sm:p-10 border-b border-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-slate-50/50">
              <div className="lg:col-span-2 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  {t('academicPage.profileTitle')}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faculty.description}</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm">
                <img 
                  src={faculty.deanImage} 
                  alt={faculty.deanName} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#1ca3dc]" 
                />
                <div>
                  <h5 className="font-bold text-[#173860] text-sm leading-tight">{faculty.deanName}</h5>
                  <p className="text-xs text-slate-500">{faculty.deanTitle}</p>
                </div>
              </div>
            </div>

            {/* STUDY PROGRAMS GRID */}
            <div className="p-6 sm:p-10 space-y-6">
              <h3 className="text-base sm:text-lg font-black text-[#173860] uppercase tracking-wider">
                {t('academicPage.programsUnder')} {faculty.code}:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {faculty.studyPrograms.map((prodi) => (
                  <div 
                    key={prodi.id} 
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#1ca3dc] hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="bg-[#173860] text-[#fced17] font-black text-xs px-2.5 py-1 rounded-lg">
                          {prodi.degree}
                        </span>
                        <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-2.5 py-1 rounded-lg border border-emerald-200">
                          {isEn ? 'Accredited ' : 'Akreditasi '} {prodi.accreditation}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-[#173860] leading-snug">
                        {prodi.name}
                      </h4>

                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                        {prodi.description}
                      </p>

                      <div className="text-xs text-slate-500 space-y-1 pt-2 border-t border-slate-100">
                        <p><strong>{t('academicPage.creditsLabel')}</strong> {prodi.totalCredits} SKS</p>
                        <p><strong>{t('academicPage.tuitionLabel')}</strong> {prodi.tuitionPerSemester}</p>
                      </div>
                    </div>

                    <Link 
                      href="/admissions" 
                      className="w-full text-center block bg-[#173860] hover:bg-[#1ca3dc] text-white font-bold text-xs py-2.5 rounded-xl transition-colors shadow"
                    >
                      {t('academicPage.applyProgramBtn')} <i className="fa-solid fa-paper-plane ml-1"></i>
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
