import { Link } from "react-router-dom";
import icon from "core/assets/image/crappo.svg";
import style from "./style.module.scss";
import Button from "presentation/components/atoms/Button";

const Navbar = () => {
    const dataButton = {
        to : '/',
        name :"Register",
    }
  return (
    <>
      <div className={style.Navbar}>
        <div className="container">
          <div className={style.NavbarContent}>
            <img src={icon} alt="" />
            <div className={style.NavbarLink}>
              <ul className={style.NavbarLinkItem}>
                <li>
                  <Link>Products</Link>
                </li>
                <li>
                  <Link>Features</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
              <ul className={style.NavbarLinkItem}>
                <li>
                  <Link>Login</Link>
                </li>
                <li>
                    <Button {...dataButton}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
