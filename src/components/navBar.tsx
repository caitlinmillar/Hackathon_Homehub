import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <span style={{marginLeft: '10px', color: 'white'}}>&lt;</span>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBar;