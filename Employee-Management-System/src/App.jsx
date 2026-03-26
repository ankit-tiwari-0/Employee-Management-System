import React, { useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDash from './Component/Dashboad/EmployeeDash'
import AdminDashboad from './Component/Dashboad/AdminDashboad'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'

const App = () => {
  const [user, setuser] = useState(null)

  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      console.log('This is admin');
      
    } else if (email == 'user@me.com' && password == '123'){
      console.log('This is user');
      
    }else{
      alert('Invalid Credential')
    }  

  }

  handleLogin('admin@me.com',123)
  
  return (
   <>
  {!user ?  <Login />: ''}
   {/* <EmployeeDash /> */}
   {/* <AdminDashboad /> */}
   </>
  )
}

export default App 