import React from 'react'

const TaskList = ({data}) => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap mt-10 justify-between gap-5 screen'>

       {/* New Task */}
       <div 
       className='rounded-2xl w-[35%] py-6 px-9 active:scale-95 
       text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300'
       style={{
         background: "linear-gradient(135deg, #ef4444, #ec4899, #8b5cf6, #f97316, #eab308)"
       }}>
           <h2 className='text-4xl font-extrabold drop-shadow-lg'>
             {data.taskCount.newTask}
           </h2>
           <h3 className='text-sm lg:text-2xl font-medium text-white/80 mt-2'>
             New Task
           </h3>
       </div>

       {/* Completed */}
       <div 
       className='rounded-2xl w-[35%] py-6 px-5 active:scale-95 
       text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300'
       style={{
         background: "linear-gradient(135deg, #3b82f6, #06b6d4, #6366f1, #a855f7, #ec4899)"
       }}>
           <h2 className='text-4xl font-extrabold drop-shadow-lg'>
             {data.taskCount.completed}
           </h2>
           <h3 className='text-sm lg:text-2xl font-medium text-white/80 mt-2'>
             Completed Task
           </h3>
       </div>

       {/* Active */}
       <div 
       className='rounded-2xl w-[35%] py-6 px-5 active:scale-95 
       text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300'
       style={{
         background: "linear-gradient(135deg, #22c55e, #84cc16, #10b981, #14b8a6, #06b6d4)"
       }}>
           <h2 className='text-4xl font-extrabold drop-shadow-lg'>
             {data.taskCount.active}
           </h2>
           <h3 className='text-sm lg:text-2xl font-medium text-white/80 mt-2'>
             Accepted Task
           </h3>
       </div>

       {/* Failed */}
       <div 
       className='rounded-2xl w-[35%] py-6 px-6 active:scale-95 
       text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300'
       style={{
         background: "linear-gradient(135deg, #facc15, #fb923c, #f87171, #ec4899, #8b5cf6)"
       }}>
           <h2 className='text-4xl font-extrabold drop-shadow-lg'>
             {data.taskCount.failed}
           </h2>
           <h3 className='text-sm lg:text-2xl font-medium text-white/80 mt-2'>
             Failed Task
           </h3>
       </div>

    </div>
  )
}

export default TaskList