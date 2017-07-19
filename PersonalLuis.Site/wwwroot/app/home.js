import 'wowjs';

const WOW = window.WOW;
const $ = window.jQuery;

// for scrolling to targeted sections

$.fn.scrollingTo = (opts) => {
  const defaults = {
    animationTime: 1000,
    easing: '',
    topSpace: 0,
    callbackBeforeTransition() { },
    callbackAfterTransition() { },
  };

  const config = $.extend({}, defaults, opts);

  $(this).on('click', (e) => {
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

$(document).ready(() => {
  const sklSlider = $('#skillSlider');

  sklSlider.owlCarousel({
    slideSpeed: 400,
    itemsCustom: [
      [0, 3],
      [400, 4],
      [500, 5],
      [620, 6],
      [700, 8],
      [992, 5],
      [1200, 6],
    ],
    pagination: false,
  });

  const sklData = sklSlider.data('owlCarousel');
  const sklTgt = $('.skl-ctrl').find('.go');

  sklTgt.on('click', (e) => {
    e.preventDefault();
    if ($(this).hasClass('go-left')) {
      sklData.prev();
    } else {
      sklData.next();
    }
  });


  const exSlider = $('#experienceSlider');
  exSlider.owlCarousel({
    items: 3,
    slideSpeed: 600,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [800, 2],
    itemsMobile: [500, 1],
    pagination: false,
  });
  const exData = exSlider.data('owlCarousel');


  const exTgt = $('.exp-ctrl').find('.go');
  exTgt.on('click', (e) => {
    e.preventDefault();
    if ($(this).hasClass('go-left')) {
      exData.prev();
    } else {
      exData.next();
    }
  });


  const edSlider = $('#educationSlider');
  edSlider.owlCarousel({
    slideSpeed: 600,
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [800, 2],
    itemsMobile: [500, 1],
    pagination: false,
  });
  const edData = edSlider.data('owlCarousel');


  const edTgt = $('.edu-ctrl').find('.go');
  edTgt.on('click', (e) => {
    e.preventDefault();

    if ($(this).hasClass('go-left')) {
      edData.prev();
    } else {
      edData.next();
    }
  });


  const tmSlider = $('#teamSlider');
  tmSlider.owlCarousel({
    slideSpeed: 600,
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [900, 3],
    itemsTablet: [800, 2],
    itemsMobile: [500, 1],
    pagination: false,
  });
  const tmData = tmSlider.data('owlCarousel');


  const tmTgt = $('.tmu-ctrl').find('.go');
  tmTgt.on('click', (e) => {
    e.preventDefault();

    if ($(this).hasClass('go-left')) {
      tmData.prev();
    } else {
      tmData.next();
    }
  });


  const tesMoSlider = $('#testimonialSlider');
  tesMoSlider.owlCarousel({
    slideSpeed: 600,
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
    pagination: false,
  });

  const tmoData = tesMoSlider.data('owlCarousel');


  const tmoTgt = $('.tmo-ctrl').find('.go');


  tmoTgt.on('click', (e) => {
    e.preventDefault();

    if ($(this).hasClass('go-left')) {
      tmoData.prev();
    } else {
      tmoData.next();
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

          handler = (e) => {
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

          handler = () => {
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


  /* Choose your navigation style */

  menuFun.intelligent_menu(); // Hide intelligently
  // menuFun.fixed_menu(); // Always fixed
  // menuFun.mobile_intelligent_menu(); // Hide on Mobile Devices

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
            if (!prevSectionIndex < 0) {
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
});

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
