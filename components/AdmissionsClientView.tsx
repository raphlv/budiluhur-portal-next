'use client';

import { useLanguage } from '@/context/LanguageContext';

interface FacultyWithPrograms {
  id: number;
  name: string;
  studyPrograms: Array<{
    id: number;
    name: string;
    degree: string;
  }>;
}

interface AdmissionsClientViewProps {
  faculties: FacultyWithPrograms[];
  submitLeadAction: (formData: FormData) => Promise<void>;
}

export default function AdmissionsClientView({
  faculties,
  submitLeadAction,
}: AdmissionsClientViewProps) {
  const { lang, t, isEn } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO BANNER */}
      <section className="bg-gradient-to-r from-[#081626] via-[#173860] to-[#1ca3dc] text-white py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#fced17] text-[#173860] px-4 py-1.5 rounded-full text-xs font-black uppercase shadow">
            <span className="w-2 h-2 bg-[#de1f26] rounded-full animate-ping"></span>
            <span>{t('admissionsPage.heroBadge')}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {t('admissionsPage.heroTitle')}
          </h1>
          <p className="text-slate-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t('admissionsPage.heroDesc')}
          </p>
        </div>
      </section>

      {/* ADMISSION TRACKS */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#1ca3dc] transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#1ca3dc] flex items-center justify-center font-black text-xl">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className="text-xl font-bold text-[#173860]">
              {t('admissionsPage.trackRegularTitle')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('admissionsPage.trackRegularDesc')}
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> {isEn ? 'Up to 50% tuition deduction' : 'Potongan Biaya Masuk s/d 50%'}</li>
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> {isEn ? 'Modern Lab & TV Studio facilities' : 'Fasilitas Lab Lengkap & TV Studio'}</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#1ca3dc] transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black text-xl">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3 className="text-xl font-bold text-[#173860]">
              {t('admissionsPage.trackExecutiveTitle')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('admissionsPage.trackExecutiveDesc')}
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> {isEn ? 'Monthly installment options' : 'Biaya Kuliah Dapat Diangsur Bulanan'}</li>
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> {isEn ? 'Campuses in Petukangan, Roxy & Salemba' : 'Lokasi Kampus Petukangan, Roxy & Salemba'}</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:border-[#1ca3dc] transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl">
              <i className="fa-solid fa-medal"></i>
            </div>
            <h3 className="text-xl font-bold text-[#173860]">
              {t('admissionsPage.trackScholarshipTitle')}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t('admissionsPage.trackScholarshipDesc')}
            </p>
            <ul className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> {isEn ? 'Full 8-Semester Scholarship' : 'Beasiswa Penuh 8 Semester'}</li>
              <li><i className="fa-solid fa-check text-emerald-500 mr-1.5"></i> {isEn ? 'Dedicated career mentoring' : 'Pendampingan Karir Khusus'}</li>
            </ul>
          </div>

        </div>

        {/* REGISTRATION FORM & CONSULTATION */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-5 bg-gradient-to-br from-[#173860] to-[#0e243e] text-white p-8 lg:p-12 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-[#fced17] text-[#173860] font-black text-xs px-3 py-1 rounded-md uppercase">
                {isEn ? 'ADMISSIONS FORM' : 'FORMULIR ADMISI'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {t('admissionsPage.formTitle')}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t('admissionsPage.formDesc')}
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-300 border-t border-white/10 pt-6">
              <p><i className="fa-solid fa-phone text-[#fced17] mr-2"></i> <strong>Call Center:</strong> (021) 5853753</p>
              <p><i className="fa-brands fa-whatsapp text-emerald-400 mr-2"></i> <strong>WhatsApp:</strong> +62 811-8033-30</p>
              <p><i className="fa-solid fa-envelope text-[#1ca3dc] mr-2"></i> <strong>Email:</strong> infopmb@budiluhur.ac.id</p>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12">
            <form action={submitLeadAction} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {isEn ? 'Full Name *' : 'Nama Lengkap *'}
                  </label>
                  <input 
                    name="fullName"
                    type="text" 
                    placeholder={isEn ? 'e.g. John Doe' : 'Contoh: Muhammad Budi'} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {isEn ? 'Email Address *' : 'Alamat Email *'}
                  </label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="nama@email.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {isEn ? 'WhatsApp Number *' : 'Nomor WhatsApp *'}
                  </label>
                  <input 
                    name="whatsapp"
                    type="tel" 
                    placeholder="08123456789" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {isEn ? 'High School / Previous College' : 'Asal Sekolah / Kampus'}
                  </label>
                  <input 
                    name="schoolOrigin"
                    type="text" 
                    placeholder={isEn ? 'e.g. SMA 70 Jakarta' : 'Contoh: SMAN 70 Jakarta'} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {isEn ? 'Study Track' : 'Jalur Pilihan'}
                  </label>
                  <select 
                    name="entryLevel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]"
                  >
                    <option value="Reguler S1">{isEn ? 'Regular Morning (S1/D3)' : 'Reguler Pagi (S1/D3)'}</option>
                    <option value="Kelas Karyawan">{isEn ? 'Executive/Evening (S1/D3)' : 'Kelas Karyawan (Malam/Sabtu)'}</option>
                    <option value="Pascasarjana S2">{isEn ? 'Master Degree (S2)' : 'Pascasarjana (Magister S2)'}</option>
                    <option value="Pascasarjana S3">{isEn ? 'Doctoral Degree (S3)' : 'Pascasarjana (Doktoral S3)'}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    {isEn ? 'Program Choice' : 'Pilihan Program Studi'}
                  </label>
                  <select 
                    name="programChoice"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]"
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
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  {isEn ? 'Inquiry / Note' : 'Pesan / Pertanyaan Tambahan'}
                </label>
                <textarea 
                  name="message"
                  rows={3} 
                  placeholder={isEn ? 'Write any question about scholarships or tuition fee...' : 'Tuliskan pertanyaan Anda mengenai beasiswa atau info biaya...'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1ca3dc]"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#173860] hover:bg-[#1ca3dc] text-white font-black py-4 rounded-xl shadow-lg transition-all text-base border border-[#173860]"
              >
                {isEn ? 'Submit PMB Application' : 'Kirim Formulir Pendaftaran PMB'} <i className="fa-solid fa-paper-plane ml-1.5"></i>
              </button>
            </form>
          </div>

        </div>

      </section>

    </div>
  );
}
