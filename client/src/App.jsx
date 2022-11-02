import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { MapContainer, TileLayer, Marker, Popup, Rectangle, Pane, useMap } from "react-leaflet";
//import { useMap } from 'react-leaflet/hooks';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import './App.css';
import Markers from "./Markers.jsx";
import SearchAppBar from "./SearchAppBar.jsx";
import { changeMap } from "./hooks/index.jsx";
import SearchField from "./SearchField.jsx";


function App() {
  let [value, setValue] = useState(0);



  function ChangeView() {
    const map = useMap();
    const sample = changeMap();
    console.log("map", sample)
    map.setView(sample.position, 12);
    return null;
  }

  const inner = [
    [49.505, -2.09],
    [53.505, 2.09],
  ]



  // console.log(import.meta.env);
  // const { position } = changeMap();


  //console.log(position);
  return (
    <>
    <SearchAppBar test={1} />
    <div>
        <MapContainer
          center={[50.5, 30.5]}
          zoom={12}
          scrollWheelZoom={true}
          zoomControl={false}
          style={{ minHeight: "100vh", minWidth: "100vw", width: "100%" }}
        >
          <SearchField />
          <ChangeView />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            detectRetina={true}
          />
          <Markers />
          {/* <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
            <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
          </Pane> */}

        </MapContainer>
    </div>
    </>
  );
}

export default App
