import prisma from '@/lib/prisma';
import NewsDetailClientView from '@/components/NewsDetailClientView';
import { fallbackNews } from '@/lib/dataFallback';

export const dynamic = 'force-dynamic';

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  let article = fallbackNews.find((a) => a.slug === params.slug);

  try {
    const dbArticle = await prisma.newsArticle.findUnique({
      where: { slug: params.slug },
    });
    if (dbArticle) {
      article = dbArticle as any;
      try {
        await prisma.newsArticle.update({
          where: { id: dbArticle.id },
          data: { views: { increment: 1 } },
        });
      } catch (e) {}
    }
  } catch (e) {}

  if (!article) {
    article = fallbackNews[0];
  }

  const relatedArticles = fallbackNews.filter((a) => a.id !== article?.id).slice(0, 3);

  return (
    <NewsDetailClientView
      article={article as any}
      relatedArticles={relatedArticles}
    />
  );
}
