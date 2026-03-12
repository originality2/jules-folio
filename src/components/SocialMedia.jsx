import './SocialMedia.css';

const caseStudies = [
  {
    id: 1,
    client: 'Luminary Skincare',
    industry: 'Beauty & Wellness',
    platform: 'Instagram · TikTok',
    results: [
      { metric: '+340%', label: 'Follower Growth' },
      { metric: '8.2%', label: 'Avg. Engagement Rate' },
      { metric: '2.1M', label: 'Impressions / Month' },
    ],
    description:
      'Developed a full content strategy and visual identity for a Prague-based skincare startup, scaling their audience from 1.2k to over 5k in six months through consistent storytelling and community-first content.',
  },
  {
    id: 2,
    client: 'Atelier Nová',
    industry: 'Independent Fashion',
    platform: 'Instagram · Pinterest',
    results: [
      { metric: '+220%', label: 'Profile Visits' },
      { metric: '12%', label: 'Stories View Rate' },
      { metric: '3× ROI', label: 'Campaign Return' },
    ],
    description:
      'Managed editorial calendar, influencer coordination, and paid social for a sustainable fashion atelier. Created a behind-the-scenes film series that became their highest-performing content format.',
  },
  {
    id: 3,
    client: 'Honí Studio',
    industry: 'Architecture & Design',
    platform: 'Instagram · LinkedIn',
    results: [
      { metric: '+180%', label: 'LinkedIn Reach' },
      { metric: '6.5%', label: 'Avg. Engagement Rate' },
      { metric: '4 Leads', label: 'Avg. Per Post' },
    ],
    description:
      'Built a dual-channel strategy that positioned Honí Studio as a thought leader in sustainable architecture, balancing visual portfolio posts with long-form LinkedIn content and video walkthroughs.',
  },
];

const services = [
  {
    icon: '◈',
    title: 'Content Strategy',
    desc: 'Audience research, platform audits, content calendars, and brand voice development.',
  },
  {
    icon: '◉',
    title: 'Content Production',
    desc: 'Photo direction, short-form video, Reels & TikToks, and graphics — all cohesively branded.',
  },
  {
    icon: '◎',
    title: 'Community Management',
    desc: 'Daily engagement, inbox management, comment moderation, and community-building initiatives.',
  },
  {
    icon: '◐',
    title: 'Analytics & Reporting',
    desc: 'Monthly performance reports with actionable insights, A/B testing, and growth tracking.',
  },
];

export default function SocialMedia() {
  return (
    <section id="social-media" className="social-media section">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Social Media</p>
          <h2 className="section__title">Digital Presence &amp; Community</h2>
          <p className="section__subtitle">
            Helping brands grow meaningful audiences through strategic content and genuine storytelling.
          </p>
        </div>

        <div className="social-media__services">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <span className="service-card__icon" aria-hidden="true">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="social-media__case-title">Case Studies</h3>
        <div className="social-media__cases">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="case-card">
              <div className="case-card__header">
                <div>
                  <h4 className="case-card__client">{cs.client}</h4>
                  <p className="case-card__industry">{cs.industry}</p>
                </div>
                <span className="case-card__platform">{cs.platform}</span>
              </div>
              <p className="case-card__desc">{cs.description}</p>
              <div className="case-card__results">
                {cs.results.map((r) => (
                  <div key={r.label} className="case-card__result">
                    <span className="case-card__metric">{r.metric}</span>
                    <span className="case-card__result-label">{r.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
