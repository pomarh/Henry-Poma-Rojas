import React from "react";

function ProjectCrad({ project }) {
    return (
        <>
            <article className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-400 transition-all duration-300">
                <div className="h-48 bg-slate-700 flex items-center justify-center">
                    <span className="text-slate-400">Imagen del proyecto</span>
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

                    <p className="text-slate-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((item) => (
                            <span key={item} className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-sm">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-white transition">
                            GitHub
                        </a>

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-emerald-500 hover:bg-emerald-500 px-4 py-2 rounded-lg transition">
                            Demo
                        </a>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ProjectCrad;
