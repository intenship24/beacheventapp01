import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
      style={{ backgroundColor: "#f0f4f8" }}
    >
      <Container>
        <Row className="align-items-center shadow-lg rounded-4 overflow-hidden">
          {/* Image Section */}
          <Col
            md={6}
            className="d-none d-md-block p-0"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px",
            }}
          ></Col>

          {/* Form Section */}
          <Col
            xs={12}
            md={6}
            className="bg-white p-5 d-flex flex-column justify-content-center"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="fw-bold mb-4 text-center text-primary">
                Register for Your Festival 🎉
              </h3>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Which event are you registering for?"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Register Now
                </Button>
              </Form>

              <div className="text-center mt-3">
                <small>
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-decoration-none text-primary"
                  >
                    Login
                  </a>
                </small>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
