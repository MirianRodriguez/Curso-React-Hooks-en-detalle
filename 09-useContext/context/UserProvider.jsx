import React, { useState } from 'react'
import { UserContext } from './UserContext'

//recibe como property el listado de children 
export const UserProvider = ({children}) => {

    //usamos useState para mantener el estado de la información del contexto, 
    //de manera que se pueda modificar desde los componentes
    const [user, setUser] = useState({id: 1, name: 'Pablo'}); 


  return (
    // todos los children van a poder acceder a esta información del userContext a través del userProvider
    <UserContext.Provider value={{user: user, setUser:setUser}}> 
        {children}
    </UserContext.Provider>
  )
}
