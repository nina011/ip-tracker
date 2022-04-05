

const getIp = async() => {
   
    const url = "https://api64.ipify.org?format=json";

    let data = await fetch(url);
    let ip = await data.json();
    
    return ip.ip
  
}

export const getInfo = async () => {
    
    const ip =  await getIp()

    let data = await fetch(
      `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${process.env.REACT_APP_APIKEY}&ipAddress=${ip}`
    );
  
     let info = await data.json();
     return info
  };
