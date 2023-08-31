import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";


const Banner = () => {
  return (
      <Container fluid>
        <Row className="justify-content-center align-item-center overflow-hidden">
          <Col lg={12}>
            <Carousel>
              <Carousel.Item interval={2000}>
                <Image
                  src={require("../Assets/image-1.jpg")}
                  alt="image1"
                  className="w-100 h-50"
                  fluid
                />
                <Carousel.Caption>
                  <h3>Strawberries with Vanilla Ice Cream</h3>
                  <p className="lead fs-5 fst-italic d-none d-sm-block" >
                    Refreshing sweet strawberries that are gently either
                    quartered or sliced marinated with sugar and Vennila Ice
                    Cream...
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image
                  src={require("../Assets/image-2.jpg")}
                  alt="image2"
                  className="w-100 h-50"
                />
                <Carousel.Caption>
                  <h3>Drumstick Ice Cream Cones</h3>
                  <p className="lead fs-5 fst-italic d-none d-sm-block">
                    These chocolate covered ice cream cones are the ultimate
                    indulgence. Crunchy cones are dipped in almonds ...
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item interval={2000}>
                <Image
                  src={require("../Assets/image-3.jpg")}
                  alt="image3"
                  className="w-100 h-50"
                />
                <Carousel.Caption>
                  <h3>Vennila Ice Cream & Nuts Toppings</h3>
                  <p className="lead fs-5 fst-italic d-none d-sm-block">
                    Delicious vennila ice cream with chocolate sauce and fresh
                    nuts toppings..
                  </p>
                </Carousel.Caption>
              </Carousel.Item> */}
              <Carousel.Item>
                <img
                  src={require("../Assets/image-4.jpg")}
                  alt="image4"
                  className="w-100 h-50"
                />
                <Carousel.Caption>
                  <h3>Kulfiee</h3>
                  <p className="lead fs-5 fst-italic d-none d-sm-block">
                    A popular Indian Ice cream which is basically a popsicle
                    made with milk and fresh nuts toppings...
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="text-center overflow-hidden" data-aos="fade-up" >
          <h2 className="display-3 mt-3">Ice Cream for Every Occasion!</h2>
          <p className="lead text-muted">
            Ice cream takes us back to our childhood days...
          </p>
        </div>
      </Container>
  );
};

export default Banner;
