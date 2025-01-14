// =============== LOADER SECTION =============== 
$(window).on('load', function () {
  $('#loader-img').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({ 'overflow': 'visible' });
})






// =============== TRNSPRENT NAVBAR ===============
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  if (pageYOffset > 1) {
    header.classList.add('tb-navscroll');
  } else {
    header.classList.remove('tb-navscroll');
  }
});






// =============== RESPONSIVE JQUERY =============== 
$(document).ready(function () {
  function footerToggle() {
    if ($(window).width() < 992) {
      $(".tb-footer-section-title").addClass("toggle");
      $(".tb-footer-section-title.toggle").unbind("click");
      var Accordions = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var link = this.el.find('.toggle');
        link.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
      }

      Accordions.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
          $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('active');

        if (!e.data.multiple) {
          $el.find('.tb-footer-section-body').not($next).slideUp().parent().removeClass('active');
        };
      }

      var accordions = new Accordions($('.tb-footer-toggle-menu'), false);
    } else {
      $(".tb-footer-section-title.toggle").unbind("click");
      $(".tb-footer-section-title").removeClass('toggle');
    }
  }
  $(document).ready(function () { footerToggle(); });
  $(window).resize(function () { footerToggle(); });

});






// =============== CLICK NAV-LINK HIDE NAVBAR =============== 
$(function () {
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});






// =============== BACK TO TOP =============== 
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function () {      // When arrow is clicked
  $('body,html').animate({
    scrollTop: 0                       // Scroll to top of body
  }, 500);
});