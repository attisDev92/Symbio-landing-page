function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = canvas.getContext('2d');
    let width = 0, height = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles = [];
    let rafId = null;
    let mouse = { x: -9999, y: -9999, active: false };

    const styles = getComputedStyle(document.documentElement);
    const dotColor = (styles.getPropertyValue('--particle-dot') || styles.getPropertyValue('--accent2') || '#C026D3').trim();
    const lineColor = (styles.getPropertyValue('--particle-line') || styles.getPropertyValue('--accent1') || '#6D28D9').trim();

    function hexToRgb(hex) {
      const m = hex.replace('#', '');
      const bigint = parseInt(m.length === 3 ? m.split('').map(c => c + c).join('') : m, 16);
      return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    }
    const dotRgb = hexToRgb(dotColor.startsWith('#') ? dotColor : '#C026D3');
    const lineRgb = hexToRgb(lineColor.startsWith('#') ? lineColor : '#6D28D9');

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const count = Math.max(24, Math.min(90, Math.round(area / 14000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1.1,
      }));
    }

    const LINK_DIST = 130;
    const MOUSE_DIST = 200;

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const dx = particles[i].x - mouse.x, dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_DIST) {
            const alpha = (1 - dist / MOUSE_DIST) * 0.9;
            ctx.strokeStyle = `rgba(${dotRgb.r}, ${dotRgb.g}, ${dotRgb.b}, ${alpha})`;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.fillStyle = `rgba(${dotRgb.r}, ${dotRgb.g}, ${dotRgb.b}, 0.75)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mouse.active) {
        ctx.fillStyle = `rgba(${dotRgb.r}, ${dotRgb.g}, ${dotRgb.b}, 0.95)`;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.8, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(step);
    }

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function onMouseLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onTouchMove(e) {
      if (!e.touches || !e.touches[0]) return;
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
      mouse.active = true;
    }

    resize();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onMouseLeave);

    let resizeTimer = null;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    }
    window.addEventListener('resize', onResize);

    if (reduceMotion) {
      // draw a single static frame (particles at rest), no animation loop
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(${lineRgb.r}, ${lineRgb.g}, ${lineRgb.b}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${dotRgb.r}, ${dotRgb.g}, ${dotRgb.b}, 0.75)`;
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      rafId = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onMouseLeave);
    };
  }, []);

  return <canvas className="particles-bg" ref={canvasRef} aria-hidden="true"></canvas>;
}
