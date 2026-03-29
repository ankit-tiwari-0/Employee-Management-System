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
 
//   useEffect(() => {
//   const storedUser = localStorage.getItem("loggedInUserss")

//   if (storedUser) {
//     const userData = JSON.parse(storedUser)

//     setuser(userData?.role)
//     setloggedInUser(userData?.data)
//   }
// }, [])

useEffect(() => {
  const loggedInUser = localStorage.getItem('loggedInUser')

  if (loggedInUser) {
    const userData = JSON.parse(loggedInUser)

    setuser(userData.role)
    setloggedInUser(userData.data)
  }
}, [])
  
  const handleLogin = (email, password)=>{
    if(email == 'admin@tiwari.com' && password == '123'){
      setuser('admin')
      localStorage.setItem('loggedInUserss',JSON.stringify({role:'admin'}))
      
    } else if (authdata){
      const employee = authdata.employees.find((e)=>email == e.email && e.password == password)
      if(employee){

        setuser('employee')
        setloggedInUser(employee)
         localStorage.setItem('loggedInUserss',JSON.stringify({role: 'employee', data:employee}))
        
      }
    }else{
      alert('Invalid Credential')
    }  

  }
  
  
  return (
   <>
    {!user && <Login handleLogin={handleLogin} />}
    {user == 'admin'?  <AdminDashboad /> : (user == 'employee' ?  <EmployeeDash  data ={loggedInUser} /> : null  )}
  
   </>
  )
}

export default App 