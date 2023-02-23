//código é de uma biblioteca de javascript para fazer carrossel
$(document).ready(function () {
    $(".js-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: false,
      autoplay: true,
      autoplayTimeout: 100,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });