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

const con4ReviewList = document.querySelector('.con4__review-list');

if (con4ReviewList) {
    let isVisible = false;
    let direction = 1;
    let previousTime = 0;
    let pauseUntil = 0;
    let isManualScrolling = false;
    let counterOffset = 0;
    let autoStartScroll = 0;
    let autoStartOffset = 0;

    const pauseAutoScroll = () => {
        pauseUntil = performance.now() + 3000;
        isManualScrolling = true;
    };

    const updateOppositeColumn = () => {
        con4ReviewList.style.setProperty('--con4-counter-scroll', `${counterOffset}px`);
    };

    ['wheel', 'touchstart', 'pointerdown'].forEach((eventName) => {
        con4ReviewList.addEventListener(eventName, pauseAutoScroll, { passive: true });
    });

    updateOppositeColumn();

    const observer = new IntersectionObserver(
        ([entry]) => {
            isVisible = entry.isIntersecting;
        },
        { threshold: 0.1 },
    );

    observer.observe(con4ReviewList);

    const autoScroll = (currentTime) => {
        const elapsed = Math.min(currentTime - previousTime, 32);
        const maxScroll = con4ReviewList.scrollHeight - con4ReviewList.clientHeight;

        if (isVisible && currentTime >= pauseUntil && maxScroll > 0) {
            if (isManualScrolling) {
                autoStartScroll = con4ReviewList.scrollTop;
                autoStartOffset = counterOffset;
                isManualScrolling = false;
            }

            con4ReviewList.scrollTop += direction * elapsed * 0.05;

            if (con4ReviewList.scrollTop >= maxScroll) {
                con4ReviewList.scrollTop = maxScroll;
                direction = -1;
                pauseUntil = currentTime + 1000;
            } else if (con4ReviewList.scrollTop <= 0) {
                con4ReviewList.scrollTop = 0;
                direction = 1;
                pauseUntil = currentTime + 1000;
            }

            counterOffset = autoStartOffset + (con4ReviewList.scrollTop - autoStartScroll) * 2;
            updateOppositeColumn();
        }

        previousTime = currentTime;
        requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);
}
