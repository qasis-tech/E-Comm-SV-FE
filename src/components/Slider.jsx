const SliderComponent = () => {
  return (
    <section id="home-section" class="hero">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" style="height: 872px;">
            <img src="images/bg_1.jpg" class="d-block w-100" alt="..." />
            <div class="row carousel-caption d-none d-md-block  justify-content-center align-items-center">
              <div class="col-md-12 slider-text text-center">
                <h1 class="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                <h2 class="subheading mb-4">
                  We deliver organic vegetables &amp; fruits
                </h2>
                <p>
                  <a href="#" class="btn btn-success">
                    View Details
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item" style="height: 872px;">
            <img src="images/bg_2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <div class="col-md-12 slider-text text-center">
                <h1 class="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                <h2 class="subheading mb-4">
                  We deliver organic vegetables &amp; fruits
                </h2>
                <p>
                  <a href="#" class="btn btn-success">
                    View Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default SliderComponent;
