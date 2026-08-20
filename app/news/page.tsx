import prisma from '@/lib/prisma';
import Link from 'next/link';

export const metadata = {
  title: 'Berita & BLU Berdampak | Universitas Budi Luhur',
  description: 'Warta berita kampus, siaran pers, prestasi mahasiswa, dan riset Universitas Budi Luhur.',
};

export const revalidate = 0;

export default async function NewsIndexPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categoryFilter = searchParams.category;

  const whereClause = categoryFilter && categoryFilter !== 'Semua'
    ? { category: categoryFilter }
    : {};

  const articles = await prisma.newsArticle.findMany({
    where: whereClause,
    orderBy: { publishedAt: 'desc' },
  });

  const categories = ['Semua', 'Akademik', 'Riset & Inovasi', 'Prestasi Mahasiswa', 'Kerjasama', 'Event'];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FFE600] text-[#00255A] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <i className="fa-solid fa-newspaper"></i> WARTA KAMPUS & PRESS RELEASE
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Berita & BLU Berdampak
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Informasi terkini mengenai capaian akademik, kiprah mahasiswa di industri, riset teknologi mutakhir, dan pengabdian masyarakat Universitas Budi Luhur.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER & ARTICLES */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-12">
        
        {/* CATEGORY PILLS */}
        <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-200">
          {categories.map((cat) => {
            const isActive = (!categoryFilter && cat === 'Semua') || categoryFilter === cat;
            return (
              <Link
                key={cat}
                href={cat === 'Semua' ? '/news' : `/news?category=${encodeURIComponent(cat)}`}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  isActive
                    ? 'bg-[#00255A] text-[#FFE600] shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
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
                  <span className="absolute top-3 left-3 bg-[#00255A] text-[#FFE600] font-extrabold text-[11px] px-3 py-1 rounded-full shadow">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                    <span><i className="fa-regular fa-calendar mr-1"></i> {new Date(article.publishedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span><i className="fa-regular fa-eye mr-1"></i> {article.views} views</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#00255A] group-hover:text-[#004FC2] transition-colors leading-snug line-clamp-2">
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
                  className="w-full text-center block bg-slate-50 hover:bg-[#00255A] text-[#00255A] hover:text-white font-bold text-xs py-3 rounded-xl border border-slate-200 hover:border-[#00255A] transition-all"
                >
                  Baca Selengkapnya <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>

    </div>
  );
}
