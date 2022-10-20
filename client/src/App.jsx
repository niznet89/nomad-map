import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { MapContainer, TileLayer, Marker, Popup, Rectangle, Pane, useMap } from "react-leaflet";
//import { useMap } from 'react-leaflet/hooks';
import './App.css';

import { changeMap } from "./hooks/index.jsx";


function App() {

  function ChangeView() {
    const map = useMap();
    const sample = changeMap();
    console.log(sample)
    map.setView(sample.position, 12);
    return null;
  }

  const inner = [
    [49.505, -2.09],
    [53.505, 2.09],
  ]


  console.log(import.meta.env);
  const { position } = changeMap();

  //console.log(position);
  return (
    <MapContainer
      center={[50.5, 30.5]}
      zoom={12}
      scrollWheelZoom={true}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {/* <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
        <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
      </Pane> */}
      <ChangeView />
    </MapContainer>
  );
}

export default App
