//Este archivo sirve para hacer cuando pulsemos el boton de abajo a la derecha tiene que hacer el scroll arriba al header 

$(document).ready(function(){

	$('.boton_scroll_arriba').click(function() {
		$('body, html').animate( {
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > 0 ) {
			$('.boton_scroll_arriba').slideDown(300);
		}else {
			$('.boton_scroll_arriba').slideUp(300);
		}
	});
});