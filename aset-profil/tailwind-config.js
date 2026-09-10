// Konfigurasi warna dan tipografi Tailwind bersama untuk seluruh halaman situs.
// Warna dipetakan ke CSS custom property (format channel RGB) agar
// modifier opacity (mis. bg-brand-div/50) tetap berfungsi.
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-bg': 'rgb(var(--c-bg) / <alpha-value>)',
                'brand-surface': 'rgb(var(--c-surface) / <alpha-value>)',
                'brand-sub': 'rgb(var(--c-sub) / <alpha-value>)',
                'brand-div': 'rgb(var(--c-div) / <alpha-value>)',
                'brand-header': 'rgb(var(--c-header) / <alpha-value>)',
                'brand-text': 'rgb(var(--c-text) / <alpha-value>)',
                'brand-dark': 'rgb(var(--c-dark) / <alpha-value>)',
                'brand-accent': 'rgb(var(--c-accent) / <alpha-value>)',
                'kat-liputan': 'rgb(var(--c-accent) / <alpha-value>)',
            },
            fontFamily: {
                'sans': ['Plus Jakarta Sans', 'sans-serif'],
                'display': ['Plus Jakarta Sans', 'sans-serif'],
                'brand': ['Plus Jakarta Sans', 'sans-serif'],
            }
        }
    }
}
