'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface ArticleItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  imageUrl: string;
  views: number;
  publishedAt: Date | string;
}

interface NewsIndexClientViewProps {
  articles: ArticleItem[];
  categoryFilter?: string;
}

export default function NewsIndexClientView({
  articles,
  categoryFilter,
}: NewsIndexClientViewProps) {
  const { lang, t, isEn } = useLanguage();

  const categories = [
    { key: 'Semua', label: isEn ? 'All News' : 'Semua' },
    { key: 'Akademik', label: isEn ? 'Academic' : 'Akademik' },
    { key: 'Riset & Inovasi', label: isEn ? 'Research & Innovation' : 'Riset & Inovasi' },
    { key: 'Prestasi Mahasiswa', label: isEn ? 'Student Achievement' : 'Prestasi Mahasiswa' },
    { key: 'Kerjasama', label: isEn ? 'Partnership' : 'Kerjasama' },
    { key: 'Event', label: isEn ? 'Campus Events' : 'Event' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fced17] text-[#173860] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <i className="fa-solid fa-newspaper"></i> {t('newsPage.heroBadge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('newsPage.heroTitle')}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t('newsPage.heroDesc')}
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER & ARTICLES */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-12">
        
        {/* CATEGORY PILLS */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
          {categories.map((cat) => {
            const isActive = (!categoryFilter && cat.key === 'Semua') || categoryFilter === cat.key;
            return (
              <Link
                key={cat.key}
                href={cat.key === 'Semua' ? '/news' : `/news?category=${encodeURIComponent(cat.key)}`}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  isActive
                    ? 'bg-[#173860] text-[#fced17] shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </Link>
            );
          })}
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-[#173860] text-[#fced17] font-black text-[11px] px-3 py-1 rounded-full shadow">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span>
                      <i className="fa-regular fa-calendar mr-1"></i>{' '}
                      {new Date(article.publishedAt).toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                    <span><i className="fa-regular fa-eye mr-1"></i> {article.views} {t('newsPage.views')}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#173860] group-hover:text-[#1ca3dc] transition-colors leading-snug line-clamp-2">
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
                  className="w-full text-center block bg-slate-50 hover:bg-[#173860] text-[#173860] hover:text-white font-bold text-xs py-3 rounded-xl border border-slate-200 hover:border-[#173860] transition-all"
                >
                  {t('newsSection.readMore')} <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>

    </div>
  );
}
