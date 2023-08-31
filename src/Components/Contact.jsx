import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div>
      <Container fluid className="text-bg-dark mt-5 pt-5">
        <Row className="flex-column flex-lg-row pt-3 px-sm-4 py-sm-4">
          <Col className="text-uppercase fw-semibold pb-sm-3">
            <h3>Address</h3>
            <address>
              Creamy World,
              <br />
              Sweet Street,
              <br />
              ICE-09870.
            </address>
          </Col>

          <Col className="text-uppercase fw-semibold pb-sm-3">
            <h3>Contact</h3>
            <p>
              Creamiee.Hunt@gmail.com <br /> Tel: 12345-67890
            </p>
          </Col>

          <Col className="text-uppercase fw-semibold pb-sm-3">
            <h3>Hours</h3>
            <p>
              open daily <br /> 10am-10pm
            </p>
          </Col>

          <Col className="text-uppercase fw-semibold pb-sm-3">
            <h3>Mailing List</h3>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter Your Mail Here*"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label>Example textarea</Form.Label> */}
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Description*"
                />
              </Form.Group>
              <Button variant="outline-light" size="lg">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="flex-column flex-lg-row pt-3 px-sm-4 py-sm-4">
          <Col>
            <h6>© 2023. SanjaySenthil. All Rights Reserved. Privacy Policy.</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
