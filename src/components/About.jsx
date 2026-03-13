import './About.css';

const skills = [
  'Narrative Filmmaking',
  'Documentary',
  'Cinematography',
  'Video Editing',
  'Color Grading',
  'Content Strategy',
  'Brand Storytelling',
  'Community Management',
  'Campaign Analytics',
  'Adobe Premiere Pro',
  'DaVinci Resolve',
  'Final Cut Pro',
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrap">
            <div className="about__image-placeholder" aria-hidden="true">
              <div className="about__image-initials">J</div>
            </div>
          </div>
          <div className="about__text">
            <p className="section__eyebrow">About</p>
            <h2 className="section__title">Telling Stories,<br />Frame by Frame</h2>
            <p className="about__bio">
              Hi, I&apos;m Jules — a filmmaker and social media manager based in Prague, Czech Republic.
              With a background in visual arts and digital communication, I bring narratives to life
              through the lens and craft authentic online presences for brands and individuals.
            </p>
            <p className="about__bio">
              My filmmaking spans short films, branded content, and documentary work. On the social media
              side, I partner with creative businesses to build engaged communities, develop content
              strategies, and translate their vision into compelling digital campaigns.
            </p>
            <div className="about__skills">
              <h3 className="about__skills-title">Skills &amp; Tools</h3>
              <ul className="about__skills-list">
                {skills.map((skill) => (
                  <li key={skill} className="about__skill-tag">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
