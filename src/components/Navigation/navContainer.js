import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../images/logo.png";
import "./Header.css";

const MyNavbar = () => {
    return (
        <Navbar expand="lg" className="w-75 mx-auto pt-4 nav-container bg-none">
            <a href="/" className="logo-container">
                <img src={logo} alt="website logo" className="logo logo-container" />
            </a>
            <Nav className="menu-container ms-auto">
                <Nav.Link href="/" className="px-3 text-white">
                    COURSES
                </Nav.Link>
                <Nav.Link href="/" className="px-3 text-white">
                    PRICES
                </Nav.Link>
                <Nav.Link href="/" className="px-3 text-white">
                    LOGIN
                </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default MyNavbar;