import { useContext } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { userContext } from "../context/UseProvider"
//creamos los NavLink a ,partir de el router v6

const NavBar = () => {
  const {user} = useContext(userContext)

  return (
    <nav className="navbar navbar-dark bg-dark">
    <Link to='/'>{user ? "Estas conectado" : "no estas conectado"}</Link>
        <NavLink to='/' className="btn btn-outline-primary">Inicio</NavLink>
        <NavLink to='/blog' className="btn btn-outline-primary">blog</NavLink>
        <NavLink to='/contacto' className="btn btn-outline-primary">contacto</NavLink>
    </nav>
  )
}

export default NavBar