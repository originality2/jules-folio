import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(10, 10, 10, 0.82)' : 'rgba(10, 10, 10, 0.45)')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'blur(8px)')};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'blur(8px)')};
  border-bottom: 1px solid rgba(232, 213, 176, 0.08);
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 20px rgba(0, 0, 0, 0.5)' : 'none')};
  transition: background 0.3s ease, box-shadow 0.3s ease;

  .navbar__logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: #e8d5b0;
    text-decoration: none;
    font-family: 'Georgia', serif;
  }

  .navbar__links {
    list-style: none;
    display: flex;
    gap: 2.5rem;
    margin: 0;
    padding: 0;
  }

  .navbar__links a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.2s ease;
  }

  .navbar__links a:hover {
    color: #e8d5b0;
  }

  .navbar__hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .navbar__hamburger span {
    display: block;
    height: 2px;
    width: 100%;
    background: #ccc;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .navbar__hamburger.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .navbar__hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .navbar__hamburger.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (max-width: 640px) {
    padding: 1rem 1.5rem;

    .navbar__hamburger {
      display: flex;
    }

    .navbar__links {
      display: ${({ $scrolled }) => ($scrolled ? 'none' : 'none')};
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      gap: 0;
      background: rgba(10, 10, 10, 0.98);
      padding: 1rem 0;
    }

    .navbar__links.navbar__links--open {
      display: flex;
    }

    .navbar__links li a {
      display: block;
      padding: 0.75rem 1.5rem;
    }
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Film Work', href: '#film-work' },
    { label: 'Social Media', href: '#social-media' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <Nav $scrolled={scrolled}>
      <a className="navbar__logo" href="#top">JK</a>
      <button
        className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={handleLinkClick}>{label}</a>
          </li>
        ))}
      </ul>
    </Nav>
  );
}
