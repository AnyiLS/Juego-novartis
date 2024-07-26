$(document).ready(() => {
	const response = JSON.parse(localStorage.getItem('responses'))

	for (let i = 0; i < response.length; i++) {
		$(`.parte${response[i]}`).show()
	}

	$('.quantity').text(response.length)
	if ($('#intentalo')[0]) {
        let intentos = localStorage.getItem('intentos')
        $('.cantidad').text(`${(parseInt(intentos ?? '0') - 1) <= 1 ? 'queda' : "quedan"} ${parseInt(intentos ?? '0') - 1} ${(parseInt(intentos ?? '0') - 1) <= 1 ? 'intento' : "intentos"} `)
		$('.heart-container').on('click', () => {
            
			let intentos = localStorage.getItem('intentos')
			if (intentos - 1 === 0) {
				localStorage.clear()
                const nuevaFecha = new Date()
                nuevaFecha.setHours(nuevaFecha.getHours() - 7)
				localStorage.setItem(
					'puedeJugar',
					JSON.stringify(nuevaFecha)
				)
				window.location.href = './index6.html'
			} else {
				localStorage.setItem('intentos', intentos - 1)
				window.location.href = './index.html'
			}
		})
	} else {
		$('.container').on('click', () => {
			window.location.href = './index5.html'
		})
	}
})
