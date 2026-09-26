function CountUp({ value, duration = 2600 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value.replace(/\d+/g, '0'));
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          animate();
          io.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  function animate() {
    const numbers = [...value.matchAll(/\d+/g)];
    if (numbers.length === 0) { setDisplay(value); return; }
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      let result = value;
      for (let i = numbers.length - 1; i >= 0; i--) {
        const target = parseInt(numbers[i][0], 10);
        const current = Math.round(target * eased);
        result = result.slice(0, numbers[i].index) + current + result.slice(numbers[i].index + numbers[i][0].length);
      }
      setDisplay(result);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  return <b ref={ref}>{display}</b>;
}
