import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import videos from "../../mockdata/videos.js";
import { IoStarSharp } from "react-icons/io5";
import "../../CSS/Card.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestVideos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 cards visible at once
        slidesToScroll: 1, // Scroll 1 card at a time
        arrows: true,
        responsive: [
            {
                breakpoint: 992, // Below lg breakpoint (Bootstrap md)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container my-5">
            <h1
                className="text-center mx-auto"
                style={{
                    fontSize: "36px",
                    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                    color: "black",
                    width: "40%",
                }}
            >
                Most <span style={{ color: "#c271ff" }}>popular</span> tutorials
            </h1>

            <Slider {...settings}>
                {videos.map((video, index) => (
                    <div key={index} style={{ padding: "0 10px" }}>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src={video.video_poster}
                                className="custom-image"
                            />
                            <Card.Body>
                                <Card.Title>{video.user_quote}</Card.Title>
                                <Card.Text>{video.paragraph}</Card.Text>
                                <div className="user-data">
                                    <Card.Img
                                        variant="top"
                                        src={video.user_image}
                                        className="user-image"
                                    />
                                    <span>{video.username}</span>
                                </div>
                                {video.rating.map((el, i) => (
                                    <IoStarSharp key={i} />
                                ))}
                                <h3>{video.minutes}</h3>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LatestVideos;