import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

const NavBar = () => {

    const nombre = "Todos los productos"

    return (
        <div className="navbar-container">
            <div className="container-logo">
                <Link to="/">
                <img 
                className="logo-navbar" 
                src="https://res.cloudinary.com/dofqoorbp/image/upload/v1669497981/logo_c7nlxd.png" 
                alt="" 
                />
                </Link>
            </div>
            <ul className="navbar">
                <Link className="navbar-item" to="/">Todos los productos</Link>
                <Link className="navbar-item" to="/category/cerveza">Cerveza</Link>
                <Link className="navbar-item" to="/category/vodka">Vodka</Link>
                <Link className="navbar-item" to="/category/aperitivos">Aperitivos</Link>
            </ul>
            <CartWidget/>
        </div>
    )

}

export default NavBar;