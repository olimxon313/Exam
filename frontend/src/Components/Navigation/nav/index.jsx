import "../../../assets/styles/_setting.scss";
import { NavLink, Link } from "react-router-dom";
import IMG from "../../../assets/images/NavbarImg/logo.png";
import "./style.scss";

function Nav() {
    return (
        <nav>
            <div className="links">
                <NavLink to="/" className="logo">
                    <img src={IMG} alt="Logo" />
                </NavLink>
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
        </nav>
    );
}

export default Nav;
