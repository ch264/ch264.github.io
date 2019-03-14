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

    if (scroll >= $('#projects').position().top && scroll <= $('#skills').position().top) {
      $('.project').css('text-decoration', 'underline');
    } else {
        // Setting the value of a style property to an empty string — e.g. $('#mydiv').css('color', '') — removes that property from an element if it has already been directly applied,
        $('.project').css('text-decoration', '');
      }

    if (scroll >= $('#skills').position().top && scroll <= $('#testimonials').position().top) {
      $('.skills').css('text-decoration', 'underline');
    } else {
        // Setting the value of a style property to an empty string — e.g. $('#mydiv').css('color', '') — removes that property from an element if it has already been directly applied,
        $('.skills').css('text-decoration', '');
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

 



  $('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();

      // The next pixel to show on screen      
      var winBottom = winY + winH;

      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
    
    $(document).on({scroll: function(){
      parallaxImg();
      }, ready: function() {
        parallaxImg();
      }
    });
  });

});



