import 'wowjs';
import swal from 'sweetalert';
import Masonry from 'masonry-layout';
import 'sweetalert/dist/sweetalert.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const WOW = window.WOW;
const $ = window.jQuery;

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

(function () {
  $.fn.scrollingTo = function (opts) {
    const defaults = {
      animationTime: 1000,
      easing: '',
      topSpace: 0,
      callbackBeforeTransition() { },
      callbackAfterTransition() { },
    };

    const config = $.extend({}, defaults, opts);

    $(this).on('click', function (e) {
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

$(document).ready(function () {
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
  sklTgt.on('click', function () {
    if ($(this).hasClass('go-left')) {
      sklSlider.trigger('prev.owl.carousel');
    } else {
      sklSlider.trigger('next.owl.carousel');
    }
  });


  const exSlider = $('#experienceSlider');
  exSlider.owlCarousel(carouselDefaultOptions);

  const exTgt = $('.exp-ctrl').find('.go');
  exTgt.on('click', function () {
    if ($(this).hasClass('go-left')) {
      exSlider.trigger('prev.owl.carousel');
    } else {
      exSlider.trigger('next.owl.carousel');
    }
  });


  const edSlider = $('#educationSlider');
  edSlider.owlCarousel(carouselDefaultOptions);

  const edTgt = $('.edu-ctrl').find('.go');
  edTgt.on('click', function () {
    if ($(this).hasClass('go-left')) {
      edSlider.trigger('prev.owl.carousel');
    } else {
      edSlider.trigger('next.owl.carousel');
    }
  });


  const tmSlider = $('#teamSlider');
  tmSlider.owlCarousel(carouselDefaultOptions);

  const tmTgt = $('.tmu-ctrl').find('.go');
  tmTgt.on('click', function () {
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
      480: {
        items: 2,
      },
    },
  });

  const tmoTgt = $('.tmo-ctrl').find('.go');

  tmoTgt.on('click', function () {
    if ($(this).hasClass('go-left')) {
      tesMoSlider.trigger('prev.owl.carousel');
    } else {
      tesMoSlider.trigger('next.owl.carousel');
    }
  });

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

  $('.section-call-to-btn').scrollingTo({
    easing: 'easeOutQuart',
    animationTime: 1800,
    callbackBeforeTransition() {

    },
    callbackAfterTransition() {
    },
  });

  // Menu animations plugin
  (function () {
    function Menu($element, options) {
      let handler;
      const defaults = {
        domObj: $element,
        className: 'small-menu',
        position: '100px',
        onIntellingenceMenu() { },
        onNormalMenu() { },
      };
      const config = $.extend({}, defaults, options);
      const coreFuns = {
        displayMenu() {
          if (config.domObj.hasClass(config.className)) {
            config.domObj.removeClass(config.className);
          }
        },
        hideMenu() {
          if (!config.domObj.hasClass(config.className)) {
            config.domObj.addClass(config.className);
          }
        },
      };
      const publicFuns = {
        intelligent_menu() {
          let lastScrollTop = 0;
          let direction;

          if (handler !== undefined) {
            $(window).unbind('scroll', handler);
          }

          handler = function (e) {
            if (e.currentTarget.scrollY > lastScrollTop) {
              direction = 'down';
            } else {
              direction = 'up';
            }
            lastScrollTop = e.currentTarget.scrollY;

            // check is user scrolling to up or down?
            if (direction === 'up') {
              // so you are scrolling to up...

              // lets display menu
              coreFuns.displayMenu();
            } else {
              // so you are scrolling to down...

              // se we have to hide only the small menu because the normal menu isn't sticky!
              coreFuns.hideMenu();
            }
          };
          $(window).bind('scroll', handler);

          config.onNormalMenu();
        },
        fixed_menu() {
          if (handler !== undefined) {
            $(window).unbind('scroll', handler);
          }

          handler = function () {
            // check have we display small menu or normal menu ?
            coreFuns.displayMenu();
          };

          $(window).bind('scroll', handler);

          config.onNormalMenu();
        },
        mobile_intelligent_menu() {
          if ($.browser.mobile === true) {
            this.intelligent_menu();
          } else {
            this.fixed_menu();
          }
        },
      };

      return publicFuns;
    }

    $.fn.menu = function (options) {
      const $element = this.first();
      const menuFuns = new Menu($element, options);
      return menuFuns;
    };
  }());


  // call to Menu plugin
  const menuFun = $('header').menu({
    className: 'hide-menu',
    position: '100px',
  });

  window.menuFun = menuFun;

  $('.blog-link').on('click', () => {
    swal('Ops!', 'I am glad you want to check the blog, I will have it ready as soon as I can please be patient', 'info');
  });

  const elem = document.querySelector('#blog-posts');
  const msnry = new Masonry(elem, {
    // options
    itemSelector: '.single-post',
    columnWidth: 30,
  });
  msnry.layout();
  /* Choose your navigation style */

  menuFun.intelligent_menu(); // Hide intelligently
  // menuFun.fixed_menu(); // Always fixed
  // menuFun.mobile_intelligent_menu(); // Hide on Mobile Devices


  $('#switch input').on('change', function () {
    const menuId = this.id;

    if (menuId === 'menu1') {
      menuFun.fixed_menu();
    } else if (menuId === 'menu2') {
      menuFun.intelligent_menu();
    } else {
      menuFun.mobile_intelligent_menu();
    }
  });

  // window scroll Sections scrolling
  (function () {
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


  $('.section-call-to-btn.call-to-about').delay(1000).fadeIn(0, function () {
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
      $(this).find('.singel-hr-inner').each(function () {
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
