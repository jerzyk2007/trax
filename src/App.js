// import React from "react";
// import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import Home from "./components/Home";
// import Navbar from "./components/menu/Navbar";
// import UsedCars from "./components/UsedCars";
// import Locations from "./components/Locations";
// import CookieBanner from "./components/CookieBanner";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       {/* <BrowserRouter > */}
//       <HashRouter>
//         <Navbar />
//         {/* <Home /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/osobowe" element={<UsedCars />} />
//           <Route path="/locations" element={<Locations />} />
//         </Routes>
//         <CookieBanner />
//       </HashRouter>
//       {/* </BrowserRouter> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/menu/Navbar";
import UsedCars from "./components/UsedCars";
import Locations from "./components/Locations";
import CookieBanner from "./components/CookieBanner";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* HashRouter jest idealny dla GitHub Pages, ponieważ używa znaku # w adresie URL, 
          co zapobiega błędom 404 przy odświeżaniu strony. */}
      <HashRouter>
        {/* Navbar musi być wewnątrz Routera, aby Linki działały poprawnie */}
        <Navbar />

        <Routes>
          {/* Strona główna */}
          <Route path="/" element={<Home />} />

          {/* Trasa dla samochodów osobowych (używane) */}
          <Route path="/osobowe" element={<UsedCars />} />

          {/* Trasa dla lokalizacji serwisu */}
          <Route path="/locations" element={<Locations />} />

          {/* Opcjonalnie: Przekierowanie dla nieistniejących ścieżek z powrotem do Home */}
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Baner cookies widoczny na każdej podstronie */}
        <CookieBanner />
      </HashRouter>
    </div>
  );
}

export default App;
