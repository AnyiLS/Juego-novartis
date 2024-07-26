$(document).ready(function () {
	// modal
    $(".openModal").on("click", () => {
        $(".modal").css("display", "block");
        $('.reproduc').hide();
		$('.reproduc').trigger('pause');
        localStorage.setItem('slide15-2', 'true')
		if (localStorage.getItem('slide15-1') === 'true' && localStorage.getItem('slide15-3') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
        $('.cursor1').hide()

        $('.play-boton-10').hide()
        $('.seccion-video1').hide()
        $('.boton-play').hide()
        $('.video-2').hide()
    });
    // cerra modal
    $(".closeModal").on("click", () => {
        $(".modal").css("display", "none");
        $('.play-boton-10').show();

        $('.play-boton-10').show()
        $('.seccion-video1').show()
        $('.boton-play').show()
        $('.video-2').show()
    });

	// modal
    $(".openModal1").on("click", () => {
        $(".modal1").css("display", "block");
        $('.reproduc').hide();
        $('.play-boton-10').show();
		$('.reproduc').trigger('pause');
        localStorage.setItem('slide15-3', 'true')
		if (localStorage.getItem('slide15-2') === 'true' && localStorage.getItem('slide15-1') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
        $('.cursor2').hide()

        $('.play-boton-10').hide()
        $('.seccion-video1').hide()
        $('.boton-play').hide()
        $('.video-2').hide()
    });
    // cerra modal
    $(".closeModal1").on("click", () => {
        $(".modal1").css("display", "none");
        $('.play-boton-10').show();
		$('.reproduc').trigger('pause');

        $('.play-boton-10').show()
        $('.seccion-video1').show()
        $('.boton-play').show()
        $('.video-2').show()
    });

	$('.play-boton-10').on('click', () => {
		$('.play-boton-10').hide()
		localStorage.setItem('slide15-1', 'true')
		if (localStorage.getItem('slide15-2') === 'true' && localStorage.getItem('slide15-3') === 'true') {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
		$('.cursor').hide()
		$('.reproduc').show()
	})
})
