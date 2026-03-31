import React, { useState, useContext } from 'react'
import Alltask from './Alltask'
import { setLocalStorage } from '../../utils/localstorage'
import { Authcontext } from '../../Context/AuthProvider'

const CreateTask = () => {

   const [userData,setuserData] = useContext(Authcontext)
 

    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [asignTo, setasignTo] = useState('')
    const [category, setcategory] = useState('')
    const [newtask, setnewtask] = useState({})

    const submitHandler = (e) =>{
        e.preventDefault()
       setnewtask({taskDate,taskDescription,taskTitle,asignTo,category,active:false,newTask:true,failed:false,completed:false})

       const data = userData

       userData.forEach(function(elem){
        if (asignTo == elem.firstName){
            elem.tasks.push(newtask)
            elem. taskCount.newTask = elem. taskCount.newTask+1
           
            
        }
       })
       setLocalStorage(data)
      
        setasignTo('')
        setcategory('')
        settaskTitle('')
        settaskDate('')
        settaskDescription('')


        
    }
  return (
    <div className='p-4 md:p-6 bg-[#1c1c1c] mt-10 md:mt-10 rounded-2xl'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex flex-col lg:flex-row gap-6 w-full justify-between'>

                    {/* LEFT SIDE */}
                    <div className='w-full lg:w-1/2 space-y-4'>
                        
                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Task Title</h3>
                            <input
                              value={taskTitle}
                              onChange={(e)=>{
                                settaskTitle(e.target.value)
                              }}
                            className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="text" placeholder='Enter task title' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Date</h3>
                            <input 
                             value={taskDate}
                              onChange={(e)=>{
                                settaskDate(e.target.value)
                              }}
                            className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="date" />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Assign To</h3>
                            <input 
                             value={asignTo}
                              onChange={(e)=>{
                                setasignTo(e.target.value)
                              }}
                            className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="text" placeholder='Employee name' />
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-1.5'>Category</h3>
                            <input
                             value={category}
                              onChange={(e)=>{
                                setcategory(e.target.value)
                              }}
                            className='w-full lg:w-4/5 text-sm py-2 px-3 rounded outline-none bg-transparent border-2 border-gray-400' type="text" placeholder='Design, Dev etc' />
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className='w-full lg:w-1/2 flex flex-col'>
                        <h3 className='text-sm text-gray-300 mb-1.5'>Description</h3>

                        <textarea 
                        value={taskDescription}
                              onChange={(e)=>{
                                settaskDescription(e.target.value)
                              }}
                            className='w-full h-40 md:h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-2 border-gray-400'
                        ></textarea>

                        <button className='bg-emerald-500 hover:text-gray-700 font-semibold text-xl hover:bg-emerald-600 py-2 md:py-3 px-4 rounded-2xl  mt-6 w-full md:w-fit active:scale-50'>
                            Create Task
                        </button>
                    </div>

                </form>
                <Alltask />
            </div>
  )
}

export default CreateTask