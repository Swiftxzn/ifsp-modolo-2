import { Link } from "react-router"

function Header() {
    return (
        <header className="bg-gray-800 text-gray-400 py-6 text-center text-sm space-x-2">
            <h1>MyApp</h1>

            <Link to="/" className="text-gray-600 hover:text-blue-600">Início</Link>
            <Link to="/sobre" className="text-gray-600 hover:text-blue-600">Sobre</Link>
            <Link to="/contato" className="text-gray-600 hover:text-blue-600">Contato</Link>
        </header>
    )
}

export default Header