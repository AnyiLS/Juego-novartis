$(document).ready(function () {
	let bandera = false
	let bandera1 = false
	let bandera2 = false
	$('#abrir1').on('click', function () {
		localStorage.setItem('slide9-1', 'true')
		if (localStorage.getItem('slide9-2') === 'true' && localStorage.getItem('slide9-3') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		if (bandera) {
			$('.menu1').css('display', 'none')
			bandera = !bandera
		} else {
			$('.menu1').css('display', 'block')
			bandera = !bandera
		}
	})

	

    $('#abrir2').on('click', function () {
		localStorage.setItem('slide9-2', 'true')
		if (localStorage.getItem('slide9-1') === 'true'  && localStorage.getItem('slide9-3') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		if (bandera1) {
			$('.menu2').css('display', 'none')
			bandera1 = !bandera1
		} else {
			$('.menu2').css('display', 'block')
			bandera1 = !bandera1
		}
	})

    $('#abrir3').on('click', function () {
		localStorage.setItem('slide9-3', 'true')
		if (localStorage.getItem('slide9-1') === 'true'  && localStorage.getItem('slide9-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		if (bandera2) {
			$('.menu3').css('display', 'none')
			bandera2 = !bandera2
		} else {
			$('.menu3').css('display', 'block')
			bandera2 = !bandera2
		}
	})
})
