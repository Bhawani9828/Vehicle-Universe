import { useEffect } from "react"
import { Link } from "react-router-dom";


function CategoriesSlider() {

  useEffect(() => {
    // Initialize Owl Carousel
    // eslint-disable-next-line no-undef
    $(".categories-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 1 },
            992: { items: 2 },
            1200: { items: 3 }
        }
    });

    // Add custom class to navigation buttons
    // eslint-disable-next-line no-undef
    $(".owl-nav .owl-prev").addClass("btn");
    // eslint-disable-next-line no-undef
    $(".owl-nav .owl-next").addClass("btn");
}, []);
  return (
    <>
    {/* Car categories Start */}
    <div className="container-fluid categories py-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 800 }}
        >
          <h1 className="display-5 text-capitalize text-indigo text_shadow mb-3">
            Vehicle <span className=" text_shadow">Categories</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo
            expedita asperiores commodi accusantium at cum harum, excepturi, quia
            tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </div>
        <div
          className="categories-carousel owl-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="categories-item p-4">
            <div className="categories-item-inner">
              <div className="categories-img rounded-top">
                <img
                  src="img/car-1.png"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div className="categories-content rounded-bottom p-4">
                <h4>Cars</h4>
                <div className="categories-review mb-4">
                  <div className="me-3">4.5 Review</div>
                  <div className="d-flex justify-content-center text-secondary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-body" />
                  </div>
                </div>
                {/* <div className="mb-4">
                  <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                    $99:00/Day
                  </h4>
                </div> */}
                <div className="row gy-2 gx-0 text-center mb-4">
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-users text-dark" />{" "}
                    <span className="text-body ms-1">4 Seat</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">AT/MT</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-gas-pump text-dark" />{" "}
                    <span className="text-body ms-1">Petrol</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">2015</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-cogs text-dark" />{" "}
                    <span className="text-body ms-1">AUTO</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-road text-dark" />{" "}
                    <span className="text-body ms-1">27K</span>
                  </div>
                </div>
                <Link
                  to='/car-details'
                  className="btn  rounded-pill d-flex justify-content-center py-3"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="categories-item p-4">
            <div className="categories-item-inner">
              <div className="categories-img rounded-top">
                <img
                  src="img/bike-1.webp"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div className="categories-content rounded-bottom p-4">
                <h4>Bike</h4>
                <div className="categories-review mb-4">
                  <div className="me-3">3.5 Review</div>
                  <div className="d-flex justify-content-center text-secondary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-body" />
                  </div>
                </div>
                {/* <div className="mb-4">
                  <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                    $128:00/Day
                  </h4>
                </div> */}
                <div className="row gy-2 gx-0 text-center mb-4">
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-users text-dark" />{" "}
                    <span className="text-body ms-1">2 Seat</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">AT/MT</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-gas-pump text-dark" />{" "}
                    <span className="text-body ms-1">Petrol</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">2024</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-cogs text-dark" />{" "}
                    <span className="text-body ms-1">6 Gears</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-road text-dark" />{" "}
                    <span className="text-body ms-1">2K</span>
                  </div>
                </div>
                <Link
                  to="/bikes"
                  className="btn  rounded-pill d-flex justify-content-center py-3"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="categories-item p-4">
            <div className="categories-item-inner">
              <div className="categories-img rounded-top">
                <img
                  src="img/car&bike.webp"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div className="categories-content rounded-bottom p-4">
                <h4>Car & Bike Accessories</h4>
                <div className="categories-review mb-4">
                  <div className="me-3">3.8 Review</div>
                  <div className="d-flex justify-content-center text-secondary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star text-body" />
                  </div>
                </div>
                {/* <div className="mb-4">
                  <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                    $170:00/Day
                  </h4>
                </div> */}
                <div className="row gy-2 gx-0 text-center mb-4">
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-users text-dark" />{" "}
                    <span className="text-body ms-1">Car Seat </span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1"> Cameras</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-gas-pump text-dark" />{" "}
                    <span className="text-body ms-1">Floor Mats</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1"> Helmets</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-cogs text-dark" />{" "}
                    <span className="text-body ms-1">Bike Locks</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-road text-dark" />{" "}
                    <span className="text-body ms-1">Saddlebags</span>
                  </div>
                </div>
                <Link
                  to="/accessories"
                  className="btn  rounded-pill d-flex justify-content-center py-3"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="categories-item p-4">
            <div className="categories-item-inner">
              <div className="categories-img rounded-top">
                <img
                  src="img/insurance.webp"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div className="categories-content rounded-bottom p-4">
                <h4>Vehicle Insurance</h4>
                <div className="categories-review mb-4">
                  <div className="me-3">4.8 Review</div>
                  <div className="d-flex justify-content-center text-secondary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                {/* <div className="mb-4">
                  <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                    $187:00/Day
                  </h4>
                </div> */}
                <div className="row gy-2 gx-0 text-center mb-4">
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-users text-dark" />{" "}
                    <span className="text-body ms-1">4 Seat</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">AT/MT</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-gas-pump text-dark" />{" "}
                    <span className="text-body ms-1">Petrol</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">2015</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-cogs text-dark" />{" "}
                    <span className="text-body ms-1">AUTO</span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-road text-dark" />{" "}
                    <span className="text-body ms-1">27K</span>
                  </div>
                </div>
                <Link
                  to="/insurance"
                  className="btn  rounded-pill d-flex justify-content-center py-3"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
          <div className="categories-item p-4">
            <div className="categories-item-inner">
              <div className="categories-img rounded-top">
                <img
                  src="img/repair.webp"
                  className="img-fluid w-100 rounded-top"
                  alt=""
                />
              </div>
              <div className="categories-content rounded-bottom p-4">
                <h4>Vehicle Repair</h4>
                <div className="categories-review mb-4">
                  <div className="me-3">4.8 Review</div>
                  <div className="d-flex justify-content-center text-secondary">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                {/* <div className="mb-4">
                  <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                    $187:00/Day
                  </h4>
                </div> */}
                <div className="row gy-2 gx-0 text-center mb-4">
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-users text-dark" />{" "}
                    <span className="text-body ms-1">Engine </span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">Brake </span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-gas-pump text-dark" />{" "}
                    <span className="text-body ms-1">Tire </span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-car text-dark" />{" "}
                    <span className="text-body ms-1">Lights</span>
                  </div>
                  <div className="col-4 border-end border-white">
                    <i className="fa fa-cogs text-dark" />{" "}
                    <span className="text-body ms-1">Body </span>
                  </div>
                  <div className="col-4">
                    <i className="fa fa-road text-dark" />{" "}
                    <span className="text-body ms-1">Filters</span>
                  </div>
                </div>
                <Link
                  to="/repair"
                  className="btn  rounded-pill d-flex justify-content-center py-3"
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Car categories End */}
  </>
  
  )
}

export default CategoriesSlider
