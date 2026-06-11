import Container from "../layout/Container";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";

function Hero() {
    return (
        <>
            <section className="min-h-screen bg-slate-950 text-white pt-20 flex items-center">
                <Container>
                    <div className=" flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <p className="text-emerald-400 font-medium mb-2">Hola, Soy</p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Henry Poma R.</h1>
                            <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-6">Desarrollador Full Stack</h2>
                            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                                Construyo aplicaciones web modernas utilizando React, Node.js y PostgreSQL. Me apasiona desarrollar soluciones
                                escalables y aprender nuevas tecnologías.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#projects" className="bg-emerald-500 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition ">
                                    Ver Proyectos
                                </a>

                                <a href="#contact" className="bg-emerald-500 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition">
                                    Contactarme
                                </a>

                                <a
                                    href="/cv-henry-poma.pdf"
                                    download
                                    className="flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:border-emerald-500 px-6 py-3 rounded-lg transition">
                                    <FaDownload />
                                    CV
                                </a>
                            </div>
                            <div className="flex items-center gap-5 mt-8">
                                <a
                                    href="https://github.com/TU_USUARIO"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-3xl text-slate-400 hover:text-emerald-400 transition">
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://linkedin.com/in/TU_USUARIO"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-3xl text-slate-400 hover:text-emerald-400 transition">
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://wa.me/591XXXXXXXX"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-3xl text-slate-400 hover:text-emerald-400 transition">
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className=" w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-50 to-emerald-600 p-1">
                                <div className=" w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">👨‍💻</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Hero;
