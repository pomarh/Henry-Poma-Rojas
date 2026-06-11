import React from "react";
import Container from "../layout/Container";
import SectionTittle from "../ui/SectionTittle";

function About() {
    return (
        <>
            <section id="about" className="py-24 bg-slate-900 scroll-mt-24">
                <Container>
                    <SectionTittle title="Sobre Mi" subtitle="Desarrollador Full Stack en constante aprendizaje." />

                    <div className="max-w-4xl mx-auto">
                        <p className="text-slate-300 text-lg leading-8 text-center">
                            Soy un desarrollador enfocado en la creación de aplicaciones web modernas utilizando React, Node.js y PostgreSQL. Me
                            apasiona aprender nuevas tecnologías y construir proyectos que resuelvan problemas reales.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default About;
