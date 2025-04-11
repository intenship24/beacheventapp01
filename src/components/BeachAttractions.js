import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const BeachAttractions = () => {
  const beaches = [
    {
      name: "Panambur Beach",
      location: "Mangalore, Karnataka",
      attractions: ["Golden sands", "Camel rides", "Water sports"],
      facilities: ["Shower facilities", "Food stalls", "Parking"],
      description: "Golden sands, camel rides, and water sports fun.",
      image:
        "https://karnatakatourism.org/wp-content/uploads/2020/06/Panambur-Beach-800x450-1.jpg",
      coordinates: { lat: 12.9412, lng: 74.8648 },
    },
    {
      name: "Tannirbhavi Beach",
      location: "Mangalore, Karnataka",
      attractions: ["Scenic shoreline", "Palm trees", "Cliffside views"],
      facilities: ["Shower facilities", "Food stalls", "Parking"],
      description: "Scenic shoreline with palm trees and cliffside views.",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/1-panambur-beach-mangalore-karnataka-city-hero?qlt=82&ts=1726722213408",
      coordinates: { lat: 12.9563, lng: 74.8489 },
    },
    {
      name: "Someshwar Beach",
      location: "Mangalore, Karnataka",
      attractions: ["Sunsets", "Beach strolls", "Relaxation"],
      facilities: ["Shower facilities", "Food stalls", "Parking"],
      description: "Perfect for sunsets, beach strolls, and relaxation.",
      image:
        "https://static.toiimg.com/thumb/109861375/Someswara-Beach-in-Mangalore.jpg?width=636&height=358&resize=4",
      coordinates: { lat: 13.0175, lng: 74.88 },
    },
  ];

  const getMapUrl = (lat, lng) => {
    return `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
  };

  return (
    <div className="bg-dark text-white py-5 min-vh-100">
      <Container>
        <h2
          className="text-center mb-5 display-5 fw-bold"
          style={{
            color: "#00bfff",
            textShadow: "1px 1px 5px rgba(0, 191, 255, 0.5)",
          }}
        >
          🌴 Beach Attractions in Mangalore 🌊
        </h2>

        <Row>
          {beaches.map((beach, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="h-100"
              >
                <Card className="h-100 text-white border-0 bg-transparent shadow-sm position-relative overflow-hidden">
                  <div className="position-relative">
                    <Card.Img
                      src={beach.image}
                      alt={beach.name}
                      className="w-100"
                      style={{
                        height: "240px",
                        objectFit: "cover",
                        borderRadius: "1rem",
                        filter: "brightness(80%)",
                        transition: "filter 0.3s ease",
                      }}
                    />
                  </div>
                  <Card.Body className="bg-light text-dark rounded-bottom-4 p-4">
                    <Card.Title className="fw-bold fs-4 mb-2 text-center">
                      {beach.name}
                    </Card.Title>
                    <Card.Text className="text-muted text-center">
                      {beach.description}
                    </Card.Text>
                    <div>
                      <h6>Location:</h6>
                      <p>{beach.location}</p>
                    </div>
                    <div>
                      <h6>Attractions:</h6>
                      <ul>
                        {beach.attractions.map((attraction, i) => (
                          <li key={i}>{attraction}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h6>Facilities:</h6>
                      <ul>
                        {beach.facilities.map((facility, i) => (
                          <li key={i}>{facility}</li>
                        ))}
                      </ul>
                    </div>

                    {/* 📍 Modern Embedded Map */}
                    <div className="mt-3">
                      <h6 className="text-center text-primary">View on Map</h6>
                      <div
                        style={{
                          overflow: "hidden",
                          borderRadius: "0.75rem",
                          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                        }}
                      >
                        <iframe
                          src={getMapUrl(
                            beach.coordinates.lat,
                            beach.coordinates.lng
                          )}
                          width="100%"
                          height="200"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BeachAttractions;
