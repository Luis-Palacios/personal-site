import tippy from 'tippy.js';
import mediumZoom from 'medium-zoom';

import { lazyLoad, lazyLoadPicture } from './lazyload';
import '../legacy-libs/materialize/css/materialize.min.css';
import '../css/animations.css';
import '../css/site.css';
import '../css/responsive.css';
import '../css/theme.css';
import '../css/blog.css';

import './common';
import '../legacy-libs/waypoints';
import '../legacy-libs/materialize/js/materialize.min';

tippy('.social-share li, .sm-change-language a', {
  flipBehavior: ['left', 'top'],
});

mediumZoom('.single-post-content img');

document.getElementById('facebook-share').addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  FB.ui({
    method: 'share',
    href: window.location.href,
  }, () => { });
});

document.getElementById('linkedin-share').addEventListener('click', () => {
  const url = window.location.href;
  window.open(`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`, '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
});

const targetImgs = document.querySelectorAll('.single-post-content .thumb-wrap > img.lazy');
const targetPictures = document.querySelectorAll('.single-post-content picture.lazy');

targetImgs.forEach(lazyLoad);
targetPictures.forEach(lazyLoadPicture);
