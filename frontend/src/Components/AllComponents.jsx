import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Contact from './Contact'
import Home from './Home'

function AllComponents() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;
