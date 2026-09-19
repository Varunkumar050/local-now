import React from "react";
import { Link } from "react-router-dom";

const Provider = ({ provider }) => {

  return (

    <div className="provider-card">

      <div className="d-flex justify-content-between">

        <span
          className={
            provider.status === "Available"
              ? "available-badge"
              : "busy-badge"
          }
        >

          {provider.status === "Available"
            ? "🟢 Available"
            : "🟡 Busy"}

        </span>

        <button className="heart-button">
          ♡
        </button>

      </div>

      <div className="provider-person">

        <div className="provider-image">
          {provider.image}
        </div>

        <div>

          <h5>
            {provider.name}
          </h5>

          <div className="rating">

            ⭐ {provider.rating}

            <span>
              ({provider.reviews})
            </span>

          </div>

        </div>

      </div>

      <div className="provider-info">

        <p>
          📍 {provider.distance}
        </p>

        <p>
          ⏱️ Arrives in {provider.arrival}
        </p>

      </div>

      <div className="provider-price">

        ₹{provider.charge}

        <small>
          Visit Charge
        </small>

      </div>

      <div className="provider-buttons">

        <button className="btn btn-outline-primary">
          Video Call
        </button>

        <Link
          to={`/provider/${provider.id}`}
          className="btn btn-primary"
        >
          Book Now
        </Link>

      </div>

    </div>
  );
};

export default Provider;