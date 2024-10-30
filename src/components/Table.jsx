import React from 'react'

const Table = () => {
  return (
    <>
    <div>
        <table className='border p-3 w-[100%]'  data-aos="fade-up" data-aos-duration="1200">
            <thead className='border border-black '>
                <tr >
                    <th className='p-3 text-xl'>Benefit</th>
                    <th className='text-xl'>Description</th>
                </tr>
            </thead>
            <tbody className='border border-black'>
                <tr className='border border-black '>
                    <td className='p-3 font-medium'>Brand Recognition</td>
                    <td>Franchisees gain immediate brand recognition, benefiting from an established name and customer trust.</td>
                </tr>
                <tr className='border border-black'>
                    <td className='p-3  font-medium'>Training and Support</td>
                    <td>Comprehensive training programs, along with ongoing operational, marketing, and management support from the franchisor.</td>
                </tr>
                <tr className='border border-black'>
                    <td className='p-3  font-medium'>Marketing Assistance</td>
                    <td>Access to national and local marketing campaigns, reducing the need for franchisees to develop their own strategies</td>
                </tr>
                <tr className='border border-black'>
                    <td className='p-3  font-medium'>Proven Business Model</td>
                    <td>Franchisees follow a tested business model with established operational systems and standards</td>
                </tr>
                <tr className='border border-black'>
                    <td className='p-3  font-medium'>Bulk Purchasing Power</td>
                    <td>Franchisors negotiate deals with suppliers, allowing franchisees to access products and materials at reduced costs</td>
                </tr>
                <tr className='border border-black'>
                    <td className='p-3  font-medium'>Network and Community</td>
                    <td>Franchisees join a network of business owners, providing opportunities for knowledge-sharing and mutual support</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    
    
    </>
  )
}

export default Table