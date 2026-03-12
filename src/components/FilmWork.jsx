import './FilmWork.css';

const films = [
  {
    id: 1,
    title: 'Tichá Voda',
    year: '2024',
    type: 'Short Film',
    description:
      'A meditative short exploring the relationship between memory and landscape. Filmed across the Bohemian countryside over four seasons.',
    duration: '18 min',
    awards: ['Best Cinematography — Prague Student Film Festival'],
  },
  {
    id: 2,
    title: 'Brand in Motion',
    year: '2024',
    type: 'Branded Content',
    description:
      'A series of five short films for a sustainable fashion label, blending documentary and narrative techniques to articulate the brand\'s ethos.',
    duration: '5 × 3 min',
    awards: [],
  },
  {
    id: 3,
    title: 'Rootless',
    year: '2023',
    type: 'Documentary',
    description:
      'An intimate portrait of three first-generation immigrants navigating identity, belonging, and community in central Europe.',
    duration: '42 min',
    awards: [
      'Official Selection — Jihlava IDFF 2023',
      'Audience Award — Brno Documentary Days',
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
    awards: ['Official Selection — Zlín Film Festival'],
  },
  {
    id: 5,
    title: 'Open Kitchen',
    year: '2022',
    type: 'Branded Content',
    description:
      'Campaign films for a Prague-based restaurant group showcasing their chefs and culinary philosophy through a cinematic lens.',
    duration: '3 × 4 min',
    awards: [],
  },
  {
    id: 6,
    title: 'Still Life #4',
    year: '2022',
    type: 'Experimental',
    description:
      'A textural exploration of urban decay and renewal, shot on 16mm. Screened as part of the "New Voices" programme.',
    duration: '9 min',
    awards: ['New Voices Programme — Prague Film School'],
  },
];

const typeColors = {
  'Short Film': '#c4a265',
  Documentary: '#7fb3a0',
  'Branded Content': '#a08fc4',
  Experimental: '#c47f7f',
};

export default function FilmWork() {
  return (
    <section id="film-work" className="film-work section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Film Work</p>
          <h2 className="section__title">Selected Projects</h2>
          <p className="section__subtitle">
            A selection of narrative, documentary, and branded film work.
          </p>
        </div>
        <div className="film-work__grid">
          {films.map((film) => (
            <article key={film.id} className="film-card">
              <div
                className="film-card__thumb"
                style={{ '--accent': typeColors[film.type] || '#c4a265' }}
                aria-hidden="true"
              >
                <span className="film-card__type-badge" style={{ color: typeColors[film.type] }}>
                  {film.type}
                </span>
              </div>
              <div className="film-card__body">
                <div className="film-card__meta">
                  <span className="film-card__year">{film.year}</span>
                  <span className="film-card__duration">{film.duration}</span>
                </div>
                <h3 className="film-card__title">{film.title}</h3>
                <p className="film-card__desc">{film.description}</p>
                {film.awards.length > 0 && (
                  <ul className="film-card__awards">
                    {film.awards.map((award) => (
                      <li key={award} className="film-card__award">
                        <span className="film-card__award-icon" aria-hidden="true">★</span>
                        {award}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
