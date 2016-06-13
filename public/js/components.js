// Components

$(document).ready(function() {

	var windowWidth = $(window).width();

	// Crear un elemento div añadiendo estilos CSS
	var divPane = $(document.createElement('div')).addClass('pane paneLast');
	var container = $(document.createElement('div')).addClass('content-container');
	var wrap = $(document.createElement('div')).addClass('wrapper');
	var row = $(document.createElement('div')).addClass('row');
	var colFull = $(document.createElement('div')).addClass('col-sm-12 col-xs-12 col--full-height col--full-text display-table');
	var colFullVariant = $(document.createElement('div')).addClass('col-sm-12 col-xs-12 col--full-height col--full-text col--full-text--color display-table');
	var colFullColor = $(document.createElement('div')).addClass('col-sm-12 col-xs-12 col--full-height col--full-text col--full-text--color--variant display-table');
	var colFullText = $(document.createElement('div')).addClass('col-sm-12 col-xs-12 col--full-height col--full-text col--full-text--variant display-table');
	var align = $(document.createElement('div')).addClass('vertical-align');
	var colText = $(document.createElement('div')).addClass('col--full-text-width');
	var colTextVariant = $(document.createElement('div')).addClass('col--full-text-width text-white');
	var h2 = $(document.createElement('h2')).addClass('h1 main-title');
	var h2G = $(document.createElement('h2')).addClass('h1 main-title margin-t-0');
	var pBold = $(document.createElement('p')).addClass('text-bold');
	var p = $(document.createElement('p')).addClass('main-subtitle');
	var pG = $(document.createElement('p')).addClass('text-white text-bold text-xs');
	var pGL = $(document.createElement('p')).addClass('text-white main-subtitle');
	var pGLast = $(document.createElement('p')).addClass('text-bold text-xs');
	var btnHover = $(document.createElement('div')).addClass('btn--hover');
	var btnDefault = $(document.createElement('a')).attr('href', '#SeUnViajero').addClass('btn-default btn-default--traveler');
	var btnDefaultVariant = $(document.createElement('a')).attr('href', '#SeUnViajero').addClass('btn-default btn-default--traveler--variant');
	var btnDefaultG = $(document.createElement('a')).attr('href', '#SeUnGuia').addClass('btn-default btn-default--traveler');
	var btnDefaultVariantG = $(document.createElement('a')).attr('href', '#SeUnGuia').addClass('btn-default btn-default--traveler--variant');
	var span = $(document.createElement('span')).addClass('text-oswald-regular');

	// Text

	// First

	// -- Viajeros
	var h2TextFV = h2.text('Porque nos encanta viajar');
	var pTextFV = p.text('Desde el principio, los viajes han sido una parte vital de nuestras vidas, de nuestra identidad y una forma de mostrar nuestra libertad.');

	// -- Guias
	var h2TextFG = h2.text('Comparte tu talento con los demás');
	var pTextFG = p.text('En Manki, tú eliges qué actividades deseas compartir con los visitantes, según tu disponibilidad y preferencias. Podrás crear un anuncio como pasear en bicicleta por el malecón, realizar un tour de bares, o preparar un plato típico juntos. Las posibilidades de compartir tu talento y conocer nuevos amigos son infinitas.');

	// Second

	// -- Viajeros
	var h2TextMV = h2.text('Explora un lugar con la persona que mejor lo conoce');
	var pTextMV = pGL.text('Nadie conoce mejor la ciudad que los que viven en ella. Por eso Manki te conecta con la gente local para que te ayude a vivir la ciudad en toda su dimensión');

	// -- Guias
	var h2TextMG = h2.text('Gana amigos e ingresos extra');
	var pGTextMG = pG.text('Ser un guia local Manki en tu ciudad te permitirá conocer nuevas costumbres y culturas, ampliar tu visión del mundo.');
	var pGLTextMG = pGL.text('Aseguramos que tendrás anécdotas inolvidables que contar, compartiendo actividades que disfrutas realizar.  Es tu oportunidad de ganar amigos, aprender de ellos y, en el proceso, tener ingresos extra.');

	// Third

	// -- Viajeros
	var h2TextLV = h2.text('Nuestro sueño');
	var pTextLV = p.text('Estamos redefiniendo el concepto de viajar. Buscamos que vivas experiencias únicas y auténticas desde una perspectiva local, que luego de tu viaje, tengas una historia que contar.');

	// -- Guias
	var h2TextLG = h2.text('Nuestro sueño');
	var pGLastTextG = pGLast.text('Estamos redefiniendo el concepto de viajar.');
	var pTextLG = p.text('Buscamos que tengas ingresos a partir de tu pasión y tus hobbies, compartiendo lo mejor de ti y tu ciudad. Buscamos generar una comunidad de guias, buscamos generar emprendedores que hagan del mundo un lugar más acogedor y cercano para todos.');

	// Span
	var spanText = span.text('Quiero ser un viajero manki');
	var spanTextG = span.text('Quiero ser un guia manki');


	// Anchor
	var aV = btnDefault.append('spanText');
	var aVariantV = btnDefaultVariant.append('spanText');

	// Buttons
	// Viajeros
	var buttonV = btnHover.


	// Añadir caja de texto.

	if (windowWidth < 992) {
		$('.col-repeat').hide();
	}

	else {
		$('.col-repeat').show();
	}

	// else { //se establece un limite para añadir elementos, 20 es el limite

	// $(divPane).append('<label>Limite Alcanzado</label>');
	// $('#btAdd').attr('class', 'bt-disable');
	// $('#btAdd').attr('disabled', 'disabled');

	// }
});


$(window).resize(function() {
	var windowWidth = $(window).width();
	if (windowWidth < 992) {
		$('.col-repeat').hide();
	}

	else {
		$('.col-repeat').show();
	}
});
// $('#btRemove').click(function() { // Elimina un elemento por click
// if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

// if (iCnt == 0) { $(divPane).empty();

// $(divPane).remove();
// $('#btSubmit').remove();
// $('#btAdd').removeAttr('disabled');
// $('#btAdd').attr('class', 'bt')

// }
// });

// $('#btRemoveAll').click(function() { // Elimina todos los elementos del contenedor

// $(divPane).empty();
// $(divPane).remove();
// $('#btSubmit').remove(); iCnt = 0;
// $('#btAdd').removeAttr('disabled');
// $('#btAdd').attr('class', 'bt');

// });

// // Obtiene los valores de los textbox al dar click en el boton "Enviar"
// var divValue, values = '';

// function GetTextValue() {

// $(divValue).empty();
// $(divValue).remove(); values = '';

// $('.input').each(function() {
// divValue = $(document.createElement('div')).css({
// padding:'5px', width:'200px'
// });
// values += this.value + '<br />'
// });

// $(divValue).append('<p><b>Tus valores añadidos</b></p>' + values);
// $('body').append(divValue);

// }