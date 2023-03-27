import Button from "../Atoms/Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./../../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-neutral-900 bg-opacity-90 text-white ">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <picture className="w-40">
              <img src={logo} alt="Logo" className="navbar-logo" />
            </picture>
          </a>

          <div className="flex justify-between w-6/12">
            <Button label="Promociones" buttonStyle="navbar-item" iconName="" />
            <Button label="Mis Pedidos" buttonStyle="navbar-item" iconName="" />
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
