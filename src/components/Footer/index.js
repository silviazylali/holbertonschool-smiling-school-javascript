import React from "react";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content w-auto">
                <div className="footer-images d-flex justify-content-between align-items-center">
                    <div className="footer-logo mt-5 mx-5">
                        <img src={logo} alt="Website Logo" />
                    </div>
                    <div className="footer-images-with-link mt-5 d-flex gap-2 me-5">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
                <p className="footer-text d-block mt-5 text-center">
                    © smileschool 2020
                </p>
            </div>
        </footer>
    );
};

export default Footer;
