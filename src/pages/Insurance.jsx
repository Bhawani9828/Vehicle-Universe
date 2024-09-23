import { useEffect } from "react";
import { Link } from "react-router-dom";

function Insurance() {
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
        '<i class="fas fa-chevron-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 1 },
        992: { items: 2 },
        1200: { items: 3 },
      },
    });

    // Add custom class to navigation buttons
    // eslint-disable-next-line no-undef
    $(".owl-nav .owl-prev").addClass("btn");
    // eslint-disable-next-line no-undef
    $(".owl-nav .owl-next").addClass("btn");
  }, []);
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Insurance
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">Insurance</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Car categories Start */}
      <div className="container-fluid categories py-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h1 className="display-5 text-capitalize text-indigo text_shadow mb-3">
              We ensure best insurance services for our clients.
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
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
                    src="img/service-2.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="categories-content rounded-bottom p-4">
                  <h4>Car Insurance</h4>
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
                  <div className="text">
                    Lorem Ipsum is simply dummy text of sit dolor amlet….
                  </div>
                  <Link
                    to="/car-details"
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
                    src="img/service-1.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="categories-content rounded-bottom p-4">
                  <h4>Bike Insurance</h4>
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
                  <div className="text">
                    Lorem Ipsum is simply dummy text of sit dolor amlet….
                  </div>
                  <a
                    href="#"
                    className="btn  rounded-pill d-flex justify-content-center py-3"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
            <div className="categories-item p-4">
              <div className="categories-item-inner">
                <div className="categories-img rounded-top">
                  <img
                    src="img/service-3.jpg"
                    className="img-fluid w-100 rounded-top"
                    alt=""
                  />
                </div>
                <div className="categories-content rounded-bottom p-4">
                  <h4>Bus/truck Insurance</h4>
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
                  <div className="text">
                    Lorem Ipsum is simply dummy text of sit dolor amlet….
                  </div>
                  <a
                    href="#"
                    className="btn  rounded-pill d-flex justify-content-center py-3"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Car categories End */}
    </>
  );
}

export default Insurance;
