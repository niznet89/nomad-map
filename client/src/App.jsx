import { useState, forwardRef, useImperativeHandle } from 'react'
import reactLogo from './assets/react.svg'
import { MapContainer, TileLayer, Marker, Popup, Rectangle, Pane, useMap } from "react-leaflet";
//import { useMap } from 'react-leaflet/hooks';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import './App.css';
import Markers from "./Markers.jsx";
import SearchAppBar from "./SearchAppBar.jsx";
import { changeMap } from "./hooks/index.jsx";
import getDistanceFromLatLonInKm from "./distanceFunctions.js";


function App() {
  const [groups, setGroups] = useState([['Chiang Mai', '98.9931284', '18.787747', [], ['https://www.facebook.com/groups/cmnomads/']], ['Bali', '115.188916', '-8.4095178', [], ['https://facebook.com/groups/balidigitalnomads/', 'https://facebook.com/groups/553237938183702/']]]);
  const [locations, setLocations] = useState({});


  // This function is hit from Autocomplete Component
  function clickedLocation(location) {
    const bundle = {coords: {lat: location.y, lng: location.x}, label: location.label};
    setLocations(bundle);
  }


  function ChangeView() {
    const map = useMap();
    const sample = changeMap();
    if (!locations.hasOwnProperty("coords")) {

      // changeMap function gathers IP of user and changes location of map OR go's to default location


      if (sample.position.lat === 48.980217) {

        map.setView(sample.position, 2);
        return null;
      } else {
        map.setView(sample.position, 12);
        return null;
      }
    } else {

      map.setView(locations.coords, 12);

      for (let i = 0; i < groups.length; i++) {
        const distance = getDistanceFromLatLonInKm(locations.coords.lat, locations.coords.lng, parseFloat(groups[i][2]), parseFloat(groups[i][1]));

        if (distance < 10) {
          return null;
        }
      }
      return (
        <>
        <Marker
            position={[
              locations.coords.lat,
              locations.coords.lng
            ]}
          >
            <Popup style={{overflow: "auto"}}>
              <b>{locations.label} </b>
              <br />
              <br />
              <sm>Look's like there arn't any Nomad groups in this location. :( Contribute to the community by adding one!</sm>
              </Popup>
        </Marker>
        </>
        )

    }

  }


  const inner = [
    [49.505, -2.09],
    [53.505, 2.09],
  ]


  return (
    <>
    <SearchAppBar clickedLocation={clickedLocation}/>
    <div>
        <MapContainer
          center={[48.980217, 15.564661]}
          zoom={3}
          scrollWheelZoom={true}
          zoomControl={false}
          style={{ minHeight: "100vh", minWidth: "100vw", width: "100%" }}
        >
          <ChangeView />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            detectRetina={true}
          />
          <Markers groups={groups} setGroups={setGroups} />
          {/* <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
            <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
          </Pane> */}

        </MapContainer>
    </div>
    </>
  );
}

export default App
