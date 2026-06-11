import Container from "./Container";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="bg-slate-950 border-t border-slate-800 py-10">
                <Container>
                    <div className="flex flex-col items-center text-center gap-6">
                        <h2 className="text-2xl font-bold text-emerald-500">Henry.Dev</h2>

                        <p className="max-w-md text-slate-400">Desarrollador Full Stack especializado en React, Node.js y PostgreSQL.</p>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/TU_USUARIO"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-emerald-500 hover:text-emerald-500 transition">
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/TU_USUARIO"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-emerald-500 hover:text-emerald-500 transition">
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://wa.me/591XXXXXXXX"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 hover:border-emerald-500 hover:text-emerald-500 transition">
                                <FaWhatsapp />
                            </a>
                        </div>

                        <div className="w-full h-px bg-slate-800"></div>

                        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Henry Poma. Todos los derechos reservados.</p>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
