import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Cabecera from "./components/Cabecera";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import SerieComponent from "./components/SerieComponent";

function App() {
  const series = [
    { cod: 1, nom: "Friends", cat: "Comedy", img: "friends.png" },
    { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order.png" },
    { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang-theory.png" },
    { cod: 4, nom: "Stranger Things", cat: "Terror", img: "stranger-things.png" },
    { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house.png" },
    { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files.png" },
  ];

  return (
    <div>
      <Cabecera />
      <Menu />

      <div className="container mt-4">
        <h2 className="mb-3">Series</h2>
        <div className="row">
          {series.map((serie) => (
            <div className="col-md-4" key={serie.cod}>
              <SerieComponent
                codigo={serie.cod}
                nombre={serie.nom}
                categoria={serie.cat}
                imagen={serie.img}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;


