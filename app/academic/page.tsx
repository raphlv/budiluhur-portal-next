import prisma from '@/lib/prisma';
import AcademicClientView from '@/components/AcademicClientView';
import { fallbackFaculties } from '@/lib/dataFallback';

export const dynamic = 'force-dynamic';

export default async function AcademicPage() {
  let faculties = fallbackFaculties;

  try {
    const dbFaculties = await prisma.faculty.findMany({
      include: { studyPrograms: true },
      orderBy: { id: 'asc' },
    });
    if (dbFaculties && dbFaculties.length > 0) {
      faculties = dbFaculties as any;
    }
  } catch (e) {}

  return <AcademicClientView faculties={faculties} />;
}
