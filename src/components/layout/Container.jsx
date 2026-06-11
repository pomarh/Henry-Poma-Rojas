import React from "react";

function Container({ children }) {
    return (
        <>
            <div className=" max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">{children}</div>
        </>
    );
}

export default Container;
