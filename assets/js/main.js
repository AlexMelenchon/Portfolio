/**
* Template Name: MyPortfolio - v2.1.0
* Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function($) {
  "use strict";

  console.log("Debug!!");

  var burgerMenu = function() {
    $('.burger').click(function(e) {
      $(window).scrollTop(0);
      if (!$('.burger').hasClass('active'))
        $('.burger').addClass('active');
      else
        $('.burger').removeClass('active');
    });
  }
  burgerMenu();

  var siteIstotope = function() {
    var $container = $('#portfolio-grid').isotope({
      itemSelector: '.item',
      isFitWidth: true
    });

    $(window).resize(function() {
      $container.isotope({
        columnWidth: '.col-sm-4'
      });
    });

    $container.isotope({
      filter: '*'
    });

    $('#filters').on('click', 'a', function(e) {
      e.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $container.isotope({
        filter: filterValue
      });
      $('#filters a').removeClass('active');
      $(this).addClass('active');
    });
  }
  $(window).on('load', function() {
    siteIstotope();
  });

  let mainSlider = function() {
    $('#slider').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
      autoplayTimeout: 3500
    });
  };
  mainSlider();

  var siteOwlCarousel = function() {
    $('.testimonial-carousel').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      smartSpeed: 1000,
    });
  };
  siteOwlCarousel();

  $(window).on('load', function() {
    AOS.init({
      easing: 'ease',
      duration: 1000,
      once: true
    });
  });

  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    console.log(scrollTop);

    if(scrollTop == 0) 
    {
      //hide button
      $('.back-to-top').fadeOut('fast');
    } 
    else if( $('.back-to-top').is(':hidden')) 
    {
       // show button
      $('.back-to-top').fadeIn('fast');
    }
  });

  setTimeout(function(){ 
    $('#spinner').fadeOut();
  }, 2000);

})(jQuery);