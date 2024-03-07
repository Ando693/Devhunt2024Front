import React from 'react'

const Button = (props) => {
  return (
    <div className="flex flex-col gap-5 font-semibold">
    <div className='flex justify-between font-normal'>
        <span className='flex gap-[2px] text-sm font-semibold'><input type="checkbox"/><a href="#">se souvenir de moi</a></span>
        <span className='text-sm font-semibold'><a href="#">mot de passe oublié?</a></span>
    </div>
    <button className='text-white bg-black text-white p-[10px] rounded' onClick={props.action}>Login</button>
    </div>
  )
}

export default Button