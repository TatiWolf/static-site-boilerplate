import './style.scss'
import './templates/frame-border-container/frame-border-container'
function observeAndAnimate(target, className) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px', threshold: 0.5 });

  observer.observe(target);
}

observeAndAnimate(document.querySelector('.solution__wrap-text-block-right'), 'left-to-right-animation');
observeAndAnimate(document.querySelector('.solution__wrap-text-block-left'), 'right-to-left-animation')
