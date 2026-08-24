import prisma from '@/lib/prisma';
import HomeClientView from '@/components/HomeClientView';
import {
  fallbackFaculties,
  fallbackNews,
  fallbackEvents,
  fallbackInnovations,
  fallbackFacilities,
} from '@/lib/dataFallback';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let faculties = fallbackFaculties;
  let newsArticles = fallbackNews;
  let upcomingEvents = fallbackEvents;
  let innovations = fallbackInnovations;
  let facilities = fallbackFacilities;

  try {
    const dbFaculties = await prisma.faculty.findMany({
      include: { studyPrograms: true },
      orderBy: { id: 'asc' },
    });
    if (dbFaculties && dbFaculties.length > 0) {
      faculties = dbFaculties as any;
    }
  } catch (e) {}

  try {
    const dbNews = await prisma.newsArticle.findMany({
      take: 3,
      orderBy: { publishedAt: 'desc' },
    });
    if (dbNews && dbNews.length > 0) {
      newsArticles = dbNews as any;
    }
  } catch (e) {}

  try {
    const dbEvents = await prisma.campusEvent.findMany({
      take: 3,
      orderBy: { createdAt: 'desc' },
    });
    if (dbEvents && dbEvents.length > 0) {
      upcomingEvents = dbEvents as any;
    }
  } catch (e) {}

  try {
    const dbInnovations = await prisma.innovation.findMany({
      take: 4,
      orderBy: { id: 'asc' },
    });
    if (dbInnovations && dbInnovations.length > 0) {
      innovations = dbInnovations as any;
    }
  } catch (e) {}

  try {
    const dbFacilities = await prisma.facility.findMany({
      take: 6,
      orderBy: { id: 'asc' },
    });
    if (dbFacilities && dbFacilities.length > 0) {
      facilities = dbFacilities as any;
    }
  } catch (e) {}

  return (
    <HomeClientView
      faculties={faculties}
      newsArticles={newsArticles}
      upcomingEvents={upcomingEvents}
      innovations={innovations}
      facilities={facilities}
    />
  );
}
