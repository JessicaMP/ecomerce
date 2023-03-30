// import Button from "../Atoms/Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./../../assets/images/logo.png";
import { Link, NavLink } from 'react-router-dom'

const linkIsActive = 'text-violet-600 font-bold'
const Navbar = () => {
  return (
    <nav className="bg-neutral-900 bg-opacity-90 text-white ">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          
          <Link to='/' className="flex items-center">
          <picture className="w-40">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </picture>
          </Link>

          <div className="flex justify-between w-6/12">
            <NavLink to='/category/celular' className={({ isActive }) => isActive ? linkIsActive : ''}>Celular</NavLink>
            <NavLink to='/category/tablet' className={({ isActive }) => isActive ? linkIsActive : ''}>Tablet</NavLink>
            <NavLink to='/category/notebook' className={({ isActive }) => isActive ? linkIsActive : ''}>Notebook</NavLink>
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
