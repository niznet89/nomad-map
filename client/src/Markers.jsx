import { Marker, Popup } from "react-leaflet";
import nomadGroups from "./assets/nomad-groups.json";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import  nomadMap  from "./assets/nomadMap.json";
import 'bootstrap';
import Button from 'react-bootstrap/Button';


export default function Markers(props) {


  async function pullContractData() {
    const provider = new ethers.providers.JsonRpcProvider("https://arb-goerli.g.alchemy.com/v2/FtzUjDoVTmyWO5cBVxzFB0ggI36_SO8q");
    const contract = new ethers.Contract("0x6F3aAab3433e55E6394ce1E67BCD8E8c264acf01", nomadMap.abi, provider);
    const locations = await contract.returnAllCities();

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
          <Popup style={{overflow: "auto"}}>
            <b>{group[0]} </b>
            <br />
            <br />
            <Button variant="outline-info">Add FB or Chat group</Button>{' '}
            <br />
            <br />
            <div class="dropdown">
                <a class="btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
                  Facebook Groups
                </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                {group[4].map((element, i) => {
                  return (<li><a class="dropdown-item" href={element}>{element}</a></li>)

                })}
               </ul>
            </div>
            <br />
            <div class="dropdown">
                <a class="btn btn-outline-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                  Chat Groups (Whatsapp, Telegram etc.)
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                {group[4].map((element, i) => {
                  return (<li><a class="dropdown-item" href={element}>{element}</a></li>)

                })}
               </ul>
            </div>
            </Popup>
      </Marker>
      </>
      )

      ))

  )
}
