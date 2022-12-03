import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {Icon} from 'leaflet'

export default function Map(props) {
  return (
    <div className='map'>
      <MapContainer
        key={props.center}
        center={props.center}
        zoom={13}
        style={{width: "100%", height: '100%'}}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xKOkeK5GYsI2onrK0jiF"
        />
        <Marker 
          position={props.position} 
          icon={new Icon({iconUrl: props.icon, iconSize: [35, 44], iconAnchor: [0, 0]})}
        />
      </MapContainer>
    </div>
  )
}
