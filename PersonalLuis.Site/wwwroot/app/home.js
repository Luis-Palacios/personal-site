import 'wowjs';
import Masonry from 'masonry-layout';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { lazyLoadPicture, ioWrapper, loadPicture } from './lazyload';
import '../css/animations.css';

const targetPictures = document.querySelectorAll('picture.lazy:not(.blog-picture)');
targetPictures.forEach(lazyLoadPicture);

const checkLoad = loaded => function onLoad() {
  if (loaded === 0) {
    setTimeout(() => {
      const elem = document.querySelector('#blog-posts');
      const msnry = new Masonry(elem, {
        // options
        itemSelector: '.single-post',
        columnWidth: 30,
      });
      msnry.layout();
    }, 0);
  }
};

const blogSection = document.getElementById('blog');
if (blogSection) {
  ioWrapper(blogSection, (entry) => {
    const section = entry.target;
    const pictures = section.getElementsByTagName('picture');
    let loaded = pictures.length;
    for (let i = 0; i < pictures.length; i += 1) {
      const picture = pictures[i];
      loadPicture(picture, checkLoad(loaded -= loaded));
    }
  });
}


const { WOW, isNotFoundPage } = window;
const $ = window.jQuery;
$.fn.load = function load(callback) { $(window).on('load', callback); };

const carouselDefaultOptions = {
  items: 3,
  navSpeed: 600,
  smartSpeed: 600,
  fluidSpeed: 600,

  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
};

(function ready() {
  $.fn.scrollingTo = function scrollingTo(opts) {
    const defaults = {
      animationTime: 1000,
      easing: '',
      topSpace: 0,
      callbackBeforeTransition() { },
      callbackAfterTransition() { },
    };

    const config = $.extend({}, defaults, opts);

    $(this).on('click', function mainClick(e) {
      const eventVal = e;
      e.preventDefault();

      const $section = $(document).find($(this).data('section'));
      if ($section.length < 1) {
        return false;
      }

      if ($('html, body').is(':animated')) {
        $('html, body').stop(true, true);
      }

      const scrollPos = $section.offset().top;

      if ($(window).scrollTop() === (scrollPos + config.topSpace)) {
        return false;
      }

      config.callbackBeforeTransition(eventVal, $section);

      const newScrollPos = (scrollPos - config.topSpace);

      $('html, body').animate({
        scrollTop: (`${newScrollPos}px`),
      }, config.animationTime, config.easing, () => {
        config.callbackAfterTransition(eventVal, $section);
      });

      return $(this);
    });

    $(this).data('scrollOps', config);
    return $(this);
  };
}());

