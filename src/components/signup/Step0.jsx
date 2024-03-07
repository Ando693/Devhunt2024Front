import React, { useState } from 'react'
import Title from '../login/Title'
import Image from '../login/Image'
import Social from '../login/Social'
import { Link } from 'react-router-dom'

const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Step0 = ({submit, nameST, emailST, loading, formError, message}) => {

    const [email, setEmail] = useState(emailST)
    const [name, setName] = useState(nameST)
    const [errorNom, setErrorNom] = useState(false)
    const [errorMail, setErrorMail] = useState(false)
 
    const action = () => {

        if(name.length < 3){setErrorNom(true); return}
        if(!mailRegex.test(email)){setErrorMail(true); return}
        submit(name, email)
    
    }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
    <div className='flex flex-row sm:w-[850px] w-[350px] h-[550px] rounded shadow'>
    <div className='sm:w-[400px] w-full flex flex-col justify-center gap-10 ss:p-10 p-5 relative overflow-hidden'>
        <Title value={"Créer un compte"}/>

        <div className='flex flex-col gap-5 font-semibold'>
        <div className="relative">
            {errorNom ? <p className='error'>Nom invalide</p> : null}
            <input type="text" className={`${errorNom ? "input-error": null} input rounded`} 
                placeholder='Entrez votre nom' onChange={(e) => {setName(e.target.value); setErrorNom(false)}}
                defaultValue={nameST}
            />
        </div>
        <div className="relative">
            {errorMail ? <p className='error'>Adresse email invalide</p> : null}
            <input type="text" className={`${errorMail ? "input-error": null} input rounded`} 
                placeholder='Entrez votre email' onChange={(e) => {setEmail(e.target.value); setErrorMail(false)}}
                defaultValue={emailST}
            />
        </div>
        </div>

        <div className="flex flex-col gap-5 font-semibold">
        <div className='flex justify-between font-normal'>
            <span className='flex gap-[2px] text-sm font-semibold'>vous avez déja un compte ?</span>
            <span className='text-sm font-semibold'><Link to='/login'>Se connecter</Link></span>
        </div>
        <button className='text-white bg-secondary text-white p-[8px] rounded' onClick={action}>Sign up</button>
        </div>

        <Social message={"ou se connecter avec les réseaux sociaux"}/>
        {formError ? <div className="form-error">{message}</div> : null}
        {loading ? <div className="loading-box"><span className="loading" ></span></div> : null} 
    </div>
    <Image/>
    </div>
    </div>
  )
}

export default Step0