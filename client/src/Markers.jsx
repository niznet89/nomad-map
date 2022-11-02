import { Marker, Popup } from "react-leaflet";
import nomadGroups from "./assets/nomad-groups.json";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import  nomadMap  from "./assets/nomadMap.json";


export default function Markers() {
  const [groups, setGroups] = useState([['Chiang Mai', '98.9931284', '18.787747', [], ['https://www.facebook.com/groups/cmnomads/']], ['Bali', '115.188916', '-8.4095178', [], ['https://facebook.com/groups/balidigitalnomads/', 'https://facebook.com/groups/553237938183702/']]]);
  console.log(groups[0]);

  async function pullContractData() {
    const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
    const contract = new ethers.Contract("0xFD471836031dc5108809D173A067e8486B9047A3", nomadMap.abi, provider);
    const locations = await contract.returnAllCities();
    console.log(locations);
    setGroups(locations);

  }
  useEffect(() => {
    pullContractData();
  }, []);

  console.log(groups)

  return (

    groups.map((group, i) => (

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
