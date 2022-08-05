import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { userContext } from "../context/UseProvider"

const VerificarUsuario = ({children}) => {
    const {user} = useContext(userContext)

    //retornamos una navegacion si el ususario no existe
    if(!user){
        return <Navigate to='/'/>
    }
  
    return children
}

export default VerificarUsuario