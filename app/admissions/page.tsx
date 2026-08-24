import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import AdmissionsClientView from '@/components/AdmissionsClientView';
import { fallbackFaculties } from '@/lib/dataFallback';

export const metadata = {
  title: 'Penerimaan Mahasiswa Baru (PMB) 2026 | Universitas Budi Luhur',
  description: 'Pendaftaran Mahasiswa Baru Universitas Budi Luhur. Jalur Reguler, Kelas Karyawan, dan Pascasarjana dengan Beasiswa s/d 100%.',
};

export const dynamic = 'force-dynamic';

export default async function AdmissionsPage() {
  async function submitLead(formData: FormData) {
    'use server';
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const schoolOrigin = formData.get('schoolOrigin') as string;
    const programChoice = formData.get('programChoice') as string;
    const entryLevel = formData.get('entryLevel') as string;
    const message = formData.get('message') as string;

    if (fullName && email && whatsapp) {
      try {
        await prisma.admissionLead.create({
          data: {
            fullName,
            email,
            whatsapp,
            schoolOrigin: schoolOrigin || 'SMA/SMK',
            programChoice: programChoice || 'Teknik Informatika S1',
            entryLevel: entryLevel || 'Reguler S1',
            message: message || '',
          },
        });
        revalidatePath('/admissions');
      } catch (e) {}
    }
  }

  let faculties = fallbackFaculties;

  try {
    const dbFaculties = await prisma.faculty.findMany({
      include: { studyPrograms: true },
    });
    if (dbFaculties && dbFaculties.length > 0) {
      faculties = dbFaculties as any;
    }
  } catch (e) {}

  return (
    <AdmissionsClientView
      faculties={faculties}
      submitLeadAction={submitLead}
    />
  );
}
