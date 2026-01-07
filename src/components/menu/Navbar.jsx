import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Facebook,
  Instagram,
  ChevronDown,
  Home as HomeIcon,
} from "lucide-react";
import { menuItems } from "./menuConfig";
import logoImg from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Blokada scrolla przy otwartym menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const handleMenuClick = (title) => {
    setActiveMenu(activeMenu === title ? null : title);
  };
  const renderMenuItem = (item) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isOpen = activeMenu === item.title;

    return (
      <li
        key={item.title}
        className={`nav-item ${hasSubmenu ? "has-dropdown" : ""} ${
          isOpen ? "is-open" : ""
        } ${item.isHome ? "home-item" : ""}`}
        onMouseEnter={() =>
          window.innerWidth > 992 && setActiveMenu(item.title)
        }
        onMouseLeave={() => window.innerWidth > 992 && setActiveMenu(null)}
      >
        {hasSubmenu ? (
          <>
            <div
              className="nav-link-wrapper"
              onClick={() => handleMenuClick(item.title)}
            >
              <span className="nav-link-text">{item.title}</span>
              <ChevronDown
                size={18}
                className={`arrow-icon ${isOpen ? "rotate" : ""}`}
              />
            </div>
            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
              {item.submenu.map((sub) => (
                <li key={sub.label} onClick={closeMenu}>
                  <a href={sub.path}>{sub.label}</a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <a href={item.path} className="nav-link-single" onClick={closeMenu}>
            {/* Jeśli to Home, renderuj ikonę, w przeciwnym razie tekst */}
            {item.isHome ? (
              <>
                <HomeIcon size={20} className="home-icon-desktop" />
                <span className="home-text-mobile">{item.title}</span>
              </>
            ) : (
              item.title
            )}
          </a>
        )}
      </li>
    );
  };
  // const renderMenuItem = (item) => {
  //   const hasSubmenu = item.submenu && item.submenu.length > 0;
  //   const isOpen = activeMenu === item.title;

  //   return (
  //     <li
  //       key={item.title}
  //       className={`nav-item ${hasSubmenu ? "has-dropdown" : ""} ${
  //         isOpen ? "is-open" : ""
  //       }`}
  //       onMouseEnter={() =>
  //         window.innerWidth > 992 && setActiveMenu(item.title)
  //       }
  //       onMouseLeave={() => window.innerWidth > 992 && setActiveMenu(null)}
  //     >
  //       {hasSubmenu ? (
  //         <>
  //           <div
  //             className="nav-link-wrapper"
  //             onClick={() => handleMenuClick(item.title)}
  //           >
  //             <span className="nav-link-text">{item.title}</span>
  //             <ChevronDown
  //               size={18}
  //               className={`arrow-icon ${isOpen ? "rotate" : ""}`}
  //             />
  //           </div>
  //           <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
  //             {item.submenu.map((sub) => (
  //               <li key={sub.label} onClick={closeMenu}>
  //                 <a href={sub.path}>{sub.label}</a>
  //               </li>
  //             ))}
  //           </ul>
  //         </>
  //       ) : (
  //         <a href={item.path} className="nav-link-single" onClick={closeMenu}>
  //           {item.title}
  //         </a>
  //       )}
  //     </li>
  //   );
  // };

  return (
    <header className="trax-header">
      {/* <div className="trax-top-bar">
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
      </div> */}

      <nav className="trax-main-nav">
        <div className="trax-logo-container">
          <a href="/">
            <img src={logoImg} alt="Trax Auto Logo" className="trax-logo-img" />
          </a>
        </div>

        <div className="main-nav-wrapper">
          <ul className={`trax-menu ${isMobileMenuOpen ? "is-active" : ""}`}>
            {menuItems.map((item) => renderMenuItem(item))}

            <div className="mobile-menu-footer">
              <div className="mobile-contact-card">
                <div className="contact-row">
                  <Phone size={18} />
                  <div>
                    <span>Łódź: 42 630 00 66</span>
                    <span>Zgierz: 42 714 33 00</span>
                  </div>
                </div>
                <div className="contact-row">
                  <MapPin size={18} />
                  <span>ul. Maratońska 111, Łódź</span>
                </div>
              </div>
              <div className="mobile-socials">
                <a href="#">
                  <Facebook size={22} />
                </a>
                <a href="#">
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="btn-serwis-online">
            SERWIS <span>ONLINE</span>
          </button>
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
};

export default Navbar;
