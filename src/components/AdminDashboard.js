import React, { useState } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { PencilSquare, Trash, StarFill } from "react-bootstrap-icons";

const AdminDashboard = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Beach Fest", date: "2025-05-01" },
    { id: 2, name: "Sunset Music", date: "2025-05-10" },
  ]);

  const [users] = useState([
    { id: 1, name: "Alice", event: "Beach Fest", tickets: 2 },
    { id: 2, name: "Bob", event: "Sunset Music", tickets: 1 },
  ]);

  const [reviews] = useState([
    {
      id: 1,
      event: "Beach Fest",
      name: "Alice",
      rating: 5,
      review: "Amazing vibe!",
    },
    {
      id: 2,
      event: "Sunset Music",
      name: "Bob",
      rating: 4,
      review: "Great music!",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ name: "", date: "" });

  const handleEdit = (event) => {
    setSelectedEvent({ ...event }); // clone to avoid live changes
    setShowModal(true);
  };

  const handleDelete = (id) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
  };

  const handleSave = () => {
    setEvents((prevEvents) =>
      prevEvents.map((e) => (e.id === selectedEvent.id ? selectedEvent : e))
    );
    setSelectedEvent(null);
    setShowModal(false);
  };

  const handleAddEvent = () => {
    if (newEvent.name && newEvent.date) {
      const newId =
        events.length > 0 ? Math.max(...events.map((e) => e.id)) + 1 : 1;
      setEvents([...events, { id: newId, ...newEvent }]);
      setNewEvent({ name: "", date: "" });
    }
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center fw-bold text-primary mb-4">
            🎯 Admin Event Manager
          </h2>

          {/* Add New Event */}
          <Row className="mb-4">
            <Col md={5}>
              <Form.Control
                type="text"
                placeholder="Event Name"
                value={newEvent.name}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, name: e.target.value })
                }
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
              />
            </Col>
            <Col md={3}>
              <Button variant="success" onClick={handleAddEvent}>
                ➕ Add Event
              </Button>
            </Col>
          </Row>

          {/* Events Table */}
          <Table responsive bordered hover className="shadow-sm bg-white">
            <thead className="table-dark">
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td className="text-center">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(event)}
                    >
                      <PencilSquare className="me-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(event.id)}
                    >
                      <Trash className="me-1" />
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Registered Users */}
          <h4 className="mt-5 mb-3 text-success">👥 Registered Users</h4>
          <Table bordered className="bg-white">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Event</th>
                <th>Tickets</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.event}</td>
                  <td>{user.tickets}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Reviews and Ratings */}
          <h4 className="mt-5 mb-3 text-warning">⭐ Reviews & Ratings</h4>
          {reviews.map((r) => (
            <Card key={r.id} className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>
                  {r.name} on <strong>{r.event}</strong>
                </Card.Title>
                <div className="mb-2 text-warning">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <StarFill key={i} />
                  ))}
                </div>
                <Card.Text>{r.review}</Card.Text>
              </Card.Body>
            </Card>
          ))}

          {/* Edit Modal */}
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedEvent && (
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={selectedEvent.name}
                      onChange={(e) =>
                        setSelectedEvent({
                          ...selectedEvent,
                          name: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={selectedEvent.date}
                      onChange={(e) =>
                        setSelectedEvent({
                          ...selectedEvent,
                          date: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Form>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </motion.div>
      </Container>
    </div>
  );
};

export default AdminDashboard;
