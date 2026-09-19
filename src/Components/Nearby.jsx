import React from "react";

import { providers } from "../data/services";

import Provider from "./Provider";
import Mapsection from "./Mapsection";

const Nearby = () => {

  return (

    <section className="nearby-section">

      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="section-heading">
            Available Near You ⚡
          </h2>

          <button className="view-all">
            View All →
          </button>

        </div>

        <div className="row g-4">

          <div className="col-lg-7">

            <div className="row g-3">

              {providers.map((provider) => (

                <div
                  className="col-md-6"
                  key={provider.id}
                >

                  <Provider
                    provider={provider}
                  />

                </div>

              ))}

            </div>

          </div>

          <div className="col-lg-5">

            <Mapsection />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Nearby;