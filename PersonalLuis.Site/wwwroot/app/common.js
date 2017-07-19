import Isotope from 'isotope-layout';

const $ = window.jQuery;

// callback after ready the document
$(document).ready(() => {
  $('.search-form-li').on('click', (e) => {
    e.stopPropagation();
    $('.search-form-li').find('#initSearchIcon').addClass('hide');
    $('.search-form-wrap').removeClass('hide').find('input.search').focus();
    $('.side-nav').addClass('hide');
  });

  $(window).on('click', () => {
    $('.search-form-li').find('#initSearchIcon').removeClass('hide');
    $('.search-form-wrap').addClass('hide');
    $('.side-nav').removeClass('hide');
  });

  $('.primary-nav .button-collapse').sideNav();

  $('.blog-submenu-init').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: true,
    hover: false,
    alignment: 'right',
    gutter: 10,
    belowOrigin: true,
  });


  $('html').niceScroll({
    cursorwidth: '7px',
    zindex: '9999999',
  });

  // blog Mesonary
  if ($('#blog-posts').length > 0) {
    window.blogMsnry = new Isotope('.single-post', {
      isInitLayout: false,
      layoutMode: 'masonry',
    });
  }
});


// callback after loading the window
$(window).load(() => {
  // Preloader
  $('.loader').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350);

  // blog post slider
  const $blogPostSlider = $('.thumb-slides-container');
  if ($blogPostSlider.length > 0) {
    $blogPostSlider.each(() => {
      $(this).owlCarousel({
        singleItem: true,
        autoPlay: true,
        stopOnHover: true,
        slideSpeed: 800,
        transitionStyle: 'fade',
      });
    });

    $('.thumb-slides-controller a').on('click', (e) => {
      e.preventDefault();

      const blogPostSliderData = $(this).closest('.blog-post-thumb').children('.thumb-slides-container').data('owlCarousel');

      if ($(this).hasClass('left-arrow')) {
        blogPostSliderData.prev();
      } else {
        blogPostSliderData.next();
      }
    });
  }
});
