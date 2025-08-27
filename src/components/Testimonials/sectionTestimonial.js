import React, { useState, useEffect } from "react";
import SimpleSpinner from "../Spinner/SimpleSpinner";
import Testimonials from "./Testimonials";

const SectionTestimonial = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // After 1-3 seconds, stop loading
        }, Math.random() * (3000 - 1000) + 1000); // Random time between 1000 and 3000 ms

        return () => clearTimeout(timer);
    }, []);

    return <section>{loading ? <SimpleSpinner /> : <Testimonials />}</section>;
};

export default SectionTestimonial;
