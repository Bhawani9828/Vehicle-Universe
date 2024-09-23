import { useEffect } from "react";

function AllBikes() {
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
                    Used Bike
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
                    New Bike
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
              Popular New Bikes
              <button
                title="View All New Cars in India"
                className="var_view color-scarlet border-0"
              >
                View All
              </button>
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
                      Popular Bikes
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
                      Upcoming Bikes <span className="ver_bor_r" />
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/124013/hunter-350-right-side-view-5.png?isig=0&q=80"
                                          alt="Royal Enfield Hunter 350"
                                          title="Royal Enfield Hunter 350"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/tata-cars/curvv/"
                                            className="var_upc_tit"
                                            title="Tata Curvv"
                                          >
                                            Royal Enfield Hunter 350
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          1,49,900 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/183389/classic-350-right-side-view-62.jpeg?isig=0&q=80"
                                          alt="Royal Enfield Classic 350"
                                          title="Royal Enfield Classic 350"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/mg-cars/windsor-ev/"
                                            className="var_upc_tit"
                                            title="MG Windsor EV"
                                          >
                                            Royal Enfield Classic 350
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          1,99,499 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/115871/mt-15-right-side-view-3.png?isig=0&q=80"
                                          alt="Yamaha MT 15 V2"
                                          title="Yamaha MT 15 V2"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/alcazar/"
                                            className="var_upc_tit"
                                            title="Hyundai Alcazar"
                                          >
                                            Yamaha MT 15 V2
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          1,69,207 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/185315/jupiter-right-side-view-16.jpeg?isig=0&q=80"
                                          alt="TVS Jupiter"
                                          title="TVS Jupiter"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/maruti-suzuki-cars/fronx/"
                                            className="var_upc_tit"
                                            title="Maruti Suzuki Fronx"
                                          >
                                            TVS Jupiter
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          77,199 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/43482/sp-125-right-side-view-10.png?isig=0&q=80"
                                          alt="Honda SP 125"
                                          title="Honda SP 125"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/exter/"
                                            className="var_upc_tit"
                                            title="Hyundai Exter"
                                          >
                                            Honda SP 125
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          87,383 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/187417/speed-400-2024-right-side-view.jpeg?isig=0&q=80"
                                          alt="Triumph Speed 400"
                                          title="Triumph Speed 400"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/creta/"
                                            className="var_upc_tit"
                                            title="Hyundai Creta"
                                          >
                                            Triumph Speed 400
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          2,40,000 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/103183/raider-125-right-side-view-20.png?isig=0&q=80"
                                          alt="TVS Raider 125"
                                          title="TVS Raider 125"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/citroen-cars/basalt/"
                                            className="var_upc_tit"
                                            title="Citroen Basalt"
                                          >
                                            TVS Raider 125
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          97,180
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/103795/r15-right-side-view-7.png?isig=0&q=80"
                                          alt="Yamaha R15 V4"
                                          title="Yamaha R15 V4"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/mahindra-cars/scorpio/"
                                            className="var_upc_tit"
                                            title="Mahindra Scorpio"
                                          >
                                            Yamaha R15 V4
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          1,83,464 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/187453/rv1-right-side-view.jpeg?isig=0&q=80"
                                          alt="Revolt RV1"
                                          title="Revolt RV1"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/tata-cars/punch/"
                                            className="var_upc_tit"
                                            title="Tata Punch"
                                          >
                                            Revolt RV1
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          84,990 Onwards
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
                                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                          src="https://imgd.aeplcdn.com/310x174/n/cw/ec/187417/speed-400-2024-right-side-view.jpeg?isig=0&q=80"
                                          alt="Triumph Speed 400"
                                          title="Triumph Speed 400"
                                        />
                                      </div>
                                      <div className="ver_rcar-det">
                                        <div className="ver_cr-tit1">
                                          <a
                                            href="/hyundai-cars/creta/"
                                            className="var_upc_tit"
                                            title="Hyundai Creta"
                                          >
                                            Triumph Speed 400
                                          </a>
                                        </div>
                                        <div className="ver_onlakd1">
                                          <span className="rupee_font font_18">
                                            ₹
                                          </span>
                                          2,40,000 Onwards
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
              POPULAR USED Bikes{" "}
              <button
                title="View All Used Cars in India"
                className="var_view color-scarlet border-0"
              >
                View All
              </button>
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
                      Scooters
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
                      Sports
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
                      Best Mileage Bikes
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
                      Cruisers
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
                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/185315/jupiter-right-side-view-16.jpeg?isig=0&q=80"
                                  alt="TVS Jupiter"
                                  title="TVS Jupiter"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  TVS Jupiter
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 77,199
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/44686/activa-6g-right-side-view-2.png?isig=0&q=80"
                                  alt="Honda Activa 6G"
                                  title="Honda Activa 6G"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  Honda Activa 6G
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 78,376
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100"
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49444/ntorq-125-right-side-view-11.png?isig=0&q=80"
                                  alt="TVS Ntorq 125"
                                  title="TVS Ntorq 125"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  TVS Ntorq 125
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 94,174
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ver_reviewCnt_used tab-pane" id="Price-1">
                    <div className="ver_srch">
                      <div className="ver_pup-blk-out row g-4">
                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/103795/r15-right-side-view-7.png?isig=0&q=80"
                                  alt="Yamaha R15 V4"
                                  title="Yamaha R15 V4"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  Yamaha R15 V4
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 1,83,464
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/187327/apache-rr-310-right-side-view.jpeg?isig=0&q=80"
                                  alt="TVS Apache RR 310"
                                  title="TVS Apache RR 310"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  TVS Apache RR 310
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 2,75,000
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/123865/g310-rr-right-side-view-5.jpeg?isig=0&q=80"
                                  alt="BMW G310 RR"
                                  title="BMW G310 RR"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  BMW G310 RR
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 3,05,000
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ver_reviewCnt_used tab-pane " id="Model-1">
                    <div className="ver_srch">
                      <div className="ver_pup-blk-out row g-4">
                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49446/sport-right-side-view-2.png?isig=0&q=80"
                                  alt="TVS Sport"
                                  title="TVS Sport"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  TVS Sport
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 64,407
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/43482/sp-125-right-side-view-10.png?isig=0&q=80"
                                  alt="Honda SP 125"
                                  title="Honda SP 125"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  Honda SP 125
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 87,383
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                          >
                            <div
                              title="Yamaha R15 V4"
                              className="o-brXWGL ccQ1nm"
                            >
                              <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                                <img
                                  className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100"
                                  src="https://imgd.aeplcdn.com/310x174/n/cw/ec/49452/hf-deluxe-right-side-view-2.png?isig=0&q=80"
                                  alt="Hero HF Deluxe"
                                  title="Hero HF Deluxe"
                                />
                              </div>
                            </div>
                            <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                              <h6
                                title="Yamaha R15 V4"
                                href="/yamaha-bikes/r15/"
                              >
                                <div
                                  className="o-cVMLxW o-jjpuv o-cJrNdO"
                                  color="black"
                                >
                                  Hero HF Deluxe
                                </div>
                              </h6>
                              <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                                <div
                                  className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                  style={{ color: "#333", fontWeight: "700" }}
                                >
                                  ₹ 56,308
                                  <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                    Onwards
                                  </span>
                                </div>
                              </div>
                              <div
                                data-lang-id="pricetype_label"
                                className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                              >
                                Avg. Ex-Showroom price
                              </div>
                              <button
                                className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                                style={{
                                  border: "1px solid #5b1188",
                                  fontFamily: "fantasy",
                                  color: "#5b1188",
                                }}
                                type="button"
                              >
                                Check on-road price
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ver_reviewCnt_used tab-pane " id="Cars-1">
                    <div className=" row g-4" style={{ position: "relative" }}>
                      <div className="col-lg-4">
                        <div
                          className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                        >
                          <div
                            title="Yamaha R15 V4"
                            className="o-brXWGL ccQ1nm"
                          >
                            <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                              <img
                                className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100"
                                src="https://imgd.aeplcdn.com/310x174/n/cw/ec/145655/x440-right-side-view-8.png?isig=0&q=80"
                                alt="Harley-Davidson X440"
                                title="Harley-Davidson X440"
                              />
                            </div>
                          </div>
                          <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                            <h6 title="Yamaha R15 V4" href="/yamaha-bikes/r15/">
                              <div
                                className="o-cVMLxW o-jjpuv o-cJrNdO"
                                color="black"
                              >
                                Harley-Davidson X440
                              </div>
                            </h6>
                            <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                              <div
                                className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                style={{ color: "#333", fontWeight: "700" }}
                              >
                                ₹ 2,39,500
                                <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                  Onwards
                                </span>
                              </div>
                            </div>
                            <div
                              data-lang-id="pricetype_label"
                              className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                            >
                              Avg. Ex-Showroom price
                            </div>
                            <button
                              className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                              style={{
                                border: "1px solid #5b1188",
                                fontFamily: "fantasy",
                                color: "#5b1188",
                              }}
                              type="button"
                            >
                              Check on-road price
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                        >
                          <div
                            title="Yamaha R15 V4"
                            className="o-brXWGL ccQ1nm"
                          >
                            <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                              <img
                                className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                src="https://imgd.aeplcdn.com/310x174/n/cw/ec/186271/42-fj-right-side-view-20.jpeg?isig=0&q=80"
                                alt="Jawa 42 FJ"
                                title="Jawa 42 FJ"
                              />
                            </div>
                          </div>
                          <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                            <h6 title="Yamaha R15 V4" href="/yamaha-bikes/r15/">
                              <div
                                className="o-cVMLxW o-jjpuv o-cJrNdO"
                                color="black"
                              >
                                Jawa 42 FJ
                              </div>
                            </h6>
                            <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                              <div
                                className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                style={{ color: "#333", fontWeight: "700" }}
                              >
                                ₹ 1,99,142
                                <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                  Onwards
                                </span>
                              </div>
                            </div>
                            <div
                              data-lang-id="pricetype_label"
                              className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                            >
                              Avg. Ex-Showroom price
                            </div>
                            <button
                              className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                              style={{
                                border: "1px solid #5b1188",
                                fontFamily: "fantasy",
                                color: "#5b1188",
                              }}
                              type="button"
                            >
                              Check on-road price
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div
                          className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-eFudgX o-fklLUJ o-cglRxs o-cYOpxG o-qqdXv o-byjfLe border border-2 p-3
  "
                        >
                          <div
                            title="Yamaha R15 V4"
                            className="o-brXWGL ccQ1nm"
                          >
                            <div className="o-bfyaNx o-brXWGL o-bqHweY   PhYMAu">
                              <img
                                className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                                src="https://imgd.aeplcdn.com/310x174/n/cw/ec/103795/r15-right-side-view-7.png?isig=0&q=80"
                                alt="Yamaha R15 V4"
                                title="Yamaha R15 V4"
                              />
                            </div>
                          </div>
                          <div className="o-fznJzu o-fzptZB o-fzptOP o-fznVCp o-efHQCX o-bTDyCI o-biwSqu o-cpnuEd">
                            <h6 title="Yamaha R15 V4" href="/yamaha-bikes/r15/">
                              <div
                                className="o-cVMLxW o-jjpuv o-cJrNdO"
                                color="black"
                              >
                                Yamaha R15 V4
                              </div>
                            </h6>
                            <div className="o-fzpihx o-dsiSgT o-cpnuEd">
                              <div
                                className="o-eqqVmt o-jjpuv o-cJrNdO o-SoIQT o-cpnuEd"
                                style={{ color: "#333", fontWeight: "700" }}
                              >
                                ₹ 1,83,464
                                <span className="o-fzpimR o-cVMLxW o-eemiLE o-cwUopP">
                                  Onwards
                                </span>
                              </div>
                            </div>
                            <div
                              data-lang-id="pricetype_label"
                              className="o-cVMLxW o-eemiLE o-zmksK o-fzpihx  o-cpnuEdd"
                            >
                              Avg. Ex-Showroom price
                            </div>
                            <button
                              className="o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT  p-1 px-3 mt-2 bg-white o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE   o-eemiLE o-dAFptd u74LDI o-chzWeu
      o-vYvcJ
      o-gMWA
   o-fznVqX o-fznVsN o-fzptUA "
                              style={{
                                border: "1px solid #5b1188",
                                fontFamily: "fantasy",
                                color: "#5b1188",
                              }}
                              type="button"
                            >
                              Check on-road price
                            </button>
                          </div>
                        </div>
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
            <h2 className="ver_ttl">Search New Bikes By Brand</h2>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/royal-enfield20200508193112.jpg?q=80"
                        alt="Royal Enfield Bikes"
                        title="Royal Enfield Bikes"
                      />
                    </a>
                    <a
                      href="/maruti-suzuki-cars/"
                      title="Maruti Suzuki"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Royal Enfield</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP brand_image o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/honda20200511152343.jpg?q=80"
                        alt="Honda Bikes"
                        title="Honda Bikes"
                      />
                    </a>
                    <a
                      href="/tata-cars/"
                      title="Tata"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Honda</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP brand_image o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/hero20200508192826.jpg?q=80"
                        alt="Hero Bikes"
                        title="Hero Bikes"
                      />
                    </a>
                    <a
                      href="/toyota-cars/"
                      title="Toyota"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Hero</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/bajaj20200508192534.jpg?q=80"
                        alt="Bajaj Bikes"
                        title="Bajaj Bikes"
                      />
                    </a>
                    <a
                      href="/hyundai-cars/"
                      title="Hyundai"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Bajaj</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/yamaha20200508193220.jpg?q=80"
                        alt="Yamaha Bikes"
                        title="Yamaha Bikes"
                      />
                    </a>
                    <a
                      href="/mahindra-cars/"
                      title="Mahindra"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Yamaha</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/tvs20200508193203.jpg?q=80"
                        alt="TVS Bikes"
                        title="TVS Bikes"
                      />
                    </a>
                    <a
                      href="/bmw-cars/"
                      title="BMW"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">TVS</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/triumph20200508193154.jpg?q=80"
                        alt="Triumph Bikes"
                        title="Triumph Bikes"
                      />
                    </a>
                    <a
                      href="/kia-cars/"
                      title="Kia"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Triumph</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/kawasaki1656405887432.jpg?v=1656405887528&q=80"
                        alt="Kawasaki Bikes"
                        title="Kawasaki Bikes"
                      />
                    </a>
                    <a
                      href="/mercedes-cars/"
                      title="Mercedes-Benz"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Kawasaki</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/bmw20200508192553.jpg?q=80"
                        alt="BMW Bikes"
                        title="BMW Bikes"
                      />
                    </a>
                    <a
                      href="/mg-cars/"
                      title="MG"
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
                      href="/audi-cars/"
                      title="Audi"
                      className="ncpalink2 imaglinknew"
                    >
                      <img
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/ktm20200518163508.jpg?q=80"
                        alt="KTM Bikes"
                        title="KTM Bikes"
                      />
                    </a>
                    <a
                      href="/audi-cars/"
                      title="Audi"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">KTM</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/harleydavidson20200508192816.jpg?q=80"
                        alt="Harley-Davidson Bikes"
                        title="Harley-Davidson Bikes"
                      />
                    </a>
                    <a
                      href="/skoda-cars/"
                      title="Skoda"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Harley-Davidson</span>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL brand_image o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0X0/bw/makes/indian20200508192932.jpg?q=80"
                        alt="Indian Bikes"
                        title="Indian Bikes"
                      />
                    </a>
                    <a
                      href="/land-rover-cars/"
                      title="Land Rover"
                      itemProp="url"
                      className="ncpalink2 color-scarlet"
                    >
                      <span itemProp="name">Indian</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="view_hd_btn d-flex justify-content-center mt-4 ">
                <button className="view_m_brnd color-scarlet border-0">
                  View All
                </button>
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
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/187787/ducati-panigale-v4-right-front-three-quarter4.jpeg?isig=0&q=80"
                        alt="MotoGP 2024: Ducati's Pecco Bagnaia wins the Emilia Romagna Sprint"
                        title="MotoGP 2024: Ducati's Pecco Bagnaia wins the Emilia Romagna Sprint"
                      />
                      <div className="ver_pad">
                        <div className="ver_video_tp1">
                          <div className="ver_video_ttl">
                            <a
                              href="/news/new-kia-carnival-features-variants-colours-and-engine-options-revealed/"
                              title="New Kia Carnival features, variants, colours, and engine options revealed"
                              className="title_truncate color-scarlet"
                              style={{
                                color: "#333",
                                fontSize: "17px",
                                fontWeight: "700",
                              }}
                            >
                              MotoGP 2024: Ducati s Pecco Bagnaia wins the
                              Emilia Romagna Sprint
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
                        <button
                          title="Read full news"
                          className="redcolor border-0"
                        >
                          Read full news{" "}
                        </button>
                      </div>
                    </li>
                    <li
                      className=" col-lg-4 overflow-hidden"
                      data-testing-id="news-card-187293"
                    >
                      <img
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/187785/triumph-speed-t4-right-side-view0.jpeg?isig=0&q=80"
                        alt="Your weekly dose of bike updates: Triumph Speed T4, 2024 TVS Apache RR 310, and more!"
                        title="Your weekly dose of bike updates: Triumph Speed T4, 2024 TVS Apache RR 310, and more!"
                      />
                      <div className="ver_pad">
                        <div className="ver_video_tp1">
                          <div className="ver_video_ttl">
                            <a
                              href="/news/mercedes-benz-eqs-suv-launched-in-india-priced-at-rs-141-crore/"
                              title="Mercedes-Benz EQS SUV launched in India; priced at Rs. 1.41 crore"
                              className="title_truncate color-scarlet"
                              style={{
                                color: "#333",
                                fontSize: "17px",
                                fontWeight: "700",
                              }}
                            >
                              Your weekly dose of bike updates: Triumph Speed
                              T4, 2024 TVS Apache RR 310, and more!
                            </a>
                          </div>
                          <div className="ver_video_time">
                            {" "}
                            September 16, 2024 | Jay Shah{" "}
                          </div>
                        </div>
                        <p className="news_description title_truncate mb-4">
                          The Indian two-wheeler market witnessed plenty of new
                          two-wheeler launches last week in multiple segments.
                        </p>
                        <button
                          title="Read full news"
                          className="redcolor border-0"
                        >
                          Read full news{" "}
                        </button>
                      </div>
                    </li>
                    <li
                      className=" col-lg-4 ver_mar_r_none overflow-hidden"
                      data-testing-id="news-card-187283"
                    >
                      <img
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/187769/triumph-speed-t4-right-side-view0.jpeg?isig=0&q=80"
                        alt="Triumph Speed T4 available in 3 colour options"
                        title="Triumph Speed T4 available in 3 colour options"
                      />
                      <div className="ver_pad">
                        <div className="ver_video_tp1">
                          <div className="ver_video_ttl">
                            <a
                              href="/news/honda-launches-elevate-apex-edition-prices-in-india-start-at-rs-1286-lakh/"
                              title="Honda launches Elevate Apex Edition; prices in India start at Rs. 12.86 lakh"
                              className="title_truncate color-scarlet"
                              style={{
                                color: "#333",
                                fontSize: "17px",
                                fontWeight: "700",
                              }}
                            >
                              Triumph Speed T4 available in 3 colour options
                            </a>
                          </div>
                          <div className="ver_video_time">
                            {" "}
                            September 16, 2024 | Aditya Nadkarni{" "}
                          </div>
                        </div>
                        <p className="news_description title_truncate mb-4">
                          With a price tag of Rs. 2.17 lakh, ex-showroom, it is
                          available in three different colour options.
                        </p>
                        <button
                          title="Read full news"
                          className="redcolor border-0"
                        >
                          Read full news{" "}
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div id="buseds" className="ver_reviewCnts   tab-pane">
                  <ul className="ver_news ver_expertreview row">
                    <li
                      className="col-lg-4"
                      data-testing-id="expert-review-card-185231"
                    >
                      <div
                        title="Mahindra Thar Roxx First Drive Review"
                        data-category="Expert Reviews"
                        className="ver_img_blk cursor-pointer"
                      >
                        <img
                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                          src="https://imgd.aeplcdn.com/370x208/n/cw/ec/187707/ultraviolette-f77-mach-2-right-side-view0.jpeg?isig=0&q=80"
                          alt="Ultraviolette F99 unveiled in India"
                          title="Ultraviolette F99 unveiled in India"
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
                              style={{
                                color: "#333",
                                fontSize: "17px",
                                fontWeight: "700",
                              }}
                            >
                              Ultraviolette F99 unveiled in India
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="col-lg-4"
                      data-testing-id="expert-review-card-184297"
                    >
                      <div
                        title=" Citroen Basalt First Drive Review"
                        data-category="Expert Reviews"
                        className="ver_img_blk cursor-pointer"
                      >
                        <img
                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                          src="https://imgd.aeplcdn.com/370x208/n/cw/ec/187607/triumph-speed-400-right-side-view4.jpeg?isig=0&q=80"
                          alt="Triumph Speed 400 vs Triumph Speed T4: Key differences"
                          title="Triumph Speed 400 vs Triumph Speed T4: Key differences"
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
                              style={{
                                color: "#333",
                                fontSize: "17px",
                                fontWeight: "700",
                              }}
                            >
                              {" "}
                              Triumph Speed 400 vs Triumph Speed T4: Key
                              differences
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li
                      className="ver_mar_r_none col-lg-4"
                      data-testing-id="expert-review-card-182691"
                    >
                      <div
                        title="Nissan X-Trail First Drive Review "
                        data-category="Expert Reviews"
                        className="ver_img_blk cursor-pointer"
                      >
                        <img
                          className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                          src="https://imgd.aeplcdn.com/370x208/n/cw/ec/187529/tvs-apache-rr-310-right-side-view0.jpeg?isig=0&q=80"
                          alt="2024 TVS Apache RR 310: What is new?"
                          title="2024 TVS Apache RR 310: What is new?"
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
                              style={{
                                color: "#333",
                                fontSize: "17px",
                                fontWeight: "700",
                              }}
                            >
                              2024 TVS Apache RR 310: What is new?
                            </a>
                          </div>
                        </div>
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
              <h2 className="ver_ttl ">Popular New Bikes Comparisons</h2>
              <div className="row border border-1">
                {/* <!-- First comparison --> */}
                <div className="col-lg-4">
                  <div className="ver_pad ver_bdr_btm">
                    <div className="hover_color cursor-pointer">
                      <ul className="var_compare_img">
                        <li>
                          <img
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI image_dimension w-100"
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/124013/hunter-350-right-side-view-5.png?isig=0&q=80"
                            alt="Royal Enfield Hunter 350"
                            title="Royal Enfield Hunter 350"
                          />
                          <span className="rupee_font">₹</span>1,49,900
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs w-100"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI image_dimension w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/124775/ronin-right-side-view-7.png?isig=0&q=80"
                            alt="TVS Ronin"
                            title="TVS Ronin"
                          />
                          <span className="rupee_font">₹</span> 1,49,201
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Hyundai Creta"
                        href="/compare-cars/tata-curvv-vs-hyundai-creta/"
                        style={{
                          color: "#333",
                          fontSize: "17px",
                          fontWeight: "700",
                        }}
                      >
                        Hunter 350 vs Ronin
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
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100"
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/183389/classic-350-right-side-view-62.jpeg?isig=0&q=80"
                            alt="Royal Enfield Classic 350"
                            title="Royal Enfield Classic 350"
                          />
                          <span className="rupee_font">₹</span>1,99,499
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs w-100"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/164985/cb350-right-side-view-6.png?isig=0&q=80"
                            alt="Honda CB350"
                            title="Honda CB350"
                          />
                          <span className="rupee_font">₹</span> 2,00,185
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Tata Nexon"
                        href="/compare-cars/tata-nexon-vs-tata-curvv/"
                        style={{
                          color: "#333",
                          fontSize: "17px",
                          fontWeight: "700",
                        }}
                      >
                        Classic 350 vs CB350
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
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/115871/mt-15-right-side-view-3.png?isig=0&q=80"
                            alt="Yamaha MT 15 V2"
                            title="Yamaha MT 15 V2"
                          />
                          <span className="rupee_font">₹</span> 1,69,207
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs w-100"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/103795/r15-right-side-view-7.png?isig=0&q=80"
                            alt="Yamaha R15 V4"
                            title="Yamaha R15 V4"
                          />
                          <span className="rupee_font">₹</span> 1,83,464
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="MG Windsor EV vs Tata Punch EV"
                        href="/compare-cars/mg-windsor-ev-vs-tata-punch-ev/"
                        style={{
                          color: "#333",
                          fontSize: "17px",
                          fontWeight: "700",
                        }}
                      >
                        MT 15 V2 vs R15 V4
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
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/185315/jupiter-right-side-view-16.jpeg?isig=0&q=80"
                            alt="TVS Jupiter"
                            title="TVS Jupiter"
                          />
                          <span className="rupee_font">₹</span> 77,199
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs w-100"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/44686/activa-6g-right-side-view-2.png?isig=0&q=80"
                            alt="Honda Activa 6G"
                            title="Honda Activa 6G"
                          />
                          <span className="rupee_font">₹</span> 78,376
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Hyundai Creta"
                        href="/compare-cars/tata-curvv-vs-hyundai-creta/"
                        style={{
                          color: "#333",
                          fontSize: "17px",
                          fontWeight: "700",
                        }}
                      >
                        Jupiter vs Honda
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
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/43482/sp-125-right-side-view-10.png?isig=0&q=80"
                            alt="Honda SP 125"
                            title="Honda SP 125"
                          />
                          <span className="rupee_font">₹</span> 87,383
                        </li>
                        <li className="sml_vs">
                          <img
                            className="image_vs w-100"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/45481/shine-right-side-view-3.png?isig=0&q=80"
                            alt="Honda Shine"
                            title="Honda Shine"
                          />
                          <span className="rupee_font">₹</span> 81,119
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="Tata Curvv vs Tata Nexon"
                        href="/compare-cars/tata-nexon-vs-tata-curvv/"
                        style={{
                          color: "#333",
                          fontSize: "17px",
                          fontWeight: "700",
                        }}
                      >
                        SP 125 vs Shine
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
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/103183/raider-125-right-side-view-20.png?isig=0&q=80"
                            alt="TVS Raider 125"
                            title="TVS Raider 125"
                          />
                          <span className="rupee_font">₹</span> 97,180
                        </li>
                        <li className="sml_vs ">
                          <img
                            className="image_vs w-100"
                            loading="lazy"
                            src="https://imgd.aeplcdn.com/0x0/ct/static/icons/svg/vs.svg"
                            alt="vs"
                            title="vs"
                          />
                        </li>
                        <li>
                          <img
                            className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI w-100 "
                            src="https://imgd.aeplcdn.com/227x128/n/cw/ec/130211/apache-160-right-side-view-2.png?isig=0&q=80"
                            alt="TVS Apache RTR 160"
                            title="TVS Apache RTR 160"
                          />
                          <span className="rupee_font">₹</span> 1,17,224
                        </li>
                      </ul>
                    </div>
                    <p className="ver_fnt_bld">
                      <a
                        className="color-scarlet"
                        title="MG Windsor EV vs Tata Punch EV"
                        href="/compare-cars/mg-windsor-ev-vs-tata-punch-ev/"
                        style={{
                          color: "#333",
                          fontSize: "17px",
                          fontWeight: "700",
                        }}
                      >
                        Raider 125 vs Apache RTR 160
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
              <h2 className="h2">Find New Bikes of Your Choice</h2>
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

export default AllBikes;
