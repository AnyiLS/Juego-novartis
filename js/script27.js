$(document).ready(function () {
	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		$('.reproduc1').hide()
		localStorage.setItem('slide27', 'true')
		$('.boton-next').show()
		$('.vutom-col').hide()
		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
		$('.play-boton-10').show()
		$('.reproduc1').trigger('pause')
	})
})
