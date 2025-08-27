import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/logo.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-inner">
                <img src={logo} alt="Logo" className="footer-logo" />

                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                </div>
            </div>

            <p className="smile-school">© SmileSchool 2020</p>
        </footer>
    );
};

export default Footer;
