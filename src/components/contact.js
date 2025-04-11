import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section
      className="bg-secondary text-white py-5"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                />
              </Form.Group>

              <Button variant="light" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
