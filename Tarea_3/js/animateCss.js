document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll('.animate-on-scroll');

    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            const tokens = (el.dataset.animate || '')
                .split(/\s+/)
                .filter(Boolean);

            el.classList.add('animate__animated', ...tokens);

            obs.unobserve(el);
        });
    }, {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px'
    });

    els.forEach(el => io.observe(el));
});