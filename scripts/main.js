$(document).ready(function (){

  //https://stackoverflow.com/questions/12065273/fade-in-out-text-loop-jquery
  function nextQuote() {

    var quotes = $('blockquote');
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length).fadeIn(2000).delay(2000).fadeOut(2000, showNextQuote);
    }
    showNextQuote();
  }
  nextQuote();


//https://stackoverflow.com/questions/14161132/jquery-scroll-change-navigation-active-class-as-the-page-is-scrolling-relative
  $(window).scroll(function(){

    let scroll = $(this).scrollTop();

    if (scroll >= $('.about').position().top && scroll <= $('#projects').position().top) {
      $('.about').css('text-decoration', 'underline');
    } else {
          // Setting the value of a style property to an empty string removes that property from an element if it has already been directly applied,
        $('.about').css('text-decoration', '');
      }

    if (scroll >= $('#projects').position().top && scroll <= $('#testimonials').position().top) {
      $('.project').css('text-decoration', 'underline');
    } else {
        // Setting the value of a style property to an empty string — e.g. $('#mydiv').css('color', '') — removes that property from an element if it has already been directly applied,
        $('.project').css('text-decoration', '');
      }

    if (scroll >= $('#testimonials').position().top && scroll <= $('#form').position().top) {
      $('.quote').css('text-decoration', 'underline');
    } else {
        // Setting the value of a style property to an empty string — e.g. $('#mydiv').css('color', '') — removes that property from an element if it has already been directly applied,
        $('.quote').css('text-decoration', '');
      }

    if (scroll >= $('#form').position().top) {
      $('.form').css('text-decoration', 'underline');
    } else {
        // Setting the value of a style property to an empty string — e.g. $('#mydiv').css('color', '') — removes that property from an element if it has already been directly applied,
      $('.form').css('text-decoration', '');
      }
  });



  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: true,
    });
  });

});



