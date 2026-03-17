import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'

const AdminDashboad = () => {
    return (
        <div className='min-h-screen w-full p-8 md:p-6 lg:p-10'>
            <Header />
            <CreateTask />
           
        </div>
    )
}

export default AdminDashboad