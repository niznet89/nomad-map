import { useState, useEffect } from 'react'
import "./Autocomplete.css"

export default function Autocomplete(props) {

  console.log(props)
  let suggestionsListComponent = [];

  if (props.addLocations.length) {
    suggestionsListComponent = (
      <ul class="suggestions">
        {props.addLocations.slice(0, 3).map((location, index) => {
          let className;

          // Flag the active suggestion with a class
          if (index === 0) {
            className = "suggestion-active";
          }

          return (
            <li className={className} key={location.label} >
              {location.label}
            </li>
          );
        })}
      </ul>
    );
  } else {
    suggestionsListComponent = (
      <div class="no-suggestions">
        <em>No locations found!</em>
      </div>
    );
  }
  console.log(suggestionsListComponent)
  return (
    <>
    {suggestionsListComponent}
    </>
  )
}
