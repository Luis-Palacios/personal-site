import 'jquery.easing';
import tippy from 'tippy.js';
import '../legacy-libs/materialize/css/materialize.min.css';
import '../css/site.css';
import '../css/responsive.css';
import '../css/theme.css';
import '../css/blog.css';
import '../legacy-libs/waypoints';
import '../legacy-libs/materialize/js/materialize.min';
import './common';

tippy('.social-share li', {
  flipBehavior: ['left', 'top'],
});

document.getElementById('facebook-share').addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  FB.ui({
    method: 'share',
    href: window.location.href,
  }, () => { });
});
