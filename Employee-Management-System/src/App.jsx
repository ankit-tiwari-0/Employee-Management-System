import React, { useEffect } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDash from './Component/Dashboad/EmployeeDash'
import AdminDashboad from './Component/Dashboad/AdminDashboad'
import { setLocalStorage } from './utils/localstorage'

const App = () => {

  useEffect(() => {
    setLocalStorage()
  
  },)
  
  return (
   <>
   <Login />
   {/* <EmployeeDash /> */}
   {/* <AdminDashboad /> */}
   </>
  )
}

export default App