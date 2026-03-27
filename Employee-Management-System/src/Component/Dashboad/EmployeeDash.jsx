import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'
import Tasklist2 from '../TaskList/Tasklist2'

const EmployeeDash = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <h1>{data.id}</h1>
        <Header data = {data} />
        <TaskList data = {data} />
        <Tasklist2  data = {data}/>
    </div>
  )
}

export default EmployeeDash