import React from "react";

import { useParams, Link } from "react-router-dom";

import { providers } from "../data/services";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Services = () => {

  const { id } = useParams();


  const provider = providers.find(
    (item) => item.id === Number(id)
  );


  if (!provider) {

    return (

      <>

        <Navbar />

        <div className="container text-center py-5">

          <h2>
            Professional not found
          </h2>

          <Link
            to="/services"
            className="btn btn-primary mt-3"
          >
            Back to Services
          </Link>

        </div>

        <Footer />

      </>

    );

  }


  return (

    <>

      <Navbar />

      <section className="details-page">

        <div className="container">

          <div className="row g-4">

            <div className="col-lg-8">

              <div className="profile-card">

                <div className="profile-top">

                  <div className="big-provider-image">
                    {provider.image}
                  </div>

                  <div>

                    <span className="available-badge">
                      🟢 {provider.status}
                    </span>

                    <h1>
                      {provider.name}
                    </h1>

                    <p>
                      {provider.category}
                    </p>

                    <div className="rating">

                      ⭐ {provider.rating}

                      <span>
                        ({provider.reviews} reviews)
                      </span>

                    </div>

                  </div>

                </div>

                <hr />

                <div className="row">

                  <div className="col-md-4">

                    <strong>
                      📍 Distance
                    </strong>

                    <p>
                      {provider.distance}
                    </p>

                  </div>

                  <div className="col-md-4">

                    <strong>
                      🧑‍🔧 Experience
                    </strong>

                    <p>
                      {provider.experience}
                    </p>

                  </div>

                  <div className="col-md-4">

                    <strong>
                      ⏱ Arrival
                    </strong>

                    <p>
                      {provider.arrival}
                    </p>

                  </div>

                </div>

              </div>


              <div className="profile-card mt-4">

                <h3>
                  Services Offered
                </h3>

                <div className="service-tags">

                  {provider.services.map(
                    (service, index) => (

                      <span key={index}>
                        ✓ {service}
                      </span>

                    )
                  )}

                </div>

              </div>


              <div className="profile-card mt-4">

                <h3>
                  Available Time Slots
                </h3>

                <div className="slot-container">

                  {provider.slots.map(
                    (slot, index) => (

                      <button
                        className="slot-button"
                        key={index}
                      >
                        {slot}
                      </button>

                    )
                  )}

                </div>

              </div>

            </div>


            <div className="col-lg-4">

              <div className="booking-card">

                <h3>
                  Book Service
                </h3>

                <p>
                  Visit charge
                </p>

                <h2>
                  ₹{provider.charge}
                </h2>

                <small>
                  Final price may vary depending
                  on the service.
                </small>

                <Link
                  to={`/booking/${provider.id}`}
                  className="btn btn-primary w-100 mt-4"
                >
                  Book Now
                </Link>

                <button
                  className="btn btn-outline-primary w-100 mt-2"
                >
                  📹 Video Consultation
                </button>

                <button
                  className="btn btn-outline-dark w-100 mt-2"
                >
                  📞 Call Professional
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );
};

export default Services;