(function($) 
{
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var str = 'My name is Rajith Sam and I am a full-stack Web Application Developer and Software Developer, currently living in Bengaluru, India.'
            +'I have a Masters of Technology in Software Engineering from B.S.Abdur Rahman University, and my primary focus and inspiration for my studies is Web Development.'
            +'I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques.'
            +'I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.';
  var spans = '<span>' + str.split('').join('</span><span>') + '</span>';
  $(spans).hide().appendTo('.css-typing').each(function (i) 
  {
      $(this).delay(200 * i).css({
          display: 'inline',
          opacity: 0
      }).animate({
          opacity: 1
      }, 100);
  });
})(jQuery); // End of use strict
