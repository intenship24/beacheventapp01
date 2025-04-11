import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { motion } from "framer-motion";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { name: "John", comment: "Amazing event at Panambur Beach!", rating: 5 },
    {
      name: "Priya",
      comment: "Loved the food festival experience!",
      rating: 4,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment || formData.rating === 0) return;
    setReviews((prev) => [...prev, formData]);
    setFormData({ name: "", comment: "", rating: 0 });
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "text-warning" : "text-muted"}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center fw-bold mb-5 text-primary">
            Share Your Festival Experience ✨
          </h2>

          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="shadow-lg p-4 mb-4">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Review</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="comment"
                      rows={4}
                      placeholder="Write your review..."
                      value={formData.comment}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Rating</Form.Label>
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button
                          key={star}
                          variant="link"
                          className={
                            formData.rating >= star
                              ? "text-warning p-0 fs-4"
                              : "text-muted p-0 fs-4"
                          }
                          onClick={() => handleRatingChange(star)}
                        >
                          ★
                        </Button>
                      ))}
                    </div>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Submit Review
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>

          <h4 className="text-center mt-5 mb-4 text-secondary">
            What People Say 💬
          </h4>

          <Row className="justify-content-center">
            <Col md={10}>
              <ListGroup>
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ListGroup.Item className="mb-2 shadow-sm rounded border-0">
                      <strong>{review.name}</strong> – {review.comment}
                      <div>{renderStars(review.rating)}</div>
                    </ListGroup.Item>
                  </motion.div>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Reviews;
