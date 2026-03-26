import React, { createContext, useState } from 'react'
export const Authcontext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState('')
  return (
    <div>
        <Authcontext.Provider value={'Ankit'}>
              {children}  
        </Authcontext.Provider>
      
    </div>
  )
}

export default AuthProvider