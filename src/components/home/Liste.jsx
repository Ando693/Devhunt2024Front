import React, { useContext, useEffect, useState } from "react"
import { FaXmark,  } from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
import { Context } from "../../../Context";

 
const Liste = ({exit, back, showX, categorie}) => {

  const [maps, setMaps] = useState([])
  const [stt, setSTT] = useState(false)

  const{location, setLocation} = useContext(Context)
 
  const origins = {lat: 14, lng: 415}

  const statique = () => {

    setLocation({lat: 145, lng: 457})

  }

  const getMaps = async () => {

    await fetch("http://localhost:5000/getMap", {
      method: 'POST',
      body: JSON.stringify({
        categ: categorie
      }),
      headers: {
          'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })

  }

  useEffect(() => {getMaps()}, []) 

  return (
    
    <div className="ss:w-[500px] w-[300px] h-screen overflow-auto flex flex-col gap-[20px] py-5 px-10">

      <div className="w-full flex justify-between my-5">
        <FaArrowLeft className="xlg" onClick={back}/>
        {showX ? <FaXmark className='xlg' onClick={exit}/> : null}
      </div>
  
      <div className="w-full p-5 rounded bg-gris flex flex-col gap-5">
        <h2 className="text-2xl font-bold">Office du BACC</h2>
        <div className="flex justify-between w-full">
          <div className="flex flex-row">
            <FaPhone className="text-secondary mt-[3px] mr-[5px]"/>
            :
            034 85 895 20 
          </div>
          <div className="flex flex-row cursor-pointer" onClick={statique}>
            <FaLocationDot className="text-secondary mt-[3px] mr-[5px]"/>
            :
            Localiser 
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Liste