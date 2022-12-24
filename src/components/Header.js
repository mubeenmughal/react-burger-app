import "../style/Header.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import burgerImage from "../assets/burgerImage.png";
import { BurgerContext } from "./BurgerContext";

function Header() {
  const { loginCheck } = useContext(BurgerContext);
  const [login, setLogin] = loginCheck;

    return ( 
      <header className="Toolbar__Toolbar__2hkfg">
        <div className="DrawerToggle__DrawerToggle__1eThf"></div>
        <div className="Toolbar__Logo__24rue">
          <div className="Logo__Logo__2A07e">
            <img src={burgerImage} alt="myBurger" />
          </div>
        </div>
        <nav className="Toolbar__DesktopOnly__15Sc_">
          <ul className="NavigationItems__NavigationItems__3HY9i">
            <li className="NavigationItem__NavigationItem__3YSjr">
              <Link
                className="NavigationItem__active__2GQz1"
                aria-current="true"
                to="/"
              >
                Burger Builder
              </Link>
            </li>
            {login ? (
              <React.Fragment>
                <li className="NavigationItem__NavigationItem__3YSjr">
                  <Link to="/orders" className="login-link">
                    <Link className="login_style" aria-current="false" to="/auth">
                      Orders
                    </Link>
                  </Link>
                </li>
                <li className="NavigationItem__NavigationItem__3YSjr">
                  <Link to="/logout" className="login-link">
                    <Link
                      className="login_style"
                      aria-current="false"
                      to="/auth"
                      onClick={() => setLogin(false)}
                    >
                      Logout
                    </Link>
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <li className="NavigationItem__NavigationItem__3YSjr">
                <Link to="/sign_up" className="login-link">
                  <Link className="login_style" aria-current="false" to="/sign_up">
                    Login
                  </Link>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
     );
};

export default Header;