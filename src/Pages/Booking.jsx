import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";

import { providers } from "../Data/Services";

import { addBooking } from "../Redux/Slices/bookingSlice";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Booking = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const provider = providers.find(
    (item) => item.id === Number(id)
  );

  const [selectedSlot, setSelectedSlot] = useState("");

  const [problem, setProblem] = useState("");


  if (!provider) {

    return (
      <h2 className="text-center py-5">
        Provider not found
      </h2>
    );

  }


  function handleBooking() {

    if (!selectedSlot) {

      alert("Please select a time slot");

      return;

    }

    const booking = {

      id: Date.now(),

      providerId: provider.id,

      providerName: provider.name,

      category: provider.category,

      slot: selectedSlot,

      problem: problem,

      charge: provider.charge,

      status: "Confirmed"

    };


    dispatch(addBooking(booking));

    alert("Booking confirmed!");

    navigate("/dashboard");

  }


  return (

    <>

      <Navbar />

      <section className="booking-page">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-7">

              <div className="booking-form-card">

                <h1>
                  Book Your Service
                </h1>

                <p className="text-muted">
                  Book {provider.name}
                </p>

                <hr />

                <h5>
                  Select Time Slot
                </h5>

                <div className="slot-container mb-4">

                  {provider.slots.map((slot, index) => (

                    <button
                      key={index}
                      className={
                        selectedSlot === slot
                          ? "slot-button selected"
                          : "slot-button"
                      }
                      onClick={() =>
                        setSelectedSlot(slot)
                      }
                    >
                      {slot}
                    </button>

                  ))}

                </div>

                <h5>
                  Describe Your Problem
                </h5>

                <textarea
                  className="form-control mb-4"
                  rows="5"
                  placeholder="Example: My room switch is not working..."
                  value={problem}
                  onChange={(e) =>
                    setProblem(e.target.value)
                  }
                />

                <div className="booking-summary">

                  <div>
                    Service

                    <strong>
                      {provider.category}
                    </strong>
                  </div>

                  <div>
                    Professional

                    <strong>
                      {provider.name}
                    </strong>
                  </div>

                  <div>
                    Visit Charge

                    <strong>
                      ₹{provider.charge}
                    </strong>
                  </div>

                </div>

                <button
                  className="btn btn-primary btn-lg w-100 mt-4"
                  onClick={handleBooking}
                >
                  Confirm Booking
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

export default Booking;