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
