import "./NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget";

const Navbar = () => {

    return (
        <div className="navbar-container">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/dofqoorbp/image/upload/v1669497981/logo_c7nlxd.png" alt="" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">Todos los productos</li>
                <li className="navbar-item">Promos</li>
                <li className="navbar-item">Otros</li>
                <li className="navbar-item">Contacto</li>
            </ul>
            <CartWidget/>
        </div>
    )

}

export default Navbar;