$(document).ready(function(){
  //verify jquery is loaded
  console.log("ready!")

  //intialize Slick Img Slider for homepage
  $('.homepage-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
       breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      }
    ] //end responsive breakpoints for img slider
  }) //end responsive img slider

  //Smooth scrolling for internal links on media pg
  //Credit: https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
  	$('.smooth-scroll').on('click',function (e) {

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
  	 //Show photos after second row on click
  $('.more-photos').click(function(){
    $('.expansion-display').slideToggle('slow');
  }); //end photo expansion

	//Photo-Gallery individual img pop-ups
	$('.photo-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: true, 
    	image: { 
        	verticalFit: false 
    		}
		});

  //Swap out View More/View Less photos on button click
	$('.more-photos').click(function() {
  		var el = $(this);
  		if (el.text() == el.data("text-swap")) {
    		el.text(el.data("text-original"));
  		} else {
    		el.data("text-original", el.text());
    		el.text(el.data("text-swap"));
  		}
	});//end text swap

//Members Pop-Up Bios on cards
  $(document).on('click.card', '.card', function (e) {
     console.log("clicked");

      if ($(this).find('> .card-reveal').length) {
        console.log("registered");
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          console.log("registered");
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
        console.log("registered");
          $(e.target).closest('.card').css('overflow', 'hidden');
          $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity(
            { translateY: '-100%'},
            { duration: 300, 
              queue: false, 
              easing: 'easeInOutQuad'});
        }
      }

      $('.card-reveal').closest('.card').css('overflow', 'hidden');

    });



})//end wrapper function

