import { Link } from "react-router-dom";
import "./style.scss";

const Nav = ({ link, title }) => {
  return (
    <Link className="link" to={link}>
      {title}
    </Link>
  );
};

export default Nav;
