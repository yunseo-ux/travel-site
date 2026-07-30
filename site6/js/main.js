document.addEventListener('click', (event) => {
    const placeholderLink = event.target.closest('a[href="#"]');

    if (!placeholderLink) return;

    event.preventDefault();
});

if (typeof Swiper !== 'undefined') {
    new Swiper('.hero__swiper', {
        loop: true,
        speed: 700,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.hero__arrow--prev',
            nextEl: '.hero__arrow--next',
        },
        pagination: {
            el: '.hero__indicator',
            clickable: true,
        },
    });
}

const revealTexts = document.querySelectorAll(
    '.main h2, .main h3, .main h4, .main p, .main strong',
);

if ('IntersectionObserver' in window) {
    revealTexts.forEach((text) => text.classList.add('scroll-reveal'));

    const textRevealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -8% 0px',
        },
    );

    revealTexts.forEach((text) => textRevealObserver.observe(text));
}
