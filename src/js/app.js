import '@scss/style';
// ----------------------------------------------------------------COMPONENTS
import Inputmask from 'inputmask/lib/inputmask.js';
import { webp } from './modules/webp.js';
import { addLoadedClass } from './modules/addLoadedClass.js';
import { headerFixed } from './modules/headerSticky.js';
import BurgerMenu from './helpers/BurgerMenu.js';
import { lazyMedia } from './libs/lazyLoad.js';
import { DynamicAdapt } from './modules/dynAdapt.js';
import CustomSelect from './modules/CustomSelect.js';
import { spollers } from './modules/spollers.js';
import Tabs from './modules/Tabs.js';
import initMap from './modules/yandexMapLoad.js';
import { range } from './libs/range.js';
import { counter } from './modules/counters.js';

import './libs/swiper.js';

addLoadedClass();
spollers();
new BurgerMenu().init();

lazyMedia;

range();

new DynamicAdapt('max').init();

webp();

headerFixed();

if (document.querySelectorAll('[data-select]')) {
	new CustomSelect('lang');
	new CustomSelect('filter');
	new CustomSelect('calc-device');
	new CustomSelect('device-model');
	new CustomSelect('sort-by');

	document.querySelectorAll('[data-select="tel"]')
		.forEach((select, index) => {
			select.setAttribute('data-select', `${select.dataset.select}_${index}`);

			new CustomSelect(select.dataset.select, {
				onLoaded: ({ sender }) => {
					const input = sender.select.nextElementSibling;
					input.setAttribute('placeholder', sender.selectedOption.dataset.placeholder);
					new Inputmask(sender.selectedOption.dataset.placeholder).mask(input);
				},

				onSelected: ({
					sender: { select },
					selectedItem,
				}) => {
					const input = select.nextElementSibling;
					input.setAttribute('placeholder', selectedItem.dataset.placeholder);
					new Inputmask(selectedItem.dataset.placeholder).mask(input);
					input.value = '';
				},
			});
		});
}

if (document.querySelector('[data-tabs="news"]')) {
	new Tabs('news');
}

const scrollToElementWithOffset = (element, offset) => {
	window.scrollTo({
		behavior: 'smooth',
		block: 'start',
		inline: 'nearest',
		top: element.offsetTop - offset,
	});
}

if (document.querySelector('[data-tabs="product-info"]')) {
	const links = document.querySelectorAll('[data-change-tab]');
	const tabsNav = document.querySelector('.tabs__nav');
	const tabsTriggers = tabsNav.querySelectorAll('.tabs__trigger');
	const categories = Array.from(tabsTriggers)
		.map((trigger) => `#${trigger.dataset.category}`);

	const categoryId = categories.indexOf(location.hash);
	const tabId = categoryId < 0
		? 0
		: categoryId;

	new Tabs('product-info', {
		defaultTab: tabId,
		onChanged: ({
			nextTab,
			nextPanel,
		}) => {
			location.hash = nextTab.dataset.category;
			scrollToElementWithOffset(tabsNav, 50);
		},

		onHashChange: ({
			data,
			eventObject: { newURL },
		}) => {
			const currentHash = newURL.split('#')[1];
			data.triggers.forEach((trigger) => {
				trigger.dataset.category === currentHash
					? trigger.click()
					: null;
			});
		},
	});

	links.forEach((link) => {
		link.onclick = (event) => {
			event.preventDefault();

			location.hash = link.getAttribute('href');
			scrollToElementWithOffset(tabsNav, 50);
		};
	});
}

if (document.querySelector('[data-tabs="order-placement"]')) {
	new Tabs('order-placement');
}

if (document.querySelector('[data-tabs="client-data"]')) {
	new Tabs('client-data');
}

const closeElements = (elements, className) => {
	elements.forEach((element) => element.classList.remove(className));
};

const toggleSubList = () => {
	document.addEventListener('click', (event) => {
		const { target } = event;
		const activeLinks = document.querySelectorAll(
			'[data-target="sublist"]._active',
		);
		const visibleSublists = document.querySelectorAll('[data-sublist]._open');

		if (target.closest('[data-target="sublist"]')) {
			event.preventDefault();
			const currentLink = target.closest('[data-target="sublist"]');

			if (!currentLink.classList.contains('_active')) {
				closeElements(activeLinks, '_active');
				closeElements(visibleSublists, '_open');

				currentLink.classList.add('_active');
				currentLink.nextElementSibling.classList.add('_open');
			} else {
				currentLink.classList.remove('_active');
				currentLink.nextElementSibling.classList.remove('_open');
			}
		}

		if (
			!target.closest('[data-sublist]._open') &&
			!target.closest('[data-target="sublist"]') &&
			activeLinks.length
		) {
			closeElements(activeLinks, '_active');
			closeElements(visibleSublists, '_open');
		}
	});
};

const toggleChildList = () => {
	document.addEventListener('click', (event) => {
		const trigger = event.target.closest('[data-child]');
		const closeButton = event.target.closest('[data-child-close]');

		if (trigger) {
			const childContainer = document.getElementById(`${trigger.dataset.child}`);

			childContainer.classList.add('_open');
			trigger.classList.add('_active');
		}

		if (closeButton) {
			document
				.getElementById(`${closeButton.dataset.childClose}`)
				.classList
				.remove('_open');
		}
	});
};

toggleSubList();
toggleChildList();

if (document.getElementById('map-yandex')) {
	initMap('map-yandex');
}

Fancybox.bind('[data-fancybox]');

if (document.querySelector('[data-counter]')) {
	counter();
}
