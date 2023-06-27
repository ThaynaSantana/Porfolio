import { Link, Outlet } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <Link to="/">home</Link>
                    <Link to="certificados">certificados</Link>
                    <Link to="redes">redes</Link>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header
