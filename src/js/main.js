
// ----  Burger animation
  $('.burger-container').click(function(){
    $(this).toggleClass('cross');
  });

// ---- menu animation

  $('.burger-container').click(function(){
    $('.menu').slideToggle('show-menu');
  });

// ---- google map animation
$('.contact-box__adress button').click(function(){
  $('.contact .mask').hide(1000);
});

$('.show-form__button').click(function(){
  $('.contact .mask').show(1000);
});

// Animation toggle more photos

$('.past-event__button').click(function(){
  $('.past-event__more').slideToggle(1000);
});

// scrollTo plugin ---

jQuery(function($){

  $('#eventLink').click(function(){
    $.scrollTo($('#eventSection'), 500);
  });
  $('#speakerLink').click(function(){
    $.scrollTo($('#speakerSection'), 800);
  });
  $('#sponsorLink').click(function(){
    $.scrollTo($('#sponsorSection'), 1000);
  });
  $('#pastLink').click(function(){
    $.scrollTo($('#pastSection'), 1200);
  });
  $('#contactLink').click(function(){
    $.scrollTo($('#contactSection'), 1400);
  });
  $('#scrollUp').click(function(){
    $.scrollTo($('#wrapperPage'),1400);
  })
});
