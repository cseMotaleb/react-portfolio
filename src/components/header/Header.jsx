import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';




function Header() {
  return (
    <header className="header">
      <Navbar collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand><Link className="nav-link" to="/">Motaleb</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavItem> <Link className="nav-link" exact
                to="/">HOME</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/about">ABOUT</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/resume">RESUME</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/portfolio">PORTFOLIO</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/blog">BLOG</Link> </NavItem>
              <NavItem> <Link className="nav-link" to="/contact">CONTACT</Link> </NavItem>
              
            </Nav>
            <Nav>
              <Nav.Link to="#deets">Hire Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;