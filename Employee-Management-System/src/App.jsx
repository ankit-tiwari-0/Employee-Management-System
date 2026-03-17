import React, { useEffect } from 'react'
import Login from './Component/Auth/Login'
import EmployeeDash from './Component/Dashboad/EmployeeDash'
import AdminDashboad from './Component/Dashboad/AdminDashboad'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'

const App = () => {
  
  return (
   <>
   <Login />
   {/* <EmployeeDash /> */}
   {/* <AdminDashboad /> */}
   </>
  )
}

export default App