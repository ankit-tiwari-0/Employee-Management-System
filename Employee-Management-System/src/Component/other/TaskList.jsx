import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap mt-10 justify-between gap-5 screen '>
       <div className='rounded-xl w-[35%] py-6 px-9 active:scale-90 bg-red-950'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
             <h3 className='text-sm lg:text-2xl font-medium'>New task</h3>
       </div>
       <div className='rounded-xl w-[35%] py-5 px-5 active:scale-90  bg-blue-600'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
             <h3 className='text-sm  lg:text-2xl  font-medium'>Completed Task</h3>
       </div>
       <div className='rounded-xl w-[35%] py-6 px-5 active:scale-90 bg-[#6A994E]'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
             <h3 className='text-sm  lg:text-2xl font-medium'>Accepted Task</h3>
       </div>
       <div className='rounded-xl w-[35%] py-6 px-6 active:scale-90 bg-[#FFD93D]'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
             <h3 className='text-l lg:text-2xl font-medium'>Failed Task</h3>
       </div>
    </div>
  )
}

export default TaskList