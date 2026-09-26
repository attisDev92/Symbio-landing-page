const { useState, useEffect, useRef, useCallback } = React;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
