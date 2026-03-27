import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDash from './Component/Dashboad/EmployeeDash'
import AdminDashboad from './Component/Dashboad/AdminDashboad'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { Authcontext } from './Context/AuthProvider'

const App = () => {
  const [user, setuser] = useState(null)
  const [loggedInUser, setloggedInUser] = useState(null)
  const authdata = useContext(Authcontext)
  useEffect(() => {
     const loggedInUsers = localStorage.getItem("loggedInUser")
      if (loggedInUsers){
        setuser(loggedInUsers.role)
      }
  }, [authdata])
  

  const handleLogin = (email, password)=>{
    if(email == 'admin@me.com' && password == '123'){
      setuser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
    } else if (authdata){
      const employee = authdata.employees.find((e)=>email == e.email && e.password == password)
      if(employee){

        setuser('employee')
        setloggedInUser(employee)
         localStorage.setItem('loggedInUser',JSON.stringify({role: 'employee'}))
        
      }
    }else{
      alert('Invalid Credential')
    }  

  }
  
  
  return (
   <>
    {!user && <Login handleLogin={handleLogin} />}
    {user == 'admin'?  <AdminDashboad /> : (user == employee ?  <EmployeeDash  data ={loggedInUsers} /> : null  )}
  
   </>
  )
}

export default App 