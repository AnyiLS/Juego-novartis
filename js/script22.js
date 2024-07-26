$(document).ready(function () {
	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		$('.reproduc1').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
		$('.play-boton-10').show()
		$('.reproduc1').trigger('pause')
	})

	// modal
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')
		$('.reproduc').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
		$('.play-boton-10').show()
	})

	$('.play-boton-10').on('click', () => {
		$('.play-boton-10').hide()
		localStorage.setItem('slide22', 'true')

		$('.boton-next').show()
		$('.vutom-col').hide()

		$('.cursor').hide()
		$('.reproduc').show()
	})
})
