 var mySwiper = new Swiper('.swiper', {
        // Parámetros de configuración
        loop: true,
        autoplay: {
          delay: 0,
          pauseOnMouseEnter: true,        // added
          disableOnInteraction: false,    // added
      },
      speed: 3000,
      slidesPerView: 8,
        // Otras opciones que podrías necesitar
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


     