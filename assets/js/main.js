$(document).ready(function(){
  //verify jquery is loaded
  console.log("ready!")

  //image slider
  //I was going to use the Slick plugin I found
  //but generally I like to think I could make 
  //something leaner

  //set Index at 0
  var currentIndex = 0
  //set the photos to a var to hide them
  var carouselImages = $('.homepage-carousel div')

//define function to cycle through images
  function cycleImages(currentIndex){
    var currentImg =
    if (currentIndex == currentImg){

    }


  }


  $(document).on('click.card', '.card', function (e) {
      console.log("clicked");
      //AT THIS POINT IN THE FUNCTION 'e' is the EVENT

      if ($(this).find('.card-reveal')) {
        //so once the click event is recognized, find the card-reveal class
        //if the card-reveal class returns true, show the card
        //using the following if-else statement -- but do we really need it?
        //probably can be simplified
        var testVar = $(this).find('.card-reveal');
        console.log(testVar);
        console.log("found the card-reveal");
        // may need to rework these classes

        if ($(e.target).is($('.card-reveal .card-title')) ||
          $(e.target).is($('.card-reveal .card-title i')) || 
          $(e.target).is(this)) {
          console.log("found the card-reveal icon");
          //AT THIS POINT IN THE FUNCTION 'this' IS THE WHOLE CARD

          // Make Reveal animate down and display none
          //look up .velocity in jQuery docs > this is a plugin imported
          //in the materialize docs
        

          $(this).find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            }
          );
        }
        else if ($(e.target).is($('.card .activator')) ||
                 $(e.target).is($('.card .activator i')) ) {
          console.log("found the activator")
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'},
            {duration: 300, queue: false, easing: 'easeInOutQuad'});
        }
      }

      $('.card-reveal').closest('.card').css('overflow', 'hidden');

    });

//Members Page
//Artist bio slides up over photo on click
  // $('.card-content').click(function() {

  //     console.log("clicked");
  //     //add active state to expanded info
  //     var $active = $('.card-reveal').find('.active');

  //   //show extra info
  //    $('.card-reveal').stop().slideDown("slow").addClass('active');

  //   //hide extra info again
  //   $('.card-reveal active').stop().slideUp().removeClass('active');

  // });


})//end wrapper function

