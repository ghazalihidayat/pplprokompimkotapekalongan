// Konfigurasi warna dan tipografi Tailwind bersama untuk seluruh halaman situs.
// Sebelumnya blok ini diduplikasi secara identik di setiap file (index, galeri,
// dan 20+ halaman berita). Disatukan di sini agar situs mudah dirawat: ubah
// satu warna di sini, seluruh halaman ikut konsisten.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-bg': '#F0F4F8',
                'brand-sub': '#475569',
                'brand-div': '#93C5FD',
                'brand-header': '#1E3A8A',
                'brand-text': '#1E293B',
                'brand-dark': '#1E3A8A',
                'brand-accent': '#3B82F6',
                'kat-liputan': '#3B82F6',
                'kat-jurnal': '#0D9488',
            },
            fontFamily: {
                'sans': ['Plus Jakarta Sans', 'sans-serif'],
                'display': ['Plus Jakarta Sans', 'sans-serif'],
                'brand': ['Plus Jakarta Sans', 'sans-serif'],
            }
        }
    }
}
