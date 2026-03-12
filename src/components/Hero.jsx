import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Filmmaker &amp; Social Media Manager</p>
        <h1 className="hero__name">Jules Kostalova</h1>
        <p className="hero__tagline">
          Crafting visual stories that resonate.<br />
          Building communities that engage.
        </p>
        <div className="hero__cta">
          <a href="#film-work" className="btn btn--primary">View Film Work</a>
          <a href="#contact" className="btn btn--outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
