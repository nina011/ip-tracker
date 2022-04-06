import React, { useEffect, useContext, useState } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import Spinner from "../shared/Spinner";
import ApiContext from "../context/ApiContext";

export const pointerIcon = new Leaflet.Icon({
  iconUrl: require("../assets/location-pin.png"),
  iconRetinaUrl: require("../assets/location-pin.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 40],
  shadowUrl: "../assets/marker-shadow.png",
  shadowSize: [5, 5],
  shadowAnchor: [20, 92],
});

function MapView() {
  const { position, data } = useContext(ApiContext);
  const [map, setMap] = useState(null);

  // actualizar el mapa
  useEffect(() => {
    if (map) {
      map.flyTo(position, 10);
    }
  }, [position]);

  if (position.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      {position.length > 0 && (
        <MapContainer
          // ref={mapRef}
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          // whenCreated={(map) => setMap(map)}
          whenCreated={setMap}
          style={{ width: "100vw", height: "100vh", willChange: "auto" }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAP_USERNAME}/${process.env.REACT_APP_MAP_STYLE}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`}
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={position} icon={pointerIcon}></Marker>
        </MapContainer>
      )}
    </>
  );
}

export default MapView;
