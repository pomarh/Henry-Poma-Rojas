import React from "react";

function SectionTittle({ title, subtitle }) {
    return (
        <>
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-3">{title}</h2>

                {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
            </div>
        </>
    );
}

export default SectionTittle;
