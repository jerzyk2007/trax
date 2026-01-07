export const menuItems = [
  {
    title: "Start",
    path: "/",
    isHome: true, // Flaga do rozpoznania ikony domku
  },
  {
    title: "OFERTA",
    submenu: [
      { label: "Osobowe", path: "/osobowe" },
      { label: "Dostawcze", path: "/dostawcze" },
      { label: "Koniowozy", path: "/koniowozy" },
    ],
  },
  {
    title: "ODKUP",
    path: "/",
  },
  {
    title: "SERWIS MECHANICZNY",

    path: "/",
  },
  {
    title: "SERWIS BLACHARSKI",
    submenu: [
      { label: "Buczek", path: "/" },
      { label: "Wróbel", path: "/" },
      { label: "Pioter", path: "/" },
    ],
    path: "/",
  },
  {
    title: "KONTAKT",
    path: "/",
  },
];
