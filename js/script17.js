$(document).ready(function () {
	let bandera = false
	let bandera1 = false
	let bander2 = false
	$('#abrir1').on('click', function () {
		localStorage.setItem('slide17-1', 'true')
		if (localStorage.getItem('slide17-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor').hide()
		if (bandera) {
			$('.menu1').css('display', 'none')
			bandera = !bandera
		} else {
			$('.menu1').css('display', 'block')
			bandera = !bandera
		}
	})

	

    $('#abrir2').on('click', function () {
		localStorage.setItem('slide17-2', 'true')
		if (localStorage.getItem('slide17-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor1').hide()
		if (bandera1) {
			$('.menu2').css('display', 'none')
			bandera1 = !bandera1
		} else {
			$('.menu2').css('display', 'block')
			bandera1 = !bandera1
		}
	})

    $('#abrir3').on('click', function () {
		if (bander2) {
			$('.menu3').css('display', 'none')
			bander2 = !bander2
		} else {
			$('.menu3').css('display', 'block')
			bander2 = !bander2
		}
	})
})
