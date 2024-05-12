// -- core
import { Link } from "react-router-dom";

// -- style module
import style from "./style.module.scss";

// -- components atoms
import Button from "presentation/components/atoms/Button";

// -- fetch data
import RequestData from "core/hooks/useGetData";
import ENDPOINT from "infrastructure/api/endPoint";

const Navbar = () => {
  let config = {
    url: ENDPOINT.HEADER,
    method: "GET",
  };

  const { data: navbar } = RequestData(config);
  
  return (
    <>
      {navbar && (
        <div className={style.Navbar}>
          <div className="container">
            <div className={style.NavbarContent}>
              <Link to={navbar.data.brand.to}>
                <img
                  src={navbar.data.brand.logo}
                  alt={navbar.data.brand.name}
                />
              </Link>
              <div className={style.NavbarLink}>
                <ul className={style.NavbarLinkItem}>
                  {navbar.data.main_menu.map((val, index) => (
                    <>
                      <li key={`${val.text}-${index}`}>
                        <Link to={val.to}>{val.text}</Link>
                      </li>
                    </>
                  ))}
                </ul>
                <ul className={style.NavbarLinkItem}>
                  <li>
                    <Link to={navbar.data.auth_menu[0].to}>{navbar.data.auth_menu[0].text}</Link>
                  </li>
                  <li>
                    <Button {...navbar.data.auth_menu[1]} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
