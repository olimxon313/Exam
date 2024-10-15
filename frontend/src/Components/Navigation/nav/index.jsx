import "../../../assets/styles/_setting.scss";
import { NavLink } from "react-router-dom";
import IMG from "../../../assets/images/NavbarImg/logo.png";
import "./style.scss";

function Nav() {
    return (
        <nav>
            <div className="links">
                <NavLink to="/" activeclassname="active" className="logo">
                    <img src={IMG} alt="" />
                </NavLink>
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="portfolio" activeclassname="active">Portfolios</NavLink>
                <NavLink to="community" activeclassname="active">Community</NavLink>
                <NavLink to="aboutUs" activeclassname="active">About Us</NavLink>
                <NavLink to="contact" activeclassname="active">Contact</NavLink>
                <div className="buttons">
                    <NavLink to="/login"> {/* Изменяем на NavLink для страницы входа */}
                        <button className="signup">Sign in</button>
                    </NavLink>
                    <NavLink to="/register"> {/* Изменяем на NavLink для страницы регистрации */}
                        <button className="login">Sign up</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
