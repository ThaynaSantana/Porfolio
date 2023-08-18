import { Link, Outlet } from "react-router-dom"

interface HeaderProps {
    onThemeToggle: () => void;
    isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onThemeToggle, isDarkMode }) => {

    return(
        <header className={isDarkMode ? 'dark' : 'light'}>
            <nav>
                <ul>
                    <h1>👩🏼‍💻</h1>
                    <Link className="link" to="/">home</Link>
                    <Link className="link" to="certificados">certificados</Link>
                    <Link className="link" to="redes">redes</Link>
                </ul>
                <button onClick={onThemeToggle}>{isDarkMode ? '🌞' : '🌙'}</button>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header
