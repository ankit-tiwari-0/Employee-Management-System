import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTasl from './FailedTasl'

const Tasklist2 = ({data}) => {
  return (
    <div id='tasklist' className='flex h-[50%] overflow-auto lg:overflow-x-auto  items-center lg:justify-start justify-center gap-5 flex-wrap lg:flex-nowrap py-5  w-full  mt-10 '>
      {data.tasks.map((elem, idx)=>{
          if(elem.active){
               return <AcceptTask key={idx}/>
          }
          if(elem.newTask){
               return <NewTask key={idx}/>
          }
          if(elem.completed){
               return <CompleteTask key={idx}/>
          }
          if(elem.failed){
               return <FailedTasl key={idx}/>
          }
      })}
      
    </div>
  )
}

export default Tasklist2