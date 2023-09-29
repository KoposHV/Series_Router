import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Series Router</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/series">Series</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;