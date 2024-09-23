import { useEffect, useState } from "react";
import { LuMousePointerClick } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // Static area data
  const staticAreas = [
    "Jaipur",
    "Bhilwara",
    "Tonk",
    "Ajmer",
    "Hanumangarh",
    "Rajsamand",
    "Sambhar",
    "Udaipur",
    "Kota",
    "Sodala",
  ];

  // State management for area selection
  const [localSelectedArea, setLocalSelectedArea] = useState("");
  const [showAllCities, setShowAllCities] = useState(false);
  const location = useLocation();
  // Modal Timeout
  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      const modalElement = document.getElementById("searchModal");
      if (modalElement) {
        // eslint-disable-next-line no-undef
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 5000); // Open modal after 5 seconds

    return () => clearTimeout(modalTimeout); // Clear timeout if component unmounts
  }, []);

  // Toggle Show All Cities
  const toggleShowAllCities = () => {
    setShowAllCities(!showAllCities);
  };

  // Handle Area Change
  const handleAreaChange = (e) => {
    setLocalSelectedArea(e.target.value);
  };

  // Handle City Click
  const handleCityClick = (city) => {
    console.log("Selected city:", city);
    setLocalSelectedArea(city);
  };

  // Capitalize First Letter Helper
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Static Image Mapping for Cities
  const cityImageMap = {
    jaipur: "/public/img/cityimg/jaipur.png",
    bhilwara: "/public/img/cityimg/Bhilwara.png",
    tonk: "/public/img/cityimg/Tonk.png",
    ajmer: "/public/img/cityimg/Ajmer.png",
    hanumangarh: "/public/img/cityimg/Hanumangarh.png",
    rajsamand: "/public/img/cityimg/Rajsamand.png",
    sambhar: "/public/img/cityimg/Sambhar.png",
    udaipur: "/public/img/cityimg/Udaipur.png",
    kota: "/public/img/cityimg/Vijayanagar.png",
    sodala: "/public/img/cityimg/Sodala.png",
  };
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div className="row gx-0 align-items-center" style={{ height: 45 }}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <Link to="#" className="text-white me-4">
                  <i className="fas fa-map-marker-alt text-sky me-2" />
                  Find A Location
                </Link>
                <Link to="tel:+01234567890" className="text-white me-4">
                  <i className="fas fa-phone-alt text-sky me-2" />
                  +01234567890
                </Link>
                <Link to="mailto:example@gmail.com" className="text-white me-0">
                  <i className="fas fa-envelope text-sky me-2" />
                  Example@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <Link to="#" className="btn  btn-sm-square rounded-circle me-3">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link to="#" className="btn  btn-sm-square rounded-circle me-3">
                  <i className="fab fa-twitter" />
                </Link>
                <Link to="#" className="btn  btn-sm-square rounded-circle me-3">
                  <i className="fab fa-instagram" />
                </Link>
                <Link to="#" className="btn  btn-sm-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0 bg-secondary  custom-border">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className=" p-0">
              <div className="logo_container ">
                <a href="#">
                  <div className="logo_content  d-flex flex-column align-items-start justify-content-center">
                    <div className="p-2 btn">
                      {" "}
                      <img src="/public/img/logo.png" />
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
                <Link
                  to="/allcars"
                  className={`nav-item nav-link ${
                    location.pathname === "/cars" ? "active" : ""
                  }`}
                >
                  Car
                </Link>
                <Link
                  to="/allbikes"
                  className={`nav-item nav-link ${
                    location.pathname === "/allbikes" ? "active" : ""
                  }`}
                >
                  Bike
                </Link>
                <a href="service.html" className="nav-item nav-link">
                  Buy
                </a>
                <Link
                  to="/insurance"
                  className={`nav-item nav-link ${
                    location.pathname === "/insurance" ? "active" : ""
                  }`}
                >
                  Insurance
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Service
                  </a>
                  <div className="dropdown-menu m-0">
                    <Link
                      to="/accessories"
                      className={`dropdown-item ${
                        location.pathname === "/accessories" ? "active" : ""
                      }`}
                    >
                      Accessories
                    </Link>
                    <Link
                      to="/repair"
                      className={`dropdown-item ${
                        location.pathname === "/repair" ? "active" : ""
                      }`}
                    >
                      Repair
                    </Link>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`nav-item nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </div>
              <a
                href="#"
                className=" CustomButton_fill__dT16N btn"
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

      {/* Search Modal */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content image-border rounded-0 bg-secondary">
            <div className="modal-header">
              <h4
                className="modal-title text-white mb-0"
                id="exampleModalLabel"
              >
                Select Area
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ filter: "invert(1)" }}
              />
            </div>
            <div className="modal-body">
              <div className="input-group mx-auto d-flex">
                <div
                  className="d-flex align-items-center"
                  style={{ position: "relative", width: "100%" }}
                >
                  <select
                    className="form-select p-2"
                    value={localSelectedArea}
                    onChange={handleAreaChange}
                    style={{
                      background: "#fff",
                      borderColor: "#fff",
                      width: "100%",
                      paddingRight: "40px",
                    }}
                  >
                    <option value="" disabled>
                      Select Area
                    </option>
                    {staticAreas.map((area, index) => (
                      <option key={index} value={area.toLowerCase()}>
                        {capitalizeFirstLetter(area)}
                      </option>
                    ))}
                  </select>
                  <LuMousePointerClick
                    style={{
                      color: "#5b1188",
                      position: "absolute",
                      right: "10px",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              <div className="bwc__sc-ttnkwg-33 kCsyEE mt-3">
                <ul className="bwc__sc-ttnkwg-15 gZrltM">
                  {staticAreas.map((city, index) => (
                    <li
                      key={index}
                      className="bwc__sc-ttnkwg-18 KUowN"
                      onClick={() => handleCityClick(city.toLowerCase())}
                    >
                      <div className="bwc__sc-ttnkwg-19 hkqhSR">
                        <div className="bwc__sc-ttnkwg-17 gvzyfS">
                          <img
                            src={cityImageMap[city.toLowerCase()]}
                            alt={city}
                            className="bwc__sc-ttnkwg-26 izPSOY"
                          />
                        </div>
                        <span className="bwc__sc-ttnkwg-16 dizuyr">
                          {capitalizeFirstLetter(city)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  className="bwc__sc-ttnkwg-4 Ettpg mt-3"
                  onClick={toggleShowAllCities}
                >
                  <span className="bwc__sc-ttnkwg-5 jhbnqL">
                    {showAllCities ? "Show Less" : "View All Cities"}
                  </span>
                </div>
              </div>

              {showAllCities && (
                <div className="all-cities mt-3">
                  <ul className="bwc__sc-ttnkwg-6 khSHCa">
                    {staticAreas.map((area, index) => (
                      <li className="bwc__sc-ttnkwg-7 gtXMtL" key={index}>
                        <div
                          className="bwc__sc-ttnkwg-8 fsJkBY"
                          onClick={() => handleCityClick(area.toLowerCase())}
                        >
                          {capitalizeFirstLetter(area)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
