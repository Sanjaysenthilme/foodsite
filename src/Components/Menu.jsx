import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
import "../Styles/Menu.css";
import Product from "./Product";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";


const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (

      <Container fluid>
        <Row className="flex-column flex-lg-row pt-3 mt-3">
          <Col>
            <div className="">
              <Image
                src={require("../Assets/Group-img-1.jpg")}
                alt="some people eating ice cream.."
                fluid
              />
            </div>
          </Col>
          <Col>
            <div className="mt-lg-5 mt-sm-3">
              <h3 className="texth3 text-center fs-lg-5" data-aos="fade-down">
                <span>
                  <i class="bi bi-balloon-heart"></i>
                </span>
                &nbsp; Treat Yourself With Our Everyday Menu&nbsp;
                <span>
                  <i class="bi bi-balloon-heart"></i>
                </span>
              </h3>
              <p className="lead mt-3 text-secondary text-center fw-bold fst-italic" data-aos="fade-left">
                We are introduce different flavors of ice cream.If you like our
                ice cream please check it out.
              </p>
              {/* <div className="d-flex justify-content-center mt-3 mb-sm-3">
                <Button variant="outline-danger">MENU</Button>
              </div> */}
            </div>
          </Col>
        </Row>
        {/*Dairy part --> Parallax part  */}
        <Row>
          <Col>
            <div className="parallax pt-sm-5 mt-2">
              <h3 className="text-center text-light text-uppercase display-5 pt-sm-5" data-aos="fade-down">
                Enjoy
              </h3>
              <h1 className="text-uppercase text-light text-center display-1 pt-sm-4 fw-bolder" data-aos="fade-left">
                Dairy Free
              </h1>
              {/* <div className="d-flex justify-content-center pt-sm-5">
                <section id="flavors">
                  <Button variant="outline-light">MENU</Button>
                </section>
              </div> */}
            </div>
          </Col>
        </Row>
        {/* Product Part */}
        <Row>
          <Col>
            <Product />
          </Col>
        </Row>
      </Container>

  );
};

export default Menu;
