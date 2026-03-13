import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './FilmWork.css';

const workProjects = [
  {
    id: 1,
    title: 'Tichá Voda',
    year: '2024',
    type: 'Short Film',
    description:
      'A meditative short exploring the relationship between memory and landscape. Filmed across the Bohemian countryside over four seasons.',
    duration: '18 min',
    role: 'Director · Cinematographer',
    awards: ['Best Cinematography — Prague Student Film Festival'],
    stills: [
      { title: 'Fog at Dawn', tone: '#8B0F2B' },
      { title: 'Riverbank Close-up', tone: '#5C0A1D' },
      { title: 'Winter Drift', tone: '#C6A15B' },
    ],
  },
  {
    id: 2,
    title: 'Brand in Motion',
    year: '2024',
    type: 'Branded Content',
    description:
      'A series of five short films for a sustainable fashion label, blending documentary and narrative techniques to articulate the brand\'s ethos.',
    duration: '5 × 3 min',
    role: 'Creative Lead · Editor',
    awards: [],
    stills: [
      { title: 'Fabric Motion', tone: '#D6336C' },
      { title: 'Studio Portrait', tone: '#8B0F2B' },
      { title: 'Campaign Close-up', tone: '#C6A15B' },
    ],
  },
  {
    id: 3,
    title: 'Rootless',
    year: '2023',
    type: 'Documentary',
    description:
      'An intimate portrait of three first-generation immigrants navigating identity, belonging, and community in central Europe.',
    duration: '42 min',
    role: 'Director · Producer',
    awards: [
      'Official Selection — Jihlava IDFF 2023',
      'Audience Award — Brno Documentary Days',
    ],
    stills: [
      { title: 'Street Interview', tone: '#5C0A1D' },
      { title: 'Community Gathering', tone: '#D6336C' },
      { title: 'Evening Portrait', tone: '#C6A15B' },
    ],
  },
  {
    id: 4,
    title: 'The Glass Hour',
    year: '2023',
    type: 'Short Film',
    description:
      'A psychological drama about a glassblower confronting the boundaries between creation and destruction.',
    duration: '22 min',
    role: 'Writer · Director',
    awards: ['Official Selection — Zlín Film Festival'],
    stills: [
      { title: 'Furnace Glow', tone: '#AB3428' },
      { title: 'Workshop Silhouette', tone: '#8B0F2B' },
      { title: 'Molten Glass Detail', tone: '#C6A15B' },
    ],
  },
  {
    id: 5,
    title: 'Open Kitchen',
    year: '2022',
    type: 'Branded Content',
    description:
      'Campaign films for a Prague-based restaurant group showcasing their chefs and culinary philosophy through a cinematic lens.',
    duration: '3 × 4 min',
    role: 'Director · Colorist',
    awards: [],
    stills: [
      { title: 'Kitchen Rush', tone: '#AB3428' },
      { title: 'Chef Portrait', tone: '#D6336C' },
      { title: 'Plating Detail', tone: '#C6A15B' },
    ],
  },
  {
    id: 6,
    title: 'Still Life #4',
    year: '2022',
    type: 'Experimental',
    description:
      'A textural exploration of urban decay and renewal, shot on 16mm. Screened as part of the "New Voices" programme.',
    duration: '9 min',
    role: 'Director · Camera',
    awards: ['New Voices Programme — Prague Film School'],
    stills: [
      { title: 'Concrete Texture', tone: '#5C0A1D' },
      { title: 'Neon Corridor', tone: '#D6336C' },
      { title: 'Rooftop Grain', tone: '#C6A15B' },
    ],
  },
];

export default function FilmWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [activeHeight, setActiveHeight] = useState(null);
  const activeInnerRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const { activeProject, prevProject, nextProject } = useMemo(() => {
    const total = workProjects.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;
    return {
      activeProject: workProjects[activeIndex],
      prevProject: workProjects[prevIndex],
      nextProject: workProjects[nextIndex],
    };
  }, [activeIndex]);

  useLayoutEffect(() => {
    if (!activeInnerRef.current) {
      return;
    }
    setActiveHeight(activeInnerRef.current.offsetHeight);
  }, [activeIndex]);

  useEffect(() => {
    const updateHeight = () => {
      if (!activeInnerRef.current) {
        return;
      }
      setActiveHeight(activeInnerRef.current.offsetHeight);
    };

    updateHeight();

    let resizeObserver;
    if (activeInnerRef.current && 'ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => updateHeight());
      resizeObserver.observe(activeInnerRef.current);
    }

    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [activeIndex]);

  const goNext = () => {
    setDirection('next');
    setActiveIndex((index) => (index + 1) % workProjects.length);
  };

  const goPrev = () => {
    setDirection('prev');
    setActiveIndex((index) => (index - 1 + workProjects.length) % workProjects.length);
  };

  const goToIndex = (index) => {
    if (index === activeIndex) {
      return;
    }
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const minimumSwipeDistance = 42;

    if (Math.abs(deltaX) < minimumSwipeDistance || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
      return;
    }

    goPrev();
  };

  return (
    <section id="work" className="film-work section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Work</p>
          <h2 className="section__title">Selected Projects</h2>
          <p className="section__subtitle">
            A curated mix of narrative, documentary, and branded visual work.
          </p>
        </div>

        <div className="work-carousel">
          <div className="work-carousel__track">
            <article className="work-preview" onClick={goPrev} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && goPrev()}>
              <p className="work-preview__kicker">Previous</p>
              <h3 className="work-preview__title">{prevProject.title}</h3>
              <p className="work-preview__meta">{prevProject.type} · {prevProject.year}</p>
            </article>

            <article
              className="work-active"
              style={activeHeight ? { height: `${activeHeight}px` } : undefined}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                key={activeProject.id}
                ref={activeInnerRef}
                className={`work-active__inner work-active__inner--${direction}`}
              >
                <div className="work-active__header">
                  <span className="work-active__badge">{activeProject.type}</span>
                  <span className="work-active__year">{activeProject.year}</span>
                </div>

                <h3 className="work-active__title">{activeProject.title}</h3>
                <p className="work-active__role">{activeProject.role}</p>
                <p className="work-active__desc">{activeProject.description}</p>

                <div className="work-active__details">
                  <div>
                    <p className="work-active__detail-label">Duration</p>
                    <p className="work-active__detail-value">{activeProject.duration}</p>
                  </div>
                  <div>
                    <p className="work-active__detail-label">Year</p>
                    <p className="work-active__detail-value">{activeProject.year}</p>
                  </div>
                  <div>
                    <p className="work-active__detail-label">Category</p>
                    <p className="work-active__detail-value">{activeProject.type}</p>
                  </div>
                </div>

                <div className="work-active__gallery" aria-label="Project stills">
                  {activeProject.stills.map((still) => (
                    <div key={still.title} className="work-active__still" style={{ '--still-tone': still.tone }}>
                      <span>{still.title}</span>
                    </div>
                  ))}
                </div>

                {activeProject.awards.length > 0 && (
                  <ul className="work-active__awards">
                    {activeProject.awards.map((award) => (
                      <li key={award}>★ {award}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>

            <article className="work-preview" onClick={goNext} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && goNext()}>
              <p className="work-preview__kicker">Next</p>
              <h3 className="work-preview__title">{nextProject.title}</h3>
              <p className="work-preview__meta">{nextProject.type} · {nextProject.year}</p>
            </article>
          </div>
        </div>

        <div className="work-carousel__dots" aria-label="Project selection">
          {workProjects.map((project, index) => (
            <button
              key={project.id}
              className={`work-carousel__dot${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Show ${project.title}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
