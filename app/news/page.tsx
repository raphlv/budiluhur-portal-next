import prisma from '@/lib/prisma';
import NewsIndexClientView from '@/components/NewsIndexClientView';
import { fallbackNews } from '@/lib/dataFallback';

export const metadata = {
  title: 'Berita & BLU Berdampak | Universitas Budi Luhur',
  description: 'Warta berita kampus, siaran pers, prestasi mahasiswa, dan riset Universitas Budi Luhur.',
};

export const dynamic = 'force-dynamic';

export default async function NewsIndexPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const categoryFilter = searchParams.category;

  const whereClause = categoryFilter && categoryFilter !== 'Semua'
    ? { category: categoryFilter }
    : {};

  let articles = fallbackNews;

  try {
    const dbArticles = await prisma.newsArticle.findMany({
      where: whereClause,
      orderBy: { publishedAt: 'desc' },
    });
    if (dbArticles && dbArticles.length > 0) {
      articles = dbArticles as any;
    }
  } catch (e) {}

  if (categoryFilter && categoryFilter !== 'Semua') {
    articles = articles.filter(
      (a) => a.category?.toLowerCase() === categoryFilter.toLowerCase()
    );
  }

  return (
    <NewsIndexClientView
      articles={articles}
      categoryFilter={categoryFilter}
    />
  );
}
