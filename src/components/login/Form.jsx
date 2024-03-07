import React, { useState } from "react"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa"
import { Link } from "react-router-dom"
 
const Form = ({submit}) => {

    const [etat, setEtat] = useState(false)
    const [userValue, setUserValue] = useState("")
    const [passValue, setPassValue] = useState("")
    const [userError, setUserError] = useState(false)
    const [passError, setPassError] = useState(false)

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

    const userInput = (e) => {
      setUserError(false)
      setUserValue(e.target.value)
    }

    const passInput = (e) => {
      setPassError(false)
      setPassValue(e.target.value)
    }

    const action = () => {
      if(userValue.length < 4){ setUserError(true); return}
      if(passValue.length < 4){ setPassError(true); return}
      submit(userValue, passValue)
    }
  
    return (
      <>
      <div className="flex flex-col gap-5 font-semibold">
        <div className="relative">
          {userError ? <p className="error">Adresse email invalide</p> : null}
          <input type="text" className={`${userError ? "input-error" : null} input rounded`} placeholder="Adresse email" onChange={userInput}/>
        </div>
        <div className="relative">
          {passError ? <p className="error">Mot de passe invalide</p> : null}
          <input type="password" className={`${passError ? "input-error" : null} input rounded`} placeholder="Mot de passe" id='passwd' onChange={passInput}/>
          <span onClick={show} className='passico'>{etat ? <FaRegEyeSlash/> : <FaRegEye/>}</span>
        </div>
      </div>

      <div className="flex flex-col gap-5 font-semibold">
      <div className='flex justify-between font-normal'>
        <span className='flex gap-[2px] text-sm font-semibold'><input type="checkbox"/><a href="#">se souvenir de moi</a></span>
        <span className='text-sm font-semibold'><Link to="/signup">pas de compte ?</Link></span>
      </div>
      <button className='text-white bg-secondary text-white p-[8px] rounded' onClick={action}>Login</button>
      </div>
      </>
    )
}

export default Form;