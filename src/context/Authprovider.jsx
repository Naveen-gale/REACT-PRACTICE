import React, { useEffect } from 'react'
import { createContext } from 'react'
import { getLocalStorage } from '../utils/localStorage';
import { useState } from 'react';
export const AuthContext = createContext();
const Authprovider = ({children}) => {
    const [userdata, setuserdata] = useState([])
    useEffect(() => {
      const {employees,admin}=getLocalStorage();
    setuserdata({employees,admin})
    
     
    }, [])
    
    
    

  return (
    <div>
        <AuthContext.Provider value={userdata} >
      {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
