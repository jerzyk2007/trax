import React from "react";
import { ShieldCheck, Wrench, Users, Award, ChevronRight } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* SECTION HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>Doskonałość w każdym detalu</h1>
          <p>
            Od ponad 30 lat dbamy o Twoje bezpieczeństwo na drodze. Jako
            autoryzowany dealer zapewniamy najwyższy standard obsługi serwisowej
            i sprzedażowej.
          </p>
          <div className="hero-btns">
            <a href="/used-cars" className="btn-primary">
              Sprawdź auta używane
            </a>
            <a href="/locations" className="btn-secondary">
              Znajdź nasz serwis
            </a>
          </div>
        </div>
      </section>

      {/* SECTION FEATURES */}
      <section className="home-features">
        <div className="features-grid">
          <div className="feature-card">
            <ShieldCheck size={40} className="feature-icon" />
            <h3>Gwarancja Jakości</h3>
            <p>
              Stosujemy wyłącznie oryginalne części zamienne i certyfikowane
              procesy naprawcze.
            </p>
          </div>
          <div className="feature-card">
            <Wrench size={40} className="feature-icon" />{" "}
            {/* Zmienione z Tool na Wrench */}
            <h3>Nowoczesna Diagnostyka</h3>
            <p>
              Nasz park maszynowy spełnia najsurowsze normy producenta, co
              gwarantuje precyzję.
            </p>
          </div>
          <div className="feature-card">
            <Users size={40} className="feature-icon" />
            <h3>Ekspercki Zespół</h3>
            <p>
              Nasi mechanicy przechodzą regularne szkolenia, by sprostać
              technologii jutra.
            </p>
          </div>
          <div className="feature-card">
            <Award size={40} className="feature-icon" />
            <h3>30 Lat Doświadczenia</h3>
            <p>
              Zaufanie tysięcy klientów z Łodzi i Zgierza to nasz największy
              powód do dumy.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION ABOUT */}
      <section className="home-about">
        <div className="about-text">
          <h2>Dlaczego Trax Auto?</h2>
          <p>
            Wierzymy, że zakup samochodu to dopiero początek drogi. Naszą misją
            jest zapewnienie pełnego spokoju ducha każdemu kierowcy. Każdy
            pojazd w naszej ofercie aut używanych przechodzi rygorystyczną
            kontrolę techniczną (ponad 100 punktów kontrolnych), abyś
            wyjeżdżając z salonu, czuł się jak w nowym aucie.
          </p>
          <ul className="about-list">
            <li>
              <ChevronRight size={16} /> Pełna historia serwisowa każdego auta
            </li>
            <li>
              <ChevronRight size={16} /> Możliwość przedłużenia gwarancji
            </li>
            <li>
              <ChevronRight size={16} /> Atrakcyjne pakiety finansowania i
              ubezpieczenia
            </li>
          </ul>
        </div>
        <div className="about-image">
          {/* Tu możesz wstawić zdjęcie salonu lub mechanika przy pracy */}
          <div className="image-placeholder">FOTO SALONU / SERWISU</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
