import React,{useEffect} from "react";
// React-Bootstrap Packages:
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Navigation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    // <Container fluid>

    <Navbar expand="lg" className="bg-body-lighter">
      <Container>
        <Navbar.Brand href="#home">
          <h6
            className="text-Dark fst-italic h2"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Creamiee{" "}
            <span className="heart fs-1">
              <i class="bi bi-hearts"></i>
            </span>
            Hunt
          </h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="link">
            <Nav.Link
              href="#home"
              className="fw-bolder navlink mx-sm-4 mx-lg-auto"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#menu"
              className="fw-bolder navlink mx-sm-4 mx-lg-auto"
            >
              Menu
            </Nav.Link>
            <Nav.Link
              href="#flavors"
              className="fw-bolder navlink mx-sm-4 mx-lg-auto"
            >
              Flavors
            </Nav.Link>
            <Nav.Link
              href="#musttry"
              className="fw-bolder navlink mx-sm-4 mx-lg-auto"
            >
              Must Try
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="navlink fw-bolder mx-sm-4 mx-lg-auto"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </Container>
  );
};

export default Navigation;
