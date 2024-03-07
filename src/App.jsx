import React, { useState, useEffect } from "react"
import { Context } from "../Context"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Accueil from "./pages/Accueil"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Notfound from "./pages/Notfound"
import Test from "./pages/Test"
import Loading from "./pages/Loading"

const API_URL = "http://localhost:5000/auth/user"

const App = () => {

    const [user, setUser] = useState({})  
    const [logged, setLogged] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [location, setLocation] = useState({})

    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }

    const onSuccess = (location) => {
      setLocation({lat: location.coords.latitude, lng: location.coords.longitude})
    }
  
    const onError = (error) => {
  
      console.log(error)
  
    }

    const getUser = async () => {
      await fetch(API_URL, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origins' : true,
        }
      })
      .then(response => response.json())
      .then(data => {
  
        setTimeout(async () => {
          
          if(data.user != null){ 
            setUser(data.user)
            await getLocation()
            setLogged(true)
          }
          else{
            setLogged(false)
          }
          
          setLoading(false)
  
        }, 1000);
              
      })
      .catch((error => {
  
        setError(true)
        setLoading(false)
        console.log(error)
  
      }))
    }
  
    useEffect(() => {getUser() }, [])

    return(

        loading ? <Loading/> :

        <Context.Provider value={{logged, error, user, location, setLogged, setError, setUser, setLocation}}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<Test />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </BrowserRouter>
        </Context.Provider>

    )

}

export default App;