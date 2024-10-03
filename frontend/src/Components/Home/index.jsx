import "../../assets/styles/_setting.scss"
import "./style.scss"
import Introduction from "./Introduction"
import SetUp from "./SetUp"
import TopRating from "./TopRatedPRT"

function Home() {
    return (
        <div className="home">
            <Introduction />
            <TopRating />
            <SetUp />
        </div>
    )
}

export default Home;
