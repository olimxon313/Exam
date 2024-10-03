import "../../../assets/styles/_setting.scss"
import "./style.scss"
import Img from "../../../assets/images/TopRating/topRated.png"

function TopRating() {

    return (
        <div className="top-rated-rpt">
            <h1>Top Rated Portfolios</h1>
            <div className="top-rated-wrapper">
                <div className="top-rated-item">
                    <div className="top-rated-item-content">
                        <h4>how it works</h4>
                        <h2>Customize This Template</h2>
                        <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    </div>
                    <div className="top-rated-item-img">
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div className="top-rated-item">
                    <div className="top-rated-item-content">
                        <h4>how it works</h4>
                        <h2>Customize This Template</h2>
                        <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    </div>
                    <div className="top-rated-item-img">
                        <img src={Img} alt="" />
                    </div>
                </div>
                
                <div className="top-rated-item">
                    <div className="top-rated-item-content">
                        <h4>how it works</h4>
                        <h2>Customize This Template</h2>
                        <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    </div>
                    <div className="top-rated-item-img">
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div className="top-rated-item">
                    <div className="top-rated-item-content">
                        <h4>how it works</h4>
                        <h2>Customize This Template</h2>
                        <p>Select this template, Enter your details, confirm and hit “Generate” for your unique portfolio.</p>
                    </div>
                    <div className="top-rated-item-img">
                        <img src={Img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRating