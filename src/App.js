import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Calendar from "./components/Calendar";
import BeachAttractions from "./components/BeachAttractions";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Reviews from "./components/Reviews";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/beaches" element={<BeachAttractions />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
