$(document).ready(function () {
	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		localStorage.setItem('slide23', 'true')
		$('.boton-next').show()
		$('.vutom-col').hide()
		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
		$('.reproduc').trigger('pause')
	})
})
