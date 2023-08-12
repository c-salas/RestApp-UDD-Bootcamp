import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar = ({ primerapropiedad }) => {
  const propiedadmodificada = primerapropiedad.toUpperCase()
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">


          <div className="logoNav-container">
              <img className="logoNav" src="/assets/images/cat-silhouette.svg" alt="logo"  />
              <a className="nav-link" href="/"><h1>Coffee Cats</h1></a>
         </div>


          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
              <NavLink className="nav-link" to="/">Anfitriones</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/carta">Carta</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reserva">Reservas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Iniciar Sesion</NavLink>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}