import { useState, useEffect, useCallback } from "react";
import {publicIp, publicIpv4, publicIpv6} from 'public-ip';


export const changeMap = () => {
  // Logic goes here
  const [position, setPosition] = useState({
    lat: 47.21725,
    lng: -1.55336,
  })

  const fetchData = async () => {
    const userIP = await publicIpv4();

    const res = await fetch(`https://get.geojs.io/v1/ip/geo/${userIP}`);
    const obj = await res.json();
    const test = {lat:parseFloat(obj.latitude),
      lng: parseFloat(obj.longitude)};
    console.log(test)
    return setPosition(test);
  }

  useEffect(() => {
    fetchData()
    .catch(console.error);;

  }, []);

  console.log(position)

  return { position };
};
