import Button from "../Atoms/Button/Button"
import logo from './../../logo.svg';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div>
                <h1>Ecommerce</h1>
                <img src={logo} alt="Logo" className="navbar-logo"/>
            </div>
            <div>
                <Button label="Promociones"/>
                <Button label="Mis Pedidos"/>
            </div>
        </nav>
    )
}

export default Navbar