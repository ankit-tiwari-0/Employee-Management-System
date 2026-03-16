import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'
import Tasklist2 from '../TaskList/Tasklist2'

const EmployeeDash = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header />
        <TaskList />
        <Tasklist2 />
    </div>
  )
}

export default EmployeeDash