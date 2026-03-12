import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const playerHostRef = useRef(null);

  useEffect(() => {
    let player;
    let loopMonitor;
    let cancelled = false;

    const setupPlayer = () => {
      if (!playerHostRef.current || !window.YT?.Player) {
        return;
      }

      player = new window.YT.Player(playerHostRef.current, {
        videoId: '0CzWDHrCoaw',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          start: 0,
          end: 14,
          loop: 1,
          playlist: '0CzWDHrCoaw',
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();

            loopMonitor = window.setInterval(() => {
              const currentTime = event.target.getCurrentTime?.();
              if (typeof currentTime === 'number' && currentTime >= 13.85) {
                event.target.seekTo(0, true);
                event.target.playVideo();
              }
            }, 120);
          },
        },
      });
    };

    const loadApiAndSetup = () => {
      if (window.YT?.Player) {
        setupPlayer();
        return;
      }

      const existingHandler = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        existingHandler?.();
        if (!cancelled) {
          setupPlayer();
        }
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    loadApiAndSetup();

    return () => {
      cancelled = true;
      if (loopMonitor) {
        window.clearInterval(loopMonitor);
      }
      if (player?.destroy) {
        player.destroy();
      }
    };
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__video-wrap" aria-hidden="true">
        <div className="hero__video-player" ref={playerHostRef} />
      </div>
      <div className="hero__loop-transition" aria-hidden="true" />
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
