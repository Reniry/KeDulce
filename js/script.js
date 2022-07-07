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

// Boton scroll up
document.getElementById('button-up').addEventListener('click', scrollUp)

function scrollUp(){

  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if(currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo (0, currentScroll - (currentScroll / 3));
  }
} 

buttonUp = document.getElementById('button-up');

window.onscroll = function () {

  var scroll = document.documentElement.scrollTop;

  if (scroll > 500) {
    buttonUp.style.transform = 'scale(1)';
  } else if(scroll < 500) {
    buttonUp.style.transform = 'scale(0)';

  }
}