import { Link } from "react-router-dom"


function CarHeader() {
  return (
   <>
    {/* Topbar Start */}
    <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <Link to="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-sky me-2" />
                  Find A Location
                </Link>
                <Link to="tel:+01234567890" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-sky me-2" />
                  +01234567890
                </Link>
                <Link to="mailto:example@gmail.com" className="text-muted me-0">
                  <i className="fas fa-envelope text-sky me-2" />
                  Example@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <Link to="#" className="btn btn-sm-square rounded-circle me-3">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" className="btn btn-sm-square rounded-circle me-3">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#" className="btn btn-sm-square rounded-circle me-3">
                  <i className="fab fa-instagram" />
                </Link>
                <Link to="#" className="btn btn-sm-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0 bg-secondary custom-border">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="p-0">
              <div className="logo_container">
                <a href="#">
                  <div className="logo_content d-flex flex-column align-items-start justify-content-center">
                    <div className="p-2 btn">
                      <img src="/public/img/logo.png" alt="Logo" />
                    </div>
                  </div>
                </a>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    New Cars
                  </a>
                  <div className="dropdown-menu m-0">
                    {/* Main Menu Item */}
                    <div className="dropdown-submenu">
                      <Link to="/carprice" className="dropdown-item">
                        Search By Price
                      </Link>
                      {/* Submenu */}
                      <ul className="dropdown_menu">
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            Upto 5 Lakh
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            5 Lakh - 8 Lakh
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            6 Lakh - 10 Lakh
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            8 Lakh - 12 Lakh
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            10 Lakh - 15 Lakh
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Other Menu Item */}
                    <div className="dropdown-submenu">
                      <Link to="/carprice" className="dropdown-item">
                        Popular Brands
                      </Link>
                      {/* Submenu */}
                      <ul className="dropdown_menu">
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            Maruti Suzuki
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            Tata
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            Hyundai
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            Toyota
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            Mahindra
                          </Link>
                        </li>
                        <li>
                          <Link to="/carprice" className="dropdown-item">
                            View All Brands
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <Link to="/upcomingcars" className="nav-item dropdown-item ">
                      Upcoming Cars
                    </Link>

                    <Link to="/carprice" className="nav-item dropdown-item ">
                      Electric Cars
                    </Link>

                    <div className="dropdown-submenu">
                      <Link to="/newcarlaunch" className="dropdown-item">
                        New Car Launches
                      </Link>
                      {/* Submenu */}
                      <ul className="dropdown_menu">
                        <li>
                          <Link to="/newcarlaunch" className="dropdown-item">
                            MG Windsor EV
                          </Link>
                        </li>
                        <li>
                          <Link to="/newcarlaunch" className="dropdown-item">
                            Hyundai Alcazar
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown-submenu">
                      <Link to="/newcarlaunch" className="dropdown-item">
                        Popular Cars
                      </Link>
                      {/* Submenu */}
                      <ul className="dropdown_menu">
                        <li>
                          <Link to="/newcarlaunch" className="dropdown-item">
                            Tata Curvv
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Used Cars
                  </a>
                  <div className="dropdown-menu m-0">
                    {/* Main Menu Item */}
                    <div className="dropdown-submenu">
                      <Link to="/usecarbycity" className="dropdown-item">
                        By City
                      </Link>
                      {/* Submenu */}
                      <ul className="dropdown_menu">
                        <li>
                          <Link to="/usecarbycity" className="dropdown-item">
                            Jaipur
                          </Link>
                        </li>
                        <li>
                          <Link to="/usecarbycity" className="dropdown-item">
                            Delhi NCR
                          </Link>
                        </li>
                        <li>
                          <Link to="/usecarbycity" className="dropdown-item">
                            Mumbai
                          </Link>
                        </li>
                        <li>
                          <Link to="/usecarbycity" className="dropdown-item">
                            Bangalore
                          </Link>
                        </li>
                        <li>
                          <Link to="/usecarbycity" className="dropdown-item">
                            Hyderabad
                          </Link>
                        </li>
                        <li>
                          <Link to="/usecarbycity" className="dropdown-item">
                            All Cities
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Other Menu Item */}
                    <div className="dropdown-submenu">
                      <Link to="/car-details" className="dropdown-item">
                        By Model
                      </Link>
                      {/* Submenu */}
                      <ul className="dropdown_menu">
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Maruti Suzuki Swift
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Maruti Suzuki Wagon R
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Honda City
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Hyundai Creta
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Maruti Suzuki Baleno
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            All Models
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Other Menu Item */}
                    <div className="dropdown-submenu">
                      <Link to="/car-details" className="dropdown-item">
                        By Brand
                      </Link>
                      {/* Submenu */}
                      <ul className="dropdown_menu">
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Maruti Suzuki
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Hyundai
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Volkswagen
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Tata
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            Toyota
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-details" className="dropdown-item">
                            All Models
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link to="/allcars" className="nav-item dropdown-item ">
                      Buy Used Cars
                    </Link>
                    <Link to="/allcars" className="nav-item dropdown-item ">
                      Explore Used Cars
                    </Link>
                    <Link to="/allcars" className="nav-item dropdown-item ">
                      CarWale abSure
                    </Link>
                  </div>
                </div>
                <Link
                  to="/repair"
                  className={`nav-item nav-link ${
                    location.pathname === "/repair" ? "active" : ""
                  }`}
                >
                  Car Service
                </Link>
                <Link
                  to="/insurance"
                  className={`nav-item nav-link ${
                    location.pathname === "/insurance" ? "active" : ""
                  }`}
                >
                  Car Insurance
                </Link>
                <Link
                  to="/carloan"
                  className={`nav-item nav-link ${
                    location.pathname === "/carloan" ? "active" : ""
                  }`}
                >
                  Car Loan
                </Link>

                <Link
                  to="/carsnews"
                  className={`nav-item nav-link ${
                    location.pathname === "/carsnews" ? "active" : ""
                  }`}
                >
                  Car News
                </Link>
              </div>
              <a
                href="#"
                className="CustomButton_fill__dT16N btn"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                style={{ padding: "0.5em 1.5em", fontSize: "17px" }}
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
   </>
  )
}

export default CarHeader
