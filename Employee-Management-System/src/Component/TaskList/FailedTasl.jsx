import React from 'react'

const FailedTasl = ({data}) => {
  return (
      <div className='shrink-0 lg:h-full h-50 lg:w-80 w-full p-5 bg-purple-400 rounded-xl'>
        <div className='flex justify-between items-center'>
             <h3 className=' text-sm px-3 py-1 rounded bg-red-600 active:scale-90'>{data. title}</h3>
             <h4 className='text-sm bg-transparent'>DD-MM-YY</h4>
        </div>
        <h2 className='lg:mt-5 mt-1 text-2xl font-semibold'>{data.category}</h2>
        <p className='text-sm mt-1 lg:mt-3 md:line-clamp-none wrap-break-word line-clamp-3'>{data.description}</p>
        <div className=' lg:mt-15 m-4'>
            <button className='w-full'>Failed</button>
        </div>
        </div> 

  )
}

export default FailedTasl