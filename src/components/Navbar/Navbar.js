// import Button from "../Atoms/Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

const linkIsActive = "text-violet-600 font-bold";
const Navbar = () => {
  return (
    <nav className="bg-neutral-900 bg-opacity-90 text-white ">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <picture className="w-40">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </picture>
          </Link>

          <div className="block md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex justify-between w-6/12">
            <NavLink
              to="/category/celular"
              className={({ isActive }) => (isActive ? linkIsActive : "")}
            >
              Celular
            </NavLink>
            <NavLink
              to="/category/tablet"
              className={({ isActive }) => (isActive ? linkIsActive : "")}
            >
              Tablet
            </NavLink>
            <NavLink
              to="/category/notebook"
              className={({ isActive }) => (isActive ? linkIsActive : "")}
            >
              Notebook
            </NavLink>
            <div>
              <CartWidget buttonStyle="navbar-item" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
