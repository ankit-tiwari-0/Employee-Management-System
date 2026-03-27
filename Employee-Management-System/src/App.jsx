import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDash from './Component/Dashboad/EmployeeDash'
import AdminDashboad from './Component/Dashboad/AdminDashboad'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { Authcontext } from './Context/AuthProvider'

const App = () => {
  const [user, setuser] = useState(null)
  const authdata = useContext(Authcontext)
  console.log(authdata);
  

  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setuser('admin')
      
    } else if (email == 'user@me.com' && password == '123'){
      setuser('employee')
      
    }else{
      alert('Invalid Credential')
    }  

  }
  
  
  return (
   <>
    {!user && <Login handleLogin={handleLogin} />}
    {user == 'admin'?  <AdminDashboad /> :  <EmployeeDash /> }
  
   </>
  )
}

export default App 