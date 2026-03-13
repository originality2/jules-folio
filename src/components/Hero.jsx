import { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="top" className="hero">
      <div className="hero__video-wrap" aria-hidden="true">
        <div className={`hero__video-poster${isVideoPlaying ? ' hero__video-poster--hidden' : ''}`} />
        <video
          className="hero__video-element"
          src="/img/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setIsVideoPlaying(true)}
        />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__eyebrow">Filmmaker &amp; Social Media Manager</p>
        <h1 className="hero__name" data-text="Jules">Jules</h1>
        <p className="hero__tagline">
          Crafting visual stories that resonate.<br />
          Building communities that engage.
        </p>
        <div className="hero__cta">
          <a href="#work" className="btn btn--primary">View Work</a>
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
