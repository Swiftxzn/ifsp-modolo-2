// import { Link } from "react-router";
import { NavLink } from "react-router";
import { Origami } from "lucide-react";
import { CigaretteOff } from "lucide-react";

function linkClass({ isActive }) {
  return isActive
    ? "vorder-b-2 text-red-600"
    : "text-blue-400 hover:text-yellow-600";
}

function Header() {
  return (
    <header className="bg-gray-800 text-gray-400 py-6 text-center text-sm space-x-2">
      <h1>
        MyApp
        <Origami className="inline fill-blue-800 stroke-blue-600" />
        <CigaretteOff className="inline fill-red-800 stroke-red-600" />
      </h1>

      <NavLink to="/" className={linkClass}>
        Início
      </NavLink>
      <NavLink to="/sobre" className={linkClass}>
        Sobre
      </NavLink>
      <NavLink to="/contato" className={linkClass}>
        Contato
      </NavLink>
    </header>
  );
}

export default Header;