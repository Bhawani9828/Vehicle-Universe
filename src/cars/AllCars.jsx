import { useEffect } from "react";
import CarHeader from "../components/CarHeader";


function AllCars() {
  useEffect(() => {
    document.querySelectorAll(".btn-danger").forEach((button) => {
      button.addEventListener("click", function () {
        let brand = document.getElementById("brandSelect")?.value || "";
        let model = document.getElementById("modelSelect")?.value || "";
        let budget = document.getElementById("budgetSelect")?.value || "";

        let selectedInfo = "";
        if (brand && model) {
          selectedInfo = `${brand} - ${model}`;
        } else if (budget) {
          selectedInfo = `Budget: ${budget}`;
        }
        document.getElementById("selectedInfo").innerText = selectedInfo;
      });
    });
  }, []);

  useEffect(() => {
    // Initialize Owl Carousel
    // eslint-disable-next-line no-undef
    $(".jcarousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="fas  fa-chevron-left cro_icon"></i>',
        '<i class="fas  fa-chevron-right cro_icon"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 5 },
      },
    });

    // Add custom class to navigation buttons
    // eslint-disable-next-line no-undef
    $(".owl-nav .owl-prev").addClass(
      "jcarousel-control jcarousel-control-prev inactive"
    );
    // eslint-disable-next-line no-undef
    $(".owl-nav .owl-next").addClass(
      "jcarousel-control jcarousel-control-next"
    );
  }, []);
  return (
    <>
     <CarHeader/>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 m-auto ">
              {/* Nav tabs */}
              <ul className="nav nav-tabs border-0" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link border-0 text-white active"
                    data-bs-toggle="tab"
                    href="#usedCars"
                    role="tab"
                    aria-selected="true"
                  >
                    Used Cars
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link border-0 text-white "
                    data-bs-toggle="tab"
                    href="#newCars"
                    role="tab"
                    aria-selected="true"
                  >
                    New Cars
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                {/* Used Cars Tab */}
                <div className="tab-pane  active" id="usedCars">
                  {/* Dropdown to select brand and model */}
                  <div className="ver_fndurcar box-sizing-content-box">
                    <div className="row">
                      <div className="col-12">
                        <div className="ver_fndct-title">Find your car</div>
                      </div>

                      <div className="col-9">
                        <div className="ver_slct-btn">
                          <div className="ver_inpselt w-100">
                            <div className="plain-select w-100">
                              <select
                                className="inp ver_slct"
                                name="ucity"
                                id="ucity"
                              >
                                <option value="">Select your City</option>
                                <optgroup label="Top Cities">
                                  <option
                                    value="mumbai"
                                    data-testing-id="mumbai"
                                  >
                                    Mumbai
                                  </option>
                                  <option
                                    value="bangalore"
                                    data-testing-id="bangalore"
                                  >
                                    Bangalore
                                  </option>
                                  <option
                                    value="nagpur"
                                    data-testing-id="nagpur"
                                  >
                                    Nagpur
                                  </option>
                                  <option
                                    value="bhopal"
                                    data-testing-id="bhopal"
                                  >
                                    Bhopal
                                  </option>
                                  <option
                                    value="indore"
                                    data-testing-id="indore"
                                  >
                                    Indore
                                  </option>
                                  <option
                                    value="kalyan"
                                    data-testing-id="kalyan"
                                  >
                                    Kalyan
                                  </option>
                                  <option
                                    value="jabalpur"
                                    data-testing-id="jabalpur"
                                  >
                                    Jabalpur
                                  </option>
                                  <option
                                    value="panvel"
                                    data-testing-id="panvel"
                                  >
                                    Panvel
                                  </option>
                                  <option value="kochi" data-testing-id="kochi">
                                    Kochi
                                  </option>
                                  <option value="delhi" data-testing-id="delhi">
                                    Delhi
                                  </option>
                                  <option
                                    value="kurnool"
                                    data-testing-id="kurnool"
                                  >
                                    Kurnool
                                  </option>
                                  <option value="pune" data-testing-id="pune">
                                    Pune
                                  </option>
                                  <option
                                    value="navi-mumbai"
                                    data-testing-id="navi-mumbai"
                                  >
                                    Navi Mumbai
                                  </option>
                                  <option
                                    value="ahmednagar"
                                    data-testing-id="ahmednagar"
                                  >
                                    Ahmednagar
                                  </option>
                                  <option value="akola" data-testing-id="akola">
                                    Akola
                                  </option>
                                  <option
                                    value="amravati"
                                    data-testing-id="amravati"
                                  >
                                    Amravati
                                  </option>
                                  <option
                                    value="aurangabad-maharashtra"
                                    data-testing-id="aurangabad-maharashtra"
                                  >
                                    Aurangabad
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 p-0">
                        <div className="ver_slct-btn">
                          <div className="ver_slct-btn w-100">
                            <div className="ver_serbtn w-100">
                              <input
                                type="submit"
                                defaultValue="all used cars"
                                className="ver_btn"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* New Cars Tab */}
                <div className="tab-pane container fade" id="newCars">
                  {/* Dropdown to select budget */}
                  <div className="ver_srch d-flex">
                    <div className="row">
                      <div className="col-md-10 border  p-0">
                        <div className="ver_fndurcar_1 box-sizing-content-box">
                          <form name="priceform" id="priceform">
                            <h3 className="ver_fndct-title">
                              Find new car by brand
                            </h3>
                            <div className="ver_slct-btn">
                              <div className="ver_inpselt_1">
                                <label>
                                  <span className="plain-select_1">
                                    <div
                                      className="inp ver_slct_1"
                                      name="make"
                                      id="fnc_make"
                                    >
                                      <div
                                        className="sel_make"
                                        id="make_main"
                                        data-bs-toggle="modal"
                                        data-bs-target="#carModal"
                                      >
                                        Select Make
                                      </div>
                                    </div>
                                  </span>
                                </label>
                              </div>
                              <div className="ver_inpselt_2">
                                <label>
                                  <span className="plain-select_2">
                                    <div
                                      className="inp ver_slct_2"
                                      name="model"
                                      id="model"
                                    >
                                      <div
                                        data-bs-toggle="modal"
                                        data-bs-target="#carModal"
                                        className="sel_model"
                                        id="model_main"
                                      >
                                        Select Model
                                      </div>
                                    </div>
                                  </span>
                                </label>
                              </div>
                              <div className="ver_serbtn_1">
                                <input
                                  type="button"
                                  defaultValue="GO"
                                  className="ver_btn"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-2  p-0">
                        <div className="ver_sechrt_1 box-sizing-content-box border">
                          <form name="budgetform" id="budgetform" method="post">
                            <h3 className="ver_fndct-title">
                              Find new car by price
                            </h3>
                            <div className="d-flex">
                              <div className="ver_inpselt_2">
                                <label>
                                  <span className="plain-select_2 ffg">
                                    <select
                                      className="inp ver_slct_2"
                                      name="budget"
                                      id="budget"
                                    >
                                      <option value="">Select budget</option>
                                      <option value="0-3">Upto 3 Lakh</option>
                                      <option value="3-5">3-5 Lakh</option>
                                      <option value="5-8">5-8 Lakh</option>
                                      <option value="8-10">8-10 Lakh</option>
                                      <option value="10-15">10-15 Lakh</option>
                                      <option value="15-25">15-25 Lakh</option>
                                      <option value="25-40">25-40 Lakh</option>
                                      <option value={40}>40+ Lakh</option>
                                    </select>
                                  </span>
                                </label>
                              </div>
                              <div className="ver_serbtn_1">
                                <input
                                  type="button"
                                  defaultValue="GO"
                                  className="ver_btn"
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal */}
          <div
            className="modal fade"
            id="carModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="carModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="carModalLabel">
                    Selected Car Details
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Modal content will be filled dynamically */}
                  You selected:{" "}
                  <strong>
                    <span id="selectedInfo" />
                  </strong>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      <section>
        <div className="ver_gray-bg">
          <div className="container">
            <h2 className="ver_ttl">
              Popular New Cars
              <a
                href="/new-cars/"
                title="View All New Cars in India"
                className="var_view color-scarlet"
              >
                View All
              </a>
            </h2>
            <div className="tabs">
              <div className="expertUser">
                <ul className="ver_popuc nav nav-tabs" role="tablist">
                  <li className="ver_tab-link nav-item">
                    <a
                      className="ver_reviewBtn11 nav-link active"
                      title="Popular Cars"
                      data-bs-toggle="tab"
                      href="#tabss-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Popular Cars
                      <span className="ver_bor_r" />
                    </a>
                  </li>
                  <li className="ver_tab-link nav-item">
                    <a
                      className="ver_reviewBtn11 nav-link"
                      title="Upcoming Cars"
                      data-bs-toggle="tab"
                      href="#tabss-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Upcoming Cars <span className="ver_bor_r" />
                    </a>
                  </li>
                  <li className="ver_tab-link nav-item">
                    <a
                      className="ver_reviewBtn11 nav-link "
                      title="Latest Launches"
                      data-bs-toggle="tab"
                      href="#tabss-3"
                      role="tab"
                      aria-selected="false"
                    >
                      {" "}
                      Latest Launches <span className="ver_bor_r" />
                    </a>
                  </li>
                </ul>
                <div className="allreviewCnt tab-content">
                  <div className="ver_reviewCnt1 tab-pane active" id="tabss-1">
                    <div className="ver_srch" style={{ position: "relative" }}>
                      <section className="inpad-left similarCarsSlider">
                        <div className="MMtabsCont" id="similar_cars">
                          <div className="popularNewCarsGallery keyspecs">
                            <div className=" p-0 jcarousel-wrapper">
                              <ul className=" p-0 jcarousel owl-carousel">
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-1"
                                  style={{}}
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-0"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                                          title="Tata Curvv"
                                          alt="Tata Curvv"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/tata-cars/curvv/"
                                            className="var_upc_tit"
                                            title="Tata Curvv"
                                          >
                                            Tata Curvv
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          9.99 - 19.00 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-2"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-1"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                                          title="MG Windsor EV"
                                          alt="MG Windsor EV"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/mg-cars/windsor-ev/"
                                            className="var_upc_tit"
                                            title="MG Windsor EV"
                                          >
                                            MG Windsor EV
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          9.99 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-3"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-2"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/158925/alcazar-facelift-right-front-three-quarter-3.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/158925/alcazar-facelift-right-front-three-quarter-3.jpeg?isig=0&q=80"
                                          title="Hyundai Alcazar"
                                          alt="Hyundai Alcazar"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/alcazar/"
                                            className="var_upc_tit"
                                            title="Hyundai Alcazar"
                                          >
                                            Hyundai Alcazar
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          14.99 - 21.55 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-4"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-3"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/130635/fronx-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/130635/fronx-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          title="Maruti Suzuki Fronx"
                                          alt="Maruti Suzuki Fronx"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/maruti-suzuki-cars/fronx/"
                                            className="var_upc_tit"
                                            title="Maruti Suzuki Fronx"
                                          >
                                            Maruti Suzuki Fronx
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          7.51 - 13.04 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-5"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-4"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/148597/exter-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/148597/exter-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          title="Hyundai Exter"
                                          alt="Hyundai Exter"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/exter/"
                                            className="var_upc_tit"
                                            title="Hyundai Exter"
                                          >
                                            Hyundai Exter
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          6.13 - 10.43 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-6"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-5"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/107917/creta-right-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/107917/creta-right-front-three-quarter.jpeg?isig=0&q=80"
                                          title="Hyundai Creta"
                                          alt="Hyundai Creta"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/creta/"
                                            className="var_upc_tit"
                                            title="Hyundai Creta"
                                          >
                                            Hyundai Creta
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          11.00 - 20.30 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-7"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-6"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/163877/basalt-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/163877/basalt-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          title="Citroen Basalt"
                                          alt="Citroen Basalt"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/citroen-cars/basalt/"
                                            className="var_upc_tit"
                                            title="Citroen Basalt"
                                          >
                                            Citroen Basalt
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          7.99 - 13.83 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-8"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-7"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/128762/scorpio-classic-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/128762/scorpio-classic-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          title="Mahindra Scorpio"
                                          alt="Mahindra Scorpio"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/mahindra-cars/scorpio/"
                                            className="var_upc_tit"
                                            title="Mahindra Scorpio"
                                          >
                                            Mahindra Scorpio
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          13.62 - 17.42 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-9"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-8"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/100917/punch-right-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/100917/punch-right-front-three-quarter.jpeg?isig=0&q=80"
                                          title="Tata Punch"
                                          alt="Tata Punch"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/tata-cars/punch/"
                                            className="var_upc_tit"
                                            title="Tata Punch"
                                          >
                                            Tata Punch
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          6.13 - 10.20 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-10"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="popular-car-9"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/107807/brezza-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/107807/brezza-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          title="Maruti Suzuki Brezza"
                                          alt="Maruti Suzuki Brezza"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/maruti-suzuki-cars/brezza/"
                                            className="var_upc_tit"
                                            title="Maruti Suzuki Brezza"
                                          >
                                            Maruti Suzuki Brezza
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          8.34 - 14.14 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
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
                    </div>
                    <div className="ver_vew_m_video">
                      <strong
                        className="listing-page-link cursor-pointer"
                        title="More Popular Cars in India"
                      >
                        All Popular Cars in India
                      </strong>
                    </div>
                  </div>
                  <div className="ver_reviewCnt1 tab-pane" id="tabss-2">
                    <div className="ver_srch" style={{ position: "relative" }}>
                      <section className="inpad-left similarCarsSlider">
                        <div className="MMtabsCont" id="similar_cars">
                          <div className="popularNewCarsGallery keyspecs">
                            <div className=" p-0 jcarousel-wrapper">
                              <ul className="p-0 jcarousel owl-carousel">
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-1"
                                  style={{}}
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="upcoming-cars-0"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                                          title="Maruti Suzuki New Dzire"
                                          alt="Maruti Suzuki New Dzire"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/maruti-suzuki-cars/new-dzire/"
                                            className="var_upc_tit"
                                            title="Maruti Suzuki New Dzire"
                                          >
                                            Maruti Suzuki New Dzire
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          7.00 - 10.00 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Estimated Price
                                        </div>
                                        <div className="ver_gry-txt">
                                          Expected launch: September 2024
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-2"
                                  style={{}}
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="upcoming-cars-1"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/173329/magnite-facelift-rear-view.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/173329/magnite-facelift-rear-view.jpeg?isig=0&q=80"
                                          title="Nissan Magnite facelift"
                                          alt="Nissan Magnite facelift"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/nissan-cars/magnite-facelift/"
                                            className="var_upc_tit"
                                            title="Nissan Magnite facelift"
                                          >
                                            Nissan Magnite facelift
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          6.00 - 11.00 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Estimated Price
                                        </div>
                                        <div className="ver_gry-txt">
                                          Expected launch: 4th October 2024
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-3"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="upcoming-cars-2"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/186689/e6-facelift-left-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/186689/e6-facelift-left-front-three-quarter.jpeg?isig=0&q=80"
                                          title="BYD eMAX 7 (e6 facelift)"
                                          alt="BYD eMAX 7 (e6 facelift)"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/byd-cars/emax-7-e6-facelift/"
                                            className="var_upc_tit"
                                            title="BYD eMAX 7 (e6 facelift)"
                                          >
                                            BYD eMAX 7 (e6 facelift)
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          30.00 - 32.00 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Estimated Price
                                        </div>
                                        <div className="ver_gry-txt">
                                          Expected launch: October 2024
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-4"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="upcoming-cars-3"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/166925/tucson-facelift-left-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/166925/tucson-facelift-left-front-three-quarter.jpeg?isig=0&q=80"
                                          title="Hyundai Tucson facelift"
                                          alt="Hyundai Tucson facelift"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/tucson-facelift/"
                                            className="var_upc_tit"
                                            title="Hyundai Tucson facelift"
                                          >
                                            Hyundai Tucson facelift
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          29.00 - 36.00 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Estimated Price
                                        </div>
                                        <div className="ver_gry-txt">
                                          Expected launch: November 2024
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
                    </div>
                    <div className="ver_vew_m_video">
                      <a
                        href="/upcoming-cars/"
                        title="More Upcoming Cars in India"
                      >
                        <strong>All Upcoming Cars in India</strong>
                      </a>
                    </div>
                  </div>

                  <div className="ver_reviewCnt1 tab-pane" id="tabss-3">
                    <div className="ver_srch" style={{ position: "relative" }}>
                      <section className="inpad-left similarCarsSlider">
                        <div className="MMtabsCont" id="similar_cars">
                          <div className="popularNewCarsGallery keyspecs">
                            <div className=" p-0 jcarousel-wrapper">
                              <ul className="p-0 jcarousel owl-carousel">
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-1"
                                  style={{}}
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="latest-launches-0"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                                          title="MG Windsor EV"
                                          alt="MG Windsor EV"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/mg-cars/windsor-ev/"
                                            className="var_upc_tit"
                                            title="MG Windsor EV"
                                          >
                                            MG Windsor EV
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          9.99 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-2"
                                  style={{}}
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="latest-launches-1"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/158925/alcazar-facelift-right-front-three-quarter-3.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/158925/alcazar-facelift-right-front-three-quarter-3.jpeg?isig=0&q=80"
                                          title="Hyundai Alcazar"
                                          alt="Hyundai Alcazar"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/alcazar/"
                                            className="var_upc_tit"
                                            title="Hyundai Alcazar"
                                          >
                                            Hyundai Alcazar
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          14.99 - 21.55 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-3"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="latest-launches-2"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                                          title="Tata Curvv"
                                          alt="Tata Curvv"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/tata-cars/curvv/"
                                            className="var_upc_tit"
                                            title="Tata Curvv"
                                          >
                                            Tata Curvv
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          9.99 - 19.00 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-4"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="latest-launches-3"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/126985/thar-roxx-right-front-three-quarter-4.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/126985/thar-roxx-right-front-three-quarter-4.jpeg?isig=0&q=80"
                                          title="Mahindra Thar Roxx"
                                          alt="Mahindra Thar Roxx"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/mahindra-cars/thar-roxx/"
                                            className="var_upc_tit"
                                            title="Mahindra Thar Roxx"
                                          >
                                            Mahindra Thar Roxx
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          12.99 - 20.49 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className="inn-box-6"
                                  data-testing-id="similar-car-card-5"
                                >
                                  <div className="ver_pup-blk-6 ver_pp-bkh">
                                    <div
                                      className="ver_shimg-out"
                                      data-testing-id="latest-launches-4"
                                    >
                                      <div className="ver_crimg cursor-pointer">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/163877/basalt-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/163877/basalt-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                          title="Citroen Basalt"
                                          alt="Citroen Basalt"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/citroen-cars/basalt/"
                                            className="var_upc_tit"
                                            title="Citroen Basalt"
                                          >
                                            Citroen Basalt
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          7.99 - 13.83 Lakh{" "}
                                        </div>
                                        <div className="ver_exShowroom">
                                          Avg. Ex-Showroom price
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
                    </div>
                    <div className="ver_vew_m_video">
                      <strong
                        className="listing-page-link cursor-pointer"
                        title="Other Latest Launched Cars"
                      >
                        All Latest Launched Cars
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ver_white-out">
          <div className="ver_main container">
            <h2 className="ver_ttl">
              POPULAR USED CARS{" "}
              <a
                href="/buy-used-cars/"
                title="View All Used Cars in India"
                className="var_view color-scarlet"
              >
                View All
              </a>
            </h2>
            <div className="tabs">
              <div className="expertUser">
                <ul className="ver_popuc nav nav-tabs mb-3">
                  <li className="ver_tab-link nav-item">
                    <a
                      className="ver_reviewBtn1_used nav-link active"
                      data-bs-toggle="tab"
                      href="#city-1"
                      role="tab"
                      aria-selected="true"
                      title="By City"
                    >
                      By City
                      <span className="ver_bor_r" />
                    </a>
                  </li>
                  <li className="ver_tab-link nav-item">
                    <a
                      className="ver_reviewBtn1_used nav-link"
                      data-bs-toggle="tab"
                      href="#Price-1"
                      role="tab"
                      aria-selected="false"
                      title="By Price"
                    >
                      By Price
                      <span className="ver_bor_r" />
                    </a>
                  </li>
                  <li className="ver_tab-link nav-item">
                    <a
                      id="bused"
                      className="ver_reviewBtn1_used nav-link"
                      data-bs-toggle="tab"
                      href="#Model-1"
                      role="tab"
                      aria-selected="false"
                      title="By Model"
                    >
                      By Model
                      <span className="ver_bor_r" />
                    </a>
                  </li>
                  <li className="ver_tab-link nav-item">
                    <a
                      id="bluxury"
                      className="ver_reviewBtn1_used nav-link"
                      data-bs-toggle="tab"
                      href="#Cars-1"
                      role="tab"
                      aria-selected="false"
                      title="Luxury Cars"
                    >
                      Luxury Cars
                      <span className="ver_bor_r" />
                    </a>
                  </li>
                </ul>
                <div className="allreviewCnt tab-content">
                  <div
                    className="ver_reviewCnt_used tab-pane active"
                    id="city-1"
                  >
                    <div className="ver_srch">
                      <div className="city tencity row g-4 ">
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Bengaluru</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Hyderabad</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Pune</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Mumbai</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Delhi</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Chennai</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Ahmedabad</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Indore</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Lucknow</span>
                          </button>
                        </div>
                        <div className="col-lg">
                          <button
                            className="box_col"
                            title="Used Cars in Bengaluru"
                          >
                            <span className="ver_city_link_tencity">
                              {" "}
                              Used Cars in{" "}
                            </span>
                            <span className="ver_city_nm">Jaipur</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ver_reviewCnt_used tab-pane" id="Price-1">
                    <div className="ver_srch">
                      <div className="ver_pup-blk-out row g-4">
                        <div className="col-lg-4">
                          <button className="price_box" title="Under 1 Lakh">
                            <h2 className="ver_wtin-prc">
                              Under 1 <span>Lakh</span>
                            </h2>
                          </button>
                        </div>

                        <div className="col-lg-4">
                          <button className="price_box" title="Under 1 Lakh">
                            <h2 className="ver_wtin-prc">
                              Under 2 <span>Lakh</span>
                            </h2>
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button className="price_box" title="Under 1 Lakh">
                            <h2 className="ver_wtin-prc">
                              Under 3 <span>Lakh</span>
                            </h2>
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button className="price_box" title="Under 1 Lakh">
                            <h2 className="ver_wtin-prc">
                              Under 4 <span>Lakh</span>
                            </h2>
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button className="price_box" title="Under 1 Lakh">
                            <h2 className="ver_wtin-prc">
                              Under 5 <span>Lakh</span>
                            </h2>
                          </button>
                        </div>
                        <div className="col-lg-4">
                          <button className="price_box" title="Under 1 Lakh">
                            <h2 className="ver_wtin-prc">
                              Under 6 <span>Lakh</span>
                            </h2>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ver_reviewCnt_used tab-pane " id="Model-1">
                    <div className="ver_srch">
                      <div className="ver_pup-blk-out row g-4">
                        <div className="col-lg-3">
                          <div className="ver_pup-blk-3">
                            <div className="ver_crimg1">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                className="ver_img_blk"
                                title="Used Maruti Suzuki Swift"
                              >
                                <img
                                  loading="lazy"
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
                                  className="car_img w-100"
                                  data-original="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
                                  alt="Maruti Suzuki Swift"
                                  title="Maruti Suzuki Swift"
                                />
                              </a>
                            </div>
                            <div className="ver_cr-tit">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                title="Used Maruti Suzuki Swift"
                              >
                                Used Maruti Suzuki Swift
                              </a>
                            </div>
                            <div className="ver_cr-cty">
                              <a
                                href="/buy-used-cars/mumbai/marutisuzuki-swift/cmm/"
                                title="Mumbai"
                              >
                                Mumbai
                              </a>
                              |
                              <a
                                href="/buy-used-cars/new-delhi/marutisuzuki-swift/cmm/"
                                title="Delhi"
                              >
                                Delhi
                              </a>
                              |
                              <a
                                href="/buy-used-cars/bangalore/marutisuzuki-swift/cmm/"
                                title="Bangalore"
                              >
                                Bangalore
                              </a>
                              |
                              <a
                                href="/buy-used-cars/chennai/marutisuzuki-swift/cmm/"
                                title="Chennai"
                              >
                                Chennai
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="ver_pup-blk-3">
                            <div className="ver_crimg1">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                className="ver_img_blk"
                                title="Used Maruti Suzuki Swift"
                              >
                                <img
                                  loading="lazy"
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/112947/wagon-r-2022-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
                                  className="car_img w-100"
                                  data-original="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
                                  alt="Maruti Suzuki Swift"
                                  title="Maruti Suzuki Swift"
                                />
                              </a>
                            </div>
                            <div className="ver_cr-tit">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                title="Used Maruti Suzuki Swift"
                              >
                                Used Maruti Suzuki Wagon R
                              </a>
                            </div>
                            <div className="ver_cr-cty">
                              <a
                                href="/buy-used-cars/mumbai/marutisuzuki-swift/cmm/"
                                title="Mumbai"
                              >
                                Mumbai
                              </a>
                              |
                              <a
                                href="/buy-used-cars/new-delhi/marutisuzuki-swift/cmm/"
                                title="Delhi"
                              >
                                Delhi
                              </a>
                              |
                              <a
                                href="/buy-used-cars/bangalore/marutisuzuki-swift/cmm/"
                                title="Bangalore"
                              >
                                Bangalore
                              </a>
                              |
                              <a
                                href="/buy-used-cars/chennai/marutisuzuki-swift/cmm/"
                                title="Chennai"
                              >
                                Chennai
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="ver_pup-blk-3">
                            <div className="ver_crimg1">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                className="ver_img_blk"
                                title="Used Maruti Suzuki Swift"
                              >
                                <img
                                  loading="lazy"
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80"
                                  className="car_img w-100"
                                  data-original="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
                                  alt="Maruti Suzuki Swift"
                                  title="Maruti Suzuki Swift"
                                />
                              </a>
                            </div>
                            <div className="ver_cr-tit">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                title="Used Maruti Suzuki Swift"
                              >
                                Used Hyundai Creta
                              </a>
                            </div>
                            <div className="ver_cr-cty">
                              <a
                                href="/buy-used-cars/mumbai/marutisuzuki-swift/cmm/"
                                title="Mumbai"
                              >
                                Mumbai
                              </a>
                              |
                              <a
                                href="/buy-used-cars/new-delhi/marutisuzuki-swift/cmm/"
                                title="Delhi"
                              >
                                Delhi
                              </a>
                              |
                              <a
                                href="/buy-used-cars/bangalore/marutisuzuki-swift/cmm/"
                                title="Bangalore"
                              >
                                Bangalore
                              </a>
                              |
                              <a
                                href="/buy-used-cars/chennai/marutisuzuki-swift/cmm/"
                                title="Chennai"
                              >
                                Chennai
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="ver_pup-blk-3">
                            <div className="ver_crimg1">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                className="ver_img_blk"
                                title="Used Maruti Suzuki Swift"
                              >
                                <img
                                  loading="lazy"
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
                                  className="car_img w-100"
                                  data-original="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
                                  alt="Maruti Suzuki Swift"
                                  title="Maruti Suzuki Swift"
                                />
                              </a>
                            </div>
                            <div className="ver_cr-tit">
                              <a
                                href="/buy-used-cars/marutisuzuki-swift/mm/"
                                title="Used Maruti Suzuki Swift"
                              >
                                Used Maruti Suzuki Swift
                              </a>
                            </div>
                            <div className="ver_cr-cty">
                              <a
                                href="/buy-used-cars/mumbai/marutisuzuki-swift/cmm/"
                                title="Mumbai"
                              >
                                Mumbai
                              </a>
                              |
                              <a
                                href="/buy-used-cars/new-delhi/marutisuzuki-swift/cmm/"
                                title="Delhi"
                              >
                                Delhi
                              </a>
                              |
                              <a
                                href="/buy-used-cars/bangalore/marutisuzuki-swift/cmm/"
                                title="Bangalore"
                              >
                                Bangalore
                              </a>
                              |
                              <a
                                href="/buy-used-cars/chennai/marutisuzuki-swift/cmm/"
                                title="Chennai"
                              >
                                Chennai
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ver_reviewCnt_used tab-pane " id="Cars-1">
                    <div className=" row g-4" style={{ position: "relative" }}>
                      <div className=" col-lg-4 ">
                        <button className="price_box">
                          <div className="ver_city_img">
                            <img
                              loading="lazy"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/delhi.png"
                              data-original="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/delhi.png"
                              alt="Used Luxury Cars in New Delhi"
                              title="Used Luxury Cars in New Delhi"
                            />
                          </div>
                          <span
                            className="ver_city_link"
                            title="Used Luxury Cars in New Delhi"
                          >
                            {" "}
                            Used Luxury Cars in New Delhi{" "}
                          </span>
                        </button>
                      </div>
                      <div className=" col-lg-4 ">
                        <button className="price_box">
                          <div className="ver_city_img">
                            <img
                              loading="lazy"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/mumbai.png"
                              data-original="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/delhi.png"
                              alt="Used Luxury Cars in New Delhi"
                              title="Used Luxury Cars in New Delhi"
                            />
                          </div>
                          <span
                            className="ver_city_link"
                            title="Used Luxury Cars in Mumbai"
                          >
                            {" "}
                            Used Luxury Cars in Mumbai{" "}
                          </span>
                        </button>
                      </div>
                      <div className=" col-lg-4 ">
                        <button className="price_box">
                          <div className="ver_city_img">
                            <img
                              loading="lazy"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/banglue.png"
                              data-original="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/delhi.png"
                              alt="Used Luxury Cars in New Delhi"
                              title="Used Luxury Cars in New Delhi"
                            />
                          </div>
                          <span
                            className="ver_city_link"
                            title="Used Luxury Cars in Bangalore"
                          >
                            {" "}
                            Used Luxury Cars in Bangalore{" "}
                          </span>
                        </button>
                      </div>
                      <div className=" col-lg-4 ">
                        <button className="price_box">
                          <div className="ver_city_img">
                            <img
                              loading="lazy"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/pune.png"
                              data-original="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/delhi.png"
                              alt="Used Luxury Cars in New Delhi"
                              title="Used Luxury Cars in New Delhi"
                            />
                          </div>
                          <span
                            className="ver_city_link"
                            title="Used Luxury Cars in Pune"
                          >
                            {" "}
                            Used Luxury Cars in Pune{" "}
                          </span>
                        </button>
                      </div>
                      <div className=" col-lg-4 ">
                        <button className="price_box">
                          <div className="ver_city_img">
                            <img
                              loading="lazy"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/chennai.png"
                              data-original="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/delhi.png"
                              alt="Used Luxury Cars in New Delhi"
                              title="Used Luxury Cars in New Delhi"
                            />
                          </div>
                          <span
                            className="ver_city_link"
                            title="Used Luxury Cars in Chennai"
                          >
                            {" "}
                            Used Luxury Cars in Chennai{" "}
                          </span>
                        </button>
                      </div>
                      <div className=" col-lg-4 ">
                        <button className="price_box">
                          <div className="ver_city_img">
                            <img
                              loading="lazy"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/hyd.png"
                              data-original="https://imgd.aeplcdn.com/0x0/ct/static/icons/cloudfront/delhi.png"
                              alt="Used Luxury Cars in New Delhi"
                              title="Used Luxury Cars in New Delhi"
                            />
                          </div>
                          <span
                            className="ver_city_link"
                            title="Used Luxury Cars in Hyderabad"
                          >
                            {" "}
                            Used Luxury Cars in Hyderabad{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="search-brand-container js-all-brands-container">
        <div className="ver_white-out container">
          <div className="ver_main">
            <h2 className="ver_ttl">Search New Cars By Brand</h2>
            <div id="alcarlist">
              <div className="blk row g-4">
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/maruti-suzuki-cars/"
                      title="Maruti Suzuki"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80"
                        className="brand_image"
                        alt="Maruti Suzuki"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/maruti-suzuki-cars/"
                      title="Maruti Suzuki"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Maruti Suzuki</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/tata-cars/"
                      title="Tata"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80"
                        className="brand_image"
                        alt="Tata"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/tata-cars/"
                      title="Tata"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Tata</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/toyota-cars/"
                      title="Toyota"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80"
                        className="brand_image"
                        alt="Toyota"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/toyota-cars/"
                      title="Toyota"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Toyota</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/hyundai-cars/"
                      title="Hyundai"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80"
                        className="brand_image"
                        alt="Hyundai"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/hyundai-cars/"
                      title="Hyundai"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Hyundai</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/mahindra-cars/"
                      title="Mahindra"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80"
                        className="brand_image"
                        alt="Mahindra"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/mahindra-cars/"
                      title="Mahindra"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Mahindra</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/bmw-cars/"
                      title="BMW"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80"
                        className="brand_image"
                        alt="BMW"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/bmw-cars/"
                      title="BMW"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">BMW</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/kia-cars/"
                      title="Kia"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80"
                        className="brand_image"
                        alt="Kia"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/kia-cars/"
                      title="Kia"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Kia</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/mercedes-cars/"
                      title="Mercedes-Benz"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80"
                        className="brand_image"
                        alt="Mercedes-Benz"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/mercedes-cars/"
                      title="Mercedes-Benz"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Mercedes-Benz</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/mg-cars/"
                      title="MG"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80"
                        className="brand_image"
                        alt="MG"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/mg-cars/"
                      title="MG"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">MG</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/audi-cars/"
                      title="Audi"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80"
                        className="brand_image"
                        alt="Audi"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/audi-cars/"
                      title="Audi"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Audi</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/skoda-cars/"
                      title="Skoda"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=80"
                        className="brand_image"
                        alt="Skoda"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/skoda-cars/"
                      title="Skoda"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Skoda</span>
                    </a>
                  </div>
                </div>
                <div className=" col-lg-2 ">
                  <div className="logo_brnds">
                    <a
                      href="/land-rover-cars/"
                      title="Land Rover"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        src="https://imgd-ct.aeplcdn.com/272x153/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80"
                        className="brand_image"
                        alt="Land Rover"
                        loading="lazy"
                      />
                    </a>
                    <a
                      href="/land-rover-cars/"
                      title="Land Rover"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Land Rover</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="view_hd_btn">
                <a className="view_m_brnd color-scarlet">View All</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ver_white-out ver_white-out-padding">
          <div className="ver_main container">
            <h2 className="ver_ttl">
              {" "}
              LATEST UPDATES IN AUTOMOBILE Industry
              <span className="ver_ttl_hover" />
            </h2>
            <div className="ver_tabs">
              <div className="ver_ltst_up">
                <ul className="ver_popuc nav nav-tabs" role="tablist">
                  <li className="ver_tab-link nav-item">
                    <a
                      className="ver_reviewBtn1s nav-link active"
                      title="News"
                      data-bs-toggle="tab"
                      href="#bnewsa"
                      role="tab"
                      aria-selected="true"
                    >
                      News
                      <span className="ver_bor_r" />
                    </a>
                  </li>
                  <li className="ver_tab-link nav-item">
                    <a
                      className="ver_reviewBtn1s nav-link"
                      data-bs-toggle="tab"
                      href="#buseds"
                      role="tab"
                      aria-selected="false"
                      title="Expert Reviews"
                    >
                      Expert Reviews <span className="ver_bor_r" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ver_allCnt tab-content">
                <div className="ver_reviewCnts tab-pane active" id="bnewsa">
                  <ul className="ver_news row">
                    <li
                      className=" col-lg-4 overflow-hidden"
                      data-testing-id="news-card-187301"
                    >
                      <img
                        className="car_img cursor-pointer"
                        data-category="Auto News and Updates"
                        title="New Kia Carnival features, variants, colours, and engine options revealed"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/187301/kia-new-carnival-right-front-three-quarter0.jpeg?isig=0&q=80"
                        data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/187301/kia-new-carnival-right-front-three-quarter0.jpeg?isig=0&q=80"
                        alt="New Kia Carnival features, variants, colours, and engine options revealed"
                      />
                      <div className="ver_pad">
                        <div className="ver_video_tp1">
                          <div className="ver_video_ttl">
                            <a
                              href="/news/new-kia-carnival-features-variants-colours-and-engine-options-revealed/"
                              title="New Kia Carnival features, variants, colours, and engine options revealed"
                              className="title_truncate color-scarlet"
                            >
                              New Kia Carnival features, variants, colours, and
                              engine options revealed
                            </a>
                          </div>
                          <div className="ver_video_time">
                            {" "}
                            September 16, 2024 | Jay Shah{" "}
                          </div>
                        </div>
                        <p className="news_description title_truncate mb-4">
                          Kia has revealed the engine specifications, variants,
                          colours, and features of the new Carnival.
                        </p>
                        <a
                          href="/news/new-kia-carnival-features-variants-colours-and-engine-options-revealed/"
                          title="Read full news"
                          className="redcolor"
                        >
                          Read full news{" "}
                        </a>
                      </div>
                    </li>
                    <li
                      className=" col-lg-4 overflow-hidden"
                      data-testing-id="news-card-187293"
                    >
                      <img
                        className="car_img cursor-pointer"
                        data-category="Auto News and Updates"
                        title="Mercedes-Benz EQS SUV launched in India; priced at Rs. 1.41 crore"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/187293/mercedes-benz-eqs-suv-left-front-three-quarter0.jpeg?isig=0&q=80"
                        data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/187293/mercedes-benz-eqs-suv-left-front-three-quarter0.jpeg?isig=0&q=80"
                        alt="Mercedes-Benz EQS SUV launched in India; priced at Rs. 1.41 crore"
                      />
                      <div className="ver_pad">
                        <div className="ver_video_tp1">
                          <div className="ver_video_ttl">
                            <a
                              href="/news/mercedes-benz-eqs-suv-launched-in-india-priced-at-rs-141-crore/"
                              title="Mercedes-Benz EQS SUV launched in India; priced at Rs. 1.41 crore"
                              className="title_truncate color-scarlet"
                            >
                              Mercedes-Benz EQS SUV launched in India; priced at
                              Rs. 1.41 crore
                            </a>
                          </div>
                          <div className="ver_video_time">
                            {" "}
                            September 16, 2024 | Jay Shah{" "}
                          </div>
                        </div>
                        <p className="news_description title_truncate mb-4">
                          The Mercedes-Benz EQS SUV has been launched in India
                          at an ex-showroom price of Rs. 1.41 crore.
                        </p>
                        <a
                          href="/news/mercedes-benz-eqs-suv-launched-in-india-priced-at-rs-141-crore/"
                          title="Read full news"
                          className="redcolor"
                        >
                          Read full news{" "}
                        </a>
                      </div>
                    </li>
                    <li
                      className=" col-lg-4 ver_mar_r_none overflow-hidden"
                      data-testing-id="news-card-187283"
                    >
                      <img
                        className="car_img cursor-pointer"
                        data-category="Auto News and Updates"
                        title="Honda launches Elevate Apex Edition; prices in India start at Rs. 12.86 lakh"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/187283/left-front-three-quarter1.jpeg?isig=0&wm=4&q=80"
                        data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/187283/left-front-three-quarter1.jpeg?isig=0&wm=4&q=80"
                        alt="Honda launches Elevate Apex Edition; prices in India start at Rs. 12.86 lakh"
                      />
                      <div className="ver_pad">
                        <div className="ver_video_tp1">
                          <div className="ver_video_ttl">
                            <a
                              href="/news/honda-launches-elevate-apex-edition-prices-in-india-start-at-rs-1286-lakh/"
                              title="Honda launches Elevate Apex Edition; prices in India start at Rs. 12.86 lakh"
                              className="title_truncate color-scarlet"
                            >
                              Honda launches Elevate Apex Edition; prices in
                              India start at Rs. 12.86 lakh
                            </a>
                          </div>
                          <div className="ver_video_time">
                            {" "}
                            September 16, 2024 | Aditya Nadkarni{" "}
                          </div>
                        </div>
                        <p className="news_description title_truncate mb-4">
                          Based on the V and VX variants of the mid-size SUV.
                        </p>
                        <a
                          href="/news/honda-launches-elevate-apex-edition-prices-in-india-start-at-rs-1286-lakh/"
                          title="Read full news"
                          className="redcolor"
                        >
                          Read full news{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="ver_vew_m_video">
                    <strong
                      className="listing-page-link cursor-pointer"
                      title="View All Automobile News"
                    >
                      More Latest Auto News
                    </strong>
                  </div>
                </div>
                <div id="buseds" className="ver_reviewCnts   tab-pane">
                  <ul className="ver_news ver_expertreview">
                    <li
                      className=""
                      data-testing-id="expert-review-card-185231"
                    >
                      <div
                        title="Mahindra Thar Roxx First Drive Review"
                        data-category="Expert Reviews"
                        className="ver_img_blk cursor-pointer"
                      >
                        <img
                          loading="lazy"
                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/185231/mahindra-thar-roxx-right-front-three-quarter0.jpeg?isig=0&wm=4&q=80"
                          className="image_dimensions"
                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/185231/mahindra-thar-roxx-right-front-three-quarter0.jpeg?isig=0&wm=4&q=80"
                          alt="Mahindra Thar Roxx First Drive Review"
                          title="Mahindra Thar Roxx First Drive Review"
                        />
                      </div>
                      <div className="ver_pad">
                        <div className="ver_video_tp">
                          <div className="ver_video_ttl ver_expertreview_ttl">
                            <a
                              title="Mahindra Thar Roxx First Drive Review"
                              data-category="Expert Reviews"
                              className="color-scarlet"
                              href="/mahindra-cars/thar-roxx/expert-reviews/mahindra-thar-roxx-first-drive-review/"
                            >
                              Mahindra Thar Roxx First Drive Review
                            </a>
                          </div>
                        </div>
                        <p className="ver_rev_desc title_truncate mb-4">
                          We get behind the wheel of the new five-door Mahindra
                          Thar Roxx
                        </p>
                        <a
                          title="Mahindra Thar Roxx First Drive Review"
                          href="/mahindra-cars/thar-roxx/expert-reviews/mahindra-thar-roxx-first-drive-review/"
                          className="redcolor"
                        >
                          Full Mahindra Thar Roxx First Drive Review
                        </a>
                      </div>
                    </li>
                    <li
                      className=""
                      data-testing-id="expert-review-card-184297"
                    >
                      <div
                        title=" Citroen Basalt First Drive Review"
                        data-category="Expert Reviews"
                        className="ver_img_blk cursor-pointer"
                      >
                        <img
                          loading="lazy"
                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/184297/citroen-basalt-right-front-three-quarter0.jpeg?isig=0&wm=4&q=80"
                          className="image_dimensions"
                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/184297/citroen-basalt-right-front-three-quarter0.jpeg?isig=0&wm=4&q=80"
                          alt=" Citroen Basalt First Drive Review"
                          title=" Citroen Basalt First Drive Review"
                        />
                      </div>
                      <div className="ver_pad">
                        <div className="ver_video_tp">
                          <div className="ver_video_ttl ver_expertreview_ttl">
                            <a
                              title=" Citroen Basalt First Drive Review"
                              data-category="Expert Reviews"
                              className="color-scarlet"
                              href="/citroen-cars/basalt/expert-reviews/citroen-basalt-first-drive-review/"
                            >
                              {" "}
                              Citroen Basalt First Drive Review
                            </a>
                          </div>
                        </div>
                        <p className="ver_rev_desc title_truncate mb-4">
                          This all-new Coupe is extremely important for Citroen
                          India, and you can clearly see that when you look at
                          the aggressive pricing. With a starting price of Rs
                          7.99 lakh, the Basalt seems really tempting if all you
                          want is a stylish SUV on a budget.
                        </p>
                        <a
                          title=" Citroen Basalt First Drive Review"
                          href="/citroen-cars/basalt/expert-reviews/citroen-basalt-first-drive-review/"
                          className="redcolor"
                        >
                          Full Citroen Basalt First Drive Review
                        </a>
                      </div>
                    </li>
                    <li
                      className="ver_mar_r_none"
                      data-testing-id="expert-review-card-182691"
                    >
                      <div
                        title="Nissan X-Trail First Drive Review "
                        data-category="Expert Reviews"
                        className="ver_img_blk cursor-pointer"
                      >
                        <img
                          loading="lazy"
                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/182691/nissan-x-trail-right-front-three-quarter12.jpeg?isig=0&wm=4&q=80"
                          className="image_dimensions"
                          data-original="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/182691/nissan-x-trail-right-front-three-quarter12.jpeg?isig=0&wm=4&q=80"
                          alt="Nissan X-Trail First Drive Review "
                          title="Nissan X-Trail First Drive Review "
                        />
                      </div>
                      <div className="ver_pad">
                        <div className="ver_video_tp">
                          <div className="ver_video_ttl ver_expertreview_ttl">
                            <a
                              title="Nissan X-Trail First Drive Review "
                              data-category="Expert Reviews"
                              className="color-scarlet"
                              href="/nissan-cars/x-trail/expert-reviews/nissan-x-trail-first-drive-review/"
                            >
                              Nissan X-Trail First Drive Review{" "}
                            </a>
                          </div>
                        </div>
                        <p className="ver_rev_desc title_truncate mb-4">
                          We get behind the wheel of the 1.5-litre CVT enabled
                          India-spec Nissan X-Trail
                        </p>
                        <a
                          title="Nissan X-Trail First Drive Review "
                          href="/nissan-cars/x-trail/expert-reviews/nissan-x-trail-first-drive-review/"
                          className="redcolor"
                        >
                          Full Nissan X-Trail First Drive Review{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="ver_vew_m_video">
                    <strong
                      className="listing-page-link cursor-pointer"
                      title="View All Expert Reviews"
                    >
                      More Expert Reviews
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="ver_white-out">
            <div className="ver_main">
              <h2 className="ver_ttl ">Popular New Cars Comparisons</h2>
              <div className="row border border-1">
                {/* <!-- First comparison --> */}
                <div className="col-lg-4">
                  <div className="ver_pad ver_bdr_btm">
                    <div className="hover_color cursor-pointer">
                      <ul className="var_compare_img">
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Hyundai Creta"
                            title="Compare Tata Curvv vs Hyundai Creta"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/107917/creta-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Hyundai Creta"
                            title="Compare Tata Curvv vs Hyundai Creta"
                          />
                          <span className="rupee_font">₹</span>11 Lakh
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Hyundai Creta"
                        href="/compare-cars/tata-curvv-vs-hyundai-creta/"
                      >
                        Tata Curvv vs Hyundai Creta
                      </a>
                    </p>
                  </div>
                </div>

                {/* <!-- Second comparison --> */}
                <div className="col-lg-4">
                  <div className="ver_pad ver_bdr_btm">
                    <div className="hover_color cursor-pointer">
                      <ul className="var_compare_img">
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Tata Nexon"
                            title="Compare Tata Curvv vs Tata Nexon"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/141873/nexon-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Tata Nexon"
                            title="Compare Tata Curvv vs Tata Nexon"
                          />
                          <span className="rupee_font">₹</span>8 Lakh
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Tata Nexon"
                        href="/compare-cars/tata-nexon-vs-tata-curvv/"
                      >
                        Tata Curvv vs Tata Nexon
                      </a>
                    </p>
                  </div>
                </div>

                {/* Third comparison  */}
                <div className="col-lg-4">
                  <div className="ver_pad ver_bdr_btm">
                    <div className="hover_color cursor-pointer">
                      <ul className="var_compare_img">
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare MG Windsor EV vs Tata Punch EV"
                            title="Compare MG Windsor EV vs Tata Punch EV"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/148367/punch-ev-right-front-three-quarter-2.jpeg?isig=0&q=80"
                            alt="Compare MG Windsor EV vs Tata Punch EV"
                            title="Compare MG Windsor EV vs Tata Punch EV"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="MG Windsor EV vs Tata Punch EV"
                        href="/compare-cars/mg-windsor-ev-vs-tata-punch-ev/"
                      >
                        MG Windsor EV vs Tata Punch EV
                      </a>
                    </p>
                  </div>
                </div>
                {/* <!-- Four comparison --> */}
                <div className="col-lg-4">
                  <div className="ver_pad ver_bdr_btm">
                    <div className="hover_color cursor-pointer">
                      <ul className="var_compare_img">
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Hyundai Creta"
                            title="Compare Tata Curvv vs Hyundai Creta"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/107917/creta-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Hyundai Creta"
                            title="Compare Tata Curvv vs Hyundai Creta"
                          />
                          <span className="rupee_font">₹</span>11 Lakh
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Hyundai Creta"
                        href="/compare-cars/tata-curvv-vs-hyundai-creta/"
                      >
                        Tata Curvv vs Hyundai Creta
                      </a>
                    </p>
                  </div>
                </div>

                {/* <!-- Five comparison --> */}
                <div className="col-lg-4">
                  <div className="ver_pad ver_bdr_btm">
                    <div className="hover_color cursor-pointer">
                      <ul className="var_compare_img">
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Tata Nexon"
                            title="Compare Tata Curvv vs Tata Nexon"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/141873/nexon-facelift-right-front-three-quarter-2.jpeg?isig=0&q=80"
                            alt="Compare Tata Curvv vs Tata Nexon"
                            title="Compare Tata Curvv vs Tata Nexon"
                          />
                          <span className="rupee_font">₹</span>8 Lakh
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Tata Nexon"
                        href="/compare-cars/tata-nexon-vs-tata-curvv/"
                      >
                        Tata Curvv vs Tata Nexon
                      </a>
                    </p>
                  </div>
                </div>

                {/* Six comparison  */}
                <div className="col-lg-4">
                  <div className="ver_pad ver_bdr_btm">
                    <div className="hover_color cursor-pointer">
                      <ul className="var_compare_img">
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                            alt="Compare MG Windsor EV vs Tata Punch EV"
                            title="Compare MG Windsor EV vs Tata Punch EV"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="image_dimension"
                            loading="lazy"
                            src="https://imgd-ct.aeplcdn.com/144X81/n/cw/ec/148367/punch-ev-right-front-three-quarter-2.jpeg?isig=0&q=80"
                            alt="Compare MG Windsor EV vs Tata Punch EV"
                            title="Compare MG Windsor EV vs Tata Punch EV"
                          />
                          <span className="rupee_font">₹</span>9.99 Lakh
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="MG Windsor EV vs Tata Punch EV"
                        href="/compare-cars/mg-windsor-ev-vs-tata-punch-ev/"
                      >
                        MG Windsor EV vs Tata Punch EV
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inpad_left">
          <div className="ver_gray-bg container">
            <div className="ver_main find-the-cars-block">
              <h2 className="h2">Find New Cars of Your Choice</h2>
              <div className="tabs">
                <div className="expertUser">
                  <ul className="ver_popuc nav nav-tabs" role="tablist">
                    <li className="ver_tab-link nav-item">
                      <a
                        className="ver_reviewBtn1 nav-link active"
                        data-bs-toggle="tab"
                        href="#choice-1"
                        role="tab"
                        aria-selected="true"
                        title="By City"
                      >
                        Price Range
                        <span className="ver_bor_r" />
                      </a>
                    </li>
                    <li className="ver_tab-link nav-item">
                      <a
                        className="ver_reviewBtn1 nav-link "
                        data-bs-toggle="tab"
                        href="#choice-2"
                        role="tab"
                        aria-selected="false"
                        title="By Price"
                      >
                        Fuel Type
                        <span className="ver_bor_r" />
                      </a>
                    </li>
                    <li className="ver_tab-link nav-item">
                      <a
                        className="ver_reviewBtn1 nav-link "
                        data-bs-toggle="tab"
                        href="#choice-3"
                        role="tab"
                        aria-selected="false"
                        title="By Model"
                      >
                        Body Type
                        <span className="ver_bor_r" />
                      </a>
                    </li>
                    <li className="ver_tab-link nav-item">
                      <a
                        className="ver_reviewBtn1 nav-link "
                        data-bs-toggle="tab"
                        href="#choice-4"
                        role="tab"
                        aria-selected="true"
                        title="More Cars"
                      >
                        More
                        <span className="ver_bor_r" />
                      </a>
                    </li>
                  </ul>
                  <div className="allreviewCnt tab-content">
                    <div
                      className="ver_reviewCnt tab-pane active"
                      id="choice-1"
                    >
                      <div
                        className="ver_srch"
                        style={{ position: "relative" }}
                      >
                        <ul className="price-range">
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-3-lakh/"
                              title="Cars under 3 Lakh"
                            >
                              0-3 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-5-lakh/"
                              title="Cars under 5 Lakh"
                            >
                              2-5 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-8-lakh/"
                              title="Cars under 8 Lakh"
                            >
                              5-8 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-10-lakh/"
                              title="Cars under 10 Lakh"
                            >
                              6-10 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-12-lakh/"
                              title="Cars under 12 Lakh"
                            >
                              8-12 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-15-lakh/"
                              title="Cars under 15 Lakh"
                            >
                              10-15 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-20-lakh/"
                              title="Cars under 20 Lakh"
                            >
                              10-20 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-30-lakh/"
                              title="Cars under 30 Lakh"
                            >
                              20-30 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-40-lakh/"
                              title="Cars under 40 Lakh"
                            >
                              30-40 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-50-lakh/"
                              title="Cars under 50 Lakh"
                            >
                              40-50 Lakh
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-1-crore/"
                              title="Cars under 1 Crore"
                            >
                              50 Lakh - 1 Crore
                            </a>
                          </li>
                          <li>
                            <a
                              href="/new-cars/by-price/best-cars-under-5-crore/"
                              title="Cars under 5 Crore"
                            >
                              1Crore+
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ver_reviewCnt tab-pane" id="choice-2">
                      <ul className="fuel-type">
                        <li>
                          <a
                            href="/new-cars/best-petrol-cars-in-india/"
                            title="All Petrol Cars"
                          >
                            <img
                              alt="Petrol"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/f07e7c/petrol.svg"
                              width={28}
                              height={31}
                            />
                            <p>Petrol</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-diesel-cars-in-india/"
                            title="All Diesel Cars"
                          >
                            <img
                              alt="Diesel"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/f07e7c/diesel.svg"
                              width={28}
                              height={31}
                            />
                            <p>Diesel</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-cng-cars-in-india/"
                            title="All CNG Cars"
                          >
                            <img
                              alt="CNG"
                              src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/f07e7c/cng.svg"
                              width={28}
                              height={31}
                            />
                            <p>CNG</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-electric-cars-in-india/"
                            title="All Electric Cars"
                          >
                            <img
                              alt="Electric"
                              src="https://imgd.aeplcdn.com/0x0/cw/static/electric1.svg"
                              width={28}
                              height={31}
                            />
                            <p>Electric</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div  className="ver_reviewCnt tab-pane" id="choice-3">
                      <ul className="body-type">
                        <li>
                          <a
                            href="/new-cars/best-hatchback-cars-in-india/"
                            title="All Hatchback Cars"
                          >
                            <span>
                              <img
                                alt="Hatchback"
                                src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/hatchback.svg"
                                width={60}
                                height={27}
                              />
                            </span>
                            <p>Hatchback</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-sedan-cars-in-india/"
                            title="All Sedan Cars"
                          >
                            <span>
                              <img
                                alt="Sedan"
                                src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/sedan.svg"
                                width={60}
                                height={27}
                              />
                            </span>
                            <p>Sedan</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-suv-cars-in-india/"
                            title="All SUV Cars"
                          >
                            <span>
                              <img
                                alt="SUV"
                                src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/suv.svg"
                                width={60}
                                height={27}
                              />
                            </span>
                            <p>SUV</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-mpv-muv-cars-in-india/"
                            title="All MUV Cars"
                          >
                            <span>
                              <img
                                alt="MUV"
                                src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/muv.svg"
                                width={60}
                                height={27}
                              />
                            </span>
                            <p>MUV</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-coupe-cars-in-india/"
                            title="All Coupe Cars"
                          >
                            <span>
                              <img
                                alt="Coupe"
                                src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/coupe.svg"
                                width={60}
                                height={27}
                              />
                            </span>
                            <p>Coupe</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-convertible-cars-in-india/"
                            title="All Convertible Cars"
                          >
                            <span>
                              <img
                                alt="Convertible"
                                src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/convertible.svg"
                                width={60}
                                height={27}
                              />
                            </span>
                            <p>Convertible</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div id="choice-4" className="ver_reviewCnt tab-pane">
                      <ul className="price-range seating-capactiy">
                        <li>
                          <a
                            href="/new-cars/best-cars-in-india/"
                            title="All Popular Cars"
                          >
                            Popular
                          </a>
                        </li>
                        <li>
                          <a href="/new-car-launches/" title="All Latest Cars">
                            Latest
                          </a>
                        </li>
                        <li>
                          <a href="/upcoming-cars/" title="All Upcoming Cars">
                            Upcoming
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-luxury-cars-in-india/"
                            title="All Luxury Cars"
                          >
                            Luxury
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-sunroof-cars-in-india/"
                            title="All Sunroof Cars"
                          >
                            Sunroof
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-6-seater-cars-in-india/"
                            title="All 6 Seater Cars"
                          >
                            6 Seater
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-7-seater-cars-in-india/"
                            title="All 7 Seater Cars"
                          >
                            7 Seater
                          </a>
                        </li>
                        <li>
                          <a
                            href="/new-cars/best-8-seater-cars-in-india/"
                            title="All 8 Seater Cars"
                          >
                            8 Seater
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default AllCars;
