import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import HeaderCartButton from './HeaderCartButton'

function Header() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">AmazonUndercut</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <HeaderCartButton></HeaderCartButton>
        </Container>
      </Navbar>
    </>
  );
}

export default Header

