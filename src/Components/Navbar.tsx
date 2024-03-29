/* eslint-disable jsx-a11y/anchor-has-content */
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Hamzailer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/aboutme">About Me</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <a
            style={{ color: "black" }}
            href="https://www.twitter.com/HamzailerO"
            className="fa fa-twitter"
          ></a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
