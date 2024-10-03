import "../../assets/styles/_setting.scss";
import "./style.scss";
import Introduction from "./Introduction";
import SetUp from "./SetUp";
import TopRating from "./TopRatedPRT";
import RecentUsers from "./RecentUsers"; 
import Footer from "../Footer";

function Home() {
    return (
        <div className="home">
            <Introduction />
            <TopRating />
            <SetUp />
            <RecentUsers /> {}
            <Footer />
        </div>
    );
}

export default Home;
