import React, { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import Navbar from "../components/home/Navbar"
import Chat from "../components/home/Chat"
import Maps from "../components/home/Maps"
import Error from "./Error"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()
  const [etat, setEtat] = useState(0)
  const {logged, error, user} = useContext(Context)

  useEffect(() => { if(!logged){ navigate("/login") } }, [])
  
  return (
    error ?
      <Error/> :
    logged ?      
    (
      <div className="w-full min-h-screen">


      {
        etat == 0 ? <Maps/> :
        etat == 1 ? <div>Test2</div> : 
        etat == 2 ? <div>Test3</div> : 
        etat == 3 ? <div>Test4</div> : 
        null
      }

      <Chat/>

      </div>
    )
    :null
  )

}

export default Home