import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
export const Authcontext = createContext()

const AuthProvider = ({children}) => {
  // localStorage.clear()

    const [userData, setuserData] = useState(null)
   
    useEffect(() => {
      setLocalStorage()
      const {employees} = getLocalStorage()
      setuserData({employees})
    }, [])
    
   
  return (
    <div>
        <Authcontext.Provider value={[userData,setuserData]}>
              {children}  
        </Authcontext.Provider>
      
    </div>
  )
}

export default AuthProvider 