import "../../assets/styles/_setting.scss";
import "./style.scss";
import Introduction from "./Introduction";
import SetUp from "./SetUp";
import TopRating from "./TopRatedPRT";
import RecentUsers from "./RecentUsers"; // Убедитесь, что этот импорт остается

function Home() {
    return (
        <div className="home">
            <Introduction />
            <TopRating />
            <SetUp />
            <RecentUsers /> {/* Убедитесь, что RecentUsers также отображается */}
        </div>
    );
}

export default Home;
