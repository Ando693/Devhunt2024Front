import React from 'react'
import { FaXmark } from "react-icons/fa6"
import { IoRestaurantOutline, IoCarSportOutline } from "react-icons/io5"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { PiHouse } from "react-icons/pi"

const Suggestion = ({exit, show, showX}) => {
  return (

    <div className="ss:w-[500px] w-[300px] h-screen overflow-auto flex flex-col gap-[20px] py-5">

      <div className="flex justify-between items-center px-5 mt-5 mb-5">
        <p className="ml-[15px] ss:text-3xl text-xl font-semibold">Endroit à visiter</p>
        <div className="pt-[8px]">
          {showX ? <FaXmark className='xlg' onClick={exit}/> : null}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[25px]">

        <div 
          className="w-[200px] h-[200px] rounded-md suggestion flex flex-col justify-center items-center gap-[10px] cursor-pointer" 
          onClick={() => {show('restaurant')}}
        >
          <IoRestaurantOutline className="sugg-ico"/>
          <p className="ss:text-xl text-2xl font-semibold text-primary">Restaurant</p>
        </div>

        <div 
          className="w-[200px] h-[200px] rounded-md suggestion flex flex-col justify-center items-center gap-[10px] cursor-pointer" 
          onClick={() => {show('maison')}}
        >
          <PiHouse className="sugg-ico"/>
          <p className="ss:text-xl text-2xl font-semibold text-primary">Maison à louer</p>
        </div>

      </div>

      <div className="flex flex-wrap justify-center gap-[25px]">

      <div 
        className="w-[200px] h-[200px] rounded-md suggestion flex flex-col justify-center items-center gap-[10px] cursor-pointer" 
        onClick={() => {show('bureau')}}
      >
        <HiOutlineBuildingOffice2 className="sugg-ico"/>
        <p className="ss:text-xl text-2xl font-semibold text-primary">Bureau administratif</p>
      </div>

      <div 
        className="w-[200px] h-[200px] rounded-md suggestion flex flex-col justify-center items-center gap-[10px] cursor-pointer" 
        onClick={() => {show('transport')}}
      >
        <IoCarSportOutline  className="sugg-ico"/>
        <p className="ss:text-xl text-2xl font-semibold text-primary">Transport</p>
      </div>

      </div>

    </div>
  )
}

export default Suggestion