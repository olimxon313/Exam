import { Outlet } from 'react-router-dom'
import Nav from "./Nav"
import "./style.scss"

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