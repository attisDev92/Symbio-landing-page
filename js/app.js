function App() {
  useReveal();
  return (
    <React.Fragment>
      <ParticlesBackground />
      <Nav />
      <Hero />
      <Problem />
      <ComoFunciona />
      <Funcionalidades />
      <Contacto />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
