// import React, { useState } from "react";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   Facebook,
//   Instagram,
//   ChevronDown,
//   Clock,
// } from "lucide-react";
// import logoImg from "../assets/logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="trax-header">
//       {/* TOP BAR - Dokładnie jak na stronie */}
//       <div className="trax-top-bar">
//         <div className="trax-container">
//           <div className="trax-top-left">
//             <a href="#" className="social-icon">
//               <Facebook size={16} />
//             </a>
//             <a href="#" className="social-icon">
//               <Instagram size={16} />
//             </a>
//           </div>
//           <div className="trax-top-right">
//             <div className="top-item">
//               <Phone size={14} className="blue-icon" />
//               <span>
//                 Łódź: <strong>42 630 00 66</strong>
//               </span>
//             </div>
//             <div className="top-item">
//               <Phone size={14} className="blue-icon" />
//               <span>
//                 Zgierz: <strong>42 714 33 00</strong>
//               </span>
//             </div>
//             <div className="top-item hide-mobile">
//               <MapPin size={14} className="blue-icon" />
//               <span>ul. Maratońska 111, Łódź</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav className="trax-main-nav">
//         <div className="trax-container main-nav-wrapper">
//           {/* Logo - Stylizowane na oryginał */}
//           <div className="trax-logo">
//             <a href="/">
//               <img
//                 src={logoImg}
//                 alt="Trax Auto Logo"
//                 className="trax-logo-img"
//               />
//             </a>
//             {/* <span className="logo-trax">TRAX</span> */}
//             {/* <span className="logo-auto">AUTO</span> */}
//           </div>

//           {/* Desktop Menu */}
//           <ul className="trax-menu">
//             <li className="has-dropdown">
//               OFERTA <ChevronDown size={12} />
//               <ul className="dropdown">
//                 <li>Osobowe</li>
//                 <li>Dostawcze</li>
//                 <li>Koniowozy</li>
//               </ul>
//             </li>
//             <li>ODKUP</li>
//             <li>SERWIS MECHANICZNY</li>
//             <li>SERWIS BLACHARSKI</li>
//             <li className="hide-tablet">UBEZPIECZENIA</li>
//             <li>KONTAKT</li>
//           </ul>

//           {/* Action Button */}
//           <div className="nav-actions">
//             <button className="btn-serwis-online">
//               SERWIS <span>ONLINE</span>
//             </button>
//             <button
//               className="mobile-toggle"
//               onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Menu,
  X, // Ikona zamknięcia
  Facebook,
  Instagram,
  ChevronDown,
} from "lucide-react";
import logoImg from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Funkcja do zamykania menu po kliknięciu w link
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="trax-header">
      {/* TOP BAR */}
      <div className="trax-top-bar">
        <div className="trax-container">
          <div className="trax-top-left">
            <a href="#" className="social-icon">
              <Facebook size={16} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={16} />
            </a>
          </div>
          <div className="trax-top-right">
            <div className="top-item">
              <Phone size={14} className="blue-icon" />
              <span>
                Łódź: <strong>42 630 00 66</strong>
              </span>
            </div>
            <div className="top-item">
              <Phone size={14} className="blue-icon" />
              <span>
                Zgierz: <strong>42 714 33 00</strong>
              </span>
            </div>
            <div className="top-item hide-mobile">
              <MapPin size={14} className="blue-icon" />
              <span>ul. Maratońska 111, Łódź</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="trax-main-nav">
        <div className="trax-container main-nav-wrapper">
          <div className="trax-logo">
            <a href="/">
              <img
                src={logoImg}
                alt="Trax Auto Logo"
                className="trax-logo-img"
              />
            </a>
          </div>

          {/* Menu - Klasa dynamiczna zależna od stanu isMobileMenuOpen */}
          <ul className={`trax-menu ${isMobileMenuOpen ? "is-active" : ""}`}>
            {/* Linki główne */}
            <li className="has-dropdown">
              <span>
                OFERTA <ChevronDown size={16} />
              </span>
              <ul className="dropdown-menu">
                <li onClick={closeMenu}>
                  <a href="#">Osobowe</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="#">Dostawcze</a>
                </li>
                <li onClick={closeMenu}>
                  <a href="#">Koniowozy</a>
                </li>
              </ul>
            </li>
            <li onClick={closeMenu}>
              <a href="#">ODKUP</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#">SERWIS MECHANICZNY</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#">KONTAKT</a>
            </li>

            {/* NOWA SEKCJA W MENU MOBILNYM (widoczna tylko tam) */}
            <div className="mobile-menu-footer">
              <div className="mobile-contact-box">
                <p>
                  <Phone size={16} /> 42 630 00 66 (Łódź)
                </p>
                <p>
                  <MapPin size={16} /> ul. Maratońska 111, Łódź
                </p>
              </div>
              <div className="mobile-socials">
                <a href="#">
                  <Facebook size={20} />
                </a>
                <a href="#">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </ul>

          <div className="nav-actions">
            <button className="btn-serwis-online">
              SERWIS <span>ONLINE</span>
            </button>
            {/* Przycisk Hamburger / X */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay do zamykania menu po kliknięciu poza nim (opcjonalnie) */}
      {isMobileMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Navbar;
