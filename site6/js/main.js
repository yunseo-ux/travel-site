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
