function Logo({ id, className, style }) {
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.innerHTML = rawLogoMarkup(id); }, [id]);
  return <div ref={ref} className={className} style={style} aria-hidden="false" />;
}
