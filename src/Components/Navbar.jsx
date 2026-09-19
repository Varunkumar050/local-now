import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">

      <div className="container">

        <Link
          className="navbar-brand fw-bold fs-4 text-dark"
          to="/"
        >
          <span className="logo-icon">⚡</span>
          Local<span className="text-primary">Now</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Bookings
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

          </ul>

          <button className="location-btn me-3">
            📍 Sector 12, Noida
          </button>

          <Link
            to="/login"
            className="btn btn-primary rounded-pill px-4"
          >
            Login / Sign Up
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;