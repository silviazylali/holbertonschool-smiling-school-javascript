import React from "react";
import student1 from "../../images/student_1.png";
import student2 from "../../images/student_2.png";
import student3 from "../../images/student_3.png";
import student4 from "../../images/student_4.png";
import "./Header.css";

const LearnContainer = () => {
    return (
        <div
            className="learn-container"
            style={{ marginTop: "210px", height: "350px" }}
        >
            <h2 className="text-center text-white fs-1 my-3">
                <span className="text-purple">Learn</span> from the pros
            </h2>

            <div className="parent d-flex justify-content-around w-90 my-5">
                <div className="children w-25">
                    <img
                        src={student1}
                        alt="Philip Massey"
                        className="w-50 rounded-circle d-block mx-auto"
                    />
                    <h3 className="text-center text-white mt-3">Philip Massey</h3>
                    <p className="text-center text-white mt-3">
                        &laquo;Smile of the year <br /> 2018-2019&raquo;
                    </p>
                </div>

                <div className="children w-25">
                    <img
                        src={student2}
                        alt="Nannie Lawrence"
                        className="w-50 rounded-circle d-block mx-auto"
                    />
                    <h3 className="text-center text-white mt-3">Nannie Lawrence</h3>
                    <p className="text-center text-white mt-3">
                        Best &laquo;little smile&raquo; <br /> 2017
                    </p>
                </div>

                <div className="children w-25">
                    <img
                        src={student3}
                        alt="Bruce Walters"
                        className="w-50 rounded-circle d-block mx-auto"
                    />
                    <h3 className="text-center text-white mt-3">Bruce Walters</h3>
                    <p className="text-center text-white mt-3">
                        Best &laquo;Friend Smile&raquo; <br /> live performance 2019
                    </p>
                </div>

                <div className="children w-25">
                    <img
                        src={student4}
                        alt="Henry Hughes"
                        className="w-50 rounded-circle d-block mx-auto"
                    />
                    <h3 className="text-center text-white mt-3">Henry Hughes</h3>
                    <p className="text-center text-white mt-3">
                        &laquo;24h smiles&raquo; winner <br /> 2016-2019
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LearnContainer;