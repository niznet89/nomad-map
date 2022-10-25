import { Marker, Popup } from "react-leaflet";
import nomadGroups from "./assets/nomad-groups.json";
import { useState, useEffect, useCallback } from "react";



// class MapsComp extends React.Component {
//   state = { markers: [] };

//   componentDidMount() {
//     fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         this.setState({ markers: response.features });
//       });
//   }

// {this.state.markers.length > 0 &&
//         this.state.markers.map((marker) => (
//           <Marker
//             position={[
//               marker.geometry.coordinates[1],
//               marker.geometry.coordinates[0]
//             ]}
//             icon={icon}
//           >
//             <Popup>{marker.properties.label}</Popup>
//           </Marker>
//         ))}
// }
console.log(nomadGroups.features[0])



export default function Markers() {
  const [groups, setGroups] = useState(nomadGroups.features);
  console.log(groups[0])



  return (

    groups.map((group, i) => (
      (
      <>
      <Marker
          position={[
            group.geometry.coordinates[1],
            group.geometry.coordinates[0]
          ]}
        >
          <Popup>
            <b>{group.properties.name} </b>
            <br />
            {group.properties.description}</Popup>
      </Marker>
      </>
      )

      ))

  )
}
