import React from 'react'

const AcceptTask = () => {
  return (
    <div className='shrink-0 lg:h-full h-50 lg:w-80 w-full p-5 bg-[#FF9F1C] rounded-xl'>
        <div className='flex justify-between items-center'>
             <h3 className=' text-sm px-3 py-1 rounded bg-red-600 active:scale-90'>High</h3>
             <h4 className='text-sm bg-transparent'>DD-MM-YY</h4>
        </div>
        <h2 className='lg:mt-5 mt-1 text-2xl font-semibold'>Make A Video</h2>
        <p className='text-sm mt-1 lg:mt-3 md:line-clamp-none wrap-break-word line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates soluta obcaecati vero numquam autem sit.dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        <div className='flex justify-between lg:mt-15 m-4'>
           <button className='bg-green-500 py-1 px-2 text-l rounded-xl'> Completed</button> 
           <button className='bg-red-500 py-0.5 px-2 text-l rounded-xl'> Failed</button> 
        </div>
        </div> 
  )
}

export default AcceptTask