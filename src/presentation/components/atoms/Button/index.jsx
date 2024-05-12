import { Link } from "react-router-dom";

const Button = ({ children, ...button}) => {

  return (
    <>
      <Link className="button" to={button.to}>
        {button.text}
        {children && children}
      </Link>
    </>
  );
};

export default Button;
