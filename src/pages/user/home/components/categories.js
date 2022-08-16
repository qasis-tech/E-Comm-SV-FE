import React from "react";
import Category1 from "../../../../assets/category-1.jpg";

const CategoriesComponent = () => {
  return (
    <section className="ftco-section ftco-category pt-5 pb-5 mt-5">
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Category</span>
            <h2 className="mb-4">Our Category</h2>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((items, index) => {
            return (
              <div
                key={index}
                className="category-wrap ftco-animate mb-4 d-flex align-items-end"
                style={{ width: 200, margin: "0 1.5em" }}
              >
                <img src={Category1} alt="Category Image" />
                <div className="text px-3 py-1 bottom-left">
                  <h2 className="mb-0">
                    <a href="#" className=" text-decoration-none">
                      Fruits
                    </a>
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesComponent;
