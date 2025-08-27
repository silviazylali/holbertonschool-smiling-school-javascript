import React from "react";
import { Carousel } from "react-bootstrap";
import testimonials from "../../mockdata/testimonial-people";
import "./Testimonial.css";

const TestimonialCarousel = () => {
    return (
        <section className="section-testimonial d-flex justify-content-center align-items-center py-5">
            <Carousel>
                {testimonials.map((testimonial) => (
                    <Carousel.Item key={testimonial.id}>
                        <div className="testimonial-image-container">
                            <img
                                className="d-flex rounded-circle"
                                src={testimonial.pic_url}
                                alt={testimonial.name}
                                style={{ maxWidth: "180px" }}
                            />
                        </div>
                        <div className="testimonial-text-container d-flex flex-column text-white">
                            <h3>{testimonial.name}</h3>
                            <p className="fst-italic">{testimonial.title}</p>
                            <p>{testimonial.text}</p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    );
};

export default TestimonialCarousel;