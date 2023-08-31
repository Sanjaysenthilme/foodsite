import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1 className="d-flex justify-content-center text-uppercase"><i class="bi bi-activity"></i>&nbsp;<span>Product</span>&nbsp;<i class="bi bi-activity"></i> </h1>
          </Col>
        </Row>

        <Row className="flex-column flex-lg-row mt-3">
          <Col data-aos="fade-down">
            <div className="Menu-img w-100 h-100">
              <Image
                src={require("../Assets/menu-1.jpg")}
                alt="some people eating ice cream.."
                fluid
                rounded
                className="w-100 h-100 mb-sm-3"
                id="menu-img"
              />
              <div className="w-100 d-flex justify-content-center align-items-center my-5 py-5">
                <h3 className="fst-italic fw-bold fs-3">Chocolate</h3>
              </div>
            </div>
          </Col>

          <Col data-aos="fade-up">
            <div className="Menu-img w-100 h-100">
              <Image
                src={require("../Assets/menu-2.jpg")}
                alt="some people eating ice cream.."
                fluid
                rounded
                className="w-100 h-100 mb-sm-3"
                id="menu-img"
              />
              <div className="w-100 d-flex justify-content-center align-items-center my-5 py-5">
                <h3 className="fst-italic fw-bold fs-3 ">White Mint</h3>
              </div>
            </div>
          </Col>

          <Col data-aos="fade-down">
            <div className="Menu-img w-100 h-100">
              <Image
                src={require("../Assets/menu-3.jpg")}
                alt="some people eating ice cream.."
                fluid
                rounded
                className="w-100 h-100 mb-sm-3"
                id="menu-img"
              />
              <div className="w-100 d-flex justify-content-center align-items-center my-5 py-5">
                <h3 className="fst-italic fw-bold fs-3 ">Strawberry</h3>
              </div>
            </div>
          </Col>

          <Col data-aos="fade-up">
            <div className="Menu-img w-100 h-100">
              <Image
                src={require("../Assets/menu-4.jpg")}
                alt="some people eating ice cream.."
                fluid
                rounded
                className="w-100 h-100 mb-sm-3"
                id="menu-img"
              />
              <div className="w-100 d-flex justify-content-center align-items-center my-5 py-5">
                <h3 className="fst-italic fw-bold fs-3">Vanilla</h3>
              </div>
            </div>
          </Col>

          <Col data-aos="fade-down">
            <div className="Menu-img w-100 h-100">
              <Image
                src={require("../Assets/menu-5.jpg")}
                alt="some people eating ice cream.."
                fluid
                className="w-100 h-100 mb-sm-3"
                id="menu-img"
                rounded
              />
              <div className="w-100 d-flex justify-content-center align-items-center my-5 py-5">
                <h3 className="fst-italic fw-bold fs-3">Fruit Yogurt</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
