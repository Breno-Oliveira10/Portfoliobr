$(document).ready(function () {
  $('.galeria').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 640,  // Define a velocidade da animação (em milissegundos)
    easing: 'ease',  // Define o tipo de animação para uma transição mais suave
    prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
    nextArrow: '<button type="button" class="slick-next">&gt;</button>',
    responsive: [
      {
        breakpoint: 770, // Valor antigo: 768
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024, // Valor antigo: 1024
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});
