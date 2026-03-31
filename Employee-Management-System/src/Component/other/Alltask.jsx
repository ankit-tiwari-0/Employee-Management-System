import React, { useContext } from 'react'
import { Authcontext } from '../../Context/AuthProvider'

const Alltask = () => {
  const [userData,setuserData] = useContext(Authcontext)
  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 mt-5 rounded-2xl overflow-auto h-20 lg:h-48'>
      <div className='bg-red-100 text-black py-2 px-2 flex items-center rounded-xl whitespace-nowrap mb-4'>
  <h2 className='flex-1 px-2 text-[12px] lg:text-[20px] text-center  font-bold'>Name</h2>
  <h3 className='flex-1 px-2 text-[12px] lg:text-[20px] text-center font-bold'>New</h3>
  <h5 className='flex-1 px-2 text-[12px] lg:text-[20px] text-center font-bold'>Active</h5>
  <h5 className='flex-1 px-2 text-[12px] lg:text-[20px] text-center font-bold'>Done</h5>
  <h5 className='flex-1 px-2 text-[12px] lg:text-[20px] text-center font-bold'>Fail</h5>
</div>
      <div>
        {userData.map(function (elem, idx) {
          return <div key={idx} className='border-2 border-emerald-500 py-2 px-2 flex items-center rounded-xl whitespace-nowrap mb-4'>
  <h2 className='flex-1 px-2 text-[15px] lg:text-[20px] font-medium text-center'>{elem.firstName}</h2>
  <h3 className='flex-1 px-2 text-blue-600 text-[11px] lg:text-[20px] text-center font-medium'> {elem.taskCount.newTask}</h3>
  <h5 className='flex-1 px-2 text-orange-500 text-[11px] lg:text-[20px] text-center font-medium'>{elem.taskCount.active}</h5>
  <h5 className='flex-1 px-2 text-white text-[11px] lg:text-[20px] text-center font-medium'>{elem.taskCount.completed}</h5>
  <h5 className='flex-1 px-2 text-red-700 text-[11px] lg:text-[20px] text-center font-medium'>{elem.taskCount.failed}</h5>
</div>
        })}
      </div>



    </div>
  )
}

export default Alltask