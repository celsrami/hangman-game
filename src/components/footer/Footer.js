import { NavLink } from "react-router-dom";
import "../../styles/components/Footer.scss";
function Footer() {
  return (
    <footer className='footer'>
      <nav>
        <ul>
          <li className='footer__menu-item'>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending footer__menu-link"
                  : isActive
                  ? "active footer__menu-link"
                  : "footer__menu-link"
              }
              to='/'
            >
              {" "}
              A jugar
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              to='/instructions'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending footer__menu-link"
                  : isActive
                  ? "active footer__menu-link"
                  : "footer__menu-link"
              }
            >
              ¿Cómo se juega?
            </NavLink>
          </li>
          <li className='footer__menu-item'>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending footer__menu-link"
                  : isActive
                  ? "active footer__menu-link"
                  : "footer__menu-link"
              }
              to='/options'
            >
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className='footer__copy'>© Adalab</small>
    </footer>
  );
}

export default Footer;
