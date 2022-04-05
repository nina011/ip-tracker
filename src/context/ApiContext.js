import { createContext, useState, useEffect } from 'react';


const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [ position, setPosition ] = useState([]);
    const [ data, setData ] = useState({
        ip: '',
        isp: '',
        city: '',
        country: '',
        timezone: '',
    });
    useEffect(() => {
        getInfo();
    }, []);
    
    const getIp = async() => {
   
        const url = "https://api64.ipify.org?format=json";
    
        let data = await fetch(url);
        let ip = await data.json();
        
        return ip.ip
      
    }
    
    const getInfo = async () => {
        
        const ip =  await getIp()
    
        let data = await fetch(
          `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_APIKEY}&ipAddress=${ip}`
        );
      
         let info = await data.json();
            // console.log('ip',info.ip)
            // console.log('isp',info.isp)
            // console.log('ciudad, pais',info.location.city, info.location.country)
            // console.log('time zone ','UTC', info.location.timezone)
            setData({
                ip: info.ip,
                isp: info.isp,
                city: info.location.city,
                country: info.location.country,
                timezone: info.location.timezone,
            });
         setPosition([info.location.lat, info.location.lng])
       
      };

    
     
    
    return (
        <ApiContext.Provider value={{ position, data }}>
        {children}
        </ApiContext.Provider>
    );
    }

export default ApiContext;