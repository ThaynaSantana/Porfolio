import { Link, Outlet } from "react-router-dom"

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <Link className="link" to="/">home</Link>
                    <Link className="link" to="certificados">certificados</Link>
                    <Link className="link" to="redes">redes</Link>
                </ul>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header
