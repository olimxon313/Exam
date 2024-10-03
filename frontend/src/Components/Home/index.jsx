import "../../assets/styles/_setting.scss"
import "./style.scss"
import Introduction from "./Introduction"
import TopRating from "./TopRatedPRT"

function Home() {
    return (
        <div className="home">
            <Introduction />
            <TopRating />
        </div>
    )
}

export default Home;
