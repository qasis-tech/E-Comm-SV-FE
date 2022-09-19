import React, { useEffect, useState } from "react";
import Category1 from "../../../../assets/category-1.jpg";
import axios from "axios";
import { URLS } from "../../../../config/urls.config";

import "../home.styles.scss";
import Loader from "../../../../components/Loader";

const CategoriesComponent = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    setLoader(true);
    axios

      .get(`${URLS.category}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        setLoader(false);
        setCategoryData(res.data);
        console.log("res categoryyyyy", res);
      })
      .catch((err) => {
        setLoader(false);
        console.log("err in Category LIst", err);
      });
  };

  return (
    <section className="ftco-section ftco-category">
      <div className="container">
        <div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">Category</span>
            <h2 className="mb-4">Our Category</h2>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : categoryData?.length ? (
          <div className="d-flex flex-wrap justify-content-center">
            {categoryData.map((items) => {
              return (
                <div
                  key={items._id}
                  className="category-wrap ftco-animate mb-4 d-flex align-items-end"
                  style={{ width: 200, margin: "0 1.5em" }}
                >
                  <img src={Category1} alt="Category Image" />
                  <div className="text px-3 py-1 bottom-left">
                    <h2 className="mb-0">
                      <a href="#" className=" text-decoration-none">
                        {items.label}
                      </a>
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>nodata</p>
        )}
      </div>
    </section>
  );
};

export default CategoriesComponent;
