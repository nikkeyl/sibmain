export function counter () {
	const counters = document.querySelectorAll('[data-counter=counter]')
	counters.forEach((counter) => {
		const input = counter.querySelector('[data-counter=count]')
		counter.addEventListener('click', (event) => {
			if(event.target.dataset.counter === 'plus') {
				input.value++
			}
			if(event.target.dataset.counter === 'minus') {
				input.value > 1 && input.value--
			}
		})
	})
}