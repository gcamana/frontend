(function($){
	'use strict';
	// Jquery para scrollear la pagina- caracteristicas- requiere el plugin Jquery.easing
	// Efecto de transition al hacer click en cada state de navegación.
	$('a.page-scroll').bind('click', function(event){
		var $anchor =$(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top -50)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});
	//Resaltar la Top Nav cuando se produce el desplazamiento , marcar el state  de nav con la clase .active
	$('body').scrollspy({
		target : '.navbar-fixed-top',
		offset:51
	}) 
	//cierra los menus responsivos cuanso estamos en un state(nav item) cuando este es seleccionado
	$('.navbar-collapse ul li a').click(function(){
		$('.navbar-toggle:visible').click();
	});
	
	//offset para la navigacion principal
	$('#nav-main').affix({
		offset:{
			top:100
		}
	})
	// iniciamos WoW.js para la animaciones al scrollear
	new WOW().init();
	
})(jQuery)