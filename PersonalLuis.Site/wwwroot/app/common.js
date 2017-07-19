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
    // window.blogMsnry = $('#blog-posts').isotope({
    //   itemSelector: '.single-post',
    //   isInitLayout: false,
    //   layoutMode: 'masonry',
    // });
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


  // favorite maker
  const lovedText = 'You already love this';
  const loveText = 'Love this';
  const loveClass = 'active';
  $('.js-favorite').on('click', (e) => {
    e.preventDefault();
    let favoriteNumb = parseInt($(this).find('.numb').text(), 10);
    if ($(this).hasClass(loveClass)) {
      $(this).removeClass(loveClass).attr('title', loveText);
      favoriteNumb -= 1;
      $(this).find('.numb').text(favoriteNumb);
    } else {
      $(this).addClass(loveClass).attr('title', lovedText);
      favoriteNumb += 1;
      $(this).find('.numb').text(favoriteNumb);
    }
  });


  // Blog masonry re layout
  // window.blogMsnry.isotope('layout');
});


// callback after resize the window
$(window).resize(() => {
  // Blog masonry re layout

  // const handler = setTimeout(() => {
  //   window.blogMsnry.isotope('layout');
  //   clearTimeout(handler);
  // }, 2000);
});
