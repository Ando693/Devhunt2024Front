import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaCamera } from 'react-icons/fa';

const Step1 = ({ prev, submit, getPic, pic, loading }) => {

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='ss:w-[500px] w-[300px] ss:p-10 pr-5 pl-5 pt-10 pb-10 rounded-md flex flex-col gap-10 min-shadow relative overflow-hidden'>
        <div className='flex flex-col mt-[20px] items-center'>
          <img src={pic} alt='profile' className='w-[220px] h-[220px] mb-[10px] rounded-full photo' />
          <div className='relative mb-[25px]'>
            <input type='file' className='filePicker' onChange={getPic} />
            <FaCamera className='fileico' />
          </div>
          <h2 className='text-2xl font-semibold text-center'>Choisissez une photo de profile</h2>
        </div>
        <div className='flex justify-between'>
          <button className='flex flex-row gap-[10px] btn rounded' onClick={prev}>
            <FaAngleDoubleLeft className='mt-[5px]' />
            Retour
          </button>
          <button className='flex flex-row gap-[10px] btn rounded active' onClick={submit}>
            Suivant
            <FaAngleDoubleRight className='mt-[5px]' />
          </button>
        </div>
        {loading ? <div className="loading-box"><span className="loading" ></span></div> : null}
      </div>
    </div>
  );
};

export default Step1;
