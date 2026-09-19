import React from "react";

const Hero = () => {

  return (

    <section className="hero-section bg-amber-300 mx-2 p-4">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-7">

            <span className="location-badge">
              📍 Serving your locality
            </span>

            <h1 className="hero-title mt-3">

              Find Trusted Professionals
              <br />

              <span>Near You, Anytime.</span>

            </h1>

            <p className="hero-text">

              Book electricians, plumbers, repair services
              and more. See availability, compare prices
              and book instantly.

            </p>

            <div className="search-box">

              <div className="search-location">
                📍
                <span>Sector 12, Noida</span>
              </div>

              <div className="search-input">

                🔍

                <input
                  type="text"
                  placeholder="What do you need help with?"
                />

              </div>

              <button className="search-button">
                Search
              </button>

            </div>

            <div className="popular-services">

              <span>Popular:</span>

              <button>Electrician</button>
              <button>Plumber</button>
              <button>AC Repair</button>
              <button>Mechanic</button>

            </div>

          </div>

          <div className="col-lg-5 text-center hero-person">

            <div className="person-circle">

              <div className="person">
                👨‍🔧
              </div>

            </div>

            <div className="floating-card card-one">
              🟢 <strong>Available Now</strong>
              <small>32 professionals</small>
            </div>

            <div className="floating-card card-two">
              ⚡ <strong>Book in 2 mins</strong>
              <small>Quick & Easy</small>
            </div>

            <div className="floating-card card-three">
              ⭐ <strong>Rated 4.8/5</strong>
              <small>10K+ customers</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;