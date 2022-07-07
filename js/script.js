// Animaciones inicio
AOS.init();

// Nav background
var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 200) {
          nav.classList.add('bg-info', 'shadow');
        } else {
          nav.classList.remove('bg-info', 'shadow');
        }
      });