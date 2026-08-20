import Link from 'next/link';

export const metadata = {
  title: 'Tentang Kami | Universitas Budi Luhur',
  description: 'Sejarah, Visi Misi, Sambutan Rektor, dan 9 Nilai Kebudiluhuran Universitas Budi Luhur sejak 1979.',
};

export default function AboutPage() {
  const values = [
    { num: '01', name: 'Bersyukur', desc: 'Senantiasa mensyukuri segala anugerah Tuhan Yang Maha Esa dan berikhtiar secara optimal.' },
    { num: '02', name: 'Jujur & Bertanggung Jawab', desc: 'Menjunjung tinggi kejujuran moral, integritas akademik, dan komitmen profesional.' },
    { num: '03', name: 'Sopan & Santun', desc: 'Menghargai sesama manusia dengan tutur kata yang santun dan adab pergaulan mulia.' },
    { num: '04', name: 'Rendah Hati', desc: 'Tidak sombong atas prestasi dan senantiasa membuka diri terhadap ilmu pengetahuan baru.' },
    { num: '05', name: 'Berjiwa Sosial', desc: 'Peduli terhadap kesejahteraan sesama dan tanggap terhadap problem kemasyarakatan.' },
    { num: '06', name: 'Suka Menolong', desc: 'Memberikan bantuan tanpa pamrih dan bahu-membahu dalam kebaikan.' },
    { num: '07', name: 'Cinta Lingkungan', desc: 'Menjaga kelestarian bumi melalui pelopor green campus dan bank sampah terpadu.' },
    { num: '08', name: 'Cinta Tanah Air', desc: 'Setia pada Negara Kesatuan Republik Indonesia dan berkontribusi untuk kemajuan bangsa.' },
    { num: '09', name: 'Pantang Menyerah', desc: 'Tangguh menghadapi rintangan dan senantiasa berinovasi menciptakan solusi unggul.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#001433] via-[#00255A] to-[#004FC2] text-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase text-[#FFE600] border border-white/20">
            <i className="fa-solid fa-landmark"></i> ABOUT UNIVERSITAS BUDI LUHUR
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Sejarah, Visi, dan Karakter Luhur
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Berdiri sejak 1979, Universitas Budi Luhur berdedikasi melahirkan insan cerdas berkarakter mulia yang memberi dampak nyata bagi kemaslahatan masyarakat, industri, dan bangsa.
          </p>
        </div>
      </section>

      {/* RECTOR'S WELCOME */}
      <section className="py-16 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop" 
              alt="Rektor Universitas Budi Luhur" 
              className="w-72 h-80 object-cover rounded-3xl mx-auto border-4 border-[#FFE600] shadow-xl" 
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold text-[#00255A]">Prof. Dr. Ir. Wendi Usino, M.Sc., M.M.</h3>
              <p className="text-xs text-slate-500 font-semibold">Rektor Universitas Budi Luhur</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#004FC2] font-black text-xs uppercase tracking-widest bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
              SAMBUTAN REKTOR
            </span>
            <h2 className="text-3xl font-black text-[#00255A] leading-snug">
              Mendidik Generasi Cerdas dan Berbudi Luhur untuk Masa Depan Berkelanjutan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              "Selamat datang di Universitas Budi Luhur. Selama lebih dari empat dekade, kami memegang teguh komitmen bahwa kecerdasan intelektual dan keahlian teknologi harus senantiasa diiringi dengan keluhuran budi pekerti."
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              "Dengan capaian Akreditasi Unggul dari BAN-PT dan transformasi program Diktisaintek Berdampak, kami terus berinovasi di bidang Artificial Intelligence, riset kendaraan listrik nasional (BLITS & BLSEV-01), serta pelestarian lingkungan kampus hijau."
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-16 px-6 lg:px-16 bg-[#001433] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 space-y-6">
            <span className="bg-[#FFE600] text-[#00255A] font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase">
              VISI UTAMA
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold leading-snug text-white">
              Menjadi Universitas Unggulan yang Berwawasan Global dan Berbasis Nilai-Nilai Kebudiluhuran
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mewujudkan perguruan tinggi yang berstandar internasional di bidang ilmu pengetahuan, teknologi, dan seni yang menghasilkan lulusan berbudi pekerti luhur dan berkontribusi aktif pada pembangunan berkelanjutan.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 space-y-6">
            <span className="bg-[#10B981] text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase">
              MISI STRATEGIS
            </span>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#FFE600] mt-1 shrink-0"></i>
                <span>Menyelenggarakan pendidikan tinggi berkualitas dengan kurikulum adaptif dan teknologi mutakhir.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#FFE600] mt-1 shrink-0"></i>
                <span>Melaksanakan riset dan inovasi aplikatif yang bermanfaat bagi masyarakat dan industri (Diktisaintek Berdampak).</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#FFE600] mt-1 shrink-0"></i>
                <span>Menanamkan dan mengamalkan 9 Nilai Kebudiluhuran dalam seluruh aktivitas tridharma perguruan tinggi.</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-[#FFE600] mt-1 shrink-0"></i>
                <span>Memperluas jejaring kerjasama nasional dan internasional untuk penguatan reputasi global.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* THE 9 VALUES OF KEBUDILUHURAN */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#004FC2] font-black text-xs tracking-widest uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">
            FILOSOFI DASAR
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#00255A] tracking-tight">
            9 Nilai Kebudiluhuran
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Fondasi moral dan etika yang ditanamkan kepada seluruh sivitas akademika Universitas Budi Luhur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div 
              key={v.num} 
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#004FC2] hover:shadow-xl transition-all space-y-4 relative overflow-hidden group"
            >
              <span className="text-5xl font-black text-slate-100 group-hover:text-sky-50 transition-colors absolute -right-2 -bottom-2 select-none">
                {v.num}
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#00255A] text-[#FFE600] font-black flex items-center justify-center text-sm shadow">
                {v.num}
              </div>
              <h3 className="text-xl font-bold text-[#00255A] group-hover:text-[#004FC2] transition-colors">
                {v.name}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed relative z-10">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
