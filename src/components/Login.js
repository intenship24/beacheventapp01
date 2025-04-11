import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate login success
      setSuccessMessage("Logged in successfully! ✅");
      setErrors({});
      setTimeout(() => {
        setSuccessMessage("");
        // Redirect logic or state update can go here
      }, 3000);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-dark"
      style={{
        minHeight: "100vh",
        background:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-100"
        style={{ maxWidth: "400px" }}
      >
        <Card
          className="p-4 border-0 shadow-lg text-white"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(10px)",
            borderRadius: "1rem",
          }}
        >
          <h2 className="text-center mb-4 fw-bold">Login</h2>

          {successMessage && (
            <Alert variant="success" className="text-center">
              {successMessage}
            </Alert>
          )}

          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-transparent text-white border-light ${
                  errors.email ? "is-invalid" : ""
                }`}
              />
              {errors.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`bg-transparent text-white border-light ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              {errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>

            <Button variant="info" type="submit" className="w-100 fw-bold">
              Login
            </Button>
          </Form>

          <div className="text-center mt-3">
            <small>
              Don’t have an account?{" "}
              <a href="/register" className="text-info">
                Register
              </a>
            </small>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
