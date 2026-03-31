import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='shrink-0 lg:h-full h-50 lg:w-80 w-full p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl '
         style={{
  background: "linear-gradient(135deg, #22c55e, #10b981, #06b6d4)"
}} >
        <div className='flex justify-between items-center'>
             <h3 className=' text-sm px-3 py-1 rounded bg-linear-to-br from-red-300 via-red-600 to-yellow-800 active:scale-90'>{data.category}</h3>
             <h4 className='text-sm bg-transparent '>{data.date}</h4>
        </div>
        <h2 className='lg:mt-5 mt-1 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-1 lg:mt-3 md:line-clamp-none wrap-break-word line-clamp-3'>{data.description}</p>
        <div className='flex justify-between lg:mt-15 m-4'>
           <button className='bg-linear-to-br from-green-400 via-green-200 to-yellow-500 py-1 px-2 text-l rounded-xl active:scale-50 cursor-pointer transition-all duration-200'> Completed</button> 
           <button className='bg-linear-to-br from-red-500 via-red-400 to-red-300 py-0.5 px-2 text-l rounded-xl active:scale-50 cursor-pointer'> Failed</button> 
        </div>
        </div> 
  )
}

export default AcceptTask