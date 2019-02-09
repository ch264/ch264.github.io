
// setTimer runs indefinetly

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


// $(document).on('scroll', function() {
//     if($(this).scrollTop()>= $('#theTarget').position().top){
//         yourActionHere();
//     }
// })
$(window).scroll(function(){
  console.log("scrolling");

  if($(this).scrollTop() >= $('#form').position().top) {
    $('.form').css('text-decoration', 'underline');
      if ($(this).scrollTop() <= $('#form').position().top) {
      $('.form').css('text-decoration', 'none');
      }
    }
})


  // ($(this).scrollTop() >= $('#projects').position().top) {
  //   $('.projects').css('text-decoration', 'underline');
  // } else if ($(this).scrollTop() >= $('#testimonials').position().top) {
  //   $('.testimonials').css('text-decoration', 'underline');
  // } else if ($(this).scrollTop() >= $('#form').position().top) {
  //   $('.form').css('text-decoration', 'underline');
//   // }
// })



})



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




// testimonials rotate in and out on a timer
 // active Testimonial is displayed

 // start timer
 // when timer === 0
 // fade out displayed Testimonal
 // fade in second Testimonial
 // start timer

// store time in variable and no need to recall function because it is an interval that will loop forever
// window.setInterval(nextQuote, 1000);





// https://stackoverflow.com/questions/26819675/navbar-highlight-for-current-page
  // nav bar
  // $(function(){
  //       $('a').each(function(){
  //           if ($(this).prop('href') == window.location.href) {
  //               $(this).addClass('active'); $(this).parents('li').addClass('active');
  //           }
  //       });
  //   });

// });


