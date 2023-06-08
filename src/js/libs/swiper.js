/*! Slider (Swiper plugin) https://swiperjs.com/ */
// import { getIndex } from '@js/helpers/getIndex'
import Swiper, {
	Navigation, Pagination, Scrollbar, Thumbs,
} from 'swiper';

// Pagination,
// EffectFade,
// Controller,
// Scrollbar,
// Autoplay,
// Parallax,

import '@scss/components/swiper';

// import '@scss/libs/swiper'

function initSliders() {
	if (document.querySelectorAll('.products__slider')) {
		document.querySelectorAll('.products')
			.forEach((sliderContainer) => {
				const slider = sliderContainer.querySelector('.products__slider');
				const prevButton = sliderContainer.querySelector('.actions-head__prev');
				const nextButton = sliderContainer.querySelector('.actions-head__next');

				new Swiper(slider, {
					modules: [Navigation],
					observer: true,
					observeParents: true,
					spaceBetween: 20,
					speed: 800,
					preloadImages: true,
					lazy: true,
					navigation: {
						prevEl: prevButton,
						nextEl: nextButton,
					},
					breakpoints: {
						320: { slidesPerView: 1 },
						480: { slidesPerView: 2 },
						720: { slidesPerView: 2.3 },
						810: { slidesPerView: 2.6 },
						930: { slidesPerView: 3 },
						1230: { slidesPerView: 4 },
						1770: { slidesPerView: 5 },
					},
				});
			});
	}

	if (document.querySelector('.equality__slider')) {
		new Swiper('.equality__slider', {
			modules: [Scrollbar],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,
			grabCursor: true,
			preloadImages: true,
			lazy: true,
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			breakpoints: {
				320: { slidesPerView: 1 },
				480: { slidesPerView: 2 },
				720: { slidesPerView: 2.3 },
				810: { slidesPerView: 2.6 },
				930: { slidesPerView: 3 },
				1230: { slidesPerView: 4 },
				1770: { slidesPerView: 5 },
			},
		});
	}


	if (document.querySelector('.certificats__slider')) {
		new Swiper('.certificats__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,
			slidesPerView: 5,
			navigation: {
				prevEl: '.certificats .actions-head__prev',
				nextEl: '.certificats .actions-head__next',
			},
			breakpoints: {
				1200: { slidesPerView: 5 },
				650: { slidesPerView: 4 },
				480: { slidesPerView: 1.5 },
				320: { slidesPerView: 1 },
			},
		});
	}

	if (document.querySelector('.products__slider--later')) {
		new Swiper('.products__slider--later', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,
			preloadImages: true,
			lazy: true,
			navigation: {
				prevEl: '.actions-head__prev--later',
				nextEl: '.actions-head__next--later',
			},
			breakpoints: {
				320: { slidesPerView: 1 },
				480: { slidesPerView: 2 },
				720: { slidesPerView: 2.3 },
				810: { slidesPerView: 2.6 },
				930: { slidesPerView: 3 },
				1230: { slidesPerView: 4 },
				1770: { slidesPerView: 5 },
			},
		});
	}

	if (document.querySelector('.main-slider__slider')) {
		new Swiper('.main-slider__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			spaceBetween: 0,
			speed: 800,
			preloadImages: true,
			lazy: true,
			pagination: {
				el: '.main-slider__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			spaceBetween: 20,
			speed: 800,
			slidesPerView: 2,
			navigation: {
				prevEl: '.reviews .actions-head__prev',
				nextEl: '.reviews .actions-head__next',
			},
			breakpoints: {
				700: { slidesPerView: 2 },
				320: { slidesPerView: 1 },
			},
		});
	}

	if (document.querySelector('.catalog-item-slider')) {
		const thumbsSwiper = new Swiper('.product-thumbs-slider', {
			breakpoints: {
				320: { direction: 'horizontal' },
				480: { direction: 'vertical' }
			},
			spaceBetween: 10,
			slidesPerView: 'auto',
			lazy: true,
			observer: true,
			observeParents: true,
			preloadImages: true,
			watchSlidesProgress: true,
		});

		new Swiper('.product-main-slider', {
			modules: [Thumbs],
			spaceBetween: 10,
			grabCursor: true,
			observer: true,
			observeParents: true,
			lazy: true,
			preloadImages: true,
			thumbs: {
				swiper: thumbsSwiper,
			},
		});
	}
}

window.addEventListener('DOMContentLoaded', () => {
	initSliders();
});
