import prisma from '@/lib/prisma';
import CampusLifeClientView from '@/components/CampusLifeClientView';
import { fallbackFacilities } from '@/lib/dataFallback';

export const metadata = {
  title: 'Kehidupan Kampus & Fasilitas | Universitas Budi Luhur',
  description: 'Fasilitas modern, UKM, organisasi mahasiswa, dan kegiatan kehidupan kampus di Universitas Budi Luhur Jakarta.',
};

export const dynamic = 'force-dynamic';

export default async function CampusLifePage() {
  let facilities = fallbackFacilities;

  try {
    const dbFacilities = await prisma.facility.findMany({
      orderBy: { id: 'asc' },
    });
    if (dbFacilities && dbFacilities.length > 0) {
      facilities = dbFacilities as any;
    }
  } catch (e) {}

  return <CampusLifeClientView facilities={facilities} />;
}
