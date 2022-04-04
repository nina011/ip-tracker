import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { HiLocationMarker } from "react-icons/hi";
import { useEffect } from "react";

export const pointerIcon = new Leaflet.Icon({
  iconUrl: require(".././location-pin.png"),
  iconRetinaUrl: require(".././location-pin.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 40],
  shadowUrl: "../assets/marker-shadow.png",
  shadowSize: [0, 0],
  shadowAnchor: [20, 92],
});
function MapView() {
  // const [map, setMap] = useState(null)
  // const [polygon, setPolygon] = useState(null)

  // useEffect(() => {

  //     if (map) {
  //         const polygon = polygon([
  //             [51.505, -0.09],
  //             [51.505, -0.01],
  //             [51.51, -0.01],
  //             [51.51, -0.09]
  //         ], {
  //             color: 'red',
  //             fillColor: '#f03',
  //             fillOpacity: 0.5
  //         }).addTo(map)
  //         setPolygon(polygon)
  //     }
  // }, [map])

  const url = "https://api64.ipify.org?format=json";

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const getIp = async () => {
      
    let data = await fetch(url);
    let ip = await data.json();
    
    return ip.ip
  };

  const getInfo = async () => {
  
   const ip =  await getIp()

   let data = await fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_APIKEY}&ipAddress=${ip}`
    );
  
     let info = await data.json();
     console.log(info)

    setLat(info.location.lat);
    setLng(info.location.lng);
  };

  useEffect(() =>{
   
    getInfo()
 
  },[])

  


  return (
    <>
      {
      lat && lng && 
      <MapContainer
          center={[lat, lng]}
          zoom={11}
          scrollWheelZoom={true}
          style={{ width: "100vw", height: "100vh", willChange: "auto" }}
        >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAP_USERNAME}/${process.env.REACT_APP_MAP_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker position={[-32.83369, -70.59827]} icon={pointerIcon}></Marker>
      </MapContainer>
      }

    </>
  );
}

export default MapView;
