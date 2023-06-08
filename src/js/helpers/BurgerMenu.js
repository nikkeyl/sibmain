import Popup from './Popup.js';

class BurgerMenu extends Popup {
	constructor() {
		super();

		this.burgerButton = document.querySelector('.burger-menu');
	}

	/**
	 * Initialize the menu functionality.
	 */
	init() {
		if (this.burgerButton) {
			document.addEventListener('click', ({ target }) => {
				if (target.closest('.burger-menu')) {
					this.html.classList.toggle('menu-open');
					this.toggleBodyLock(this.html.classList.contains('menu-open'));
				} else if (this.hasBodyLock && !target.closest('.menu-actions')) {
					this.toggleBodyLock(false);
					this.html.classList.remove('menu-open');
				}
			});
		}
	}

	/**
	 * Open the menu.
	 */
	menuOpen() {
		this.toggleBodyLock(true);
		this.html.classList.add('menu-open');
	}

	/**
	 * Close the menu.
	 */
	menuClose() {
		this.toggleBodyLock(false);
		this.html.classList.remove('menu-open');
	}
}

export default BurgerMenu;
