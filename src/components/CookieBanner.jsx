import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdź, czy użytkownik już zaakceptował cookies
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Pokaż baner z lekkim opóźnieniem dla lepszego UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-container">
        <div className="cookie-content">
          <div className="cookie-icon-wrapper">
            <Cookie size={24} className="cookie-icon" />
          </div>
          <div className="cookie-text">
            <h4>Dbamy o Twoją prywatność</h4>
            <p>
              Nasza strona korzysta z plików cookies, aby zapewnić Ci maksymalny
              komfort podczas przeglądania serwisu. Korzystając ze strony
              wyrażasz zgodę na używanie cookies zgodnie z aktualnymi
              ustawieniami przeglądarki. Możesz je zmienić w dowolnym momencie w
              ustawieniach swojej przeglądarki. Więcej informacji znajdziesz w
              naszej <a href="/polityka-prywatnosci">Polityce Prywatności</a>.
            </p>
          </div>
        </div>
        <div className="cookie-actions">
          <button className="btn-cookie-decline" onClick={handleDecline}>
            Tylko niezbędne
          </button>
          <button className="btn-cookie-accept" onClick={handleAccept}>
            Akceptuję wszystkie
          </button>
        </div>
        <button className="cookie-close" onClick={() => setIsVisible(false)}>
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
