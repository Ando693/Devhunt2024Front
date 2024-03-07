import { Fragment, useContext, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, DirectionsService, DirectionsRenderer} from "@react-google-maps/api"
import { Context } from "../../../Context"
import { CgMenuGridO } from "react-icons/cg"
import { FaSignOutAlt } from 'react-icons/fa'

const KEY = "AIzaSyB_1heZvj0wWE4T8olC_mzVK7rW0TSKC0U"

const GoogleMaps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: KEY
  })

  const origin = { lat: -18.9005824, lng: 47.5332608 } // ENI
  const destination = { lat: -21.463640, lng: 47.109970 } //EMIT

  const [menu, setMenu] = useState(false)
  const {user, location} = useContext(Context)

  const handleMenu = () => {

    if(menu){
        setMenu(false)
    }
    else{
        setMenu(true)
    }

  }

  const logout = () => { window.open("http://localhost:5000/auth/logout", '_self') }

  useEffect(() => {

    console.log("latitude : " + location.lat + " longitute : " + location.lng)
  
  }, [location])


  return(
    <Fragment>
      <div className="min-h-screen flex-grow relative">
 
        <div className="absolute top-5 left-5 z-10 flex flex-row gap-[10px] cursor-pointer">
            <img src={user.photo} alt="profile" className="w-[50px] rounded-full" />
            <span className="rounded-full overflow-hidden" onClick={handleMenu}>
                <CgMenuGridO className="w-[50px] h-[50px] p-[10px] bg-primary text-white" />
            </span>
        </div>

        {menu ? ( 
        <div className="w-[200px] h-[300px] rounded absolute z-10 left-5 top-20 bg-gris flex flex-col justify-center items-center gap-5">
            <img src={user.photo} alt="profile" className="rounded-full"/>
            <h3 className="text-xl font-bold">{user.name}</h3>
            <button className="logout" onClick={logout}> <FaSignOutAlt className="mt-[4px]"/> Deconnexion</button>
        </div>
        ) : null}

        <div className="w-full h-full">

          {isLoaded ? 
          (
            <GoogleMap 
              center={{lat: location.lat, lng: location.lng}} 
              zoom={12} 
              mapContainerStyle={{width: "100%", height: "100%"}}
            >

            {/* <MarkerF position={origin}>
              <div>Votre Position</div>
            </MarkerF> */}
            
            
            <MarkerF position={{lat: location.lat, lng: location.lng}}>
              <div>Votre Position</div>
            </MarkerF>
         
            </GoogleMap>
          ) :
            null
          }

        </div>
      </div>
    </Fragment>
  )
}

export default GoogleMaps;