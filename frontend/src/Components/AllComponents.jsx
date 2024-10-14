import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'
import Community from './Community'
import AboutUs from './AboutUs'

function AllComponents() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="community" element={<Community />} />
                <Route path="aboutUs" element={<AboutUs />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;
