import { Outlet } from 'react-router-dom'
import "./style.scss"
import Nav from './nav';

function Navigation() {
    return (
        <>
            <header>
                <Nav />
            </header>

            <main id="outlet-wrapper">
                <Outlet />
            </main>

        </>
    );
}

export default Navigation;