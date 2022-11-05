import { useState, useEffect, useCallback } from "react";
import {publicIp, publicIpv4, publicIpv6} from 'public-ip';


export const changeMap = () => {
  // Logic goes here
  const [position, setPosition] = useState({
    lat: 31.578,
    lng: -38.935,
  })

  const fetchData = async () => {


    try {
      const userIP = await publicIpv4();
      const res = await fetch(`https://get.geojs.io/v1/ip/geo/${userIP}`);
      const obj = await res.json();
      const test = {lat:parseFloat(obj.latitude),
      lng: parseFloat(obj.longitude)};

      return setPosition(test);

      } catch (e) {
        alert("Turn off adblocker for personalized location services!");
      }

  }

  useEffect(() => {
    fetchData()
    .catch(console.error);;

  }, []);

  console.log(position)

  return { position };
};
