$(document).ready(function(){
  //verify jquery is loaded
  console.log("ready!")

  //intialize slick slider for homepage
  $('.homepage-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    //dots: true,
    arrows: true
  })

  //Smooth scrolling for internal links on media pg
  //Credit: https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
  
  	$('.section-jump').on('click',function (e) {

      	e.preventDefault();

      	var target = this.hash;
      	var $target = $(target);

      	$('html, body').stop().animate({
          'scrollTop': $target.offset().top
      	}, 900, 'swing', function () {
          window.location.hash = target;
      	});
  	}); 
  //end smooth scrolling

  // Photo Gallery functionality for media pg
  	 //Show photos after first row on click
  	$('.more-photos').click(function(){
     	$(".photo-gallery a:nth-child(n+4)").slideToggle('slow');
  		}
	); //end photo expansion

	//Photo-Gallery pop-ups
	$('.photo-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true, 
    	image: { 
        	verticalFit: false 
    		} 
		});


  //Swap out View More/View Less photos on click
	$('.more-photos').click(function() {
  		var el = $(this);
  		if (el.text() == el.data("text-swap")) {
    		el.text(el.data("text-original"));
  		} else {
    		el.data("text-original", el.text());
    		el.text(el.data("text-swap"));
  		}
	});//end text swap
  


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


})//end wrapper function

