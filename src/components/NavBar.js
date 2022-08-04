import { NavLink } from "react-router-dom"
//creamos los NavLink a ,partir de el router v6

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <NavLink to='/' className="btn btn-outline-primary">Inicio</NavLink>
        <NavLink to='/blog' className="btn btn-outline-primary">blog</NavLink>
        <NavLink to='/contacto' className="btn btn-outline-primary">contacto</NavLink>
    </nav>
  )
}

export default NavBar