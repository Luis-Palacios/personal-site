import $ from 'jquery';
import 'normalize.css';
import '../legacy-libs/custom-modernizr';
import '../legacy-libs/custom-bootstrap/bootstrap.min.css';
import '../legacy-libs/materialize/css/materialize.min.css';
import '../legacy-libs/font-awesome/css/solid.css';
import '../legacy-libs/font-awesome/css/brands.css';
import '../legacy-libs/font-awesome/css/fontawesome.css';
import '../css/site.css';
import '../css/responsive.css';
import '../css/theme.css';

const { personalSite } = window;

// callback after ready the document
$(document).ready(() => {
  // Menu animations plugin
  (function loadMenu() {
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

          handler = function menuHandler(e) {
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

          handler = function fixedMenuHandler() {
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

    $.fn.menu = function $menu(options) {
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

  $('.search-form-li').on('click', (e) => {
    e.stopPropagation();
    $('.search-form-li').find('#initSearchIcon').addClass('hide');
    $('.search-form-wrap').removeClass('hide').find('input.search').focus();
    $('.side-nav').addClass('hide');
  });

  if (!personalSite) {
    $(window).on('click', () => {
      $('.search-form-li').find('#initSearchIcon').removeClass('hide');
      $('.search-form-wrap').addClass('hide');
      $('.side-nav').removeClass('hide');
    });
  } else {
    $('.search-form-li').trigger('click');
    $('.button-collapse').on('click', () => {
      $('.search-form-li').find('#initSearchIcon').removeClass('hide');
      $('.search-form-wrap').addClass('hide');
      $('.side-nav').removeClass('hide');
    });
  }

  $('.primary-nav .button-collapse').sideNav();
});

// callback after loading the window
$(window).on('load', () => {
  // Preloader
  $('.loader').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350);
});
