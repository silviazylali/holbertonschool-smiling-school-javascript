import React from "react";

const FAQItem = ({ question, answer }) => {
    return (
        <div className="item-block">
            <h2>{question}</h2>
            <p>{answer}</p>
        </div>
    );
};

export default FAQItem;