import "../../assets/styles/_setting.scss"
import TopRating from "./TopRatedPRT"
import RecentUsers from "./RecentUsers"
import "./style.scss"
function Home() {
    return (
        <div className="home">
            Home

            <TopRating />
            <RecentUsers />
        </div>
    )
}

export default Home