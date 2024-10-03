import "../../../assets/styles/_setting.scss"
import { Link, NavLink } from "react-router-dom";
import IMG from "../../../assets/images/NavbarImg/logo.png"
import "./style.scss"


function Nav() {
    return (
        <nav>
            <div className="links">
                <NavLink to="/" activeclassname="active"><img src={IMG} alt="" /></NavLink>
                <NavLink to="home" activeclassname="active">Home</NavLink>
                <NavLink to="portfolios" activeclassname="active">Portfolios</NavLink>
                <NavLink to="community" activeclassname="active">Community</NavLink>
                <NavLink to="aboutUs" activeclassname="active">About Us</NavLink>
                <div className="buttons">
                    <button className="signup">Sign in</button>
                    <button className="login">Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav