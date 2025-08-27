import React from "react";
import "./Header.css";

const SchoolContainer = () => {
    return (
        <div className="school-container">
            <h1 className="text-center text-white fw-bold mt-5 display-1">
                Get Schooled
            </h1>
            <ul className="list-unstyled text-center text-white mt-3">
                <li className="d-inline-block fs-4 text-center me-4">SMILES</li>
                <li className="d-inline-block fs-4 text-center ms-4 me-4">GRIN</li>
                <li className="d-inline-block fs-4 text-center ms-4">LAUGH</li>
            </ul>
            <button className="w-auto h-50 rounded-pill bg-purple text-white border-0 d-block mx-auto my-5">
                REGISTER FOR FREE
            </button>
        </div>
    );
};

export default SchoolContainer;