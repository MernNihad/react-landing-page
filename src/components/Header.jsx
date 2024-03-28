import React from 'react'
import { FaHamburger, FaPhoneAlt } from "react-icons/fa";

function Header() {
  return (
    <div className='flex  justify-between px-14 py-7'>
      <p className='lg:hidden block'>
      <FaHamburger  size={30} />
      </p>
         <ul className='hidden gap-3 lg:flex '>
            <li className='  px-2 hover:text-gray-400 hover:bg-white hover:font-medium  rounded-lg text-gray-500 ' >Home</li>
            <li className='  px-2 hover:text-gray-400 hover:bg-white hover:font-medium  rounded-lg text-gray-500 ' >About</li>
            <li className='  px-2 hover:text-gray-400 hover:bg-white hover:font-medium  rounded-lg text-gray-500 ' >Contact</li>
            <li className='  px-2 hover:text-gray-400 hover:bg-white hover:font-medium  rounded-lg text-gray-500 ' >Services</li>
            <li className='  px-2 hover:text-gray-400 hover:bg-white hover:font-medium  rounded-lg text-gray-500 ' >Enquiry</li>
         </ul>

         <div className="flex gap-4 items-center">
         <FaPhoneAlt color='black' size={25} />
            <div className="flex flex-col">
                <span>0000000000</span>
                <span>We work 24/7</span>
            </div>
            <button className='ms-4 uppercase bg-blue-500 px-4 py-2.5 rounded-lg text-white'>apply now</button>
         </div>
    </div>
  )
}

export default Header