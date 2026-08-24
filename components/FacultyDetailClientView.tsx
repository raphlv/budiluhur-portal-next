'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface FacultyDetailProps {
  faculty: {
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
  };
}

export default function FacultyDetailClientView({ faculty }: FacultyDetailProps) {
  const { lang, t, isEn } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* FACULTY HERO */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <Link href="/academic" className="text-slate-300 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5">
              <i className="fa-solid fa-arrow-left"></i>
              <span>{t('academicPage.backToDirectory')}</span>
            </Link>
            <span className="text-slate-400">•</span>
            <span className="text-[#fced17] font-black text-xs uppercase">{faculty.code}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {faculty.name}
          </h1>

          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed italic">
            "{faculty.tagline}"
          </p>
        </div>
      </section>

      {/* FACULTY OVERVIEW & DEAN */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: ABOUT & DESCRIPTION */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-black text-[#173860]">
              {isEn ? `About ${faculty.name}` : `Tentang ${faculty.name}`}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faculty.description}</p>
            
            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-black text-[#1ca3dc]">{faculty.studyPrograms.length}</span>
                <span className="text-xs text-slate-500 font-semibold">{isEn ? 'Study Programs' : 'Program Studi'}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-black text-emerald-600">{isEn ? 'EXCELLENT' : 'UNGGUL'}</span>
                <span className="text-xs text-slate-500 font-semibold">{isEn ? 'BAN-PT Accreditation' : 'Akreditasi BAN-PT'}</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                <span className="block text-2xl font-black text-[#173860]">100%</span>
                <span className="text-xs text-slate-500 font-semibold">{isEn ? 'Industry-Standard Labs' : 'Lab Berstandar Industri'}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DEAN MESSAGE & CONTACT */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#173860] to-[#0e243e] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src={faculty.deanImage} 
                alt={faculty.deanName} 
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#fced17]" 
              />
              <div>
                <h3 className="font-bold text-base leading-tight text-white">{faculty.deanName}</h3>
                <p className="text-xs text-[#fced17] font-semibold">{faculty.deanTitle}</p>
              </div>
            </div>

            <p className="text-slate-200 text-xs leading-relaxed italic border-t border-white/10 pt-4">
              {isEn 
                ? '"We are committed to educating future leaders who are not only intellectually and technologically superior, but also possess noble virtue and integrity."'
                : '"Kami berkomitmen mendidik generasi penerus bangsa yang tidak hanya unggul secara intelektual dan teknologi, tetapi juga berjiwa luhur, berintegritas, dan solutif."'}
            </p>

            <Link 
              href="/admissions" 
              className="block text-center w-full bg-[#fced17] hover:bg-white text-[#173860] font-black py-3.5 rounded-xl transition-all shadow-md text-sm border border-[#fced17]"
            >
              {isEn ? `Apply to ${faculty.code} Now` : `Daftar di ${faculty.code} Sekarang`} <i className="fa-solid fa-arrow-right ml-1"></i>
            </Link>
          </div>

        </div>

        {/* STUDY PROGRAMS LIST */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-2xl font-black text-[#173860]">
              {isEn ? `Study Programs Options (${faculty.code})` : `Pilihan Program Studi (${faculty.code})`}
            </h3>
            <p className="text-slate-600 text-sm">
              {isEn 
                ? 'Structured curriculum tailored to meet the challenges of the Industry 5.0 revolution.'
                : 'Kurikulum terstruktur yang disesuaikan dengan kebutuhan revolusi industri 5.0.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.studyPrograms.map((prodi) => (
              <div 
                key={prodi.id} 
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-[#1ca3dc] transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#173860] text-[#fced17] font-black text-xs px-3 py-1.5 rounded-xl">
                      {isEn ? 'Degree ' : 'Jenjang '} {prodi.degree}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-emerald-200">
                      {isEn ? 'Accreditation ' : 'Akreditasi '} {prodi.accreditation}
                    </span>
                  </div>

                  <h4 className="text-2xl font-black text-[#173860]">{prodi.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{prodi.description}</p>
                  
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
                    <p><strong>{t('academicPage.prospectsLabel')}</strong> {prodi.careerProspects}</p>
                    <p><strong>{t('academicPage.creditsLabel')}</strong> {prodi.totalCredits} SKS</p>
                    <p><strong>{t('academicPage.tuitionLabel')}</strong> {prodi.tuitionPerSemester}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link 
                    href="/admissions" 
                    className="block text-center w-full bg-[#173860] hover:bg-[#1ca3dc] text-white font-bold py-3.5 rounded-xl transition-colors shadow text-sm"
                  >
                    {t('academicPage.applyProgramBtn')} <i className="fa-solid fa-paper-plane ml-1"></i>
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
