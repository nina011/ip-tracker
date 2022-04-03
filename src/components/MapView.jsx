import React,{useState} from 'react'
import { 
    MapContainer, 
    TileLayer,
    Polygon,
    Marker,
    Popup
} from 'react-leaflet'
import Leaflet from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { HiLocationMarker } from 'react-icons/hi'
import { useEffect } from 'react'

export const pointerIcon = new Leaflet.Icon({
  iconUrl: require(".././location-pin.png"),
  iconRetinaUrl: require(".././location-pin.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [40, 40],
  shadowUrl: "../assets/marker-shadow.png",
  shadowSize: [0, 0],
  shadowAnchor: [20, 92]
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

    const url = 'https://api64.ipify.org?format=json'
    // const url2 = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_APIKEY}&ipAddress=${ip}`

    const getIp = async() =>{

      let data = await fetch(url)
      let ip = await data.json()

      getInfo(ip.ip)
    }

    const getInfo = async(ip) =>{
      let data = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_APIKEY}&ipAddress=${ip}`)
      let info = await data.json()
      console.log(info)
    }

    useEffect(() => {
        getIp()
    }, [])

  //  const position = [-32.83369, -70.59827]
  return (
    // <MapContainer 
    //     center={{lat:'-32.8320567728533',  lng:'-70.60236760350426'}}
    //     zoom={10}
    //     style={{ width: '100vw', height:'100vh'}}
    //     >
    //     <TileLayer
    //         url='https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=xXdH9h8iK71B4i2NAxV0'
    //         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    //     />
      
    // </MapContainer>
    <MapContainer 
          center={[-32.83369, -70.59827]} 
          zoom={10} 
          scrollWheelZoom={true}
          style={{ width: '100vw', height:'100vh', willChange:'auto'}}
          >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
          position={[-32.83369, -70.59827]}
          icon={pointerIcon}
          >

      </Marker>
    </MapContainer>
  )
}

export default MapView