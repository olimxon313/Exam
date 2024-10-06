import "../../../assets/styles/_setting.scss"
import { Link, NavLink } from "react-router-dom";
import IMG from "../../../assets/images/NavbarImg/logo.png"
import "./style.scss"


function Nav() {
    return (
        <nav>
            <div className="links">
                <NavLink to="/" activeclassname="active" className="logo"><img src={IMG} alt="" /></NavLink>
                <NavLink to="/" activeclassname="active">Home</NavLink>
                <NavLink to="portfolios" activeclassname="active">Portfolios</NavLink>
                <NavLink to="community" activeclassname="active">Community</NavLink>
                <NavLink to="aboutUs" activeclassname="active">About Us</NavLink>
                <NavLink to="contact" activeclassname="active">Contact</NavLink>
                <div className="buttons">
                    <button className="signup">Sign in</button>
                    <button className="login">Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav