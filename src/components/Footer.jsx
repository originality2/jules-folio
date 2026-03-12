import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">Jules Kostalova</p>
        <p className="footer__copy">
          © {year} · Filmmaker &amp; Social Media Manager · Prague
        </p>
      </div>
    </footer>
  );
}
