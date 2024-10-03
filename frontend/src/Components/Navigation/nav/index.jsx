import "../../../assets/styles/_setting.scss"
import { Link, NavLink } from "react-router-dom";

import "./style.scss"


function Nav() {
    return (
        <nav>
            <div className="links">
                        <NavLink to="/" activeclassname="active">Home</NavLink>
                        <NavLink to="about" activeclassname="active">About</NavLink>
                        <NavLink to="products" activeclassname="active">Products</NavLink>
                        <NavLink to="blog" activeclassname="active">Blog</NavLink>
                        <NavLink to="shop" activeclassname="active">Shop</NavLink>
                        <NavLink to="contact" activeclassname="active">Contact</NavLink>
            </div>
        </nav>
    )
}

export default Nav