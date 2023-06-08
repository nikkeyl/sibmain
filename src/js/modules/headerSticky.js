import { firstScreen, header } from '@js/helpers/nodeList';
import { html } from '@js/helpers/nodeList';

const headerFixed = () => {
	const headerStickyObserver = new IntersectionObserver(([entry]) => {
		header.classList.toggle('sticky', !entry.isIntersecting);
		html.classList.toggle('header-sticky', !entry.isIntersecting);
	});

	if (firstScreen) {
		headerStickyObserver.observe(firstScreen);
	}
}

export { headerFixed }
