import 'normalize.css';
import 'animate.css';
import 'jquery.easing';
import Masonry from 'masonry-layout';

import '../legacy-libs/materialize/css/materialize.min.css';

import '../css/site.css';
import '../css/responsive.css';
import '../css/theme.css';
import '../css/blog.css';

import '../legacy-libs/waypoints';

import '../legacy-libs/materialize/js/materialize.min';

import './common';

const elem = document.querySelector('#blog-posts');
const msnry = new Masonry(elem, {
  // options
  itemSelector: '.single-post',
  columnWidth: 30,
});
msnry.layout();
