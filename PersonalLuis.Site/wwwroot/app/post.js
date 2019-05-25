﻿import tippy from 'tippy.js';
import mediumZoom from 'medium-zoom';

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

const targetImgs = document.querySelectorAll('.single-post-content .thumb-wrap > img');
const targetPictures = document.querySelectorAll('.single-post-content picture.lazy');
const disqusDiv = document.getElementById('disqus_thread');

const lazyLoadImg = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        img.setAttribute('src', src);
        img.addEventListener('load', (e) => {
          e.target.classList.add('blur-in');
          e.target.classList.remove('lazy');
        });
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

const lazyLoadPicture = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const picture = entry.target;
        picture.childNodes.forEach((child) => {
          if (child.tagName === 'SOURCE') {
            const { srcset } = child.dataset;
            child.srcset = srcset;
          }
          if (child.tagName === 'IMG') {
            const { src } = child.dataset;
            child.src = src;
            child.addEventListener('load', (e) => {
              e.target.classList.add('blur-in');
              picture.classList.remove('lazy');
            });
          }
        });
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

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
targetImgs.forEach(lazyLoadImg);
targetPictures.forEach(lazyLoadPicture);
