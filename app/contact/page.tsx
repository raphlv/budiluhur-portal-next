import prisma from '@/lib/prisma';
import ContactClientView from '@/components/ContactClientView';
import { fallbackBranches } from '@/lib/dataFallback';

export const metadata = {
  title: 'Kontak & Lokasi Kampus | Universitas Budi Luhur',
  description: 'Alamat dan lokasi kampus Universitas Budi Luhur Jakarta: Kampus Pusat Petukangan, Kampus Roxy, dan Kampus Salemba.',
};

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  let branches = fallbackBranches;

  try {
    const dbBranches = await prisma.campusBranch.findMany({
      orderBy: { isMainCampus: 'desc' },
    });
    if (dbBranches && dbBranches.length > 0) {
      branches = dbBranches as any;
    }
  } catch (e) {}

  return <ContactClientView branches={branches} />;
}
