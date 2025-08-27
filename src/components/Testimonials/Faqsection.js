import React from "react";
import FAQItem from "./FAQItem";

const FAQSection = () => {
    const faqData = [
        {
            row: 1,
            items: [
                {
                    question: "How does this work?",
                    answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    question: "How does this work?",
                    answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
            ],
        },
        {
            row: 2,
            items: [
                {
                    question: "How does this work?",
                    answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    question: "How does this work?",
                    answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
            ],
        },
    ];

    return (
        <section className="faq-section">
            <h1>F.A.Q.</h1>

            <div className="row-blocks">
                {faqData.map((row, rowIndex) => (
                    <div key={rowIndex} className={`row-block-${row.row}`}>
                        {row.items.map((item, itemIndex) => (
                            <FAQItem
                                key={itemIndex}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;