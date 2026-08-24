import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import FacultyDetailClientView from '@/components/FacultyDetailClientView';
import { fallbackFaculties } from '@/lib/dataFallback';

export const dynamic = 'force-dynamic';

export default async function FacultyDetailPage({
  params,
}: {
  params: { faculty: string };
}) {
  const slug = params.faculty?.toLowerCase();
  let faculty = fallbackFaculties.find((f) => f.slug === slug);

  try {
    const dbFaculty = await prisma.faculty.findUnique({
      where: { slug },
      include: {
        studyPrograms: true,
      },
    });
    if (dbFaculty) {
      faculty = dbFaculty as any;
    }
  } catch (e) {}

  if (!faculty) {
    // If not found in primary 3, return first faculty or notFound
    faculty = fallbackFaculties[0];
  }

  return <FacultyDetailClientView faculty={faculty as any} />;
}
