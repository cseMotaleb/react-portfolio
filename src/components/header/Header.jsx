import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem> <Link className="nav-link" to="/">Home</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/about">About</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/contact">Contact</Link> </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;