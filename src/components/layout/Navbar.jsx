import { useState } from "react";
import Container from "./Container";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        {
            name: "Sobre Mi",
            href: "#about",
        },
        {
            name: "Tecnologias",
            href: "#skills",
        },
        {
            name: "Proyectos",
            href: "#projects",
        },
        {
            name: "Contacto",
            href: "#contact",
        },
    ];
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50  bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 md:py-5">
                <Container>
                    <nav className="flex items-center justify-between">
                        <a href="#" className="text-xl font-bold text-emerald-500">
                            Henry.Dev
                        </a>
                        <ul className="hidden md:flex items-center gap-8">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </nav>
                </Container>
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <Container>
                        <ul className="py-4 flex flex-col gap-4">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-2 text-slate-300 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </div>
            </header>
        </>
    );
}

export default Navbar;
