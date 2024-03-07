import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'
import md5 from 'md5'
 
const Step3 = ({prev, submit, email, incorrect, resend, loading}) => {
 
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);
  const [error4, setError4] = useState(false);

  const handleChange = (event, setter) => {
    const { value } = event.target;
    if (value.length > 1) {
      setter(value.charAt(0));
    } else {
      setter(value);
    }
  };

  const check = () => {

    setError1(false);
    setError2(false);
    setError3(false);
    setError4(false);

    if(code1.length < 1){setError1(true); return;}
    if(code2.length < 1){setError2(true); return;}
    if(code3.length < 1){setError3(true); return;}
    if(code4.length < 1){setError4(true); return;}

    const combinedValue = `${code1}${code2}${code3}${code4}`;
    const empreinte = md5(combinedValue)
    submit(empreinte)

  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="ss:w-[400px] w-[300px] ss:p-10 p-5 rounded min-shadow flex flex-col justify-center items-center gap-10 relative overflow-hidden">
        <div className="flex flex-col gap-5 text-center">
          <h2 className="text-2xl font-bold mt-5">Validation de votre email</h2>
          <p>Nous avons envoyé un code de vérification à {email}, entrez le ci-dessous</p>
        </div>

        <div className="flex justify-between w-full">
          <input type="number" className={`${error1 ? "input-error" : "border-gray"} code-input rounded`} value={code1} onChange={(e) => handleChange(e, setCode1)} min={0} max={9}/>
          <input type="number" className={`${error2 ? "input-error" : "border-gray"} code-input rounded`} value={code2} onChange={(e) => handleChange(e, setCode2)} min={0} max={9}/>
          <input type="number" className={`${error3 ? "input-error" : "border-gray"} code-input rounded`} value={code3} onChange={(e) => handleChange(e, setCode3)} min={0} max={9}/>
          <input type="number" className={`${error4 ? "input-error" : "border-gray"} code-input rounded`} value={code4} onChange={(e) => handleChange(e, setCode4)} min={0} max={9}/>
        </div> 

        <div className="w-full flex flex-col gap-5">
        <div className="font-semibold">
            <p>Code non reçu ? <span className='cursor-pointer' onClick={resend}>renvoyer</span> </p>
        </div>
        <div className="flex justify-between w-full">
            <button className='flex flex-row gap-[10px] btn rounded' onClick={prev}>
              <FaAngleDoubleLeft className='mt-[5px]' />
              Retour
            </button>
            <button className='flex flex-row gap-[10px] btn rounded active' onClick={check}>
              Suivant
              <FaAngleDoubleRight className='mt-[5px]'/>
            </button>
        </div>
        {incorrect ? <div className="code-error text-center">Code de vérification incorrect !</div> : null}
        </div>

        {loading ? <div className="loading-box"><span className="loading" ></span></div> : null} 
      </div>
    </div>
  );
};

export default Step3;
