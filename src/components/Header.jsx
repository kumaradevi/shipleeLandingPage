import React from 'react'

const Header = () => {
  return (
   <div className='sticky top-0 z-[99999] left-0'>
     <div className='bg-purple-200 shadow-sm w-[100%] h-[80px] flex justify-between items-center '>
       
       <div className='flex w-[80%] mx-auto justify-between'>
       <div className='text-3xl font-medium'>Shiplee</div>
       <ul className='flex gap-5 items-center'>
            <li>Home</li>
            <li>Products</li>
            <li>Pricing</li>
            <li>Partners</li>
            <li>Track Order</li>
            <li>Resources</li>
            <li>Contact</li>
        </ul>
        <div>
            <button className='bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-all'>Signup</button>
        </div>
       </div>
       </div>
  
   </div>
  )
}

export default Header