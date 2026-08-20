import prisma from '@/lib/prisma';
import Link from 'next/link';

export const metadata = {
  title: 'Admin Dashboard | Universitas Budi Luhur Portal',
};

export const revalidate = 0;

export default async function AdminDashboardPage() {
  const totalFaculties = await prisma.faculty.count();
  const totalProdi = await prisma.studyProgram.count();
  const totalNews = await prisma.newsArticle.count();
  const totalEvents = await prisma.campusEvent.count();
  const totalLeads = await prisma.admissionLead.count();

  const recentLeads = await prisma.admissionLead.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">INTERNAL CMS PORTAL</span>
            <h1 className="text-3xl font-black text-[#00255A]">Dashboard Universitas Budi Luhur</h1>
          </div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-[#00255A] hover:bg-[#004FC2] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow"
          >
            <i className="fa-solid fa-house"></i> Lihat Website Publik
          </Link>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-400">Total Fakultas</span>
            <span className="block text-3xl font-black text-[#00255A] mt-1">{totalFaculties}</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-400">Program Studi</span>
            <span className="block text-3xl font-black text-[#004FC2] mt-1">{totalProdi}</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-400">Berita & Rilis</span>
            <span className="block text-3xl font-black text-emerald-600 mt-1">{totalNews}</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-400">Agenda Event</span>
            <span className="block text-3xl font-black text-amber-600 mt-1">{totalEvents}</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-slate-400">Pendaftar PMB</span>
            <span className="block text-3xl font-black text-red-600 mt-1">{totalLeads}</span>
          </div>
        </div>

        {/* RECENT PMB LEADS TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-6 lg:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-[#00255A]">
              Data Calon Mahasiswa Baru (PMB Leads)
            </h2>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
              Live Database MySQL
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase">
                  <th className="py-3 px-4">Nama Lengkap</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">WhatsApp</th>
                  <th className="py-3 px-4">Asal Sekolah</th>
                  <th className="py-3 px-4">Pilihan Prodi</th>
                  <th className="py-3 px-4">Jalur</th>
                  <th className="py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">{lead.fullName}</td>
                    <td className="py-3 px-4 text-slate-600">{lead.email}</td>
                    <td className="py-3 px-4 text-slate-600 font-mono">{lead.whatsapp}</td>
                    <td className="py-3 px-4 text-slate-600">{lead.schoolOrigin}</td>
                    <td className="py-3 px-4 font-semibold text-[#004FC2]">{lead.programChoice}</td>
                    <td className="py-3 px-4">
                      <span className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded font-bold">
                        {lead.entryLevel}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <a 
                        href={`https://wa.me/${lead.whatsapp.replace(/[^0-9]/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-3 py-1 rounded-lg inline-flex items-center gap-1 shadow"
                      >
                        <i className="fa-brands fa-whatsapp"></i> Chat
                      </a>
                    </td>
                  </tr>
                ))}
                {recentLeads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-slate-400 italic">
                      Belum ada data pendaftar baru. Formulir pendaftaran dapat diisi melalui halaman /admissions.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
