'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface FacultyItem {
  id: number;
  name: string;
  code: string;
  slug: string;
  tagline: string;
  description: string;
  bannerImage: string;
  studyPrograms: Array<{
    id: number;
    name: string;
    degree: string;
    accreditation: string;
  }>;
}

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  imageUrl: string;
  publishedAt: Date | string;
}

interface EventItem {
  id: number;
  title: string;
  slug: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
}

interface InnovationItem {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  specs: string;
  imageUrl: string;
  achievement: string;
}

interface FacilityItem {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  imageUrl: string;
}

interface HomeClientViewProps {
  faculties: FacultyItem[];
  newsArticles: NewsItem[];
  upcomingEvents: EventItem[];
  innovations: InnovationItem[];
  facilities: FacilityItem[];
}

export default function HomeClientView({
  faculties,
  newsArticles,
  upcomingEvents,
  innovations,
  facilities,
}: HomeClientViewProps) {
  const { lang, t, isEn } = useLanguage();

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-gradient-to-br from-[#081626] via-[#173860] to-[#1ca3dc] text-white flex items-center overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        {/* Background glow overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fced17_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1ca3dc] rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#fced17] rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10 w-full">
          
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* PMB BADGE */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider text-[#fced17] shadow-sm">
              <span className="w-2.5 h-2.5 bg-[#de1f26] rounded-full animate-ping"></span>
              <span>{t('hero.pmbBadge')}</span>
            </div>

            {/* HERO TITLE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
              {t('hero.titlePrefix')}{' '}
              <span className="text-[#fced17] underline decoration-wavy decoration-[#fced17]/50">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* HERO SUBTITLE */}
            <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link 
                href="/admissions" 
                className="bg-[#fced17] hover:bg-white text-[#173860] font-black px-7 sm:px-8 py-4 rounded-2xl shadow-xl hover:shadow-yellow-400/25 text-sm sm:text-base flex items-center gap-2.5 transition-all hover:-translate-y-1 border border-[#fced17]"
              >
                <i className="fa-solid fa-paper-plane"></i>
                <span>{t('hero.applyBtn')}</span>
              </Link>
              <Link 
                href="/academic" 
                className="bg-white/10 hover:bg-white hover:text-[#173860] text-white border border-white/30 backdrop-blur-md font-bold px-7 sm:px-8 py-4 rounded-2xl text-sm sm:text-base flex items-center gap-2.5 transition-all hover:-translate-y-1"
              >
                <i className="fa-solid fa-graduation-cap"></i>
                <span>{t('hero.exploreBtn')}</span>
              </Link>
            </div>

            {/* KEY STATS BADGES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
              {/* Stat 1: Accreditation */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl flex flex-col justify-between text-left hover:bg-white/15 transition-colors">
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-[#fced17] tracking-tight leading-none">
                    {t('hero.statAccreditationValue')}
                  </span>
                </div>
                <span className="text-[11px] text-slate-200 font-semibold leading-tight mt-2 block">
                  {t('hero.statAccreditationLabel')}
                </span>
              </div>

              {/* Stat 2: Experience */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl flex flex-col justify-between text-left hover:bg-white/15 transition-colors">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                    {t('hero.statYearsValue')}
                  </span>
                  <span className="text-xs font-bold text-[#fced17] leading-none">
                    {t('hero.statYearsUnit')}
                  </span>
                </div>
                <span className="text-[11px] text-slate-200 font-semibold leading-tight mt-2 block">
                  {t('hero.statYearsLabel')}
                </span>
              </div>

              {/* Stat 3: Faculties */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl flex flex-col justify-between text-left hover:bg-white/15 transition-colors">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none">
                    {t('hero.statFacultiesValue')}
                  </span>
                  <span className="text-xs font-bold text-slate-300 leading-none">
                    {t('hero.statFacultiesUnit')}
                  </span>
                </div>
                <span className="text-[11px] text-slate-200 font-semibold leading-tight mt-2 block">
                  {t('hero.statFacultiesLabel')}
                </span>
              </div>

              {/* Stat 4: EV Tour */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl flex flex-col justify-between text-left hover:bg-white/15 transition-colors">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black text-[#1ca3dc] tracking-tight leading-none">
                    {t('hero.statEvValue')}
                  </span>
                  <span className="text-xs font-bold text-[#1ca3dc] leading-none">
                    {t('hero.statEvUnit')}
                  </span>
                </div>
                <span className="text-[11px] text-slate-200 font-semibold leading-tight mt-2 block">
                  {t('hero.statEvLabel')}
                </span>
              </div>
            </div>

          </div>

          {/* HERO RIGHT: HIGHLIGHT BOX & QUICK ADMISSION */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between gap-2">
              <span className="bg-[#de1f26] text-white font-black text-xs px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                <span>{t('quickPmb.batch')}</span>
              </span>
              <span className="text-slate-200 text-xs font-bold flex items-center gap-1">
                <i className="fa-solid fa-bolt text-[#fced17]"></i>
                <span>{t('quickPmb.scholarship')}</span>
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {t('quickPmb.title')}
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {t('quickPmb.desc')}
              </p>
            </div>

            {/* PROGRAM SELECTOR SHORTCUTS */}
            <div className="space-y-2.5">
              <Link href="/academic/fti" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-between text-xs sm:text-sm font-bold border border-white/10">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-laptop-code text-[#fced17]"></i>
                  <span>{t('quickPmb.fti')}</span>
                </span>
                <span className="text-[11px] bg-[#1ca3dc]/30 text-white font-bold px-2 py-0.5 rounded-full">S1, S2, S3</span>
              </Link>
              <Link href="/academic/feb" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-between text-xs sm:text-sm font-bold border border-white/10">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-chart-line text-[#1ca3dc]"></i>
                  <span>{t('quickPmb.feb')}</span>
                </span>
                <span className="text-[11px] bg-emerald-500/30 text-emerald-200 font-bold px-2 py-0.5 rounded-full">S1, S2, S3, D3</span>
              </Link>
              <Link href="/academic/fkdk" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-between text-xs sm:text-sm font-bold border border-white/10">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-film text-[#fced17]"></i>
                  <span>{t('quickPmb.fkdk')}</span>
                </span>
                <span className="text-[11px] bg-amber-500/30 text-amber-200 font-bold px-2 py-0.5 rounded-full">S1, S2</span>
              </Link>
            </div>

            <Link 
              href="/admissions" 
              className="block text-center w-full bg-[#fced17] hover:bg-white text-[#173860] font-black py-3.5 rounded-xl shadow-lg transition-all text-sm"
            >
              {t('quickPmb.ctaConsultation')} <i className="fa-solid fa-arrow-right ml-1.5"></i>
            </Link>
          </div>

        </div>
      </section>

      {/* 2. RUNNING TICKER / ANNOUNCEMENT */}
      <div className="bg-[#fced17] text-[#173860] py-3 px-4 sm:px-6 font-black text-xs sm:text-sm overflow-hidden flex items-center shadow-md border-y border-[#173860]/10">
        <div className="flex items-center gap-2 pr-4 sm:pr-6 border-r border-[#173860]/20 shrink-0 uppercase">
          <i className="fa-solid fa-bullhorn text-[#de1f26] text-base animate-bounce"></i>
          <span>{t('ticker.label')}</span>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full pl-4">
          <div className="animate-marquee font-bold">
            {t('ticker.content')}
          </div>
        </div>
      </div>

      {/* 3. FACULTIES EXPLORER SECTION */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#1ca3dc] font-black text-xs tracking-widest uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              {t('facultiesSection.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#173860] tracking-tight">
              {t('facultiesSection.title')}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('facultiesSection.subtitle')}
            </p>
          </div>

          {/* FACULTIES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty) => (
              <div 
                key={faculty.id} 
                className="bg-white rounded-3xl border border-slate-200 hover:border-[#1ca3dc] shadow-sm hover:shadow-2xl transition-all group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 relative overflow-hidden bg-slate-900">
                    <img 
                      src={faculty.bannerImage} 
                      alt={faculty.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#173860] text-[#fced17] font-black text-xs px-3 py-1.5 rounded-xl shadow border border-white/20">
                        {faculty.code}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#173860] group-hover:text-[#1ca3dc] transition-colors">
                      {faculty.name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {faculty.description}
                    </p>

                    {/* STUDY PROGRAM TAGS */}
                    <div className="pt-2">
                      <span className="text-xs font-bold text-slate-400 block mb-2">
                        {t('facultiesSection.studyProgramsLabel')}
                      </span>
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
                    className="w-full text-center block bg-slate-50 hover:bg-[#173860] text-[#173860] hover:text-white font-bold text-sm py-3 rounded-xl border border-slate-200 hover:border-[#173860] transition-all"
                  >
                    {t('facultiesSection.viewPrograms')} <i className="fa-solid fa-angle-right ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INNOVATION & GREEN TECH (BLITS & BLSEV) */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#0e243e] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[#fced17] font-black text-xs tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                {t('innovationSection.badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t('innovationSection.title')}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t('innovationSection.subtitle')}
              </p>
            </div>
            <div>
              <Link 
                href="/innovation" 
                className="inline-flex items-center gap-2 bg-[#fced17] hover:bg-white text-[#173860] font-black px-6 py-3.5 rounded-xl transition-all shadow-lg text-sm border border-[#fced17]"
              >
                <span>{t('innovationSection.viewAllBtn')}</span>
                <i className="fa-solid fa-arrow-right"></i>
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
                    <div className="absolute top-3 left-3 bg-[#173860]/95 backdrop-blur-sm text-[#fced17] text-xs font-black px-3 py-1 rounded-full border border-white/20">
                      {inv.category}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{inv.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{inv.description}</p>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
                    <p><strong>{t('innovationSection.specsLabel')}</strong> {inv.specs}</p>
                    <p className="text-[#fced17]"><strong>{t('innovationSection.achievementLabel')}</strong> {inv.achievement}</p>
                  </div>
                </div>

                <Link 
                  href="/innovation" 
                  className="text-center block bg-white/10 hover:bg-[#fced17] text-white hover:text-[#173860] font-extrabold text-sm py-3 rounded-xl transition-all border border-white/15"
                >
                  {t('innovationSection.detailsBtn')} <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. NEWS & BLU BERDAMPAK */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-[#1ca3dc] font-black text-xs tracking-widest uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
                {t('newsSection.badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#173860] tracking-tight">
                {t('newsSection.title')}
              </h2>
            </div>
            <Link 
              href="/news" 
              className="text-[#1ca3dc] font-bold text-sm hover:underline flex items-center gap-1.5"
            >
              <span>{t('newsSection.viewAll')}</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
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
                    <span className="absolute top-3 left-3 bg-[#173860] text-[#fced17] font-extrabold text-[11px] px-3 py-1 rounded-full shadow">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar"></i>
                      <span>
                        {new Date(article.publishedAt).toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </span>
                    <h3 className="text-lg font-bold text-[#173860] group-hover:text-[#1ca3dc] transition-colors line-clamp-2 leading-snug">
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
                    className="text-[#1ca3dc] font-bold text-sm hover:underline inline-flex items-center gap-1"
                  >
                    <span>{t('newsSection.readMore')}</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 6. UPCOMING EVENTS & AGENDA */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-amber-600 font-black text-xs tracking-widest uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              {t('eventsSection.badge')}
            </span>
            <h2 className="text-3xl font-black text-[#173860] tracking-tight">
              {t('eventsSection.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((ev) => (
              <div 
                key={ev.id} 
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 hover:border-[#1ca3dc] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#173860]">
                  <span><i className="fa-regular fa-calendar-check mr-1 text-[#1ca3dc]"></i> {ev.date}</span>
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">{ev.category}</span>
                </div>
                <h3 className="text-lg font-bold text-[#173860] leading-snug">{ev.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{ev.description}</p>
                <div className="pt-2 text-xs text-slate-500 space-y-1 border-t border-slate-200">
                  <p><i className="fa-regular fa-clock mr-1 text-slate-400"></i> {ev.time}</p>
                  <p><i className="fa-solid fa-location-dot mr-1 text-[#de1f26]"></i> {ev.location}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CAMPUS FACILITIES */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#081626] text-white">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#fced17] font-black text-xs tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
              {t('facilitiesSection.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {t('facilitiesSection.title')}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('facilitiesSection.subtitle')}
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
                  <span className="absolute top-3 left-3 bg-[#173860]/90 text-[#fced17] text-xs font-bold px-2.5 py-1 rounded-lg">
                    {fac.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-white leading-snug">{fac.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{fac.description}</p>
                  <p className="text-[#fced17] text-xs font-semibold pt-1">
                    <i className="fa-solid fa-map-pin mr-1 text-[#de1f26]"></i> {fac.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link 
              href="/campus-life" 
              className="inline-flex items-center gap-2 bg-[#fced17] hover:bg-white text-[#173860] font-black px-8 py-4 rounded-2xl shadow-xl transition-all border border-[#fced17]"
            >
              <i className="fa-solid fa-compass"></i>
              <span>{t('facilitiesSection.exploreAllBtn')}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 8. ADMISSION CONSULTATION CALL TO ACTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-[#173860] to-[#1ca3dc] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-[#fced17] text-[#173860] font-black text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              {t('ctaBanner.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              {t('ctaBanner.desc')}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="https://wa.me/62811803330?text=Halo%20Admin%20PMB%20Universitas%20Budi%20Luhur,%20saya%20ingin%20konsultasi%20pendaftaran" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-black px-7 py-4 rounded-xl shadow-lg flex items-center gap-2 transition-all hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>{t('ctaBanner.waBtn')}</span>
              </a>
              <Link 
                href="/admissions" 
                className="bg-white/10 hover:bg-white text-white hover:text-[#173860] border border-white/30 font-bold px-7 py-4 rounded-xl transition-all"
              >
                <span>{t('ctaBanner.onlineFormBtn')}</span>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl space-y-4">
            <h3 className="text-xl font-black text-[#173860]">
              {t('ctaBanner.cardTitle')}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              {t('ctaBanner.cardDesc')}
            </p>
            
            <form action="/admissions" method="GET" className="space-y-3 pt-2">
              <input 
                type="text" 
                placeholder={t('ctaBanner.namePlaceholder')} 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]" 
                required 
              />
              <input 
                type="tel" 
                placeholder={t('ctaBanner.phonePlaceholder')} 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]" 
                required 
              />
              <select className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]">
                <option value="FTI">Fakultas Teknologi Informasi (FTI)</option>
                <option value="FEB">Fakultas Ekonomi dan Bisnis (FEB)</option>
                <option value="FKDK">Fakultas Komunikasi & Desain Kreatif (FKDK)</option>
                <option value="FISSIG">Fakultas Ilmu Sosial & Studi Global (FISSIG)</option>
                <option value="FTCB">Fakultas Teknik & Creative Built (FTCB)</option>
                <option value="Pascasarjana">Program Pascasarjana (S2/S3)</option>
              </select>
              <button 
                type="submit" 
                className="w-full bg-[#173860] hover:bg-[#1ca3dc] text-white font-black py-3.5 rounded-xl transition-colors shadow-md"
              >
                {t('ctaBanner.submitBtn')}
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
