import React from 'react'

import img from "../images/5037752_31615.jpg"

function MainSection() {
  return (
    // <div className='flex md:flex-col lg:flex-row h-[500px] mt-4'>
    <div className='flex flex-col lg:flex-row h-[500px] mt-4'>



      <div className=" flex-1 flex flex-col justify-center ps-14" >
        <h1 className='text-6xl font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur Atque, suscipit?</h1>
        <p className='text-white mt-4 drop-shadow-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam, atque adipisci cumque aliquid aliquam ipsa laudantium aspernatur esse quisquam expedita qui autem culpa excepturi explicabo minima consectetur soluta. Nemo!</p>
        <button className=' mt-4 w-fit bg-blue-700 text-white px-10 py-2.5 font-medium font-mono  rounded-md'>Click</button>
      </div>



      <div className=" flex-1 flex justify-center">
        <img src={img} alt="" className='lg:w-[90%] w-auto rounded-t-full' />
      </div>
    </div>
  )
}

export default MainSection