// SCROLL REVEAL JS 

var fooReveal = {
  origin : 'right',
  delay    : 100,
  distance : '100px',
  easing   : 'ease-in-out',

};

window.sr = ScrollReveal();
sr.reveal('.fuck', fooReveal);



// SMOOTH SCROLL 




$(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var windowWidth = $(window).width();

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
      
  });
});





