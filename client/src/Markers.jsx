import { Marker, Popup } from "react-leaflet";
import nomadGroups from "./assets/nomad-groups.json";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import  nomadMap  from "./assets/nomadMap.json";


export default function Markers() {
  const [groups, setGroups] = useState(['Chiang Mai', '98.9931284', '18.787747', [], ['https://www.facebook.com/groups/cmnomads/']]);
  console.log(groups[0]);

  async function pullContractData() {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    const contract = new ethers.Contract("0xFD471836031dc5108809D173A067e8486B9047A3", nomadMap.abi, provider);
    const locations = contract.returnAllCities();
    setGroups(locations);

  }

  pullContractData();



  return (

    groups.map((group, i) => (
      (
      <>
      <Marker
          position={[
            group[2],
            group[1]
          ]}
        >
          <Popup>
            <b>{group[1]} </b>
            <br />
            {group[4].map((element, i) => {
               <b>element</b>
            })}</Popup>
      </Marker>
      </>
      )

      ))

  )
}
