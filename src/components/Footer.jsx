import React from 'react'
import Location from './icons/Location'
import Phone from './icons/Phone'
import Mail from './icons/Mail'
import img1 from "../assets/export.png"
import img2 from "../assets/img1.png"
import Share from './icons/Share'
const Footer = () => {
  return (
    <div className='bg-black text-white w-full h-[400px] flex justify-between '>
       <div className='w-[80%] mx-auto flex justify-between mt-12'>
       <div>
            <h4 className='text-3xl font-bold'>Shiplee</h4>
        </div>
        <div className='flex flex-col gap-4 '>
            <h4 className='text-2xl font-medium'>Address</h4>
            <div className='flex gap-2 mt-8'>
                <div><Location/></div>
                <p>SHIPLEE ,B-201 G/F L/S DELHI</p>
            </div>
            <div className='flex gap-2'>
                <div><Phone/></div>
                <p>1234567898</p>
            </div>
            <div className='flex gap-2'>
                <div><Mail/></div>
                <p>shiplee@gmail.com</p>
            </div>
        </div>
        <div>
            <h4 className='text-2xl font-medium'>Gallery</h4>
            <div className='grid grid-cols-2 gap-3 mt-12'>
                <div className='w-[70px] h-[70px]'>
                    <img src={img1} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={img2} alt="" className='w-full h-full object-cover' />
                </div>
                <div className='w-[70px] h-[70px]'>
                    <img src={img1} alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
        <div>
            <h4 className='text-2xl font-medium'>Quick Links</h4>
            <ul className='mt-12 flex flex-col gap-3'>
                <li>Home</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Partners</li>
                <li>Track Order</li>
                <li>Resources</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h4 className='text-2xl font-medium'>NewsLetter</h4>
            <div className='mt-12'>
                <p>Put Your email to get Update</p>
               <div className='bg-white text-purple-700 rounded-md mt-4 flex justify-between items-center px-3 py-2'>
               <input type="email" className=' rounded-md  border-none outline-none' placeholder='Your Email'/>
               <Share/>
               </div>
            </div>
        </div>
       </div>


    </div>
  )
}

export default Footer