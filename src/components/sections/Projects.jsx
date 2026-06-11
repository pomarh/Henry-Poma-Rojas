import Container from "../layout/Container";
import SectionTittle from "../ui/SectionTittle";
import ProjectCard from "../ui/ProjectCrad";

function Projects() {
    const projects = [
        {
            title: "Sistema de Ventas",
            description: "Sistema para gestionar productos, ventas, usuarios y reportes.",
            tech: ["React", "Node.js", "PostgreSQL"],
            github: "#",
            demo: "#",
        },
        {
            title: "Plataforma de Cursos",
            description: "Aplicación para visualizar cursos y gestionar estudiantes.",
            tech: ["React", "Supabase", "Tailwind"],
            github: "#",
            demo: "#",
        },
        {
            title: "Inventario Multi-Sucursal",
            description: "Sistema de control de inventario para múltiples sucursales.",
            tech: ["React", "Express", "PostgreSQL"],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <>
            <section id="projects" className="py-24 bg-slate-900 scroll-mt-24">
                <Container>
                    <SectionTittle title="Proyectos" subtitle="Algunos proyectos que he desarrollado utilizando tecnologías modernas." />

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Projects;
