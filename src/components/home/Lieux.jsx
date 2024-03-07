import React, { useEffect, useState } from "react"
import { FaLightbulb } from "react-icons/fa6"
import Suggestion from "./Suggestion"
import Liste from "./Liste"

const Lieux = ({setat}) => {
  
  const [categorie, setCategorie] = useState('');
  const [show, setShow] = useState(false);
  const [toogle, setToogle] = useState(null);
  const [screen, setScreen] = useState(window.innerWidth);
  const [showX, setShowX] = useState(false);
   


  useEffect(() => {

    window.addEventListener('resize', () => {
      setScreen(window.innerWidth);
    })

    if(screen < 1000){
      setToogle(true)
    }
    else{
      setToogle(false)
    }

  }, [screen])

  // :D 
  const toogling = () => {

    if(toogle == true){
      setToogle(false)
      setShow(false)
      setShowX(true)
    }
    else{
      setShow(false)
      setToogle(true)
      setShowX(false)
    }

  }

  const showListe = (categ) => {
  
    setCategorie(categ)
    setShow(true)

  } 

  return (

    toogle ? 
    <div onClick={toogling} className="fixed top-[100px] right-5"> <FaLightbulb className="chat rounded-full"/> </div> :
    toogle == false ? 
    <div className="lieux z-10">
        {show ? <Liste exit={toogling} showX={showX} setat={setat} categorie={categorie} back={() => {setShow(false)}}/> : <Suggestion showX={showX} exit={toogling} show={showListe}/>}
    </div> 
    :
    null

  )
}

export default Lieux