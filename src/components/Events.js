import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
  Badge,
  Alert,
} from "react-bootstrap";
import { motion } from "framer-motion";

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", tickets: 1 });
  const [filter, setFilter] = useState("All");
  const [successMessage, setSuccessMessage] = useState("");

  const eventData = [
    {
      title: "Sunburn Beach Bash",
      date: "2025-05-10",
      time: "6:00 PM",
      location: "Tannirbhavi Beach",
      category: "Music",
      rating: 4.5,
      description: "Join us for a night of electrifying music and beach fun!",
      image:
        "https://www.specialholidays.com/blog/wp-content/uploads/2021/04/Sunburn-Goa.jpg",
      price: "₹1200",
      availability: 50,
    },
    {
      title: "Beach EDM Night",
      date: "2025-05-11",
      time: "7:00 PM",
      location: "Panambur Beach",
      category: "Music",
      rating: 4.0,
      description: "Dance to the beats under the stars with a live DJ!",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      price: "₹1000",
      availability: 100,
    },
    {
      title: "Seafood Festival",
      date: "2025-05-12",
      time: "12:00 PM",
      location: "Mangalore Shores",
      category: "Food",
      rating: 4.8,
      description: "Taste the freshest seafood and enjoy local flavors.",
      image:
        "https://newsmeter.in/h-upload/2023/07/15/350231-whatsapp-image-2023-07-15-at-24452-pm.webp",
      price: "₹800",
      availability: 30,
    },
    {
      title: "Beach Volleyball Showdown",
      date: "2025-05-13",
      time: "4:00 PM",
      location: "Someshwar Beach",
      category: "Sports",
      rating: 4.2,
      description: "Compete in the ultimate beach volleyball tournament.",
      image:
        "https://t3.ftcdn.net/jpg/07/96/06/62/360_F_796066223_rhUHepc2L3ZbVtP7ZNXq4OH9zDiUA0i5.jpg",
      price: "₹500",
      availability: 20,
    },
  ];

  const filteredEvents =
    filter === "All"
      ? eventData
      : eventData.filter((event) => event.category === filter);

  const handleRegisterClick = (index) => {
    setSelectedEvent(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", tickets: 1 });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = eventData[selectedEvent];
    const totalPrice = event.price * formData.tickets;
    setSuccessMessage(
      `Thanks ${formData.name}, you’ve successfully registered for ${event.title}. You have purchased ${formData.tickets} ticket(s) at ₹${totalPrice}.`
    );

    // Mock email confirmation (no actual email sent)
    setTimeout(() => {
      setShowModal(false);
      setFormData({ name: "", email: "", tickets: 1 });
    }, 3000); // Automatically close modal after 3 seconds
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = "★".repeat(fullStars) + (halfStar ? "½" : "");
    const emptyStars = "☆".repeat(5 - fullStars - (halfStar ? 1 : 0));
    return (
      <div style={{ color: "#FFD700", fontSize: "1.2rem" }}>
        {stars + emptyStars}
      </div>
    );
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <Container>
        <h3 className="text-center mb-4">Upcoming Events</h3>

        {/* Filter by Category */}
        <Form className="mb-5 text-center">
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-auto d-inline-block"
          >
            <option value="All">All Categories</option>
            <option value="Music">Music</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
          </Form.Select>
        </Form>

        {/* Event Listings */}
        <Row>
          {filteredEvents.map((event, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-light text-dark shadow-lg rounded-4 overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={event.image}
                    alt={event.title}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold">{event.title}</Card.Title>
                    <Card.Text>
                      📍 {event.location}
                      <br />
                      📅 {new Date(event.date).toLocaleDateString()} at{" "}
                      {event.time}
                    </Card.Text>
                    <p>{event.description}</p>
                    {renderStars(event.rating)}
                    <Badge bg="secondary" className="mb-3 mt-2">
                      {event.category}
                    </Badge>
                    <p className="mb-3">
                      Price: <strong>{event.price}</strong>
                    </p>
                    <p>Availability: {event.availability} tickets left</p>
                    <Button
                      variant="primary"
                      onClick={() => handleRegisterClick(index)}
                      className="w-100"
                    >
                      Register Now
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Success Message */}
        {successMessage && (
          <Alert variant="success" className="text-center mt-3">
            {successMessage}
          </Alert>
        )}

        {/* Modal for Registration */}
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              Register for{" "}
              {selectedEvent !== null && eventData[selectedEvent].title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Number of Tickets</Form.Label>
                <Form.Control
                  type="number"
                  name="tickets"
                  value={formData.tickets}
                  onChange={handleChange}
                  min="1"
                  max={
                    selectedEvent !== null && selectedEvent < eventData.length
                      ? eventData[selectedEvent].availability
                      : 0
                  }
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100">
                Confirm Registration
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Events;
