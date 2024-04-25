import { Link } from "react-router-dom";

const Button = ({ children, ...button }) => {

  return (
    <>
      <Link className="button" to={button.to}>
        {button.name}
        {children && children}
      </Link>
    </>
  );
};

export default Button;
