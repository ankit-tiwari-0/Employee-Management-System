import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='  shadow-2xl shrink-0 lg:h-full h-50 lg:w-80 w-full p-5 rounded-xl'
     style={{
  background: "linear-gradient(135deg, #3b82f6, #6366f1, #a855f7)"
}}>
        <div className='flex justify-between items-center'>
             <h3 className=' text-sm px-3 py-1 rounded bg-linear-to-br from-red-300 via-red-600 to-yellow-800 active:scale-90'>{data.category}</h3>
             <h4 className='text-sm bg-transparent'>{data.date}</h4>
        </div>
        <h2 className='lg:mt-5 mt-1 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-1 lg:mt-3 md:line-clamp-none wrap-break-word line-clamp-3'>{data.description}</p>
        <div className=' lg:mt-15 m-4 flex justify-center items-center mt-6'>
          <button className="border-2 border-gray-300 px-5 py-1 rounded-xl text-white font-semibold text-lg hover:bg-white hover:text-pink-500 transition-all duration-200 active:scale-95">
    Complete
  </button>
        </div>
        </div> 
  )
}

export default CompleteTask