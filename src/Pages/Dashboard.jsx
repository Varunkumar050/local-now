import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { cancelBooking } from "../Redux/Slices/bookingSlice";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Dashboard = () => {

  const bookings = useSelector(
    (state) => state.bookings.bookings
  );

  const dispatch = useDispatch();


  function handleCancel(id) {

    dispatch(cancelBooking(id));

  }


  return (

    <>

      <Navbar />

      <section className="dashboard-page">

        <div className="container">

          <h1>
            My Bookings
          </h1>

          <p className="text-muted">
            Manage your LocalNow services.
          </p>


          {bookings.length === 0 ? (

            <div className="empty-booking">

              <div>
                📅
              </div>

              <h3>
                No bookings yet
              </h3>

              <p>
                Your upcoming services will appear here.
              </p>

            </div>

          ) : (

            <div className="row g-4 mt-3">

              {bookings.map((booking) => (

                <div
                  className="col-md-6"
                  key={booking.id}
                >

                  <div className="booking-history-card">

                    <span className="available-badge">
                      ✓ {booking.status}
                    </span>

                    <h3>
                      {booking.providerName}
                    </h3>

                    <p>
                      {booking.category}
                    </p>

                    <hr />

                    <p>
                      ⏰ {booking.slot}
                    </p>

                    <p>
                      💰 ₹{booking.charge}
                    </p>

                    {booking.problem && (

                      <p>
                        📝 {booking.problem}
                      </p>

                    )}

                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        handleCancel(booking.id)
                      }
                    >
                      Cancel Booking
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

      <Footer />

    </>

  );
};

export default Dashboard;