$(document).ready(function documentReady() {
  const sklSlider = $('#skillSlider');

  sklSlider.owlCarousel({
    items: 6,
    navSpeed: 600,
    smartSpeed: 600,
    fluidSpeed: 600,

    responsive: {
      0: {
        items: 4,
      },
      480: {
        items: 6,
      },
    },
  });

  const sklTgt = $('.skl-ctrl').find('.go');
  sklTgt.on('click', function sklClick() {
    if ($(this).hasClass('go-left')) {
      sklSlider.trigger('prev.owl.carousel');
    } else {
      sklSlider.trigger('next.owl.carousel');
    }
  });


  const exSlider = $('#experienceSlider');
  exSlider.owlCarousel(carouselDefaultOptions);

  const exTgt = $('.exp-ctrl').find('.go');
  exTgt.on('click', function exTgtClick() {
    if ($(this).hasClass('go-left')) {
      exSlider.trigger('prev.owl.carousel');
    } else {
      exSlider.trigger('next.owl.carousel');
    }
  });


  const edSlider = $('#educationSlider');
  edSlider.owlCarousel(carouselDefaultOptions);

  const edTgt = $('.edu-ctrl').find('.go');
  edTgt.on('click', function edTgtClick() {
    if ($(this).hasClass('go-left')) {
      edSlider.trigger('prev.owl.carousel');
    } else {
      edSlider.trigger('next.owl.carousel');
    }
  });


  const tmSlider = $('#teamSlider');
  tmSlider.owlCarousel(carouselDefaultOptions);

  const tmTgt = $('.tmu-ctrl').find('.go');
  tmTgt.on('click', function tmTgtClick() {
    if ($(this).hasClass('go-left')) {
      tmSlider.trigger('prev.owl.carousel');
    } else {
      tmSlider.trigger('next.owl.carousel');
    }
  });


  const tesMoSlider = $('#testimonialSlider');
  tesMoSlider.owlCarousel({
    items: 2,
    navSpeed: 600,
    smartSpeed: 600,
    fluidSpeed: 600,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1024: {
        items: 2,
      },
    },
  });

  const tmoTgt = $('.tmo-ctrl').find('.go');

  tmoTgt.on('click', function tmoTgtClick() {
    if ($(this).hasClass('go-left')) {
      tesMoSlider.trigger('prev.owl.carousel');
    } else {
      tesMoSlider.trigger('next.owl.carousel');
    }
  });
  debugger;
  if (!isNotFoundPage) {
    $('.menu-smooth-scroll').scrollingTo({
      easing: 'easeOutQuart',
      animationTime: 1800,
      callbackBeforeTransition(e) {
        if (e.currentTarget.hash !== '') {
          if (e.currentTarget.hash !== '#home') {
            $(e.currentTarget).parent().addClass('current').siblings()
              .removeClass('current');
          }
        }

        $('.button-collapse').sideNav('hide');
      },
      callbackAfterTransition(e) {
        if (e.currentTarget.hash !== '') {
          if (e.currentTarget.hash === '#home') {
            window.location.hash = '';
          } else {
            window.location.hash = e.currentTarget.hash;
          }
        }
      },
    });
  }

  $('.section-call-to-btn').scrollingTo({
    easing: 'easeOutQuart',
    animationTime: 1800,
    callbackBeforeTransition() {

    },
    callbackAfterTransition() {
    },
  });

  // window scroll Sections scrolling
  (function scrollLoad() {
    const sections = $('.scroll-section');

    function getActiveSectionLength(section, sectionsArg) {
      return sectionsArg.index(section);
    }

    if (sections.length > 0) {
      sections.waypoint({
        handler(event, direction) {
          let activeSection = $(this);
          const activeSectionIndex = getActiveSectionLength($(this), sections);
          const prevSectionIndex = (activeSectionIndex - 1);

          if (direction === 'up') {
            if (!(prevSectionIndex < 0)) {
              // activeSection = activeSection;
              activeSection = sections.eq(prevSectionIndex);
            }
          }

          if (activeSection.attr('id') !== 'home') {
            const activeLink = $(`.menu-smooth-scroll[href="#${activeSection.attr('id')}"]`);
            activeLink.parent('li').addClass('current').siblings().removeClass('current');
          } else {
            $('.menu-smooth-scroll').parent('li').removeClass('current');
          }
        },
        offset: '35%',
      });
    }
  }());
}());

$(window).load(() => {
  // section calling
  $('.section-call-to-btn.call-to-home').waypoint({
    handler() {
      const $this = $(this);
      const showHandler = setTimeout(() => {
        $this.addClass('btn-show').removeClass('btn-up');
        clearTimeout(showHandler);
      }, 1500);
      $this.fadeIn(0).removeClass('btn-hidden');
    },
    offset: '90%',
  });


  $('.section-call-to-btn.call-to-about').delay(1000).fadeIn(0, function finishFade() {
    const $this = $(this);
    const showHandler = setTimeout(() => {
      $this.addClass('btn-show').removeClass('btn-up');
      clearTimeout(showHandler);
    }, 1600);
    $this.removeClass('btn-hidden');
  });

  // skills animation
  $('#skillSlider').waypoint({
    handler() {
      $(this).find('.singel-hr-inner').each(function skillSliderEach() {
        const height = $(this).data('height');
        $(this).css('height', height);
      });
    },
    offset: '60%',
  });

  // Wow init
  new WOW({
    offset: 200,
    mobile: false,
  }).init();
});
