import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Step2 = ({submit, prev, passwd}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState(passwd)
  const [passx, setPassx] = useState(passwd)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const action = () => {

    if(pass.length < 7){setError1(true); return}
    if(pass != passx){setError2(true); return}
    submit(pass)
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='ss:w-[400px] w-[300px] ss:p-10 pr-5 pl-5 pt-10 pb-10 rounded-md flex flex-col gap-10 items-center min-shadow'>
        
        <h2 className='text-2xl font-semibold text-center mt-5 mb-[5px]'>Créez un mot de passe</h2>
        
        <div className='w-full flex flex-col gap-5'>
          <div className="relative w-full">
            {error1 ? <p className="error">Mot de passe trop court</p> : null}
            <input type={showPassword ? "text" : "password"} placeholder='Nouveau mot de passe' 
              className={`${error1 ? "input-error" : null} input rounded`} onChange={(e) => {setPass(e.target.value); setError1(false)}}
              defaultValue={passwd}
            />
          </div>
          <div className="relative w-full">
            {error2 ? <p className="error">Mot non correspondant</p> : null}
            <input type={showPassword ? "text" : "password"} placeholder='Confirmer le mot de passe' 
              className={`${error2 ? "input-error" : null} input rounded`} onChange={(e) => {setPassx(e.target.value); setError2(false)}}
              defaultValue={passwd}
            />
          </div>
        </div>

        <div className='w-full flex flex-col gap-5'>
          <div className='flex flex-row gap-[5px] w-full'>
            <input type="checkbox" onChange={toggleShowPassword} className='check'/>
            <p className='font-semibold'>Afficher les mots de passe</p>
          </div>
          <div className='flex justify-between w-full'>
            <button className='flex flex-row gap-[10px] btn rounded' onClick={prev}>
              <FaAngleDoubleLeft className='mt-[5px]' />
              Retour
            </button>
            <button className='flex flex-row gap-[10px] btn rounded active' onClick={action}>
              Suivant
              <FaAngleDoubleRight className='mt-[5px]'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
