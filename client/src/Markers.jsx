import { Marker, Popup } from "react-leaflet";
import nomadGroups from "./assets/nomad-groups.json";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import  nomadMap  from "./assets/nomadMap.json";


export default function Markers(props) {

  console.log("Markers", props)
  async function pullContractData() {
    const provider = new ethers.providers.JsonRpcProvider("https://arb-goerli.g.alchemy.com/v2/FtzUjDoVTmyWO5cBVxzFB0ggI36_SO8q");
    const contract = new ethers.Contract("0x6F3aAab3433e55E6394ce1E67BCD8E8c264acf01", nomadMap.abi, provider);
    const locations = await contract.returnAllCities();
    console.log(locations);
    props.setGroups(locations);

  }
  useEffect(() => {
    pullContractData();
  }, []);


  return (

    props.groups.map((group, i) => (

      (
      <>
      <Marker
          position={[
            parseFloat(group[2]),
            parseFloat(group[1])
          ]}
        >
          <Popup>
            <b>{group[0]} </b>
            <br />
            {group[4].map((element, i) => {
              return (<p><a href={element}>{element}</a></p>)
  })}
            </Popup>
      </Marker>
      </>
      )

      ))

  )
}
