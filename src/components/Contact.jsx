import './Contact.css';

const contactLinks = [
  {
    label: 'Email',
    value: 'jules@kostalova.cz',
    href: 'mailto:jules@kostalova.cz',
    icon: '✉',
  },
  {
    label: 'Instagram',
    value: '@juleskostalova',
    href: 'https://instagram.com/juleskostalova',
    icon: '◫',
  },
  {
    label: 'Vimeo',
    value: 'vimeo.com/juleskostalova',
    href: 'https://vimeo.com/juleskostalova',
    icon: '▷',
  },
  {
    label: 'LinkedIn',
    value: 'Jules Kostalova',
    href: 'https://linkedin.com/in/juleskostalova',
    icon: '◧',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__text">
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">Let&apos;s Work Together</h2>
            <p className="contact__desc">
              Whether you have a film project in mind, need a social media strategy,
              or just want to connect — I&apos;d love to hear from you.
            </p>
            <p className="contact__availability">
              <span className="contact__status" aria-label="Available for work">●</span>
              Currently available for freelance projects
            </p>
          </div>
          <div className="contact__links">
            {contactLinks.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                className="contact__link"
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              >
                <span className="contact__link-icon" aria-hidden="true">{icon}</span>
                <div>
                  <p className="contact__link-label">{label}</p>
                  <p className="contact__link-value">{value}</p>
                </div>
                <span className="contact__link-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
