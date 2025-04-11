import React, { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
  Navbar,
  Nav,
} from "react-bootstrap";
import { motion } from "framer-motion";

const Home = () => {
  const exploreRef = useRef(null);
  const contactRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const events = [
    {
      id: 1,
      title: "Beach Splash",
      date: "2025-04-11",
      location: "Beach Paradise",
      tags: ["Music", "Water Sports"],
      image:
        "https://media.istockphoto.com/id/104669275/photo/ocean-wave.jpg?s=612x612&w=0&k=20&c=YqJ5H_NmORC6HPYHplIyzBpPEf3egtfJfn-r0C9addI=",
      description: "Enjoy thrilling water sports and music at the beach!",
    },
    {
      id: 2,
      title: "Sunset Jam",
      date: "2025-04-12",
      location: "Beachside Lounge",
      tags: ["Food", "Dance"],
      image:
        "https://media.istockphoto.com/id/452103703/photo/footprints-in-the-sand.jpg?s=612x612&w=0&k=20&c=xYfEyn0NzUiavE0cERbVkdr6dJ_GAhFK628beElPROU=",
      description: "Dance to the sunset with tasty beachside cuisine!",
    },
    {
      id: 3,
      title: "Sandy Beats",
      date: "2025-04-13",
      location: "Rocky Beach",
      tags: ["Culture", "Live DJ"],
      image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      description: "Cultural beats and live DJ at the rocky coast!",
    },
  ];

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLikeToggle = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBack = () => setSelectedEvent(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark text-white">
      {/* Navigation Bar */}
      <Navbar bg="dark" expand="lg" variant="dark" className="py-3 px-3">
        <Navbar.Brand href="#home" className="fw-bold">
          🌴 Mangalore Festivals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={scrollToExplore} className="text-light">
              Explore
            </Nav.Link>
            <Nav.Link onClick={scrollToContact} className="text-light">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Hero Section */}
      <section
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center px-3"
        style={{
          height: "100vh",
          background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover no-repeat`,
        }}
      >
        <h1 className="display-4 fw-bold mb-3">
          Welcome to Mangalore Beach Festivals 🌊
        </h1>
        <p className="lead mb-4">
          Discover events, music, cuisine, and beachside bliss!
        </p>
        <Button variant="light" size="lg" onClick={scrollToExplore}>
          Explore Events
        </Button>
      </section>

      {/* Explore Section */}
      <Container ref={exploreRef} className="py-5" id="explore">
        {selectedEvent ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded bg-secondary"
          >
            <h2>{selectedEvent.title}</h2>
            <p>
              📅 {selectedEvent.date} | 📍 {selectedEvent.location}
            </p>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="img-fluid rounded mb-3"
            />
            <p>{selectedEvent.description}</p>
            <div className="mb-3">
              {selectedEvent.tags.map((tag, i) => (
                <Badge key={i} bg="info" className="me-1">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button variant="light" onClick={handleBack}>
              ← Back to Events
            </Button>
          </motion.div>
        ) : (
          <>
            <h2 className="text-center mb-4" style={{ color: "lightblue" }}>
              Search Your Festival
            </h2>
            <Form className="mb-5">
              <Form.Control
                type="text"
                placeholder="Search by event name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>

            <Row>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <Col md={6} lg={4} key={event.id} className="mb-4">
                    <motion.div whileHover={{ scale: 1.03 }} className="h-100">
                      <Card className="event-card h-100 text-dark">
                        <Card.Img
                          variant="top"
                          src={event.image}
                          alt={event.title}
                        />
                        <Card.Body>
                          <Card.Title>{event.title}</Card.Title>
                          <Card.Text className="text-muted mb-2">
                            📅 {event.date} | 📍 {event.location}
                          </Card.Text>
                          <div className="mb-3">
                            {event.tags.map((tag, i) => (
                              <Badge key={i} bg="info" className="me-1">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <Button
                              variant="primary"
                              onClick={() => setSelectedEvent(event)}
                            >
                              View Details
                            </Button>
                            <Button
                              variant={
                                liked[event.id] ? "danger" : "outline-danger"
                              }
                              onClick={() => handleLikeToggle(event.id)}
                            >
                              {liked[event.id] ? "♥" : "♡"}
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))
              ) : (
                <p className="text-center text-muted">No events found.</p>
              )}
            </Row>
          </>
        )}
      </Container>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="bg-secondary text-white py-5"
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
    </div>
  );
};

export default Home;
