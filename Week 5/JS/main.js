// Awesome job, Gabrielle! You are obviously getting the hang of jQuery already--that's fanatastic. Let me know if you have any questions!

$(document).ready(function() {

  // The $(document).ready needs to surround all of the code on your page; essentially, the point is that it will hold off on running any of the JavaScript code inside of it until your HTML is completely done loading. You don't want to start running your JavaScript before the page is done loading, since you are using elements from the DOM to manipulate it. It's just a good habit to practice!

  $('a').click(function( event ) {
    event.preventDefault();
    // I love the way you did this! You could have put the event.preventDefault() inside each of the functions, but you've found a way to do it with less code. The only thing to be cautious of is that if you were to add a link that you actually want to work in the normal way (ie. linking to another page) this would prevent it from working.

    $('<div>')
      .append( "default " + event.type + " prevented" )
      .appendTo( "#log" );
      // It looks like this code isn't actually doing anything on your page. You don't have an element with an ID of "log", which is what the content would be appended to. I think this was probably meant for someone who was trying to keep a log times that this prevent Default action is performed. All you need is the event.preventDefault() to be run when someone clicks, so you can get rid of lines 11-13 entirely!
  });

  $('.readmore').click(function() {
    	$('#show-this-on-click').slideDown(),
      // You don't need the empty quotation marks; slideDown works just fine without passing anything into it!
    	$('.readless').show('fast');
      // You might want to also select the $(".readMore") link and use jQuery to hide it, since you don't really want to show a "Read More" option once you can already see the rest of the content. Just a thought to push yourself!
  });

  $('.readless').click(function() {
    	$('#show-this-on-click').slideUp(),
    	$('.readless').hide('fast');
  });


  $('.learnmore').click(function() {
    	$('#learnmoretext').slideDown(),
    	$('.learnmore').hide();
  });

  // You used anonymous functions in this, but maybe next time try using named functions and a callback inside the click event! It can be useful, especially if you are going to have a lot of different items on the page that are performing the same action.

});
