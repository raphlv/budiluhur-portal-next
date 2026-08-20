import { notFound } from 'next/navigation';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export const revalidate = 0;

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await prisma.newsArticle.findUnique({
    where: { slug: params.slug },
  });

  if (!article) {
    notFound();
  }

  // Increment view count
  await prisma.newsArticle.update({
    where: { id: article.id },
    data: { views: { increment: 1 } },
  });

  const relatedArticles = await prisma.newsArticle.findMany({
    where: {
      id: { not: article.id },
    },
    take: 3,
    orderBy: { publishedAt: 'desc' },
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link href="/news" className="text-slate-300 hover:text-white text-xs font-semibold inline-flex items-center gap-1.5">
            <i className="fa-solid fa-arrow-left"></i> Kembali ke Semua Berita
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="bg-[#FFE600] text-[#00255A] font-black text-xs px-3 py-1 rounded-md uppercase">
              {article.category}
            </span>
            <span className="text-slate-400 text-xs">•</span>
            <span className="text-slate-300 text-xs">
              <i className="fa-regular fa-calendar mr-1"></i> {new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="text-xs text-slate-300 flex items-center gap-4 pt-2">
            <span><i className="fa-solid fa-user mr-1 text-[#FFE600]"></i> Penulis: {article.author}</span>
            <span><i className="fa-regular fa-eye mr-1 text-sky-300"></i> {article.views + 1} views</span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full max-h-[500px] object-cover" 
          />
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p className="font-semibold text-[#00255A] text-lg sm:text-xl border-l-4 border-[#FFE600] pl-4 italic">
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
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bagikan Berita Ini:</span>
            <div className="flex items-center gap-2">
              <a href={`https://wa.me/?text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-sm transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center text-sm transition-colors">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href={`https://twitter.com/intent/tweet`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-black hover:bg-slate-800 text-white flex items-center justify-center text-sm transition-colors">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        <div className="space-y-6 pt-8">
          <h3 className="text-2xl font-black text-[#00255A]">Berita Terkait Lainnya</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link 
                key={rel.id} 
                href={`/news/${rel.slug}`} 
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#004FC2] hover:shadow-lg transition-all space-y-3 block group"
              >
                <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-[#00255A] group-hover:text-[#004FC2] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <span className="text-xs text-[#004FC2] font-semibold flex items-center gap-1">
                  Baca <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>

      </article>

    </div>
  );
}
