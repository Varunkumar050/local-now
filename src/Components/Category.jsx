import React from "react";
import { categories } from "../Data/Services";

const Category = () => {
  return (
    <section className="categories-section">

      <div className="container">

        <div className="section-box">

          <h3 className="section-title">
            What do you need?
          </h3>

          <div className="row g-3">

            {categories.map((category) => (

              <div
                className="col-6 col-md-4 col-lg"
                key={category.id}
              >

                <div className={`category-card ${category.color}`}>

                  <div className="category-icon">
                    {category.icon}
                  </div>

                  <h6>
                    {category.name}
                  </h6>

                </div>

              </div>

            ))}

            <div className="col-6 col-md-4 col-lg">

              <div className="category-card">

                <div className="category-icon">
                  ⋮⋮
                </div>

                <h6>
                  View All
                </h6>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Category;