import React from 'react'
import img from "../assets/export.png"
const Hero = () => {
  return (
<>

<div className='w-full h-[500px]  bg-gradient-to-r from-purple-700 to-purple-200 flex justify-between mx-auto'>
   
  <div className='mt-[150px] md:ml-[100px] px-8'>
  <h3 className='text-5xl font-bold text-white'>Join the Shiplee Franchise</h3>
  <button className='bg-purple-900 text-white px-5 py-2 text-lg  rounded-full mt-8'><a href="#">Explore More</a></button>
  </div>
  <div className='w-[40%] h-full hidden md:block'>
    <img src={img} alt="" className='w-full h-full object-cover' />
  </div>
</div>
</>
  )
}

export default Hero