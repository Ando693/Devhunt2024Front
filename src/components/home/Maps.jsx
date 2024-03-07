import React, { useState } from "react"
import Lieux from "./Lieux"
import GoogleMaps from "./GoogleMaps"

const Maps = () => {

  const [location, setLocation] = useState('')

  return (
    <div className="w-full h-screen flex flex-row overflow-hidden">
      <GoogleMaps location={location}/>
      <Lieux setat={(params) => {setLocation(params)}}/>
    </div>
  )
}

export default Maps