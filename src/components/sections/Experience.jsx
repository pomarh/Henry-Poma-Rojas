import Container from "../layout/Container";
import SectionTittle from "../ui/SectionTittle";

function Experience() {
    const experiences = [
        {
            title: "Desarrollador Full Stack",
            company: "Proyectos Personales",
            period: "2025 - Actualidad",
            description:
                "Desarrollo de aplicaciones web utilizando React, Node.js, PostgreSQL y Supabase. Implementación de autenticación, CRUDs, APIs REST y diseño responsive.",
        },
        {
            title: "Formación Continua",
            company: "Autoaprendizaje",
            period: "2025 - Actualidad",
            description:
                "Estudio constante de desarrollo frontend y backend, enfocándome en buenas prácticas, arquitectura de software y bases de datos.",
        },
    ];
    return (
        <>
            <section id="experience" className="py-24 bg-slate-950 scroll-mt-24">
                <Container>
                    <SectionTittle title="Experiencia" subtitle="Mi recorrido como desarrollador." />

                    <div className="space-y-6">
                        {experiences.map((exp) => (
                            <div key={exp.title} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-white">{exp.title}</h3>

                                <p className="text-emerald-400 mb-2">{exp.company}</p>

                                <p className="text-slate-500 text-sm mb-4">{exp.period}</p>

                                <p className="text-slate-300">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Experience;
