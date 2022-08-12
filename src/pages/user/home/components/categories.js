import Category1 from "../../../../assets/category-1.jpg";
import Category2 from "../../../../assets/category-2.jpg";
import Category3 from "../../../../assets/category-3.jpg";
import Category4 from "../../../../assets/category-4.jpg";

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
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="category-wrap ftco-animate mb-4 d-flex align-items-end">
                  <img src={Category1} alt="Category Image" />
                  <div className="text px-3 py-1 bottom-left">
                    <h2 className="mb-0">
                      <a href="#" className=" text-decoration-none">
                        Fruits
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="category-wrap ftco-animate d-flex align-items-end">
                  <img src={Category2} alt="Category image" />
                  <div className="text px-3 py-1">
                    <h2 className="mb-0">
                      <a href="#" className=" text-decoration-none">
                        Vegetables
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="category-wrap ftco-animate mb-4 d-flex align-items-end">
                  <img src={Category1} alt="Category Image" />
                  <div className="text px-3 py-1 bottom-left">
                    <h2 className="mb-0">
                      <a href="#" className=" text-decoration-none">
                        Fruits
                      </a>
                    </h2>
                  </div>
                </div>
                <div className="category-wrap ftco-animate d-flex align-items-end">
                  <img src={Category2} alt="Category image" />
                  <div className="text px-3 py-1">
                    <h2 className="mb-0">
                      <a href="#" className=" text-decoration-none">
                        Vegetables
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="category-wrap ftco-animate mb-4 d-flex align-items-end">
              <img src={Category3} alt="Category image" />
              <div className="text px-3 py-1">
                <h2 className="mb-0">
                  <a href="#" className=" text-decoration-none">
                    Juices
                  </a>
                </h2>
              </div>
            </div>
            <div className="category-wrap ftco-animate d-flex align-items-end">
              <img src={Category4} alt="category image" />
              <div className="text px-3 py-1">
                <h2 className="mb-0">
                  <a href="#" className=" text-decoration-none">
                    Dried
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesComponent;
