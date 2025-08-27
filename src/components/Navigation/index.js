import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../images/logo.png";

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Smiling School" width="150px" height="30px" className="d-inline-block align-top" />{' '}
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;

