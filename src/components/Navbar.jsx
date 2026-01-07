import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Menu,
  Facebook,
  Instagram,
  ChevronDown,
  Clock,
} from "lucide-react";
import logoImg from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="trax-header">
      {/* TOP BAR - Dokładnie jak na stronie */}
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
          {/* Logo - Stylizowane na oryginał */}
          <div className="trax-logo">
            <a href="/">
              <img
                src={logoImg}
                alt="Trax Auto Logo"
                className="trax-logo-img"
              />
            </a>
            {/* <span className="logo-trax">TRAX</span> */}
            {/* <span className="logo-auto">AUTO</span> */}
          </div>

          {/* Desktop Menu */}
          <ul className="trax-menu">
            <li className="has-dropdown">
              OFERTA <ChevronDown size={12} />
              <ul className="dropdown">
                <li>Osobowe</li>
                <li>Dostawcze</li>
                <li>Koniowozy</li>
              </ul>
            </li>
            <li>ODKUP</li>
            <li>SERWIS MECHANICZNY</li>
            <li>SERWIS BLACHARSKI</li>
            <li className="hide-tablet">UBEZPIECZENIA</li>
            <li>KONTAKT</li>
          </ul>

          {/* Action Button */}
          <div className="nav-actions">
            <button className="btn-serwis-online">
              SERWIS <span>ONLINE</span>
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import {
//   Phone,
//   MapPin,
//   Menu,
//   Facebook,
//   Instagram,
//   ChevronDown,
// } from "lucide-react";
// // Zakładając, że masz plik logo.png w folderze src/assets
// import logoImg from "../assets/logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="trax-header">
//       {/* TOP BAR bez zmian... */}
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
//           {/* LOGO JAKO OBRAZEK */}
//           <div className="trax-logo">
//             <a href="/">
//               <img
//                 src={logoImg}
//                 alt="Trax Auto Logo"
//                 className="trax-logo-img"
//               />
//             </a>
//           </div>

//           {/* Menu i reszta bez zmian... */}
//           <ul className="trax-menu">
//             <li>
//               OFERTA <ChevronDown size={12} />
//             </li>
//             <li>ODKUP</li>
//             <li>SERWIS MECHANICZNY</li>
//             <li>KONTAKT</li>
//           </ul>

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
