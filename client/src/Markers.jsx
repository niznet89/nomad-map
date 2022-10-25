import { Marker, Popup } from "react-leaflet";
import nomadGroups from "./assets/nomad-groups.json";
import { useState, useEffect, useCallback } from "react";

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
