import "../../../assets/styles/_setting.scss";
import { NavLink, Link } from "react-router-dom";
import IMG from "../../../assets/images/NavbarImg/logo.png";
import { useState } from "react";
import "./style.scss";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav>
            <div className="main">
                <div className="first">
                    <NavLink to="/" className="logo">
                        <img src={IMG} alt="Logo" />
                    </NavLink>
                </div>
                <div className="second">
                    <div className="links">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolios</NavLink>
                        <NavLink to="/community" className={({ isActive }) => (isActive ? "active" : "")}>Community</NavLink>
                        <NavLink to="/aboutUs" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
                        <div className="buttons">
                            <Link to="/login">
                                <button className="signup">Sign in</button>
                            </Link>
                            <Link to="/register">
                                <button className="login">Sign up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="burger-menu-wrapper" onClick={toggleMenu}>
                <div className="burger-top"></div>
                <div className="burger-middle"></div>
                <div className="burger-bottom"></div>
            </div>
        </nav>
    );
}

export default Nav;
