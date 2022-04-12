import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="home"> 
                    <div>
                        <img src='' alt='profile image'/>
                    </div>Home
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="interests">Interests</Nav.Link>
                <Nav.Link href="resume">Resume</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header