import "../../../assets/styles/_setting.scss"
import "./style.scss"
import Img1 from "../../../assets/images/RecentUsers/user.png"
import Img2 from "../../../assets/images/RecentUsers/userPerson.png"
import Img3 from "../../../assets/images/RecentUsers/reddit.png"
import Img4 from "../../../assets/images/RecentUsers/discord.png"
import Img5 from "../../../assets/images/RecentUsers/twitter.png"
import Img6 from "../../../assets/images/RecentUsers/github.png"
import Img7 from "../../../assets/images/RecentUsers/robot.png"

function RecentUsers() {
    return (
        <div className="recent-users-wrapper">
            <h1>Recent Users</h1>
            <div className="users-wrapper-icons">
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
                <img src={Img1} alt="" />
            </div>
            <div className="users-wrapper-details">
                <div className="users-wrapper-details-left">
                    <div className="users-wrapper-details-left-content">
                        <h1>Always Reachable</h1>
                        <p>Feel free to reach out to us anytime through email or LinkedIn. We're here to assist you and answer any queries you may have. Let's stay connected!</p>
                    </div>
                    <div className="users-wrapper-details-left-icons">
                        <div className="users-wrapper-details-left-img">
                            <img src={Img2} alt="" />
                        </div>
                        <div>
                            <h3>yagna kusumanchi</h3>
                            <p>Founder and CEO of Click Craft</p>
                            <img src={Img6} alt="" />
                            <img src={Img4} alt="" />
                            <img src={Img3} alt="" />
                            <img src={Img5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="users-wrapper-details-right">
                    <img src={Img7} alt="" />
                </div>
            </div>
        </div>
    )
}

export default RecentUsers