import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import "./Locations.css";

const Locations = () => {
  return (
    <section className="locations container">
      <div className="location-card location-card--dark">
        <h3>Salon Łódź</h3>
        <div className="location-card__info">
          <p>
            <MapPin size={18} /> Maratońska 111, Łódź
          </p>
          <p>
            <Phone size={18} /> 42 630 00 66
          </p>
          <p>
            <Clock size={18} /> Pn-Pt: 10:00 - 18:00
          </p>
        </div>
        <button className="location-card__btn-outline">DOJAZD</button>
      </div>

      <div className="location-card location-card--light">
        <h3>Salon Zgierz</h3>
        <div className="location-card__info">
          <p>
            <MapPin size={18} /> Łęczycka 38, Zgierz
          </p>
          <p>
            <Phone size={18} /> 42 714 33 00
          </p>
          <p>
            <Clock size={18} /> Pn-Pt: 09:00 - 17:00
          </p>
        </div>
        <button className="location-card__btn-dark">SZCZEGÓŁY</button>
      </div>
    </section>
  );
};

export default Locations;
