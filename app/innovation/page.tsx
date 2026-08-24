import prisma from '@/lib/prisma';
import InnovationClientView from '@/components/InnovationClientView';
import { fallbackInnovations } from '@/lib/dataFallback';

export const metadata = {
  title: 'Inovasi & Riset Kendaraan Listrik | Universitas Budi Luhur',
  description: 'Showroom Inovasi Mobil Listrik BLITS, Motor Listrik Sport BLSEV-01, WVO, dan Bank Sampah Universitas Budi Luhur.',
};

export const dynamic = 'force-dynamic';

export default async function InnovationPage() {
  let innovations = fallbackInnovations;

  try {
    const dbInnovations = await prisma.innovation.findMany({
      orderBy: { id: 'asc' },
    });
    if (dbInnovations && dbInnovations.length > 0) {
      innovations = dbInnovations as any;
    }
  } catch (e) {}

  return <InnovationClientView innovations={innovations} />;
}
