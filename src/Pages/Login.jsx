import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  function handleLogin(e) {

    e.preventDefault();

    console.log("Email:", email);

    console.log("Password:", password);

    alert("Login successful!");

    navigate("/dashboard");

  }


  return (

    <>

      <Navbar />

      <section className="login-page">

        <div className="login-card">

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to manage your LocalNow bookings.
          </p>

          <form onSubmit={handleLogin}>

            <label>
              Email
            </label>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <label>
              Password
            </label>

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>

          </form>

        </div>

      </section>

      <Footer />

    </>

  );
};

export default Login;