import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../../Context'
import { useNavigate } from 'react-router-dom'
import Image from '../components/login/Image'
import Title from '../components/login/Title'
import Form from '../components/login/Form'
import Social from '../components/login/Social'
import Error from './Error'

const API_URL = "http://localhost:5000/auth/0/login"

const Login = () => {

  const navigate = useNavigate();
  const {logged, error, user, setError} = useContext(Context)
  const [formError, setFormError] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = (user, pass) => {

    setFormError(false)
    setLoading(true)

    fetch(API_URL, {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origins' : true,
      },
      body: JSON.stringify({
        email: user,
        passw: pass
      })
    })
    .then(response => response.json())
    .then(data => {

      setTimeout(() => {
        setLoading(false)

        if(data.user && data.auth){window.open('/home', '_self')}
  
        if(data.user && !data.auth){
          setMessage('Mot de passe incorrect !')
          setFormError(true)
        }
  
        if(!data.user){
          setMessage('Utilisateur introuvable !')
          setFormError(true)
        }
  
        if(data.error){console.log(data.message); setError(true)}
      }, 1000);

    })
    .catch(err => {

      setLoading(false)
      console.log(err)
      setError(true)

    })

  }

  useEffect(() => {if(logged){navigate('/home')}}, [logged])

  return (
  error ? <Error/> : 
  !logged ? 
  (<div className="container lg mx-auto flex items-center justify-center min-h-screen">
  <div className="flex flex-row sm:w-[850px] w-[350px] h-[550px] rounded shadow overflow-hidden">
    <Image/>
    <div className="sm:w-[400px] w-full flex flex-col justify-center gap-10 ss:p-10 p-5 relative overflow-hidden">
      <Title value={"Se connecter"}/>
      <Form submit={auth}/>
      <Social message={"ou se connecter avec les réseaux sociaux"}/>
      {formError ? (<div className="form-error"><p>{message}</p></div>) : null}
      {loading ? <div className="loading-box"><span className="loading" ></span></div> : null}
    </div>
  </div>
  </div>)
  : null
  )

}

export default Login