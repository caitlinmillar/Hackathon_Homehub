import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto justify-content-between w-100">
            <Nav.Link href="#Details">Details</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Tools">Tools</Nav.Link>
            <Nav.Link href="#Help">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;