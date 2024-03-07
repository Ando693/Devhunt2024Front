import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

const Input = ({setUser, setPass}) => {

  const [etat, setEtat] = useState(false)

  const show = () => {

    const passwd = document.getElementById('passwd')

    if(passwd.type === "password"){
      setEtat(true)
      passwd.type = "text"
    }
    else {
      setEtat(false)
      passwd.type = "password"
    }

  }

  const userChange = (e) => {setUser(e.target.value)}
  const passChange = (e) => {setPass(e.target.value)}

return (    
    <div className="flex flex-col gap-5 font-semibold">

        <div className="relative">
          <p className="error">Nom d'utilisateur invalide</p>
          <input type="text" className='input rounded testin' placeholder="Nom d'utilisateur" onChange={userChange}/>
        </div>

        <div className="relative">
          <input type="password" className='input rounded' placeholder="Mot de passe" id='passwd' onChange={passChange}/>
          <span onClick={show} className='passico'>{etat ? <FaRegEyeSlash/> : <FaRegEye/>}</span>
        </div>
        
    </div>
  )
}

export default Input