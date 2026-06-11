import Container from "../layout/Container";
import SectionTittle from "../ui/SectionTittle";
import SkillCard from "../ui/SkillsCard";

function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase", "Git", "GitHub", "VS Code"];

    return (
        <>
            <section id="skills" className="py-24 bg-slate-950 scroll-mt-24">
                <Container>
                    <SectionTittle title="Tecnologías" subtitle="Herramientas y tecnologías que utilizo para desarrollar aplicaciones web." />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.map((skill) => (
                            <SkillCard key={skill} skill={skill} />
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Skills;
