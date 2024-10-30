import React, { useState } from 'react'
import Minus from "../components/icons/Minus";
import Plus from "../components/icons/Plus";
const Accordion = ({item}) => {
    const [accordion,setAccordion]=useState(false);
  return (
   <>
    <div className=" flex flex-col gap-2 ">
            <div className="w-full md:w-[70%] shadow-md p-3 flex flex-col gap-3 rounded-md">
              <div className="font-medium text-xl flex justify-between ">
                <h5 className="">{item.title}</h5>
                <div onClick={()=>setAccordion(!accordion)} className="cursor-pointer ">
                    {accordion ? <Minus/>:<Plus/>}</div>
              </div>
             {accordion &&  <p>
               {item.description}
              </p>}
            </div>
            
           
          
          </div>
   
   </>
  )
}

export default Accordion