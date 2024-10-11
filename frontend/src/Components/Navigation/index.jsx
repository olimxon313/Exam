import { Outlet } from 'react-router-dom'
import "./style.scss"
import Nav from './Nav';
import Footer from '../Footer';

function Navigation() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <main id="outlet-wrapper">
                <Outlet />
            </main>

            <Footer />

        </>
    );
}

export default Navigation;