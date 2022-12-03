import React, { useEffect, useState } from 'react'
import submitImg from '../assets/icon-arrow.svg'
import locationIcon from '../assets/icon-location.svg'
import Data from '../components/Data'
import Search from '../components/Search'
import Map from '../components/Map'

export default function Home() {
    const [address, setAddress] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [ipAddress, setIpAddress] = useState('');
    const [position, setPosition] = useState(null); 

    const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    
    // const checkDomain =
    // /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
   
    const url = `https://ipapi.co/${ipAddress}/json/`;
    
    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAddress(data)
         setPosition([data.latitude, data.longitude])
        setLoaded(true)
      })
      .catch(err => console.log(err))
    }, [])
      

    const getEnteredAddress = () => {
       fetch(`https://ipapi.co/${
         checkIpAddress.test(ipAddress) ? `${ipAddress}`  
         : ""
       }/json/ `)
       .then(res => res.json())
       .then(data => {
         console.log(data)
         setAddress(data)
         setPosition([data.latitude, data.longitude])
         setLoaded(true)
      })
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        getEnteredAddress();
    }

    if(!loaded) {
        return (
          <div className='Home'>
              <Search
                submit={handleSubmit}
                value={ipAddress}
                change={e => setIpAddress(e.target.value)}
                submitBtn={submitImg}
              />
            <section className='loading'>
              Loading now...
            </section>
          </div>
        )
      } else {
        return (
          <div className='Home'>
  
              <Search
                submit={handleSubmit}
                value={ipAddress}
                change={e => setIpAddress(e.target.value)}
                submitBtn={submitImg}
              />
      
              <section className='displayInfo'>
                <Data title='IP Address' content={address.ip} id='ip' />
                <Data title='location' content={address.region} />
                <Data title='timezone' content={address.utc_offset} />
                <Data title='org' content={address.org} />
              </section>
  
              <Map 
                center={position}
                position={position}
                icon={locationIcon}
              />
      
          </div>
        )
      }
}
