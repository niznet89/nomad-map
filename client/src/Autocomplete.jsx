import { useState, useEffect, useRef } from 'react'
import App from "./App.jsx";
import "./Autocomplete.css"

export default function Autocomplete(props) {



  let suggestionsListComponent = [];

  function sendParamsToApp(location) {

    props.locationFunction(location)
    props.setLocations("");
  }

  if (props.addLocations.length) {
    suggestionsListComponent = (
      <ul className={"suggestions"}>
        {props.addLocations.slice(0, 3).map((location, index) => {
          let className;

          return (
            <li className={className} key={location.label} onClick={() => sendParamsToApp(location)} >
              {location.label}
            </li>
          );
        })}
      </ul>
    );
   }


  return (
    <>
    {suggestionsListComponent}
    </>
  )
}
