import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Locations />
      {/* Dodaj tutaj stopkę */}
    </div>
  );
}

export default App;
