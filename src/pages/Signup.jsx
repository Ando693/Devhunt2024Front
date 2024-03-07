import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import Error from "./Error";
import Step0 from "../components/signup/Step0";
import Step1 from "../components/signup/Step1";
import Step2 from "../components/signup/Step2";
import Step3 from "../components/signup/Step3";
import avatar from "../assets/user.jpg"
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/auth"

const Signup = () => {

  const {logged, error, setLogged, setError} = useContext(Context)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [passw, setPassw] = useState("")
  const [pic, setPic] = useState(avatar)
  const [photo, setPhoto] = useState(avatar)
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [mailLoading, setMailLoading] = useState(false)
  const [formError, setFormError] = useState(false)
  const [message, setMessage] = useState('test')
  const [empreinte, setEmpreinte] = useState('')
  const [incorrect, setIncorrect] = useState(false)
 
  const navigate = useNavigate()

  const getPass = (passwd) => {
    setPassw(passwd)
    setStep(step + 1)
  }

  const getPhoto = (e) => {
    const file = e.target.files[0];
    setPhoto(file)

    const reader = new FileReader();

    reader.onloadend = () => {
      setPic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const checkUser = (name, email) => {

    setName(name)
    setEmail(email)
    setFormError(false)
    setLoading(true)

    fetch(`${API_URL}/0/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials' : true,
        'Access-Control-Allow-Origins' : true,
      },
      body: JSON.stringify({
        email: email,
      })
    })
    .then(response => response.json())
    .then((data) => {
      setTimeout(() => {
   
        setLoading(false);

        console.log(data);

        if(data.user){
          
          setFormError(true)

          if(data.type === 'normal'){
            setMessage('Votre email est déja liée à un compte !')
          }
          if(data.type === 'social'){
            setMessage('Votre email est liée à un compte social !')
          }

        }
        else {
          setStep(step + 1)
        }
        
      }, 1000);
    })
    .catch((error) => {

      setLoading(false);
      console.log(error);

    })

  }

  const submit = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('passwd', passw);
    formData.append('photo', photo);

    fetch(`${API_URL}/0/signup`, {
      method: 'POST',
      credentials: 'include',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to submit signup data');
      }
      return response.json();
    })
    .then(data => {

      if(data.message){window.open('/', '_self')}  
      if(data.error){console.log(data.error); setError(true)}
      if(data.found){console.log("compte existant")}

    })
    .catch(error => {
      console.error('Error submitting signup data:', error);
      setError(true);
    });
  }

  const mail = async () => {
    setMailLoading(true);
  
    try {
      const response = await fetch(`${API_URL}/0/mail`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email })
      });
  
      const data = await response.json();
  
      setMailLoading(false);
  
      if (data.send) {
        setEmpreinte(data.empreinte);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  
  const confirmation = async () => {
    try {
      await mail();
      setStep(step + 1);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }

  const check = (userEmpreinte) => {

    setIncorrect(false)

    if(userEmpreinte === empreinte){
      submit();
    }
    else{
      setIncorrect(true)
    }

  }
  
  useEffect(() => {if(logged){navigate('/Home')}}, [])

  if(error){return <Error/>}
  
  switch(step){

    case 1: 
      return <Step2 prev={() => {setStep(step - 1)}} submit={getPass} passwd={passw}/>

    case 2:
      return <Step1 prev={() => {setStep(step - 1)}} submit={confirmation} getPic={getPhoto} pic={pic} loading={mailLoading}/>

    case 3:
      return <Step3 prev={() => {setStep(step - 1)}} submit={check} email={email} incorrect={incorrect} resend={mail} loading={mailLoading}/>
    
    default: 
      return <Step0 submit={checkUser} emailST={email} nameST={name} loading={loading} message={message} formError={formError}/>

  }
  
}

export default Signup;