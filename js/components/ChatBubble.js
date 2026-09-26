function ChatBubble({ from, text, delay = 0, active }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add('in-view'), delay);
    return () => clearTimeout(t);
  }, [active, delay]);

  return (
    <div ref={ref} className={`chat-bubble from-${from}`}>
      {text}
    </div>
  );
}
