import React, { createContext } from 'react'
export const Authcontext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
        <Authcontext.Provider value={'Ankit'}>
              {children}  
        </Authcontext.Provider>
      
    </div>
  )
}

export default AuthProvider