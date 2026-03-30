import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'

const AdminDashboad = (props) => {
    return (
        <div className='min-h-screen w-full p-8 md:p-6 lg:p-10'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
           
        </div>
    )
}

export default AdminDashboad