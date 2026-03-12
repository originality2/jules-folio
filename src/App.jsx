import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FilmWork from './components/FilmWork';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FilmWork />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
