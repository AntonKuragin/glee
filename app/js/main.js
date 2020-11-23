$(function () {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  var mixer = mixitup('.product__inner',{
    selectors: {
      control: '.product__btn'
    }
  });

  var mixer1 = mixitup('.gallery__items',{
    selectors: {
      control: '.gallery__btn'
    }
  });
});