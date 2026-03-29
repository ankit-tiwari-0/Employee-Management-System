import React from 'react'

const CompleteTask = () => {
  return (
    <div className='shrink-0 lg:h-full h-50 lg:w-80 w-full p-5 bg-pink-400 rounded-xl'>
        <div className='flex justify-between items-center'>
             <h3 className=' text-sm px-3 py-1 rounded bg-red-600 active:scale-90'>High</h3>
             <h4 className='text-sm bg-transparent'>DD-MM-YY</h4>
        </div>
        <h2 className='lg:mt-5 mt-1 text-2xl font-semibold'>Make A Video</h2>
        <p className='text-sm mt-1 lg:mt-3 md:line-clamp-none wrap-break-word line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates soluta obcaecati vero numquam autem sit.dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        <div className=' lg:mt-15 m-4'>
            <button className='w-full'>Complete</button>
        </div>
        </div> 
  )
}

export default CompleteTask