$('a').click(function( event ) {
  event.preventDefault();
  $('<div>')
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});


$( document ).ready(function() {
  // Handler for .ready() called.
});


$('.readmore').click(function() {
  	$('#show-this-on-click').slideDown(''),
  	$('.readless').show('fast');
});

$('.readless').click(function() {
  	$('#show-this-on-click').slideUp(''),
  	$('.readless').hide('fast');
});


$('.learnmore').click(function() {
  	$('#learnmoretext').slideDown(''),
  	$('.learnmore').hide('');
});