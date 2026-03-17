import React from 'react'
import Header from '../other/Header'

const AdminDashboad = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <div>
            <form>
                <h3> Task Title</h3>
                <input type="text" placeholder='make ' />
                <h3>Description</h3>
                <textarea name="" id=" " cols="30" rows="10"></textarea>
                <h3>Date</h3>
                <input type="text" />
                <h3>Asign to </h3>
                <input type="text" placeholder='Employee name' />
                <h3>Cateogory</h3>
                <input type="text" placeholder='Design, dev etc' />
                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboad