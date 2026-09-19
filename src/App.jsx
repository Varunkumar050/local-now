import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";

import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


const App = () => {

  return (

    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<Home />}
      />


      {/* Services */}
      <Route
        path="/services"
        element={<Services />}
      />


      {/* Provider Details */}
      <Route
        path="/provider/:id"
        element={<Services />}
      />


      {/* Booking */}
      <Route
        path="/booking/:id"
        element={<Booking />}
      />


      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />


      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

    </Routes>

  );
};


export default App;