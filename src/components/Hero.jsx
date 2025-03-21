import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src="/src/assets/rick-and-morty-escape-portal-moewalls-com.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="hero-content">
        <h1>Bienvenido a Rick and Morty API</h1>
      </div>
    </div>
  );
}

export default Hero;
