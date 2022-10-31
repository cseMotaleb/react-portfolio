import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavItem> <Link className="nav-link" to="/">Home</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/about">About</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/contact">Contact</Link> </NavItem>
            </Nav>
            <Nav>
              <Nav.Link to="#deets">Hire Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;