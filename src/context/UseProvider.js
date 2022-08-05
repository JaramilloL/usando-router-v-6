import {createContext, useState} from 'react'
//creamos el context
export const userContext = createContext()

const UseProvider = ({children}) => {
    const [user, setUser] = useState(false)

    const signIn = ()=> setUser(true)
    const signOut = ()=> setUser(false)

    //le provemos el etado y las funciones con las que va a interacruar
  return (
    <userContext.Provider value={{user, signIn, signOut}}>
        {children}
    </userContext.Provider>
  )
}

export default UseProvider