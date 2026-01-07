import React from "react";
import { Search } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="container hero__content">
        <h1 className="hero__title">
          ZNAJDŹ SWOJE <br />
          <span className="hero__title--accent">IDEALNE</span> AUTO
        </h1>

        <div className="hero__search-box">
          <div className="hero__search-field">
            <label>Marka</label>
            <select>
              <option>Dowolna Marka</option>
            </select>
          </div>
          <div className="hero__search-field">
            <label>Model</label>
            <select>
              <option>Dowolny Model</option>
            </select>
          </div>
          <div className="hero__search-field">
            <label>Cena do</label>
            <input type="number" placeholder="Np. 50 000" />
          </div>
          <button className="hero__search-btn">
            <Search size={20} /> SZUKAJ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
