'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface NewsDetailProps {
  article: {
    id: number;
    title: string;
    slug: string;
    category: string;
    summary: string;
    content: string;
    imageUrl: string;
    author: string;
    views: number;
    publishedAt: Date | string;
  };
  relatedArticles: Array<{
    id: number;
    title: string;
    slug: string;
    category: string;
  }>;
}

export default function NewsDetailClientView({
  article,
  relatedArticles,
}: NewsDetailProps) {
  const { lang, t, isEn } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/news" className="text-slate-300 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5">
            <i className="fa-solid fa-arrow-left"></i>
            <span>{t('newsPage.backToAllNews')}</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="bg-[#fced17] text-[#173860] font-black text-xs px-3 py-1 rounded-md uppercase">
              {article.category}
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-slate-300 text-xs">
              <i className="fa-regular fa-calendar mr-1"></i>{' '}
              {new Date(article.publishedAt).toLocaleDateString(isEn ? 'en-US' : 'id-ID', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="text-xs text-slate-300 flex items-center gap-4 pt-2">
            <span><i className="fa-solid fa-user mr-1 text-[#fced17]"></i> {t('newsPage.author')} {article.author}</span>
            <span><i className="fa-regular fa-eye mr-1 text-[#1ca3dc]"></i> {article.views + 1} {t('newsPage.views')}</span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
        
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full max-h-[500px] object-cover" 
          />
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p className="font-semibold text-[#173860] text-lg sm:text-xl border-l-4 border-[#fced17] pl-4 italic">
            "{article.summary}"
          </p>

          <div className="space-y-4 text-slate-700">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* SHARE BUTTONS */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t('newsPage.shareArticle')}
            </span>
            <div className="flex items-center gap-2">
              <a 
                href={`https://wa.me/?text=${encodeURIComponent(article.title)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-sm transition-colors"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-[#1ca3dc] hover:bg-[#173860] text-white flex items-center justify-center text-sm transition-colors"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a 
                href={`https://twitter.com/intent/tweet`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-black hover:bg-slate-800 text-white flex items-center justify-center text-sm transition-colors"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        <div className="space-y-6 pt-6">
          <h3 className="text-2xl font-black text-[#173860]">
            {t('newsPage.relatedNews')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link 
                key={rel.id} 
                href={`/news/${rel.slug}`} 
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#1ca3dc] hover:shadow-lg transition-all space-y-3 block group"
              >
                <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-[#173860] group-hover:text-[#1ca3dc] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <span className="text-xs text-[#1ca3dc] font-semibold flex items-center gap-1">
                  <span>{isEn ? 'Read' : 'Baca'}</span> <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>

      </article>

    </div>
  );
}
