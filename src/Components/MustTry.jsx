import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

const MustTry = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Container fluid>
        <div className="flavors-heading w-100 h-100 mt-5">
          <p
            className="text-dark text-uppercase display-3 d-flex justify-content-center pt-0 fw-semibold"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            What We Offer
          </p>
        </div>

        {/* card part */}
        <Container fluid className="mt-5">
          <Row className="flex-column flex-sm-row">
            {/* Column-1 */}
            <Col
              className="d-flex justify-content-center mb-sm-3 col-lg-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../Assets/musttry-1.jpg")}
                />
                <Card.Body>
                  <Card.Title className="text-center h6 fw-bold">
                    PARTY CUPCAKES
                  </Card.Title>
                  <Card.Text className="lead fs-5 text-center">
                    We provide a variety of cupcakes for any party made with
                    high-quality natural ingredients and no preservatives.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>

            {/* Column-2 */}
            <Col
              className="d-flex justify-content-center mb-sm-3 col-lg-3"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../Assets/musttry-2.jpg")}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    CHOCO CAKES
                  </Card.Title>
                  <Card.Text className="lead fs-5 text-center">
                    Nothing tastes better than a chocolate cake with a variety
                    of flavors, which is always available at our bakery.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>

            {/* column-3 */}
            <Col
              className="d-flex justify-content-center mb-sm-3 col-lg-3"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../Assets/musttry-3.jpg")}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    WEDDING CAKES
                  </Card.Title>
                  <Card.Text className="lead fs-5 text-center">
                    Want to make your wedding unforgettable? Then you need to
                    order a unique wedding cake at Creamiee Hunt!
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>

            {/* column-4 */}
            <Col
              className="d-flex justify-content-center mb-sm-3 col-lg-3"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={require("../Assets/musttry-4.jpg")}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-center">
                    SPECIAL COOKIES
                  </Card.Title>
                  <Card.Text className="lead fs-5 text-center">
                    Want to make your Day Special? Then you need to order a
                    unique Secial Cookies at Creamiee Hunt!
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default MustTry;
