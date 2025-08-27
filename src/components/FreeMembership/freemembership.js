import React from "react";
import MembershipCard from "./MembershipCard";
import smileImg from "../../images/smile.png";

const FreeMembership = () => {
    const memberships = [
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: smileImg,
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: smileImg,
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: smileImg,
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: smileImg,
        },
    ];

    return (
        <section className="free-membership bg-dark py-5">
            <h1
                className="text-center text-white mx-auto my-3 py-3"
                style={{
                    width: "40%",
                    fontSize: "30px",
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                }}
            >
                <span style={{ color: "#c271ff" }}>Free</span> membership
            </h1>

            <div className="membership-container d-flex justify-content-center flex-wrap gap-3 mt-5 mb-1">
                {memberships.map((membership, index) => (
                    <MembershipCard key={index} {...membership} />
                ))}
            </div>

            <div style={{ textAlign: "center" }}>
                <button
                    className="btn text-uppercase mt-5"
                    style={{
                        width: "208px",
                        height: "54px",
                        borderRadius: "22px",
                        backgroundColor: "#c271ff",
                        color: "white",
                        fontSize: "100%",
                        display: "inline-block", // default, but explicit
                    }}
                >
                    Register for Free
                </button>
            </div>
        </section>
    );
};

export default FreeMembership;