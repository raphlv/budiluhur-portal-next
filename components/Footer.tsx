import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#001433] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* TOP ROW: LOGO & ACCREDITATION INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#FFE600] text-[#00255A] flex items-center justify-center font-black text-2xl shadow-lg">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight block">
                  UNIVERSITAS <span className="text-[#FFE600]">BUDI LUHUR</span>
                </span>
                <span className="text-xs text-[#10B981] font-bold">
                  Akreditasi Unggul BAN-PT (2024)
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              Pionir pendidikan tinggi berbasis teknologi, bisnis berkelanjutan, dan media kreatif sejak 1979 berlandaskan nilai luhur <em>Cerdas Berbudi Luhur</em> untuk memberikan dampak nyata bagi bangsa dan dunia.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://youtube.com/@budiluhurtv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/kampusbudiluhur" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/kampusbudiluhur" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-colors">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.tiktok.com/@budiluhurtv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-black text-white flex items-center justify-center transition-colors">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://wa.me/62811803330" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-green-600 text-white flex items-center justify-center transition-colors">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* FACULTIES & ACADEMIC */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wider uppercase border-b border-slate-700 pb-2">
              Fakultas & Akademik
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/academic/fti" className="hover:text-[#FFE600] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#FFE600] text-xs"></i> Fak. Teknologi Informasi (FTI)
                </Link>
              </li>
              <li>
                <Link href="/academic/feb" className="hover:text-[#FFE600] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#FFE600] text-xs"></i> Fak. Ekonomi & Bisnis (FEB)
                </Link>
              </li>
              <li>
                <Link href="/academic/fkdk" className="hover:text-[#FFE600] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#FFE600] text-xs"></i> Fak. Komunikasi & Desain Kreatif (FKDK)
                </Link>
              </li>
              <li>
                <Link href="/academic/fissig" className="hover:text-[#FFE600] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#FFE600] text-xs"></i> Fak. Ilmu Sosial & Studi Global (FISSIG)
                </Link>
              </li>
              <li>
                <Link href="/academic/ftcb" className="hover:text-[#FFE600] transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-[#FFE600] text-xs"></i> Fak. Teknik & Creative Built (FTCB)
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#FFE600] transition-colors flex items-center gap-2 font-bold text-amber-400">
                  <i className="fa-solid fa-star text-xs"></i> Program Pascasarjana (S2 & S3)
                </Link>
              </li>
            </ul>
          </div>

          {/* STUDENT & CAMPUS SERVICES */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wider uppercase border-b border-slate-700 pb-2">
              Layanan Kampus
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://student.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web Student</a></li>
              <li><a href="https://kprs.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">KPRS Online</a></li>
              <li><a href="https://elearning.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">E-Learning</a></li>
              <li><a href="https://webdosen.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Web Dosen</a></li>
              <li><a href="https://pustaka.budiluhur.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Perpustakaan Digital</a></li>
              <li><a href="https://budiluhur.tv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Budi Luhur TV (BLTV)</a></li>
              <li><Link href="/admin" className="hover:text-white transition-colors text-xs text-slate-500">Admin CMS</Link></li>
            </ul>
          </div>

          {/* LOCATION CARDS */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-base tracking-wider uppercase border-b border-slate-700 pb-2">
              Kampus Utama
            </h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs space-y-2">
              <p className="font-bold text-white flex items-center gap-1.5">
                <i className="fa-solid fa-map-pin text-red-400"></i> Kampus Budi Luhur Pusat
              </p>
              <p className="text-slate-400 leading-relaxed">
                Jl. Ciledug Raya, Petukangan Utara, Pesanggrahan, Jakarta Selatan 12260
              </p>
              <a 
                href="https://maps.app.goo.gl/yaFw9h4AGJN2ypiz5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-[#FFE600] font-bold hover:underline pt-1"
              >
                <i className="fa-solid fa-location-arrow"></i> Petunjuk Google Maps
              </a>
            </div>
            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <p><strong>Hotline PMB:</strong> +62 811-8033-30</p>
              <p><strong>Email:</strong> info@budiluhur.ac.id</p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Universitas Budi Luhur. All Rights Reserved. Akreditasi Unggul BAN-PT.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">Tentang Kami</Link>
            <Link href="/admissions" className="hover:text-white">Penerimaan Mahasiswa Baru</Link>
            <Link href="/contact" className="hover:text-white">Hubungi Kami</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
