import React from "react";

const MembershipCard = ({ imgSrc, title, description }) => {
    return (
        <div
            className="d-flex flex-column align-items-center mx-2"
            style={{ width: "20%" }}
        >
            <img src={imgSrc} alt={title} />
        </div>
    );
};

export default MembershipCard;