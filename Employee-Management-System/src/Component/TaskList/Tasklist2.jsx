import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTasl from './FailedTasl'

const Tasklist2 = ({data}) => {
  return (
    <div id='tasklist' className='flex h-[50%] overflow-auto lg:overflow-x-auto  items-center lg:justify-start justify-center gap-5 flex-wrap lg:flex-nowrap py-5  w-full  mt-10 '>
       <AcceptTask />
      <NewTask/>
      <CompleteTask />
      <FailedTasl />
      
    </div>
  )
}

export default Tasklist2