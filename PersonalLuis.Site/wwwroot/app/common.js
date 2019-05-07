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

});
