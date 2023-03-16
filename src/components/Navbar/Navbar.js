import Button from "../Atoms/Button/Button"
import CartWidget from "../CartWidget/CartWidget"
import logo from './../../logo.svg';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar flex justify-between align-center w-full">
            <a href="/" className="flex navbar-business">
                <img src={logo} alt="Logo" className="navbar-logo"/>
                <h1>Ecommerce</h1>
            </a>
            <div className="flex justify-between w-full">
                <Button label="Promociones" buttonStyle="navbar-item"/>
                <Button label="Mis Pedidos" buttonStyle="navbar-item"/>
            </div>
            <div>
                <CartWidget buttonStyle="navbar-item"/>
            </div>
        </nav>
    )
}

export default Navbar