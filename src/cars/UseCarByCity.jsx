import { Link } from "react-router-dom";
import CarHeader from "../components/CarHeader";

function UseCarByCity() {
  return (
    <>
      <CarHeader />

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Used Cars
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/cars">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">Used Cars</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
      <section className="filter-menu-bar use_car_drop  ">
        <div className="container">
          <div className="">
            <div className="mainNav">
              <ul className="nav pull-right">
                <li>
                  <div className="filter-drop-down ">
                    <div className="show">
                      <span
                        id="selectlistarrow1"
                        className="nav-item arrow-down "
                      
                    data-bs-toggle="dropdown"
                      >
                        Price
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist1"
                          className="widgetBox dropdown-list"
                        >
                          <ul className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input
                                  type="radio"
                                  className="pull-left"
                                  defaultValue="0-1"
                                  id="carrate_0-1"
                                  data-testing-id="carrate_0-1"
                                  name="budget"
                                  data-value="0-1 Lakh"
                                />
                                <span>Below 1 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input
                                  type="radio"
                                  className="pull-left"
                                  defaultValue="1-2"
                                  id="carrate_1-2"
                                  data-testing-id="carrate_1-2"
                                  name="budget"
                                  data-value="1-2 Lakh"
                                />
                                <span>1 to 2 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>2 to 3 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>3 to 4 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>4 to 5 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>5 to 6 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>6 to 8 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>8 to 10 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>10 to 30 Lakh</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>Above 30 Lakh</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="filter-drop-down">
                    <div className="show">
                      <span
                        id="selectlistarrow2"
                        className="nav-item arrow-down"
                      >
                        Fuel
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist2"
                          className="widgetBox dropdown-list"
                        >
                          <ul className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Petrol</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input
                                  type="checkbox"
                                  id="fuel_Diesel"
                                  className="pull-left"
                                />
                                <span>Diesel</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>LPG</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>CNG</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Electric</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Hybrid</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="filter-drop-down">
                    <div className="show">
                      <span
                        id="selectlistarrow3"
                        className="nav-item arrow-down"
                      >
                        KMs
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist3"
                          className="widgetBox dropdown-list"
                        >
                          <ul id="kms" className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>Up to 5000</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>5000-15000</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>15000-30000</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>30000-50000</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>50000+</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="filter-drop-down">
                    <div className="show">
                      <span
                        id="selectlistarrow4"
                        className="nav-item arrow-down"
                      >
                        Age
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist4"
                          className="widgetBox dropdown-list"
                        >
                          <ul id="age" className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>0-2 years</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>2-4 years</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>4-6 years</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>6-8 years</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="radio" className="pull-left" />
                                <span>8+ years</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="filter-drop-down">
                    <div className="show">
                      <span
                        id="selectlistarrow5"
                        className="nav-item arrow-down"
                      >
                        Transmission
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist5"
                          className="widgetBox dropdown-list"
                        >
                          <ul id="" className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Manual</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Automatic</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Semi Automatic</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="filter-drop-down">
                    <div className="show">
                      <span
                        id="selectlistarrow6"
                        className="nav-item arrow-down"
                      >
                        Body Type
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist6"
                          className="widgetBox dropdown-list selectlist6-cls"
                        >
                          <ul id="bodytype" className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Hatchback</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Sedan</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>SUV/MPV/MUV</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Van/Minivan</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div />
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="filter-drop-down">
                    <div className="show">
                      <span
                        id="selectlistarrow8"
                        className="nav-item arrow-down"
                      >
                        No. of Owners
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist8"
                          className="widgetBox dropdown-list"
                        >
                          <ul id="fuel_types" className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>1</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>2</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>3</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>4 &amp; more</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="filter-drop-down">
                    <div className="show">
                      <span
                        id="selectlistarrow9"
                        className="nav-item arrow-down"
                      >
                        Seller Type
                        <span />
                      </span>
                      <div
                        className="dropdown-list-container hide"
                       
                      >
                        <div className="triangle-up" />
                        <div
                          id="selectlist9"
                          className="widgetBox dropdown-list"
                        >
                          <ul id="seller_types" className="feature-list">
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Dealer Partners</span>
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-list-label">
                                <input type="checkbox" className="pull-left" />
                                <span>Direct Owner</span>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mb-lg-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="Re_left pull-left">
                <form id="refinery">
                  <div className="inside_wrapper">
                    <div className="fltrtitle_fst">
                      REFINE RESULTS
                      <div
                        title="Reset Your Search"
                        className="reset cursor-pointer"
                      >
                        Reset
                      </div>
                    </div>

                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className="ct_fltrtitle refDownArrow ref1">
                              City
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div
                              id="city-filter"
                              style={{ position: "relative" }}
                            >
                              <input
                                type="text"
                                id="city-search"
                                className="city-search-bar"
                              />
                              <div className="search-icon">
                                <svg
                                  width={16}
                                  height={16}
                                  className=""
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <defs>
                                    <path
                                      d="M6.5 13A6.5 6.5 0 1 1 13 6.5 6.42 6.42 0 0 1 6.5 13zm0-12a5.5 5.5 0 1 0 0 11A5.43 5.43 0 0 0 12 6.5 5.51 5.51 0 0 0 6.5 1zm9.13 14.64a.54.54 0 0 0 0-.78l-4.14-4.14s-.19.22-.41.43c-.22.21-.37.35-.37.35l4.14 4.14a.56.56 0 0 0 .78 0z"
                                      id="mt1pjnadqa"
                                    />
                                  </defs>
                                  <g
                                    transform="translate(.1 .1)"
                                    fill="none"
                                    fillRule="evenodd"
                                  >
                                    <mask id="jplseo97xb" fill="#fff">
                                      <use xlinkHref="#mt1pjnadqa" />
                                    </mask>
                                    <use
                                      fill="#56586A"
                                      fillRule="nonzero"
                                      xlinkHref="#mt1pjnadqa"
                                    />
                                    <g mask="url(#jplseo97xb)" fill="#56586A">
                                      <path />
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              <div
                                id="search-results"
                                style={{ display: "none" }}
                              />
                              <div className="popular-cities-container">
                                <p className="popular-cities-heading">
                                  POPULAR CITIES
                                </p>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-1"
                                    type="radio"
                                    defaultValue={1}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Mumbai</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-10"
                                    type="radio"
                                    defaultValue={10}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Delhi</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-12"
                                    type="radio"
                                    defaultValue={12}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Pune</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-2"
                                    type="radio"
                                    defaultValue={2}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Bangalore</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-176"
                                    type="radio"
                                    defaultValue={176}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Chennai</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-105"
                                    type="radio"
                                    defaultValue={105}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Hyderabad</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-198"
                                    type="radio"
                                    defaultValue={198}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Kolkata</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-128"
                                    type="radio"
                                    defaultValue={128}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Ahmedabad</span>
                                </label>
                                <label className="city-pill-container">
                                  <input
                                    data-testing-id="city-pill-177"
                                    type="radio"
                                    defaultValue={177}
                                    name="city"
                                    className="city-radio-group"
                                  />
                                  <span className="city-pill">Coimbatore</span>
                                </label>
                              </div>
                              <input
                                className="abb"
                                id="carrate-max"
                                type="hidden"
                                defaultValue=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <div
                              className="ct_fltrtitle refUpArrow ref2"
                              id="nbotlist"
                            >
                              Make
                              <span className="pull-right" id="nbot_shhd">
                                &nbsp;
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div>
                              <ul
                                className="feature-list mklist-cls p-0"
                                id="popular-make-list"
                                style={{ display: "block", margin: 0 }}
                              >
                                <span className="sub-section-heading">
                                  POPULAR BRANDS
                                </span>
                                <li
                                  className="hvchild make-list"
                                  data-count={1911}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Maruti Suzuki"
                                      defaultValue={10}
                                      data-value="Maruti Suzuki"
                                      name="makes"
                                      data-testing-id="filter-popular-make-10"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-maruti-suzuki"
                                    >
                                      Maruti Suzuki
                                      <span className="make-count">(1911)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={1363}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Hyundai"
                                      defaultValue={8}
                                      data-value="Hyundai"
                                      name="makes"
                                      data-testing-id="filter-popular-make-8"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-hyundai"
                                    >
                                      Hyundai
                                      <span className="make-count">(1363)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={789}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Honda"
                                      defaultValue={7}
                                      data-value="Honda"
                                      name="makes"
                                      data-testing-id="filter-popular-make-7"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-honda"
                                    >
                                      Honda
                                      <span className="make-count">(789)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={752}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Mercedes-Benz"
                                      defaultValue={11}
                                      data-value="Mercedes-Benz"
                                      name="makes"
                                      data-testing-id="filter-popular-make-11"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-mercedes-benz"
                                    >
                                      Mercedes-Benz
                                      <span className="make-count">(752)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={658}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Toyota"
                                      defaultValue={17}
                                      data-value="Toyota"
                                      name="makes"
                                      data-testing-id="filter-popular-make-17"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-toyota"
                                    >
                                      Toyota
                                      <span className="make-count">(658)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={461}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Tata"
                                      defaultValue={16}
                                      data-value="Tata"
                                      name="makes"
                                      data-testing-id="filter-popular-make-16"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-tata"
                                    >
                                      Tata
                                      <span className="make-count">(461)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={378}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Mahindra"
                                      defaultValue={9}
                                      data-value="Mahindra"
                                      name="makes"
                                      data-testing-id="filter-popular-make-9"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-mahindra"
                                    >
                                      Mahindra
                                      <span className="make-count">(378)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={269}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Volkswagen"
                                      defaultValue={20}
                                      data-value="Volkswagen"
                                      name="makes"
                                      data-testing-id="filter-popular-make-20"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-volkswagen"
                                    >
                                      Volkswagen
                                      <span className="make-count">(269)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={194}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Ford"
                                      defaultValue={5}
                                      data-value="Ford"
                                      name="makes"
                                      data-testing-id="filter-popular-make-5"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-ford"
                                    >
                                      Ford
                                      <span className="make-count">(194)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                                <hr id="li-horizontal-line" />
                                <li
                                  className="hvchild make-list"
                                  data-count={189}
                                >
                                  <div className="spclass">
                                    <span className="rcircle" />
                                    <input
                                      className="pull-right muklia"
                                      type="checkbox"
                                      id="Renault"
                                      defaultValue={45}
                                      data-value="Renault"
                                      name="makes"
                                      data-testing-id="filter-popular-make-45"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="filter-by-make-renault"
                                    >
                                      Renault
                                      <span className="make-count">(189)</span>
                                    </span>
                                    <div className="clear" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <div
                              className="ct_fltrtitle refUpArrow ref3"
                              id="nbvtlist"
                            >
                              Colours
                              <span className="pull-right" id="nbvt_shhd">
                                &nbsp;
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div
                              className="color-filters-list-container"
                              id="color-filter"
                              style={{}}
                            >
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-1"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={1}
                                  data-value="Beige"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#F5F5DC" }}
                                />
                                <div className="list-item color-name">
                                  Beige
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-2"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={2}
                                  data-value="Black"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#000000" }}
                                />
                                <div className="list-item color-name">
                                  Black
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-3"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={3}
                                  data-value="Blue"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#0000FF" }}
                                />
                                <div className="list-item color-name">Blue</div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-4"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={4}
                                  data-value="Brown"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#A52A2A" }}
                                />
                                <div className="list-item color-name">
                                  Brown
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-5"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={5}
                                  data-value="Gold / Yellow"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#FFD700" }}
                                />
                                <div className="list-item color-name">
                                  Gold / Yellow
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-6"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={6}
                                  data-value="Green"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#008000" }}
                                />
                                <div className="list-item color-name">
                                  Green
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-7"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={7}
                                  data-value="Grey"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#808080" }}
                                />
                                <div className="list-item color-name">Grey</div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-8"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={8}
                                  data-value="Maroon"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#800000" }}
                                />
                                <div className="list-item color-name">
                                  Maroon
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-9"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={9}
                                  data-value="Purple"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#800080" }}
                                />
                                <div className="list-item color-name">
                                  Purple
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-10"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={10}
                                  data-value="Red"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#FF0000" }}
                                />
                                <div className="list-item color-name">Red</div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-11"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={11}
                                  data-value="Silver"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#C0C0C0" }}
                                />
                                <div className="list-item color-name">
                                  Silver
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-12"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={12}
                                  data-value="White"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#FFFFFF" }}
                                />
                                <div className="list-item color-name">
                                  White
                                </div>
                              </label>
                              <label
                                className="color-list-item"
                                data-testing-id="color-list-item-13"
                              >
                                <input
                                  type="checkbox"
                                  name="color"
                                  className="list-item color-checkbox"
                                  defaultValue={13}
                                  data-value="Others"
                                />
                                <div
                                  className="list-item color-circle"
                                  style={{ backgroundColor: "#FFFFFF" }}
                                />
                                <div className="list-item color-name">
                                  Others
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <div
                              className="ct_fltrtitle refUpArrow ref4"
                              id="nbftlist"
                            >
                              FUEL TYPE
                              <span className="pull-right" id="nbft_shhd">
                                &nbsp;
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div id="nbft_id" className="ct_leftbar">
                              <div className="fuel_list">
                                <ul>
                                  <li>
                                    <label>
                                      <span className="label_p">Petrol</span>
                                      <input
                                        type="checkbox"
                                        name="Petrol"
                                        id="fuel_petrol"
                                        defaultValue={1}
                                      />
                                      <span />
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <span className="label_p">Diesel</span>
                                      <input
                                        type="checkbox"
                                        name="Diesel"
                                        id="fuel_diesel"
                                        defaultValue={2}
                                      />
                                      <span />
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <span className="label_p">CNG</span>
                                      <input
                                        type="checkbox"
                                        name="CNG"
                                        id="fuel_cng"
                                        defaultValue={3}
                                      />
                                      <span />
                                    </label>
                                  </li>
                                  <li>
                                    <label>
                                      <span className="label_p">Electric</span>
                                      <input
                                        type="checkbox"
                                        name="Electric"
                                        id="fuel_electric"
                                        defaultValue={5}
                                      />
                                      <span />
                                    </label>
                                  </li>
                                </ul>
                              </div>
                              <div className="clr" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <div
                              className="ct_fltrtitle refUpArrow ref5"
                              id="nbotlist"
                            >
                              TRANSMISSION TYPE{" "}
                              <span className="pull-right" id="nbot_shhd">
                                &nbsp;
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div
                              id="nbot_id"
                              className="ct_leftbar other_features"
                            >
                              <ul className="features">
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="Manual"
                                      id="transmission_manual"
                                      defaultValue={2}
                                    />
                                    <span className="pull-left">Manual</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="Automatic"
                                      id="transmission_automatic"
                                      defaultValue={1}
                                    />
                                    <span className="pull-left">Automatic</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      id="transmission_semi_automatic"
                                      defaultValue={5}
                                    />
                                    <span className="pull-left">
                                      Semi Automatic
                                    </span>
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            <div
                              className="ct_fltrtitle refUpArrow ref6"
                              id="nbotlist"
                            >
                              SEATING CAPACITY{" "}
                              <span className="pull-right" id="nbot_shhd">
                                &nbsp;
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div
                              id="nbot_id"
                              className="ct_leftbar other_features"
                            >
                              <ul className="features">
                                <li data-testing-id="0-5-seater">
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="seating_cap[]"
                                      id="seating_cap_l5"
                                      defaultValue="0-5"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="0-5-seater-checkbox"
                                    >
                                      &lt;5 Seater
                                    </span>
                                  </label>
                                </li>
                                <li className="5-seater">
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="seating_cap[]"
                                      id="seating_cap_5"
                                      defaultValue="5-5"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="5-seater-checkbox"
                                    >
                                      5 Seater
                                    </span>
                                  </label>
                                </li>
                                <li data-testing-id="6-7-seater">
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="seating_cap[]"
                                      id="seating_cap_67"
                                      defaultValue="6-7"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="6-7-seater-checkbox"
                                    >
                                      6/7 Seater
                                    </span>
                                  </label>
                                </li>
                                <li data-testing-id="8-plus-seater">
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="seating_cap[]"
                                      id="seating_cap_8+"
                                      defaultValue="8-80"
                                    />
                                    <span
                                      className="pull-left"
                                      data-testing-id="8-plus-seater-checkbox"
                                    >
                                      8+ Seater
                                    </span>
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            <div
                              className="ct_fltrtitle refUpArrow ref7"
                              id="nbotlist"
                            >
                              OTHER FEATURES{" "}
                              <span className="pull-right" id="nbot_shhd">
                                &nbsp;
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingSeven"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div
                              id="nbot_id"
                              className="ct_leftbar other_features"
                            >
                              <ul className="features">
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_sunroof"
                                      defaultValue={113}
                                    />
                                    <span className="pull-left">Sunroof</span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_rear_ac"
                                      defaultValue={507}
                                    />
                                    <span className="pull-left">
                                      Rear AC Vents
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_cruise_control"
                                      defaultValue={210}
                                    />
                                    <span className="pull-left">
                                      Cruise Controls
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_alloy_wheels"
                                      defaultValue={201}
                                    />
                                    <span className="pull-left">
                                      Alloy Wheels
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_four_wheel_drive"
                                      defaultValue={280}
                                    />
                                    <span className="pull-left">
                                      Four Wheel Drive
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_touchscreen_display"
                                      defaultValue={316}
                                    />
                                    <span className="pull-left">
                                      Touchscreen Display
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_music_system"
                                      defaultValue={92}
                                    />
                                    <span className="pull-left">
                                      Music System
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_locking"
                                      defaultValue={149}
                                    />
                                    <span className="pull-left">
                                      Central Locking
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_hill_hold_control"
                                      defaultValue={60}
                                    />
                                    <span className="pull-left">
                                      Hill Hold Control
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_reverse_camera"
                                      defaultValue={227}
                                    />
                                    <span className="pull-left">
                                      Reverse Camera
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_ventilates_seats"
                                      defaultValue={302}
                                    />
                                    <span className="pull-left">
                                      Ventilated Seats
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      className="mukli pull-left brands"
                                      type="checkbox"
                                      name="fetatures[]"
                                      id="fetatures_wireless_charging"
                                      defaultValue={711}
                                    />
                                    <span className="pull-left">
                                      Wireless Charging
                                    </span>
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="">
                <div className="row gy-4 ">
                  <div className="col-lg-6">
                    <ul>
                      <li className=" blk_grid_new  carlistblk_new carlistblk card-list-container  featured-border content-box">
                        <div>
                          <div className=" blk_grid_img_new">
                            <span className="tag featured__tag font-muli">
                              Featured
                            </span>
                            <div id="imgdivfl-D4947631">
                              <span>
                                <img
                                  className="overflow-hidden card-list-container blk_grid_img_new--non-absure swiper-gallery-border w-100"
                                  src="https://imgd-ct.aeplcdn.com/640X480/cw/ucp/stockApiImg/CYXWPAB_sjyy816t_1_44801254.jpg?q=80"
                                  alt="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                  title="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                />
                              </span>
                            </div>
                            <div
                              className="slidearow"
                              id="slidearow_fl-D4947631"
                              style={{ display: "none" }}
                            >
                              <div className="lft_ARW" />
                              <div className="right_ARW" />
                            </div>
                            <div className="certif_out ">
                              <div className="certi_R">
                                <div className="gradient-container ">
                                  <div className="gradient-img default-logo-background">
                                    <img
                                      src="https://images-cf.cartradeexchange.com/thumbs/p-certprog-ver1/certprogs_images/royalcarsmumbai_1695302314002.jpg"
                                      className="dealer-logo"
                                      alt="Logo"
                                      title="Logo"
                                    />
                                  </div>
                                </div>
                                <link
                                  rel="stylesheet"
                                  href="https://stc.aeplcdn.com/staticminv2/css/partials/gradientimage-617c79c127.css"
                                  type="text/css"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          style={{ fontWeight: "bold" }}
                          href="/buy-used-cars/mercedes-benz-e-class-cars-in-mumbai/sjyy816t/?dc=0"
                          className="font-muli"
                        >
                          <div className="grid_cnt_new overflow-hidden  card-detail-block">
                            <div className="details_out p-3 ">
                              <div className="card-title truncate h2heading car-name">
                                <span
                                  className="cardTitle font-muli"
                                  style={{ fontWeight: "bold" }}
                                >
                                  2017 Mercedes-Benz E-Class E 350 d Exclusive
                                  [2017-2019]
                                </span>
                              </div>
                              <div className="links-container">
                                <div className="price_EMI font-muli">
                                  <div
                                    className="cr_prc"
                                    data-testing-id="used-car-price-0"
                                  >
                                    <span className="rupee_font font-muli font_20">
                                      ₹
                                    </span>
                                    34,00,000
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="links-container margin-top-10 mb-3">
                                  <span className="negotiate make-offer-link font-muli">
                                    Make Offer
                                  </span>
                                  <div className="additional-tag-container">
                                    <img
                                      className="additional-tag-icon"
                                      src="https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/6f6f6f/steering.svg?q=80"
                                      alt="additional-tag-icon"
                                      height={16}
                                      width={16}
                                    />
                                    <span className="additional-tag-text font-muli">
                                      Home Test Drive
                                    </span>
                                  </div>
                                </div>
                                <div className="clear" />
                                <div
                                  className="additional-info font-muli mb-3"
                                  data-testing-id="used-car-info-0"
                                >
                                  <span className=" carInfo">
                                    42,000 KMs &nbsp;|&nbsp; Diesel
                                    &nbsp;|&nbsp; Kurla East, Mumbai
                                  </span>
                                  <br />
                                </div>
                              </div>
                              <div className="certiflogos_new chatlst">
                                <div className="cta-button font-muli">
                                  <button className="contact-seller-btn-class one-click flatRed pull-right get-seller-details border-no width-100 cta-border">
                                    CONTACT SELLER{" "}
                                  </button>
                                </div>
                                <div id="fl-contact-seller-container-sjyy816t" />
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li className=" blk_grid_new  carlistblk_new carlistblk card-list-container  featured-border content-box">
                        <div>
                          <div className=" blk_grid_img_new">
                            <span className="tag featured__tag font-muli">
                              Featured
                            </span>
                            <div id="imgdivfl-D4947631">
                              <span>
                                <img
                                  className="overflow-hidden card-list-container blk_grid_img_new--non-absure swiper-gallery-border w-100"
                                  src="https://imgd-ct.aeplcdn.com/640X480/cw/ucp/stockApiImg/CYXWPAB_sjyy816t_1_44801254.jpg?q=80"
                                  alt="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                  title="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                />
                              </span>
                            </div>
                            <div
                              className="slidearow"
                              id="slidearow_fl-D4947631"
                              style={{ display: "none" }}
                            >
                              <div className="lft_ARW" />
                              <div className="right_ARW" />
                            </div>
                            <div className="certif_out ">
                              <div className="certi_R">
                                <div className="gradient-container ">
                                  <div className="gradient-img default-logo-background">
                                    <img
                                      src="https://images-cf.cartradeexchange.com/thumbs/p-certprog-ver1/certprogs_images/royalcarsmumbai_1695302314002.jpg"
                                      className="dealer-logo"
                                      alt="Logo"
                                      title="Logo"
                                    />
                                  </div>
                                </div>
                                <link
                                  rel="stylesheet"
                                  href="https://stc.aeplcdn.com/staticminv2/css/partials/gradientimage-617c79c127.css"
                                  type="text/css"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          style={{ fontWeight: "bold" }}
                          href="/buy-used-cars/mercedes-benz-e-class-cars-in-mumbai/sjyy816t/?dc=0"
                          className="font-muli"
                        >
                          <div className="grid_cnt_new overflow-hidden  card-detail-block">
                            <div className="details_out p-3 ">
                              <div className="card-title truncate h2heading car-name">
                                <span
                                  className="cardTitle font-muli"
                                  style={{ fontWeight: "bold" }}
                                >
                                  2017 Mercedes-Benz E-Class E 350 d Exclusive
                                  [2017-2019]
                                </span>
                              </div>
                              <div className="links-container">
                                <div className="price_EMI font-muli">
                                  <div
                                    className="cr_prc"
                                    data-testing-id="used-car-price-0"
                                  >
                                    <span className="rupee_font font-muli font_20">
                                      ₹
                                    </span>
                                    34,00,000
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="links-container margin-top-10 mb-3">
                                  <span className="negotiate make-offer-link font-muli">
                                    Make Offer
                                  </span>
                                  <div className="additional-tag-container">
                                    <img
                                      className="additional-tag-icon"
                                      src="https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/6f6f6f/steering.svg?q=80"
                                      alt="additional-tag-icon"
                                      height={16}
                                      width={16}
                                    />
                                    <span className="additional-tag-text font-muli">
                                      Home Test Drive
                                    </span>
                                  </div>
                                </div>
                                <div className="clear" />
                                <div
                                  className="additional-info font-muli mb-3"
                                  data-testing-id="used-car-info-0"
                                >
                                  <span className=" carInfo">
                                    42,000 KMs &nbsp;|&nbsp; Diesel
                                    &nbsp;|&nbsp; Kurla East, Mumbai
                                  </span>
                                  <br />
                                </div>
                              </div>
                              <div className="certiflogos_new chatlst">
                                <div className="cta-button font-muli">
                                  <button className="contact-seller-btn-class one-click flatRed pull-right get-seller-details border-no width-100 cta-border">
                                    CONTACT SELLER{" "}
                                  </button>
                                </div>
                                <div id="fl-contact-seller-container-sjyy816t" />
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li className=" blk_grid_new  carlistblk_new carlistblk card-list-container  featured-border content-box">
                        <div>
                          <div className=" blk_grid_img_new">
                            <span className="tag featured__tag font-muli">
                              Featured
                            </span>
                            <div id="imgdivfl-D4947631">
                              <span>
                                <img
                                  className="overflow-hidden card-list-container blk_grid_img_new--non-absure swiper-gallery-border w-100"
                                  src="https://imgd-ct.aeplcdn.com/640X480/cw/ucp/stockApiImg/CYXWPAB_sjyy816t_1_44801254.jpg?q=80"
                                  alt="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                  title="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                />
                              </span>
                            </div>
                            <div
                              className="slidearow"
                              id="slidearow_fl-D4947631"
                              style={{ display: "none" }}
                            >
                              <div className="lft_ARW" />
                              <div className="right_ARW" />
                            </div>
                            <div className="certif_out ">
                              <div className="certi_R">
                                <div className="gradient-container ">
                                  <div className="gradient-img default-logo-background">
                                    <img
                                      src="https://images-cf.cartradeexchange.com/thumbs/p-certprog-ver1/certprogs_images/royalcarsmumbai_1695302314002.jpg"
                                      className="dealer-logo"
                                      alt="Logo"
                                      title="Logo"
                                    />
                                  </div>
                                </div>
                                <link
                                  rel="stylesheet"
                                  href="https://stc.aeplcdn.com/staticminv2/css/partials/gradientimage-617c79c127.css"
                                  type="text/css"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          style={{ fontWeight: "bold" }}
                          href="/buy-used-cars/mercedes-benz-e-class-cars-in-mumbai/sjyy816t/?dc=0"
                          className="font-muli"
                        >
                          <div className="grid_cnt_new overflow-hidden  card-detail-block">
                            <div className="details_out p-3 ">
                              <div className="card-title truncate h2heading car-name">
                                <span
                                  className="cardTitle font-muli"
                                  style={{ fontWeight: "bold" }}
                                >
                                  2017 Mercedes-Benz E-Class E 350 d Exclusive
                                  [2017-2019]
                                </span>
                              </div>
                              <div className="links-container">
                                <div className="price_EMI font-muli">
                                  <div
                                    className="cr_prc"
                                    data-testing-id="used-car-price-0"
                                  >
                                    <span className="rupee_font font-muli font_20">
                                      ₹
                                    </span>
                                    34,00,000
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="links-container margin-top-10 mb-3">
                                  <span className="negotiate make-offer-link font-muli">
                                    Make Offer
                                  </span>
                                  <div className="additional-tag-container">
                                    <img
                                      className="additional-tag-icon"
                                      src="https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/6f6f6f/steering.svg?q=80"
                                      alt="additional-tag-icon"
                                      height={16}
                                      width={16}
                                    />
                                    <span className="additional-tag-text font-muli">
                                      Home Test Drive
                                    </span>
                                  </div>
                                </div>
                                <div className="clear" />
                                <div
                                  className="additional-info font-muli mb-3"
                                  data-testing-id="used-car-info-0"
                                >
                                  <span className=" carInfo">
                                    42,000 KMs &nbsp;|&nbsp; Diesel
                                    &nbsp;|&nbsp; Kurla East, Mumbai
                                  </span>
                                  <br />
                                </div>
                              </div>
                              <div className="certiflogos_new chatlst">
                                <div className="cta-button font-muli">
                                  <button className="contact-seller-btn-class one-click flatRed pull-right get-seller-details border-no width-100 cta-border">
                                    CONTACT SELLER{" "}
                                  </button>
                                </div>
                                <div id="fl-contact-seller-container-sjyy816t" />
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li className=" blk_grid_new  carlistblk_new carlistblk card-list-container  featured-border content-box">
                        <div>
                          <div className=" blk_grid_img_new">
                            <span className="tag featured__tag font-muli">
                              Featured
                            </span>
                            <div id="imgdivfl-D4947631">
                              <span>
                                <img
                                  className="overflow-hidden card-list-container blk_grid_img_new--non-absure swiper-gallery-border w-100"
                                  src="https://imgd-ct.aeplcdn.com/640X480/cw/ucp/stockApiImg/CYXWPAB_sjyy816t_1_44801254.jpg?q=80"
                                  alt="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                  title="Used 2017 Mercedes-Benz E-Class in Mumbai"
                                />
                              </span>
                            </div>
                            <div
                              className="slidearow"
                              id="slidearow_fl-D4947631"
                              style={{ display: "none" }}
                            >
                              <div className="lft_ARW" />
                              <div className="right_ARW" />
                            </div>
                            <div className="certif_out ">
                              <div className="certi_R">
                                <div className="gradient-container ">
                                  <div className="gradient-img default-logo-background">
                                    <img
                                      src="https://images-cf.cartradeexchange.com/thumbs/p-certprog-ver1/certprogs_images/royalcarsmumbai_1695302314002.jpg"
                                      className="dealer-logo"
                                      alt="Logo"
                                      title="Logo"
                                    />
                                  </div>
                                </div>
                                <link
                                  rel="stylesheet"
                                  href="https://stc.aeplcdn.com/staticminv2/css/partials/gradientimage-617c79c127.css"
                                  type="text/css"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          style={{ fontWeight: "bold" }}
                          href="/buy-used-cars/mercedes-benz-e-class-cars-in-mumbai/sjyy816t/?dc=0"
                          className="font-muli"
                        >
                          <div className="grid_cnt_new overflow-hidden  card-detail-block">
                            <div className="details_out p-3 ">
                              <div className="card-title truncate h2heading car-name">
                                <span
                                  className="cardTitle font-muli"
                                  style={{ fontWeight: "bold" }}
                                >
                                  2017 Mercedes-Benz E-Class E 350 d Exclusive
                                  [2017-2019]
                                </span>
                              </div>
                              <div className="links-container">
                                <div className="price_EMI font-muli">
                                  <div
                                    className="cr_prc"
                                    data-testing-id="used-car-price-0"
                                  >
                                    <span className="rupee_font font-muli font_20">
                                      ₹
                                    </span>
                                    34,00,000
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="links-container margin-top-10 mb-3">
                                  <span className="negotiate make-offer-link font-muli">
                                    Make Offer
                                  </span>
                                  <div className="additional-tag-container">
                                    <img
                                      className="additional-tag-icon"
                                      src="https://imgd-ct.aeplcdn.com/0x0/cw/static/icons/svg/6f6f6f/steering.svg?q=80"
                                      alt="additional-tag-icon"
                                      height={16}
                                      width={16}
                                    />
                                    <span className="additional-tag-text font-muli">
                                      Home Test Drive
                                    </span>
                                  </div>
                                </div>
                                <div className="clear" />
                                <div
                                  className="additional-info font-muli mb-3"
                                  data-testing-id="used-car-info-0"
                                >
                                  <span className=" carInfo">
                                    42,000 KMs &nbsp;|&nbsp; Diesel
                                    &nbsp;|&nbsp; Kurla East, Mumbai
                                  </span>
                                  <br />
                                </div>
                              </div>
                              <div className="certiflogos_new chatlst">
                                <div className="cta-button font-muli">
                                  <button className="contact-seller-btn-class one-click flatRed pull-right get-seller-details border-no width-100 cta-border">
                                    CONTACT SELLER{" "}
                                  </button>
                                </div>
                                <div id="fl-contact-seller-container-sjyy816t" />
                              </div>
                              <div className="clear" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UseCarByCity;
