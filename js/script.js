// Animaciones inicio
AOS.init();

// Nav background
var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 200) {
      nav.classList.add('bg-brown', 'shadow');
    } else {
      nav.classList.remove('bg-brown', 'shadow');
    }
  });

// Boton scroll up
$(document).ready(function () {
  $('.button-up').hide();

  $(window).scroll(function () {
    if ($(this).scrollTop () > 300 ) {
      $('.button-up').fadeIn('750');
    } else {
      $('.button-up').fadeOut('750');
    }
  });

  $('.button-up').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
  });
});
