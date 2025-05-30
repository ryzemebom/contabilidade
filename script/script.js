$(document).ready(function () {
  // Slider de imagens
  $("#imagens ul").bxSlider({
    auto: true,
    pager: true,
    controls: true,
    mode: 'fade',
    speed: 1000,
    pause: 5000
  });

  // Smooth scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 80
    }, 900, 'swing');
  });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}