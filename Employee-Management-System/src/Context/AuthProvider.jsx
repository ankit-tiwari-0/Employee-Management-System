import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
export const Authcontext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState(null)
   
    useEffect(() => {
      setLocalStorage()
      const {employees,admin} = getLocalStorage()
      setuserData({employees,admin})
    }, [])
    
   
  return (
    <div>
        <Authcontext.Provider value={userData}>
              {children}  
        </Authcontext.Provider>
      
    </div>
  )
}

export default AuthProvider 