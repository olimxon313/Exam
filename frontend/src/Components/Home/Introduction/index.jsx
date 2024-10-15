import "./style.scss"
import "../../../assets/styles/_setting.scss"
import IMG from "../../../assets/images/IntroductionImg/intro.png"
import { useNavigate } from "react-router-dom";

 function Introduction() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('./Donate'); 
    };
    return ( 
        <div className="introduction">
            <div className="left">
                <p>Welcome to Click craft</p>
                <h1>Your Story, Your Way <br />
                Build Your Personal Portfolio</h1>
                <p className="description">Showcase your journey by crafting a personal portfolio in <br /> minutes</p>
                <br />
                <div className="buttons">

                <button className="signup" onClick={handleClick}>Get started for free</button>
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><button className="login">Watch Video</button></a>
                </div>
            </div>
            <div className="right">
                <img src={IMG} alt="" />
            </div>
        </div>
     );
 }
 
 export default Introduction;