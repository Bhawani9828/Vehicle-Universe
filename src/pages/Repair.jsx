import { Link } from "react-router-dom"


function Repair() {
  return (
    <>
    {/* Header Start */}
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h4
          className="text-white display-4 mb-4 wow fadeInDown"
          data-wow-delay="0.1s"
        >
          Our Services
        </h4>
        <ol
          className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <li className="breadcrumb-item">
            <Link to="/cars">Home</Link>
          </li>
          
          <li className="breadcrumb-item active text-primary">Repair</li>
        </ol>
      </div>
    </div>
    {/* Header End */}

    <div className="container-xxl service mt-5 py-5">
  <div className="container">
    <div
      className="text-center wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp"
      }}
    >
  
      <h1 className="display-5 text-capitalize text-indigo text_shadow mb-3">VehicleUniverse Services</h1>
    </div>
    <div
      className="row g-4 wow fadeInUp"
      data-wow-delay="0.3s"
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "fadeInUp"
      }}
    >
      <div className="col-lg-4">
        <div className="nav w-100 nav-pills me-4">
          <button
            className="nav-link w-100 btn d-flex align-items-center text-start p-4 mb-4 active"
            data-bs-toggle="pill"
            data-bs-target="#tab-pane-1"
            type="button"
          >
            <i className="fa fa-car-side fa-2x me-3" />
            <h4 className="m-0 text-white">Diagnostic Test</h4>
          </button>
          <button
            className="nav-link w-100 btn d-flex align-items-center text-start p-4 mb-4"
            data-bs-toggle="pill"
            data-bs-target="#tab-pane-2"
            type="button"
          >
            <i className="fa fa-car fa-2x me-3" />
            <h4 className="m-0 text-white">Engine Servicing</h4>
          </button>
          <button
            className="nav-link btn w-100 d-flex align-items-center text-start p-4 mb-4"
            data-bs-toggle="pill"
            data-bs-target="#tab-pane-3"
            type="button"
          >
            <i className="fa fa-cog fa-2x me-3" />
            <h4 className="m-0 text-white">Tires Replacement</h4>
          </button>
          <button
            className="nav-link btn  w-100 d-flex align-items-center text-start p-4 mb-0"
            data-bs-toggle="pill"
            data-bs-target="#tab-pane-4"
            type="button"
          >
            <i className="fa fa-oil-can fa-2x me-3" />
            <h4 className="m-0 text-white">Oil Changing</h4>
          </button>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="tab-content w-100">
          <div className="tab-pane fade show active" id="tab-pane-1">
            <div className="row g-4">
              <div className="col-md-6" style={{ minHeight: 350 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/repair-1.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="mb-3">
                  15 Years Of Experience In Auto Servicing
                </h3>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Quality Servicing
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Expert Workers
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Modern Equipment
                </p>
                <button type="button" className="btn  py-3 px-5 mt-3">
                  Read More
                  <i className="fa fa-arrow-right ms-3" />
                </button>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-pane-2">
            <div className="row g-4">
              <div className="col-md-6" style={{ minHeight: 350 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/repair-2.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="mb-3">
                  15 Years Of Experience In Auto Servicing
                </h3>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Quality Servicing
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Expert Workers
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Modern Equipment
                </p>
                <button type="button" className="btn  py-3 px-5 mt-3">
                  Read More
                  <i className="fa fa-arrow-right ms-3" />
                </button>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-pane-3">
            <div className="row g-4">
              <div className="col-md-6" style={{ minHeight: 350 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/repair-3.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="mb-3">
                  15 Years Of Experience In Auto Servicing
                </h3>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Quality Servicing
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Expert Workers
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Modern Equipment
                </p>
                <button type="button" className="btn  py-3 px-5 mt-3">
                  Read More
                  <i className="fa fa-arrow-right ms-3" />
                </button>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-pane-4">
            <div className="row g-4">
              <div className="col-md-6" style={{ minHeight: 350 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="img/repair-4.jpg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="mb-3">
                  15 Years Of Experience In Auto Servicing
                </h3>
                <p className="mb-4">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Quality Servicing
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Expert Workers
                </p>
                <p>
                  <i className="fa fa-check text-success me-3" />
                  Modern Equipment
                </p>
                <button type="button" className="btn  py-3 px-5 mt-3">
                  Read More
                  <i className="fa fa-arrow-right ms-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div
  className="container-fluid bg-secondary booking my-5 wow fadeInUp"
  data-wow-delay="0.1s"
  style={{
    visibility: "visible",
    animationDelay: "0.1s",
    animationName: "fadeInUp"
  }}
>
  <div className="container">
    <div className="row gx-5">
      <div className="col-lg-6 py-5">
        <div className="py-5">
          <h1 className="text-white mb-4">
            Certified and Award Winning Car Repair Service Provider
          </h1>
          <p className="text-white mb-0">
            Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
            ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
            rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
            et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
            dolore sanctus sed et. Takimata takimata sanctus sed.
          </p>
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="bg-secondary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
          data-wow-delay="0.6s"
          style={{
            visibility: "visible",
            animationDelay: "0.6s",
            animationName: "zoomIn"
          }}
        >
          <h1 className="text-white mb-4">Book For A Service</h1>
          <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <input
                  type="email"
                  className="form-control border-0"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12 col-sm-6">
                <select className="form-select border-0" style={{ height: 55 }}>
                  <option selected="">Select A Service</option>
                  <option value={1}>Service 1</option>
                  <option value={2}>Service 2</option>
                  <option value={3}>Service 3</option>
                </select>
              </div>
              <div className="col-12 col-sm-6">
                <div className="date" id="date1" data-target-input="nearest">
                  <input
                    type="text"
                    className="form-control border-0 datetimepicker-input"
                    placeholder="Service Date"
                    data-target="#date1"
                    data-toggle="datetimepicker"
                    style={{ height: 55 }}
                  />
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0"
                  placeholder="Special Request"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn  w-100 py-3" type="submit">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  </>
  )
}

export default Repair
