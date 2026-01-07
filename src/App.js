import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/menu/Navbar";
import UsedCars from "./components/UsedCars";
import Locations from "./components/Locations";
import CookieBanner from "./components/CookieBanner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/osobowe" element={<UsedCars />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
