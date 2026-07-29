const topButton = document.querySelector('.footer__top');
const hero = document.querySelector('#hero');
const footer = document.querySelector('#footer');
let updatePending = false;

const updateTopButton = () => {
    const heroRect = hero.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const buttonRect = topButton.getBoundingClientRect();
    const heroIsVisible = heroRect.top < window.innerHeight && heroRect.bottom > 0;
    const buttonIsOverFooter =
        buttonRect.bottom > footerRect.top && buttonRect.top < footerRect.bottom;
    topButton.classList.toggle('is-hidden', heroIsVisible);
    topButton.classList.toggle('is-footer', buttonIsOverFooter);
    updatePending = false;
};

const requestTopButtonUpdate = () => {
    if (updatePending) return;
    updatePending = true;
    window.requestAnimationFrame(updateTopButton);
};

window.addEventListener('scroll', requestTopButtonUpdate, { passive: true });
window.addEventListener('resize', requestTopButtonUpdate);
updateTopButton();

const heroProgress = document.querySelector('.hero__progress');
const heroPlayButton = document.querySelector('.hero__play');

const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    speed: 700,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.hero__dots',
        clickable: true,
    },
    on: {
        autoplayTimeLeft(swiper, timeLeft, progress) {
            heroProgress.style.transform = `rotate(${progress * 360 - 90}deg)`;
        },
    },
});

heroPlayButton.addEventListener('click', () => {
    const autoplayIsRunning = heroSwiper.autoplay.running;

    if (autoplayIsRunning) {
        heroSwiper.autoplay.stop();
    } else {
        heroSwiper.autoplay.start();
    }

    heroPlayButton.classList.toggle('is-paused', autoplayIsRunning);
    heroPlayButton.setAttribute(
        'aria-label',
        autoplayIsRunning ? '슬라이드 자동 재생 시작' : '슬라이드 자동 재생 일시정지',
    );
});

const liveWrapper = document.querySelector('.live-swiper > .swiper-wrapper');
const liveCards = [...liveWrapper.children];

liveCards.forEach((card) => {
    liveWrapper.append(card.cloneNode(true));
});

const liveSwiper = new Swiper('.live-swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 23,
    loop: true,
    speed: 500,
    navigation: {
        prevEl: '.con2__arrow--prev',
        nextEl: '.con2__arrow--next',
    },
    breakpoints: {
        0: {
            spaceBetween: 16,
        },
        768: {
            spaceBetween: 23,
        },
    },
});

const promotionWrapper = document.querySelector('.promotion-swiper > .swiper-wrapper');
const initialPromotionCards = [...promotionWrapper.children];

for (let index = initialPromotionCards.length; index < 7; index += 1) {
    promotionWrapper.append(initialPromotionCards[index % initialPromotionCards.length].cloneNode(true));
}

const promotionCards = [...promotionWrapper.children];

promotionCards.forEach((card) => {
    promotionWrapper.append(card.cloneNode(true));
});

const promotionSwiper = new Swiper('.promotion-swiper', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: true,
    speed: 500,
    navigation: {
        prevEl: '.con1__arrow--prev',
        nextEl: '.con1__arrow--next',
    },
    breakpoints: {
        0: {
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 40,
        },
    },
});

const rankingWrapper = document.querySelector('.ranking-swiper > .swiper-wrapper');
const rankingGroup = rankingWrapper.querySelector('.ranking-group');

for (let index = 1; index < 3; index += 1) {
    const clonedGroup = rankingGroup.cloneNode(true);
    clonedGroup.setAttribute('aria-label', `${index + 1}번째 랭킹 그룹`);
    rankingWrapper.append(clonedGroup);
}

rankingGroup.setAttribute('aria-label', '1번째 랭킹 그룹');

const rankingSwiper = new Swiper('.ranking-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 500,
    navigation: {
        prevEl: '.con3__arrow--prev',
        nextEl: '.con3__arrow--next',
    },
});
