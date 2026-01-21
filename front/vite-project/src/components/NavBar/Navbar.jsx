import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../NavBar/img/logoveterinaria.jpg"

const Navbar = ({ setIsLogged }) => {
  const navigate = useNavigate()

  const handleLogOut = () => {

    localStorage.removeItem("user")
    navigate("/login")
    setIsLogged(false)
  }
  return (
        <div className={styles.navbarContainer}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="VTC Logo" />
      </Link>
      <nav className={styles.navbar}>
        <li className={styles.navItem}>
          <Link
          to="/"
          className={`${styles.navLink} ${location.pathname === "/" ? styles.active : ""}`}
          >
            Inicio
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link
          to="/misturnos"
          className={`${styles.navLink} ${location.pathname === "/misturnos" ? styles.active : ""}`}
          >
            Mis Turnos
          </Link>
        </li>

        <li className={styles.navButton} onClick={handleLogOut}>
          Cerrar Sesion
        </li>
      </nav>
    </div>
      )
    }

export default Navbar