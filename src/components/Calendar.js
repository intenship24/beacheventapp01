import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ModernFestivalCalendar.css";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ModernFestivalCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);
  const [typeFilter, setTypeFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const events = [
    {
      title: "🌊 Beach Splash",
      date: new Date("2025-04-11"),
      location: "Beach Paradise",
      description: "Epic water games, live bands, and sunset dance floor.",
      type: "Music",
    },
    {
      title: "🎧 Sunset Jam",
      date: new Date("2025-04-12"),
      location: "Lounge Shore",
      description: "DJ battles, fire acts, and night beach vibes.",
      type: "Music",
    },
    {
      title: "🌴 Tropical Beats",
      date: new Date("2025-04-14"),
      location: "Tiki Island",
      description: "Chill zone, acoustic stage, coconut bar.",
      type: "Cultural",
    },
    {
      title: "🏖️ Sand & Sound",
      date: new Date("2025-04-14"),
      location: "Sunny Shore",
      description: "Silent disco, beach sports, and food trucks.",
      type: "Food",
    },
  ];

  // Filter events by type and date range
  const filteredEvents = events.filter((event) => {
    const inType = typeFilter === "All" || event.type === typeFilter;
    const inRange =
      (!startDate || event.date >= new Date(startDate)) &&
      (!endDate || event.date <= new Date(endDate));
    return inType && inRange;
  });

  const handleDateChange = (date) => {
    setValue(date);
    const matchedEvents = filteredEvents.filter(
      (event) => event.date.toDateString() === date.toDateString()
    );
    setSelectedEvents(matchedEvents);
    setShowModal(true);
  };

  const tileClassName = ({ date }) => {
    const hasEvent = filteredEvents.some(
      (event) => event.date.toDateString() === date.toDateString()
    );
    return hasEvent ? "festival-day" : null;
  };

  return (
    <section className="calendar-modern py-5 text-white">
      <motion.div
        className="calendar-wrapper glass-box p-4 rounded"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-4">🎉 Festival Calendar</h2>

        {/* Filters */}
        <Form className="mb-4">
          <Row className="g-3">
            <Col md={4}>
              <Form.Select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Music">Music</option>
                <option value="Food">Food</option>
                <option value="Cultural">Cultural</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Control
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder="Start Date"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
              />
            </Col>
          </Row>
        </Form>

        {/* Calendar */}
        <Calendar
          onChange={handleDateChange}
          value={value}
          tileClassName={tileClassName}
        />
      </motion.div>

      {/* Modal for Selected Day */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Events on {value.toDateString()}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black text-white">
          {selectedEvents.length > 0 ? (
            selectedEvents.map((event, index) => (
              <div key={index} className="mb-3">
                <h5>{event.title}</h5>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p>No events scheduled on this day.</p>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal for All Upcoming Festivals */}
      <Modal show={showAllModal} onHide={() => setShowAllModal(false)} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>📅 Upcoming Festivals</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black text-white">
          {filteredEvents.map((event, index) => (
            <div key={index} className="mb-3">
              <h5>{event.title}</h5>
              <p>
                <strong>Date:</strong> {event.date.toDateString()}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Type:</strong> {event.type}
              </p>
              <p>{event.description}</p>
            </div>
          ))}
        </Modal.Body>
      </Modal>

      {/* Upcoming Events Button */}
      <div className="all-events mt-5 text-center">
        <h4
          style={{ color: "#ff6600", cursor: "pointer" }}
          onClick={() => setShowAllModal(true)}
        >
          📅 Upcoming Festivals
        </h4>
        <ul className="list-unstyled">
          {filteredEvents.map((event, i) => (
            <li key={i} className="mb-2">
              <strong>{event.date.toDateString()}</strong> - {event.title} @{" "}
              {event.location}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ModernFestivalCalendar;
