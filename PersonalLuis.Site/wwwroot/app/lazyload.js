const ioWrapper = (target, onIntersect) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Target is now on view port
        onIntersect(entry);
        observer.disconnect();
      }
    });
  });
  io.observe(target);
};

export const lazyLoad = (target) => {
  ioWrapper(target, (entry) => {
    const img = entry.target;
    const { src } = img.dataset;
    img.setAttribute('src', src);
    img.addEventListener('load', (evt) => {
      const imgLoaded = evt.target;
      imgLoaded.classList.add('blur-in');
      imgLoaded.classList.remove('lazy');
    });
  });
};

export const lazyLoadPicture = (target) => {
  ioWrapper(target, (entry) => {
    const picture = entry.target;
    picture.childNodes.forEach((childNode) => {
      const child = childNode;
      if (child.tagName === 'SOURCE') {
        const { srcset } = child.dataset;
        child.srcset = srcset;
      }
      if (child.tagName === 'IMG') {
        const { src } = child.dataset;
        child.src = src;
        child.addEventListener('load', (evt) => {
          evt.target.classList.add('blur-in');
          picture.classList.remove('lazy');
        });
      }
    });
  });
};
