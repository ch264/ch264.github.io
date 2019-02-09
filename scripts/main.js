
// setTimer runs indefinetly

$(document).ready(function (){

// function testimonial() {

//   let  $testimonialsWrapper = $('#testimonials');
//   let $testimonials = $('#testimonials').find(".blockquote");

//   if (!testimonials.length) {
//     return;
//   }

//   // keep move first quote in dom to the end to make continous
//   var nextTestimonial = function () {
//     var testimonials = testimonialsWrapper.find('blockquote:first').detach().appendTo(testimonialsWrapper);
//   setTimeout(nextTestimonial, testimonials.data('timeout'));
//   };

//   setTimeout(nextTestimonial, testimonials.filter(':first').data("timeout"));
// }

// function () {
//   testimonial();
// }

$("#testimonials").fadeToggle( 3000 );
console.log()

// arr testimonial [{
//   name: "Harald",
//   quote: "Christina is amazing",
// },
// {
//   name: "Susi",
//   quote: "Christina codes"
// }];


})




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



// var imagesIndex = 0;
// showImages();

// function showImages() {
//   var i;
//   var images = document.getElementsByClassName('.image-slide');
//   var circle = document.getElementsByClassName('.circle');

//   for (i = 0; i < images.length; i++) {
//   images[i].style.display = 'none';
//   }

//   imagesIndex++;

//   if (imagesIndex > images.length) {
//     imagesIndex = 1
//   }

//   for (i = 0; i < circle.length; i++) {
//     circle[i].className = circle[i].className.replace(" active", "");
//   }

//   images[imagesIndex-1].style.diplay = 'block';
//   circle[imagesIndex-1].className += ' active';
//   setTimeout(showImages, 2000);
// }

// showImages();


// $(document).ready(function(){
//   $('.carousel').carousel({
//     interval: 2000
//   })
//   $('#myCarousel').on('slid.bs.carousel', function (e) {
//   $('#myCarousel').carousel('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
// })

// $('#myCarousel').carousel('1') // Will start sliding to the slide 1 and returns to the caller
// $('#myCarousel').carousel('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
// });





// $(document).ready(function(){

// testimonials rotate in and out on a timer
 // active Testimonial is displayed

 // start timer
 // when timer === 0
 // fade out displayed Testimonal
 // fade in second Testimonial
 // start timer

// store time in variable and no need to recall function because it is an interval that will loop forever
// window.setInterval(nextQuote, 1000);

// nextQuote();
// function nextQuote() {
//   while ($('.blockquote').hasClass('active')) {
//     $('.blockquote').show();
//     $(this).removeClass('.active');
//      $('.blockquote').hide();
//     console.log("if");
  // } else {
  // $('.blockquote').addClass('active');
  // $('.blockquote').hide();
  // console.log("else");
  // }};

  // console.log('hi');

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

// var $myModal = $('#myModal').modal({show: true});


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
      alwaysShowClose: true,
    });
});


// shopping cart solution code for quotes
