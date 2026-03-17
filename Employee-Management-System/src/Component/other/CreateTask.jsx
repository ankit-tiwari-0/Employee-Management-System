import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-4 md:p-6 bg-[#1c1c1c] mt-10 md:mt-10 rounded-2xl'>
                <form className='flex flex-col lg:flex-row gap-6 w-full justify-between'>

                    {/* LEFT SIDE */}
                    <div className='w-full lg:w-1/2 space-y-4'>
                        
                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Task Title</h3>
                            <input className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="text" placeholder='Enter task title' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Date</h3>
                            <input className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="date" />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Assign To</h3>
                            <input className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="text" placeholder='Employee name' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Category</h3>
                            <input className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="text" placeholder='Design, Dev etc' />
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className='w-full lg:w-1/2 flex flex-col'>
                        <h3 className='text-sm text-gray-300 mb-1.5'>Description</h3>

                        <textarea 
                            className='w-full h-40 md:h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 border-gray-400'
                        ></textarea>

                        <button className='bg-emerald-500 hover:bg-emerald-600 py-2 md:py-3 px-4 rounded-xl text-sm mt-4 w-full md:w-fit active:scale-50'>
                            Create Task
                        </button>
                    </div>

                </form>
            </div>
  )
}

export default CreateTask