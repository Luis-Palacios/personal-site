import Masonry from 'masonry-layout';
import './common';
import '../css/blog.css';
import '../legacy-libs/waypoints';
import '../legacy-libs/materialize/js/materialize.min';

const elem = document.querySelector('#blog-posts');
const msnry = new Masonry(elem, {
  // options
  itemSelector: '.single-post',
  columnWidth: 30,
});
msnry.layout();
