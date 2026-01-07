import React from "react";
import { Car, Truck, Bike, Bus } from "lucide-react";

const Categories = () => {
  const cats = [
    { name: "Osobowe", icon: <Car /> },
    { name: "Dostawcze", icon: <Truck /> },
    { name: "Koniowozy", icon: <Truck className="rotate-12 text-amber-600" /> },
    { name: "Motocykle", icon: <Bike /> },
    { name: "Autobusy", icon: <Bus /> },
    { name: "Serwis", icon: <Car className="text-blue-500" /> },
  ];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter">
          Wybierz kategorię
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {cats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer text-center group border border-transparent hover:border-blue-200"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <span className="font-bold text-slate-700 uppercase text-xs tracking-widest">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
