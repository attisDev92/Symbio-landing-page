function App() {
  useReveal();
  return (
    <LanguageProvider>
      <ParticlesBackground />
      <Nav />
      <Hero />
      <Problem />
      <ComoFunciona />
      <Funcionalidades />
      <Contacto />
      <Footer />
    </LanguageProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
