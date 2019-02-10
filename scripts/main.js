
// setTimer runs indefinetly
// testimonials rotate in and out on a timer
 // active Testimonial is displayed

 // start timer
 // when timer === 0
 // fade out displayed Testimonal
 // fade in second Testimonial
 // start timer


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

console.log('blockquote');


//https://stackoverflow.com/questions/14161132/jquery-scroll-change-navigation-active-class-as-the-page-is-scrolling-relative
$(window).scroll(function(){
  console.log("scrolling");

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

});



// Pseudocode for Image Carousel
// active image1 is displayed (on top of other images that are hidden)
  // set Timer
  // if timer ends
// image 1 slides to left and behind the stack
// image 2 fully displayed
  //set timer
  // if timer ends
// repeat image3

// button1 below hightlight when image1 is in view
// same for other buttons

// add Event delegation to listen to click on each button
  // if user clicks on button1, display image1
  // if user clicks on button2, dispay image2
  // if user clicks on button3 display image3

// add Event delegation to listen to click on image
  // enlarge image
  // display image in lightbox
    // (display github link?)

// if user clicks on window
  //hide lightbox
  //decrease image size

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: true,
    });


});




