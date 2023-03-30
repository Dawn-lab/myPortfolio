import { Container, Nav, Navbar as NavBarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import { Button } from "react-bootstrap";


function NavBar() {
    return (
        <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="justify-content-end d-flex">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/projects" as={NavLink}>Projects</Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="https://github.com/Dawn-lab" target="_blank" as={NavLink}>

                        <span className="git">
                            <FaGithub />
                        </span>
                    </Nav.Link>
                    <Nav.Link to="https://twitter.com/Julieus_G" target="_blank" as={NavLink}>

                        <span className="twitter">
                            <FaTwitter />
                        </span>
                    </Nav.Link>
                    <Nav.Link to="https://www.linkedin.com/in/julieus/" target="_blank" as={NavLink}>

                        <span className="linkedin">
                            <FaLinkedinIn />
                        </span>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavBarBs>
    )
}

export default NavBar;

