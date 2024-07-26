$(document).ready(function () {
	// modal
    $(".openModal").on("click", () => {
		localStorage.setItem('slide29-1', 'true')
		if (localStorage.getItem('slide29-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
        $(".modal").css("display", "block");
        $('.play-boton-11').hide();
        $('.reproduc1').hide();
        $('.reproduc1').trigger('pause');
    });
    // cerra modal
    $(".closeModal").on("click", () => {
        $(".modal").css("display", "none");
        $('.play-boton-11').show();
        $('.reproduc').hide();
        $('.reproduc').trigger('pause');
    });


	$('.play-boton-10').on('click', () => {
		$('.play-boton-10').hide()
		localStorage.setItem('slide29-1', 'true')
		if (localStorage.getItem('slide29-2') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor1').hide()
		$('.reproduc').show()
	})

    $('.play-boton-11').on('click', () => {
		$('.play-boton-11').hide()
		localStorage.setItem('slide29-2', 'true')
		if (localStorage.getItem('slide29-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor').hide()
		$('.reproduc1').show()
	})
})
