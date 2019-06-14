import tippy from 'tippy.js';
import mediumZoom from 'medium-zoom';
import { lazyLoad, lazyLoadPicture } from './lazyload';
import './common';
import '../legacy-libs/prism/prism.css';
import '../css/blog.css';
import '../css/animations.css';
import '../legacy-libs/prism/prism';
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
const disqusDiv = document.getElementById('disqus_thread');

const lazyLoadDisqus = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const d = document;
        const s = d.createElement('script');
        s.src = 'https://luispalacios.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

lazyLoadDisqus(disqusDiv);
targetImgs.forEach(lazyLoad);
targetPictures.forEach(lazyLoadPicture);
