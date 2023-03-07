import { Link, NavLink } from "react-router-dom";
import "./header.css"
// Mostramos si el servidor funciona o no.
const Header = () => {
  return(
    <div className="header">
            <NavLink className="link" to="create"><strong>CREATE NOTE</strong></NavLink>
            <NavLink className="link" to="list"><strong>LIST NOTES</strong></NavLink>
    </div>
  );
};

export default Header;
