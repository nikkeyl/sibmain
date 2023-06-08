/*! Range (NoUiSlider plugin) https://refreshless.com/nouislider/ */
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

import '@scss/components/forms/range';

function parseSliderValue(value) {
	return parseInt(value.replace(/\s/g, ''), 10);
}

function range() {
	const priceSliders = document.querySelectorAll('[data-range]');

	const rangeInit = () => {
		priceSliders.forEach((slider) => {
			const inputsContainer = slider.parentElement;
			const inputStart = inputsContainer.querySelector('input[data-price-start]');
			const inputEnd = inputsContainer.querySelector('input[data-price-end]');

			noUiSlider.create(slider, {
				start: [inputStart.value, inputEnd.value],
				connect: true,
				range: {
					min: 0,
					max: 1000000,
				},
				format: wNumb({
					decimals: 0,
					thousand: ' ',
				}),
			});

			slider.noUiSlider.on('update', (values, handle) => {
				(handle ? inputEnd : inputStart).value = values[handle];
			});

			inputStart.oninput = ({ target }) => {
				slider.noUiSlider.set([target.value, ]);
			};
			inputEnd.oninput = ({ target }) => {
				slider.noUiSlider.set([, target.value]);
			};
		});
	};

	if (priceSliders.length) {
		rangeInit();
	}
}

export { range };
