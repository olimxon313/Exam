import "../../../assets/styles/_setting.scss"
import "./style.scss"
import IMG from "../../../assets/images/SetupImg/setupImg.png"

function SetUp() {
    return (
        <>
        <div className="set-up-title">
        <h1>5 minute set-up process</h1>
        <p>Just take 5 minutes to fill in some info, choose a killer template, and <br />
            bam! Your personalized portfolio website is ready.</p>
        </div>
        <div className="set-up">
            <div className="set-up-wrapper">
                <div className="left">
                    <div className="img"><img src={IMG} alt="" /></div>
                </div>
                <div className="right">
                    <div className="discription">
                        <p className="title">How It Works</p>
                        <h1>Complete Your Profile</h1>
                        <p>
                            Just share your details, choose a template, and see <br />
                            your personal portfolio magically appear. Confirm or <br />
                            make any changes you like, and  Grab a special link <br />
                            to share your portfolio with everyone. Boost your <br />
                            online presence the easy way!
                        </p>
                        <button className="signup">Complete Your Profile</button>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}
export default SetUp