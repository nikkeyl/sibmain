class CustomSelect {
	selectedOption = null;

	constructor(selector, options = {}) {
		const defaultOptions = {
			selectName: selector,
			defaultSelected: 0,
			activeClass: 'active',
			selectedClass: 'selected',
			autoCollapse: true,
			onLoaded: () => {
			},
			onSelected: () => {
			},
			onOpen: () => {
			},
			onClose: () => {
			},
		};

		this.options = Object.assign(defaultOptions, options);
		this.selector = selector;
		this.select = document.querySelector(`[data-select="${selector}"]`);

		if (this.select) {
			this.input = this.select.querySelector('input[type="hidden"]');
			this.trigger = this.select.querySelector('[data-type-s="trigger"]');
			this.triggerContent = this.trigger.querySelector('.trigger-content');
			this.selectList = this.select.querySelector('[data-type-s="list"]');
			this.items = this.selectList.querySelectorAll('[data-value]');

			this.#init();
			this.#events();
		}
	}

	get isOpen() {
		return this.select.classList.contains(this.options.activeClass);
	}

	#init() {
		const selectedItem = this.items[this.options.defaultSelected];
		selectedItem.classList.add(this.options.selectedClass);
		this.selectedOption = selectedItem;

		this.trigger.setAttribute('aria-label', 'true');
		this.trigger.setAttribute('aria-expanded', 'false');
		this.triggerContent.innerHTML = selectedItem.innerHTML;
		this.input.value = selectedItem.dataset.value;

		document.addEventListener('DOMContentLoaded', () => {
			this.options.onLoaded({
				sender: this,
				selectedItem,
				input: this.input,
			});
		});
	}

	#events() {
		document.addEventListener('click', ({ target }) => {
			if (target.closest(`[data-select="${this.selector}"]`)) {
				if (target.closest('[data-type-s="trigger"]')) {
					this.toggle();
				}

				if (target.closest('[data-value]')) {
					const option = target.closest('[data-value]');
					this.triggerContent.innerHTML = option.innerHTML;
					this.input.value = option.dataset.value;

					this.selectList
						.querySelector(`.${this.options.selectedClass}`)
						?.classList
						.remove(this.options.selectedClass);

					option.classList.add(this.options.selectedClass);
					this.selectedOption = option;

					if (this.options.autoCollapse) {
						this.close();
					}

					this.options.onSelected({
						element: target,
						sender: this,
						selectedItem: this.selectedOption,
						selectedValue: this.input.value
					});
				}
			} else {
				if (this.isOpen) {
					this.close();
				}
			}
		});

		document.addEventListener('keydown', ({ code }) => {
			if (this.isOpen && code === 'Escape') {
				this.close();
			}
		});
	}

	open() {
		this.select.classList.add(this.options.activeClass);
		this.trigger.setAttribute('aria-expanded', 'true');

		this.options.onOpen({ sender: this });
	}

	close() {
		this.select.classList.remove(this.options.activeClass);
		this.trigger.setAttribute('aria-expanded', 'false');

		this.options.onClose({ sender: this });
	}

	toggle() {
		this.isOpen
			? this.close()
			: this.open();
	}
}

export default CustomSelect;
