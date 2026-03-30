import React from 'react'
import Header from '../other/Header'
import TaskList from '../other/TaskList'
import Tasklist2 from '../TaskList/Tasklist2'

const EmployeeDash = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data = {props.data} />
        <TaskList data = {props.data} />
        <Tasklist2  data = {props.data}/>
    </div>
  )
}

export default EmployeeDash