let scrollDirection,
  $ = window.jQuery;

// for scrolling to targeted sections

(function ($) {
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
}(jQuery));

$(document).ready(function ($) {
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

  sklTgt.on('click', function (e) {
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
  exTgt.on('click', function (e) {
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
  edTgt.on('click', function (e) {
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
  tmTgt.on('click', function (e) {
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


  tmoTgt.on('click', function (e) {
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

  // Animate scrolling on hire me button
  $('.hire-me-btn').on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('#contact').offset().top }, 500);
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
          if (jQuery.browser.mobile === true) {
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
          let activeSection, active_section_index, prev_section_index;
          activeSection = $(this);
          active_section_index = getActiveSectionLength($(this), sections);
          prev_section_index = (active_section_index - 1);

          if (direction === 'up') {
            scrollDirection = 'up';
            if (prev_section_index < 0) {
              activeSection = activeSection;
            } else {
              activeSection = sections.eq(prev_section_index);
            }
          } else {
            scrollDirection = 'Down';
          }


          if (activeSection.attr('id') != 'home') {
            const active_link = $('.menu-smooth-scroll[href="#' + activeSection.attr('id') + '"]');
            active_link.parent('li').addClass('current').siblings().removeClass('current');
          } else {
            $('.menu-smooth-scroll').parent('li').removeClass('current');
          }
        },
        offset: '35%',
      });
    }
  }());

  // Map
  const mapStyle = [
    {
      featureType: 'landscape',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 50,
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 40,
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.highway',
      stylers: [
        {
          saturation: -100,
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 20,
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'road.local',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 30,
        },
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          saturation: -100,
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
        {
          lightness: -0,
        },
        {
          saturation: -0,
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#00baff',
        },
        {
          lightness: -10,
        },
        {
          saturation: -95,
        },
      ],
    },
  ];

  let $mapWrapper = $('#map'), draggableOp;

  if (jQuery.browser.mobile === true) {
    draggableOp = false;
  } else {
    draggableOp = true;
  }

  if ($mapWrapper.length > 0) {
    const map = new GMaps({
      div: '#map',
      lat: 23.79473005386213,
      lng: 90.41430473327637,
      scrollwheel: false,
      draggable: draggableOp,
      zoom: 16,
      disableDefaultUI: true,
      styles: mapStyle,
    });

    map.addMarker({
      lat: 23.79473005386213,
      lng: 90.41430473327637,
      icon: 'images/marker-icon.png',
      infoWindow: {
        content: '<p>BD InfoSys Ltd, Dhaka, Bangladesh</p>',
      },
    });
  }
}(jQuery));

$(window).load(() => {
  // section calling
  $('.section-call-to-btn.call-to-home').waypoint({
    handler(event, direction) {
      const $this = $(this);
      $this.fadeIn(0).removeClass('btn-hidden');
      var showHandler = setTimeout(() => {
        $this.addClass('btn-show').removeClass('btn-up');
        clearTimeout(showHandler);
      }, 1500);
    },
    offset: '90%',
  });


  $('.section-call-to-btn.call-to-about').delay(1000).fadeIn(0, function () {
    const $this = $(this);
    $this.removeClass('btn-hidden');
    var showHandler = setTimeout(() => {
      $this.addClass('btn-show').removeClass('btn-up');
      clearTimeout(showHandler);
    }, 1600);
  });

  // portfolio Mesonary
  if ($('#protfolio-msnry').length > 0) {
    // init Isotope
    let loading = 0;
    const portfolioMsnry = $('#protfolio-msnry').isotope({
      itemSelector: '.single-port-item',
      layoutMode: 'fitRows',
    });


    $('#portfolio-msnry-sort a').on('click', function (e) {
      e.preventDefault();

      if ($(this).parent('li').hasClass('active')) {
        return false;
      } else {
        $(this).parent('li').addClass('active').siblings('li')
          .removeClass('active');
      }

      const $this = $(this);
      const filterValue = $this.data('target');

      // set filter for Isotope
      portfolioMsnry.isotope({ filter: filterValue });

      return $(this);
    });

    $('#portfolio-item-loader').on('click', function (e) {
      e.preventDefault();
      const $this = $(this);

      for (let i = 0; i < 3; i++) {
        $.get('portfolioitems.html', (data, status) => {
          let lists, numb, target = $('#portfolio-msnry-sort li.active a').data('target');

          lists = (target != '*') ? $(data).find('li' + target) : $(data).find('li');

          if (lists.length > 0) {
            numb = Math.floor(Math.random() * lists.length);
            portfolioMsnry.isotope('insert', lists.eq(numb));

            loading++;
            (loading == 9) ? $this.remove() : '';
          }
        });
      }
    });

    let portfolioModal = $('#portfolioModal'),
      portImgArea = portfolioModal.find('.model-img'),
      portTitle = portfolioModal.find('.modal-content .title'),
      portContent = portfolioModal.find('.modal-content .m-content'),
      portLink = portfolioModal.find('.modal-footer .modal-action');

    $('#protfolio-msnry').delegate('a.modal-trigger', 'click', function (e) {
      e.preventDefault();
      const $this = $(this);
      portfolioModal.openModal({
        dismissible: true,
        opacity: '.4',
        in_duration: 400,
        out_duration: 400,
        ready() {
          let imgSrc = $this.data('image-source'),
            title = $this.data('title'),
            content = $this.data('content'),
            demoLink = $this.data('demo-link');


          if (imgSrc) {
            portImgArea.html('<img src="' + imgSrc + '" alt="Portfolio Image" />');
          };


          portTitle.text(title);
          portContent.text(content);
          portLink.attr('href', demoLink);
        },
      });
    });
  }

  // skills animation
  $('#skillSlider').waypoint({
    handler(event, direction) {
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

/* =========== count up statistic ==========*/
const $countNumb = $('.countNumb');

if ($countNumb.length > 0) {
  $countNumb.counterUp({
    delay: 15,
    time: 1700,
  });
}

$('#contactForm').on('submit', function (e) {
  e.preventDefault();
  let $this = $(this),
    data = $(this).serialize(),
    name = $this.find('#contact_name'),
    email = $this.find('#email'),
    message = $this.find('#textarea1'),
    loader = $this.find('.form-loader-area'),
    submitBtn = $this.find('button, input[type="submit"]');

  loader.show();
  submitBtn.attr('disabled', 'disabled');

  function success(response) {
    swal('Thanks!', 'Your message has been sent successfully!', 'success');
    $this.find('input, textarea').val('');
  }

  function error(response) {
    $this.find('input.invalid, textarea.invalid').removeClass('invalid');
    if (response.name) {
      name.removeClass('valid').addClass('invalid');
    }

    if (response.email) {
      email.removeClass('valid').addClass('invalid');
    }

    if (response.message) {
      message.removeClass('valid').addClass('invalid');
    }
  }

  $.ajax({
    type: 'POST',
    url: 'inc/sendEmail.php',
    data,
  }).done((res) => {
    const response = JSON.parse(res);

    if (response.OK) {
      success(response);
    } else {
      error(response);
    }

    var hand = setTimeout(() => {
      loader.hide();
      submitBtn.removeAttr('disabled');
      clearTimeout(hand);
    }, 1000);
  }).fail(() => {
    sweetAlert('Oops...', 'Something went wrong, Try again later!', 'error');
    var hand = setTimeout(function () {
      loader.hide();
      submitBtn.removeAttr('disabled');
      clearTimeout(hand);
    }, 1000);
  });
});
