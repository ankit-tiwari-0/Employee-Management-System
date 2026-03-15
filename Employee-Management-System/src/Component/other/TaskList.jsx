import React from 'react'

const TaskList = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap mt-10 justify-between gap-5 screen '>
       <div className='rounded-xl w-[35%] py-6 px-9  bg-red-400'>
           <h2 className='text-3xl font-semibold'>0</h2>
             <h3 className='text-xl font-medium'>new task</h3>
       </div>
       <div className='rounded-xl w-[35%] py-6 px-9  bg-blue-400'>
           <h2 className='text-3xl font-semibold'>0</h2>
             <h3 className='text-xl font-medium'>new task</h3>
       </div>
       <div className='rounded-xl w-[35%] py-6 px-9  bg-green-300'>
           <h2 className='text-3xl font-semibold'>0</h2>
             <h3 className='text-xl font-medium'>new task</h3>
       </div>
       <div className='rounded-xl w-[35%] py-6 px-9  bg-yellow-400'>
           <h2 className='text-3xl font-semibold'>0</h2>
             <h3 className='text-xl font-medium'>new task</h3>
       </div>
    </div>
  )
}

export default TaskList