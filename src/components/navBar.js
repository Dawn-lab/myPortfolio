import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"


function NavBar() {
    return (
        <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="justify-content-end d-flex">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/projects" as={NavLink}>Projects</Nav.Link>
                    <Nav.Link to="/contact" as={NavLink}>Contact</Nav.Link>
                </Nav>
            </Container>
        </NavBarBs>
    )
}

export default NavBar;

