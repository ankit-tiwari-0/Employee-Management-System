import React, { useState } from 'react'

const Header = ({data}) => {
//   const [username, setusername] = useState('')

// if (!data){
//   setusername('Admin')
// }else{
//   setusername(data.firstName)
// }

const logOut = () =>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>uuu👋</span></h1>
        <button onClick={logOut} className='bg-red-700 text-white px-5 py-2 rounded-full text-lg font-medium active:scale-50 hover:bg-gray-400 cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header;