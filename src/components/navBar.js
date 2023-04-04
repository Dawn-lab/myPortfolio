import { Container, Nav, Navbar as NavBarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
// import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import { Button } from "react-bootstrap";
import logo from "./../119094618_padded_logo-removebg-preview.svg";



function NavBar() {
    return (
        <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="justify-content-end d-flex">
                    
                    <Nav.Link to="/About" as={NavLink}><img src={logo} className="h-14 mr-3" alt="My Logo"/>Let's code</Nav.Link>
                    {/* <Nav.Link to="/projects" as={NavLink}>Projects</Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link> */}
                </Nav>
                {/* <Nav> */}
                <Nav className="justify-content-end d-flex">
                    <Nav.Link to="/About" as={NavLink}>About</Nav.Link>
                    <Nav.Link to="/projects" as={NavLink}>Projects</Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
                </Nav>
            </Container>
        </NavBarBs>
    )
}

export default NavBar;

