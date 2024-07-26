$(document).ready(function () {
	// modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		localStorage.setItem('slide33-1', true)
		$('.cursor').hide()
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
		$('.reproduc').trigger('pause')
        $('.reproduc').hide()
	})

    // modal
	$('.openModal1').on('click', () => {
		$('.modal1').css('display', 'block')

		localStorage.setItem('slide33-2', true)
		$('.cursor1').hide()
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		$('.modal1').css('display', 'none')
		$('.reproduc1').trigger('pause')
        $('.reproduc1').hide()
	})

	$('.play-boton-10').on('click', () => {
		$('.play-boton-10').hide()
		$('.reproduc').show()
	})

    $('.play-boton-11').on('click', () => {
		$('.play-boton-11').hide()
		$('.reproduc1').show()
	})
})
