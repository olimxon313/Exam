import { Routes, Route } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'

function AllComponents() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AllComponents;
