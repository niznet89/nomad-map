import { useState, useEffect, useRef } from 'react'
import App from "./App.jsx";
import "./Autocomplete.css"

export default function Autocomplete(props) {


  console.log("we in autocomplete",props)
  let suggestionsListComponent = [];

  function sendParamsToApp(location) {
    console.log(location)
    props.locationFunction(location)

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
  //else {
  //   suggestionsListComponent = (
  //     <div class="no-suggestions">
  //       <em>No locations found!</em>
  //     </div>
  //   );
  // }
  console.log(suggestionsListComponent)
  return (
    <>
    {suggestionsListComponent}
    </>
  )
}
