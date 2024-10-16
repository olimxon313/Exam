import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'
import Community from './Community'
import AboutUs from './AboutUs'
import Login from './Authentication/Login/Login.jsx'
import Registration from './Authentication/Registration/Register.jsx'
import Authentication from './Authentication'
import Donate from './Home/Donate/index.jsx'    

function AllComponents() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="community" element={<Community />} />
                <Route path="aboutUs" element={<AboutUs />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Registration />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="donate" element={<Donate />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;
