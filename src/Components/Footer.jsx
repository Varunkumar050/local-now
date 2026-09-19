import React from "react";

const Footer = () => {

  return (

    <footer className="bg-dark text-white py-5">

      <div className="container">

        <div className="row">

          <div className="col-md-4">

            <h3>
              ⚡ Local<span className="text-primary">Now</span>
            </h3>

            <p className="text-secondary">
              Find trusted local professionals
              whenever you need them.
            </p>

          </div>

          <div className="col-md-4">

            <h5>
              Services
            </h5>

            <p>Electrician</p>
            <p>Plumber</p>
            <p>AC Repair</p>
            <p>Mechanic</p>

          </div>

          <div className="col-md-4">

            <h5>
              Contact
            </h5>

            <p>📍 Your Locality</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ support@localnow.com</p>

          </div>

        </div>

        <hr />

        <p className="text-center text-secondary mb-0">
          © 2026 LocalNow. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;