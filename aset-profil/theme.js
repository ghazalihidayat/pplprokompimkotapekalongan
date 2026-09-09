// Toggle tema gelap/terang, dipakai bersama di seluruh halaman situs.
(function () {
    const root = document.documentElement;
    const btns = document.querySelectorAll('[data-theme-toggle]');
    if (!btns.length) return;

    const sync = () => btns.forEach(b => {
        b.querySelector('i').className = root.classList.contains('dark') ? 'fa-solid fa-sun text-sm' : 'fa-solid fa-moon text-sm';
    });
    sync();

    btns.forEach(b => b.addEventListener('click', () => {
        root.classList.toggle('dark');
        localStorage.theme = root.classList.contains('dark') ? 'dark' : 'light';
        sync();
    }));
})();
