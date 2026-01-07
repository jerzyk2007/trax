import React from "react";
import { Search } from "lucide-react";
import "./UsedCars.css";

const UsedCars = () => {
  return (
    <section className="used_cars">
      <div className="used_cars__overlay"></div>
      <div className="container used_cars__content">
        <h1 className="used_cars__title">
          ZNAJDŹ SWOJE <br />
          <span className="used_cars__title--accent">IDEALNE</span> AUTO
        </h1>

        <div className="used_cars__search-box">
          <div className="used_cars__search-field">
            <label>Marka</label>
            <select>
              <option>Dowolna Marka</option>
            </select>
          </div>
          <div className="used_cars__search-field">
            <label>Model</label>
            <select>
              <option>Dowolny Model</option>
            </select>
          </div>
          <div className="used_cars__search-field">
            <label>Cena do</label>
            <input type="number" placeholder="Np. 50 000" />
          </div>
          <button className="used_cars__search-btn">
            <Search size={20} /> SZUKAJ
          </button>
        </div>
      </div>
    </section>
  );
};

export default UsedCars;
