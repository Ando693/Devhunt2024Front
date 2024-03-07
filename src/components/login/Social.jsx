import React from 'react'
import { BsGoogle, BsFacebook, BsGithub } from 'react-icons/bs'

const API_URL = "http://localhost:5000"
 
const Social = ({message}) => {

  const googleAuth = () => {window.open(`${API_URL}/auth/google`, "_self")}

  return (
    <div className="flex flex-col gap-5 font-semibold">
    <p className='text-center'>{message}</p>
    <div className='flex justify-center gap-5'>
        <span className='socialico rounded' onClick={googleAuth}><BsGoogle/></span>
        <span className='socialico rounded'><BsFacebook/></span>
        <span className='socialico rounded'><BsGithub/></span>
    </div>
    </div>
  )
}

export default Social