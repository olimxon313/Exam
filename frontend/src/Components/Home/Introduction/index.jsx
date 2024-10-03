import "./style.scss"
import "../../../assets/styles/_setting.scss"
import IMG from "../../../assets/images/IntroductionImg/intro.png"

 function Introduction() {
    return ( 
        <div className="introduction">
            <div className="left">
                <p>Welcome to Click craft</p>
                <h1>Your Story, Your Way <br />
                Build Your Personal Portfolio</h1>
                <p className="description">Showcase your journey by crafting a personal portfolio in <br /> minutes</p>
                <br />
                <div className="buttons">
                <button className="signup">Get started for free</button>
                <button className="login">Watch Video</button>
                </div>
            </div>
            <div className="right">
                <img src={IMG} alt="" />
            </div>
        </div>
     );
 }
 
 export default Introduction;