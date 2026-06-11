import React from "react";

function SkillsCard({ skill }) {
    return (
        <>
            <div className="bg-slate-800 border border-l-slate-700 rounded-xl p-6 hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-white font-semibold text-lg text-center">{skill}</h3>
            </div>
        </>
    );
}

export default SkillsCard;
