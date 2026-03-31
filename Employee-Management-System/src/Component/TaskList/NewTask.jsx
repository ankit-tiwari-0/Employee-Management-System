import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='shrink-0 lg:h-full h-50 lg:w-80 w-full p-5 rounded-xl
    style={{
         background: "linear-gradient(135deg, #ef4444, #ec4899, #8b5cf6, #f97316, #eab308)"
       }}>'>
        <div className='flex justify-between items-center'>
             <h3 className=' text-sm px-3 py-1 rounded bg-red-600 active:scale-90'>{data.category}</h3>
             <h4 className='text-sm bg-transparent'>{data.date}</h4>
        </div>
        <h2 className='lg:mt-5 mt-1 text-2xl font-semibold'>{data.category}</h2>
        <p className='text-sm mt-1 lg:mt-3 md:line-clamp-none wrap-break-word line-clamp-3'>{data.description}</p>
        <div className='lg:mt-15 m-4'>
            <button className='bg-green-500 py-1 px-2 text-l rounded-xl active:scale-50 cursor-pointer'>Accept</button>
        </div>
        </div> 
  )
}

export default NewTask