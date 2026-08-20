import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const metadata = {
  title: 'Penerimaan Mahasiswa Baru (PMB) 2026 | Universitas Budi Luhur',
  description: 'Pendaftaran Mahasiswa Baru Universitas Budi Luhur. Jalur Reguler, Kelas Karyawan, dan Pascasarjana dengan Beasiswa s/d 100%.',
};

export default async function AdmissionsPage({
  searchParams,
}: {
  searchParams: { success?: string };
}) {
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
    }
  }

  const faculties = await prisma.faculty.findMany({
    include: { studyPrograms: true },
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#FFE600] text-[#00255A] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span> PENDAFTARAN ONLINE PMB 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Bergabung Bersama Universitas Budi Luhur
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Raih masa depan gemilang dengan pendidikan berkualitas berakreditasi <strong>UNGGUL</strong>. Dapatkan kemudahan beasiswa hingga 100% dan fasilitas modern penunjang karir global.
          </p>
        </div>
      </section>

      {/* ADMISSION TRACKS */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#004FC2] transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#004FC2] flex items-center justify-center font-black text-xl">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-bold text-[#00255A]">Program Reguler (S1/D3)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Program sarjana bagi lulusan SMA/SMK/MA dengan jadwal kuliah pagi-siang, kegiatan organisasi kemahasiswaan aktif, dan magang industri.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> Potongan Biaya Masuk s/d 50%</li>
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> Fasilitas Lab Lengkap & TV Studio</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#004FC2] transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black text-xl">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3 className="text-xl font-bold text-[#00255A]">Kelas Karyawan / Eksekutif</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dirancang khusus bagi pekerja dan profesional. Waktu kuliah fleksibel (Malam & Hari Sabtu) dengan metode Blended Learning terintegrasi.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> Biaya Kuliah Dapat Diangsur Bulanan</li>
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> Lokasi Kampus Petukangan, Roxy & Salemba</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#004FC2] transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl">
              <i className="fa-solid fa-medal"></i>
            </div>
            <h3 className="text-xl font-bold text-[#00255A]">Beasiswa Prestasi & DKKA</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Beasiswa bebas biaya kuliah hingga 100% bagi siswa berprestasi akademik, kejuaraan olahraga, tahfidz quran, atau seni tingkat provinsi/nasional.
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> Beasiswa Penuh 8 Semester</li>
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> Pendampingan Karir Khusus</li>
            </ul>
          </div>

        </div>

        {/* REGISTRATION FORM & CONSULTATION */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 bg-gradient-to-br from-[#00255A] to-[#001433] text-white p-8 lg:p-12 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-[#FFE600] text-[#00255A] font-extrabold text-xs px-3 py-1 rounded-md uppercase">
                FORMULIR ADMISI
              </span>
              <h2 className="text-3xl font-black text-white leading-tight">
                Pendaftaran & Konsultasi Jurusan Online
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Isi data diri Anda untuk memulai pendaftaran atau konsultasi gratis dengan konselor admisi Universitas Budi Luhur.
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-300 border-t border-white/10 pt-6">
              <p><i className="fa-solid fa-phone text-[#FFE600] mr-2"></i> <strong>Call Center:</strong> (021) 5853753</p>
              <p><i className="fa-brands fa-whatsapp text-emerald-400 mr-2"></i> <strong>WhatsApp Admisi:</strong> +62 811-8033-30</p>
              <p><i className="fa-solid fa-envelope text-sky-400 mr-2"></i> <strong>Email:</strong> infopmb@budiluhur.ac.id</p>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 lg:p-12">
            <form action={submitLead} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nama Lengkap *</label>
                  <input 
                    name="fullName"
                    type="text" 
                    placeholder="Contoh: Muhammad Budi" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Alamat Email *</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="nama@email.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nomor WhatsApp *</label>
                  <input 
                    name="whatsapp"
                    type="tel" 
                    placeholder="08123456789" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Asal Sekolah / Kampus</label>
                  <input 
                    name="schoolOrigin"
                    type="text" 
                    placeholder="Contoh: SMAN 70 Jakarta" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Jalur Pilihan</label>
                  <select 
                    name="entryLevel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]"
                  >
                    <option value="Reguler S1">Reguler Pagi (S1/D3)</option>
                    <option value="Kelas Karyawan">Kelas Karyawan (Malam/Sabtu)</option>
                    <option value="Pascasarjana S2">Pascasarjana (Magister S2)</option>
                    <option value="Pascasarjana S3">Pascasarjana (Doktoral S3)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Pilihan Program Studi</label>
                  <select 
                    name="programChoice"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]"
                  >
                    {faculties.map((f) => (
                      <optgroup key={f.id} label={f.name}>
                        {f.studyPrograms.map((p) => (
                          <option key={p.id} value={`${p.name} (${p.degree})`}>
                            {p.degree} - {p.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Pesan / Pertanyaan Tambahan</label>
                <textarea 
                  name="message"
                  rows={3} 
                  placeholder="Tuliskan pertanyaan Anda mengenai beasiswa atau info biaya..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#004FC2]"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#00255A] hover:bg-[#004FC2] text-white font-extrabold py-4 rounded-xl shadow-lg transition-all text-base"
              >
                Kirim Formulir Pendaftaran PMB <i className="fa-solid fa-paper-plane ml-1.5"></i>
              </button>
            </form>
          </div>

        </div>

      </section>

    </div>
  );
}
