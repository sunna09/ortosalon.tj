$ (function () {


  $('.header__burger-btn, nav__link, unscrol').on('click', function() {
    $('.nav').toggleClass('nav--active');   
  });
  
  $('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

  $('.related-slider__wrap').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.product-page__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-page__slider-nav',
    
    
  });
  $('.product-page__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-page__slider-for',
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      }
    ]
    
  });
  

  
 
  
  var mixer=mixitup('.product__wrapper');
});

$ (function () { 

  var mixer=mixitup('.shop__content-women');
});

$ (function () { 

  var mixer=mixitup('.shop__content-girl');
});

$ (function () { 

  var mixer=mixitup('.shop__content-boy');
});

$ (function () { 

  var mixer=mixitup('.shop__content-men');
});


