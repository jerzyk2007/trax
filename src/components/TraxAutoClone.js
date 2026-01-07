import React, { useState } from "react";
import { Search, Phone, MapPin, Clock, ChevronDown } from "lucide-react";

const TraxAutoClone = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    "Oferta",
    "Odkup",
    "Serwis Mechaniczny",
    "Serwis Blacharski",
    "Ubezpieczenia",
    "Finansowanie",
    "Koniowozy",
    "O nas",
    "Kontakt",
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* --- TOP BAR --- */}
      <div className="bg-zinc-900 text-white py-2 px-6 text-sm flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Phone size={14} /> Łódź: 42 630 00 66
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} /> Maratońska 111, Łódź
          </span>
        </div>
        <div className="hidden md:block">Zapraszamy: Pn-Pt 10:00 - 18:00</div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tighter text-blue-900">
            TRAX<span className="text-gray-500">AUTO</span>
          </div>

          <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
            {menuItems.map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Serwis Online
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION WITH SEARCH --- */}
      <section className="relative h-[600px] bg-zinc-800">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920"
          alt="Car background"
          className="w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Jakiego samochodu szukasz?
          </h1>

          {/* SEARCH BOX */}
          <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-5xl text-gray-800 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                Marka
              </label>
              <select className="w-full border-b-2 border-gray-200 py-2 focus:border-blue-500 outline-none">
                <option>Wszystkie marki</option>
                <option>Opel</option>
                <option>Chevrolet</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                Model
              </label>
              <select className="w-full border-b-2 border-gray-200 py-2 focus:border-blue-500 outline-none">
                <option>Wszystkie modele</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-400 mb-1">
                Cena do
              </label>
              <input
                type="number"
                placeholder="Dowolna"
                className="w-full border-b-2 border-gray-200 py-2 focus:border-blue-500 outline-none"
              />
            </div>
            <button className="bg-blue-600 text-white rounded flex items-center justify-center gap-2 hover:bg-blue-700 transition h-12 self-end">
              <Search size={20} /> Szukaj
            </button>
          </div>
        </div>
      </section>

      {/* --- CATEGORIES --- */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
          {[
            "Osobowe",
            "Dostawcze",
            "Motocykle",
            "Ciężarowe",
            "Autobusy",
            "Koniowozy",
          ].map((cat) => (
            <div
              key={cat}
              className="p-8 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition cursor-pointer group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full mx-auto mb-4 group-hover:bg-blue-50 transition flex items-center justify-center">
                {/* Tu wstawilibyśmy ikony aut */}
              </div>
              <span className="font-semibold text-gray-800">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER / CONTACT INFO --- */}
      <footer className="bg-zinc-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              TRAX Sp. z o.o.
            </h3>
            <p>Łódź, ul. Maratońska 111</p>
            <p>Zgierz, ul. Łęczycka 38</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>Samochody używane</li>
              <li>Serwis mechaniczny</li>
              <li>Polityka prywatności</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Social Media</h4>
            <div className="flex gap-4">
              <span className="hover:text-white cursor-pointer transition">
                Facebook
              </span>
              <span className="hover:text-white cursor-pointer transition">
                Instagram
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TraxAutoClone;
