import React,{useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

const Flavors = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Container fluid>
        <div className="flavors-heading w-100 h-100 mt-3">
          <p className="text-muted display-6 d-flex justify-content-center pt-5 fw-bold" data-aos="fade-up-left">
            Our
          </p>
          <p className="text-dark display-1 d-flex justify-content-center pt-0 fw-bolder" data-aos="fade-up-left">
            Flavors
          </p>
        </div>

        {/* ------------Ice Cream Flavor Part------------------ */}
        <div className="flavors-body w-100 h-75">
          <h3 className="fby-heading d-flex justify-content-center mt-5 w-100 text-uppercase fw-bold" data-aos="fade-up">
            Ice Cream Flavors
          </h3>
          <div className="w-100 h-auto d-flex justify-content-center " data-aos="fade-up">
            <hr style={{ width: "8.25rem", border: "2px solid red" }} />
          </div>

          <Container>
            {/* Row part-1 */}
            <Row className="flex-column flex-lg-row">
              {/* Cols-1 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-1.jpg")}
                    data-aos="zoom-in"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="fade-right">
                      OREO
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center" data-aos="fade-right">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold" data-aos="fade-up">
                      The Oreo ice cream is made from creamy ice cream with
                      original Oreo biscuit pieces.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Cols-2 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-2.jpg")}
                    data-aos="zoom-in"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="fade-right">
                      CHOCOLATE & SEA SALT
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center" data-aos="fade-right">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold"  data-aos="fade-up">
                      Chocolate ice cream is generally made by blending cocoa
                      powder, and the eggs, cream, vanilla, and sugar used to
                      make vanilla ice cream.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Col-3 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-3.jpg")}
                    data-aos="zoom-in"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="fade-right">
                      VANILLA STRABERRY
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center " data-aos="fade-right">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold"  data-aos="fade-up">
                      It is made by blending in fresh strawberries or strawberry
                      flavoring with the eggs, cream, vanilla, and sugar used to
                      make ice cream.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Row part-2 */}
            <Row className="flex-column flex-lg-row">
              {/* Cols-1 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-4.jpg")}
                    data-aos="zoom-in"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold"  data-aos="fade-left">
                      CHERRY CHEESECAKE
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center "  data-aos="fade-left">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold"  data-aos="fade-down">
                      Cherry Cheesecake Ice Cream is a delicious ice cream
                      flavor complete with cream cheese, cherries and graham
                      crackers.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Cols-2 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-5.jpg")}
                    data-aos="zoom-in"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold"  data-aos="fade-left">
                      PITACHIO
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center "  data-aos="fade-left">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold"  data-aos="fade-down">
                      Pistachio ice cream has a mild, nutty flavor that is
                      offset by the sweetness of the ice cream, while marzipan
                      is much sweeter and has a stronger almond flavor.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Col-3 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-6.jpg")}
                    data-aos="zoom-in"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold"  data-aos="fade-left">
                      HAZELNUT & COOKIES
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center"  data-aos="fade-left">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold"  data-aos="fade-down">
                      Chocolate ice cream is generally made by blending cocoa
                      powder, and the eggs, cream, vanilla, and sugar used to
                      make vanilla ice cream.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Dairy Free Flavors Part  */}

        <div className="flavors-body w-100 h-100">
          <h3 className="fby-heading d-flex justify-content-center mt-5 w-100 fw-bold text-upper-case"  data-aos="fade-up">
            Dairy Free Flavors
          </h3>
          <div className="w-100 h-auto d-flex justify-content-center "  data-aos="fade-up">
            <hr style={{ width: "8.25rem", border: "2px solid red" }} />
          </div>

          <Container>
            {/* Row part-1 */}
            <Row className="flex-column flex-lg-row">
              {/* Cols-1 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-7.jpg")}
                    data-aos="zoom-in-up"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold"  data-aos="zoom-in-left">
                      SALTED CARAMEL SOY
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center " data-aos="zoom-in-left">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold" data-aos="zoom-in-right">
                      Salted caramel is a soft sweet food made from heated sugar
                      and butter or cream, with salt added as a flavouring.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Cols-2 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-8.jpg")}
                    data-aos="zoom-in-up"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="zoom-in-left">
                      BRAMBLEBERRY SORBET
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center " data-aos="zoom-in-left">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold" data-aos="zoom-in-right">
                      Without fat from dairy or eggs, it's the suspension of
                      sugar within the fruit purée that allows the sorbet to
                      churn into something with a creamy mouthfeel.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Col-3 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-9.jpg")}
                    data-aos="zoom-in-up"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="zoom-in-left">
                      BANANA & HONEY
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center " data-aos="zoom-in-left">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold" data-aos="zoom-in-right">
                      The vitamin C in banana pulp helps to cope with winter
                      colds and infections; slows aging process, and prevents
                      early wrinkles
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Row part-2 */}
            <Row className="flex-column flex-lg-row">
              {/* Cols-1 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-10.jpg")}
                    data-aos="zoom-in-down"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="zoom-in-right">
                      RASPBERRY SORBET
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center " data-aos="zoom-in-right">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold" data-aos="zoom-in-left">
                      Sorbet is a non-dairy frozen dessert made from puréed
                      raspberry or raspberry juice mixed with water and sugar.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Cols-2 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-11.jpg")}
                    data-aos="zoom-in-down"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="zoom-in-right">
                      STRAWBERRY & COCONUT
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center " data-aos="zoom-in-right">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold" data-aos="zoom-in-left">
                      The coconut cream makes it incredibly creamy, the
                      strawberry flavour is really prevalent in it and the maple
                      syrup adds a delicious sweetness to it.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Col-3 */}
              <Col className="d-flex justify-content-center">
                <Card style={{ width: "18rem" }} className="border border-0">
                  <Card.Img
                    variant="top"
                    src={require("../Assets/flavor-12.jpg")}
                    data-aos="zoom-in-down"
                  />
                  <Card.Body>
                    <Card.Title className="text-center h6 fw-bold" data-aos="zoom-in-right">
                      LIME SORBET
                    </Card.Title>
                    <div className="w-100 h-auto d-flex justify-content-center " data-aos="zoom-in-right">
                      <hr
                        style={{ width: "10rem", border: "1px solid black" }}
                      />
                    </div>
                    <Card.Text className="lead text-center fs-6 fst-italic fw-bold" data-aos="zoom-in-left">
                      Sorbet has less calories than ice cream and other frozen
                      desserts, and no fat. It's fruit content also makes it
                      rich in vitamin C.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Flavors;
