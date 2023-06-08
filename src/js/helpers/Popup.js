class Popup {
	constructor() {
		this.html = document.documentElement;
		this.body = document.body;
		this.contentWrapper = document.querySelector('.content');
		this.wrapper = document.querySelector('.wrapper');
		this.lockPaddingElements = document.querySelectorAll('[data-lp]');
	}

	/**
	 * Toggle body lock to prevent scrolling.
	 * @param {boolean} isLock - Indicates whether to lock the body or unlock it.
	 */
	toggleBodyLock(isLock) {
		const lockPaddingValue = window.innerWidth - this.contentWrapper.offsetWidth;

		if (this.lockPaddingElements) {
			this.lockPaddingElements.forEach((element) => {
				element.style.paddingRight = isLock
					? `${lockPaddingValue}px`
					: 'unset';
			});
		}

		this.contentWrapper.style.paddingRight = isLock ? `${lockPaddingValue}px` : '0px';
		this.html.classList.toggle('lock', isLock);
	}

	get hasBodyLock() {
		return this.html.classList.contains('lock');
	}
}

export default Popup;
