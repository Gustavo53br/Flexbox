 var mySwiper = new Swiper('.swiper', {
        // Parámetros de configuración
        loop: true, // Infinito
        autoplay: {
          delay: 2500,
          disableOnInteraction: false, // Continúa después de la interacción
        },
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