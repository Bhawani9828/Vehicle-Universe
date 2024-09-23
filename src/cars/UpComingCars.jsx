import { useState } from "react";
import { Link } from "react-router-dom";
import CarHeader from "../components/CarHeader";

function UpComingCars() {
  const [showMore, setShowMore] = useState(false);

  // Toggle the "Read More" state
  const toggleReadMore = () => {
    setShowMore((prev) => !prev);
  };
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
            UpComing Cars
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/cars">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">
              UpComing Cars
            </li>
          </ol>
        </div>
      </div>
      {/* Header End */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div>
                <h1 className="heading-h1 font-25">
                  Upcoming Cars in India 2024
                </h1>

                <div className="mt-2 seotext_read_less" id="seotext-content">
                  <p className="line-height-23 color-comet mb-2">
                    There are 74 upcoming cars in India. Some of the popular
                    upcoming cars are Kia New Carnival, Renault Duster, Maruti
                    Suzuki New Dzire, Honda WR-V and Tata Avinya. New EV9,
                    Gloster facelift, Tucson...
                    {showMore ? (
                      <>
                        facelift and ID.4 are the most awaited upcoming SUVs in
                        India. Nexon is the upcoming CNG car in India.{" "}
                        <a
                          href="/upcoming-cars/electric-cars/"
                          title="Upcoming electric cars"
                          className="color-pacific-blue"
                        >
                          Upcoming electric cars
                        </a>{" "}
                        in India are New EV9, New E-Class, Harrier EV, Ocean EV
                        etc.
                        <br />
                        We have hand-picked popular upcoming cars with
                        information like expected price, launch date, images,
                        and specifications.
                        <h2 className="heading-h2 m-0 mb-2">
                          Popular Upcoming Cars in 2024
                        </h2>
                        <table className="seo-table">
                          <thead>
                            <tr className="seo-header-row">
                              <th className="seo-header-value pl-4 pr-4">
                                Model
                              </th>
                              <th className="seo-header-value pl-4 pr-4">
                                Expected Price
                              </th>
                              <th className="seo-header-value pl-4 pr-4">
                                Expected Launch Date
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="seo-row">
                              <td className="seo-field-value pl-4 pr-4">
                                Kia New Carnival
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                ₹ 40.00 - 45.00 Lakh
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                3rd October 2024
                              </td>
                            </tr>
                            <tr className="seo-row">
                              <td className="seo-field-value pl-4 pr-4">
                                Renault Duster
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                ₹ 10.00 - 15.00 Lakh
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                June 2025
                              </td>
                            </tr>
                            <tr className="seo-row">
                              <td className="seo-field-value pl-4 pr-4">
                                Maruti Suzuki New Dzire
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                ₹ 7.00 - 10.00 Lakh
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                September 2024
                              </td>
                            </tr>
                            <tr className="seo-row">
                              <td className="seo-field-value pl-4 pr-4">
                                Honda WR-V
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                ₹ 9.00 - 12.00 Lakh
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                March 2026
                              </td>
                            </tr>
                            <tr className="seo-row ">
                              <td className="seo-field-value pl-4 pr-4">
                                Tata Avinya
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                ₹ 30.00 - 60.00 Lakh
                              </td>
                              <td className="seo-field-value pl-4 pr-4">
                                June 2025
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    ) : null}
                    {/* Button to toggle "Read More" */}
                    <button
                      className="seotext_read_more"
                      id="read-more"
                      onClick={toggleReadMore}
                    >
                      {showMore ? "- Less" : "+ More"}
                    </button>
                  </p>
                </div>
              </div>

              <div>
                <ul className="upcome">
                  <li
                    itemProp="item"
                    data-testing-id="upcoming-car-card-0"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                  >
                    <div className="left_block">
                      <img
                        className="cursor-pointer"
                        itemProp="image"
                        title="Upcoming Maruti Suzuki New Dzire"
                        alt="Upcoming Maruti Suzuki New Dzire"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                      />
                    </div>
                    <div className="right_block">
                      <h3 className="font-22">
                        <a
                          href="/maruti-suzuki-cars/new-dzire/"
                          title="Maruti Suzuki New Dzire"
                          className="color-scarlet"
                        >
                          <span itemProp="name">Maruti Suzuki New Dzire</span>
                        </a>
                      </h3>
                      <div className="row">
                        <div className="column prc">
                          <span>
                            <span className="rupee_font" />₹ 7.00 - 10.00 Lakh
                          </span>
                          <span> Estimated Price</span>
                        </div>
                        <div className="column launch">
                          <span>September 2024</span>
                          <span>Expected Launch</span>
                        </div>
                      </div>
                      <div className="clear" />
                      <p itemProp="description">
                        We expect the new Maruti Dzire to be launched in India
                        in the first half of CY 2024{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    itemProp="item"
                    data-testing-id="upcoming-car-card-0"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                  >
                    <div className="left_block">
                      <img
                        className="cursor-pointer"
                        itemProp="image"
                        title="Upcoming Maruti Suzuki New Dzire"
                        alt="Upcoming Maruti Suzuki New Dzire"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                      />
                    </div>
                    <div className="right_block">
                      <h3 className="font-22">
                        <a
                          href="/maruti-suzuki-cars/new-dzire/"
                          title="Maruti Suzuki New Dzire"
                          className="color-scarlet"
                        >
                          <span itemProp="name">Maruti Suzuki New Dzire</span>
                        </a>
                      </h3>
                      <div className="row">
                        <div className="column prc">
                          <span>
                            <span className="rupee_font" />₹ 7.00 - 10.00 Lakh
                          </span>
                          <span> Estimated Price</span>
                        </div>
                        <div className="column launch">
                          <span>September 2024</span>
                          <span>Expected Launch</span>
                        </div>
                      </div>
                      <div className="clear" />
                      <p itemProp="description">
                        We expect the new Maruti Dzire to be launched in India
                        in the first half of CY 2024{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    itemProp="item"
                    data-testing-id="upcoming-car-card-0"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                  >
                    <div className="left_block">
                      <img
                        className="cursor-pointer"
                        itemProp="image"
                        title="Upcoming Maruti Suzuki New Dzire"
                        alt="Upcoming Maruti Suzuki New Dzire"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                      />
                    </div>
                    <div className="right_block">
                      <h3 className="font-22">
                        <a
                          href="/maruti-suzuki-cars/new-dzire/"
                          title="Maruti Suzuki New Dzire"
                          className="color-scarlet"
                        >
                          <span itemProp="name">Maruti Suzuki New Dzire</span>
                        </a>
                      </h3>
                      <div className="row">
                        <div className="column prc">
                          <span>
                            <span className="rupee_font" />₹ 7.00 - 10.00 Lakh
                          </span>
                          <span> Estimated Price</span>
                        </div>
                        <div className="column launch">
                          <span>September 2024</span>
                          <span>Expected Launch</span>
                        </div>
                      </div>
                      <div className="clear" />
                      <p itemProp="description">
                        We expect the new Maruti Dzire to be launched in India
                        in the first half of CY 2024{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    itemProp="item"
                    data-testing-id="upcoming-car-card-0"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                  >
                    <div className="left_block">
                      <img
                        className="cursor-pointer"
                        itemProp="image"
                        title="Upcoming Maruti Suzuki New Dzire"
                        alt="Upcoming Maruti Suzuki New Dzire"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                      />
                    </div>
                    <div className="right_block">
                      <h3 className="font-22">
                        <a
                          href="/maruti-suzuki-cars/new-dzire/"
                          title="Maruti Suzuki New Dzire"
                          className="color-scarlet"
                        >
                          <span itemProp="name">Maruti Suzuki New Dzire</span>
                        </a>
                      </h3>
                      <div className="row">
                        <div className="column prc">
                          <span>
                            <span className="rupee_font" />₹ 7.00 - 10.00 Lakh
                          </span>
                          <span> Estimated Price</span>
                        </div>
                        <div className="column launch">
                          <span>September 2024</span>
                          <span>Expected Launch</span>
                        </div>
                      </div>
                      <div className="clear" />
                      <p itemProp="description">
                        We expect the new Maruti Dzire to be launched in India
                        in the first half of CY 2024{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    itemProp="item"
                    data-testing-id="upcoming-car-card-0"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                  >
                    <div className="left_block">
                      <img
                        className="cursor-pointer"
                        itemProp="image"
                        title="Upcoming Maruti Suzuki New Dzire"
                        alt="Upcoming Maruti Suzuki New Dzire"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                      />
                    </div>
                    <div className="right_block">
                      <h3 className="font-22">
                        <a
                          href="/maruti-suzuki-cars/new-dzire/"
                          title="Maruti Suzuki New Dzire"
                          className="color-scarlet"
                        >
                          <span itemProp="name">Maruti Suzuki New Dzire</span>
                        </a>
                      </h3>
                      <div className="row">
                        <div className="column prc">
                          <span>
                            <span className="rupee_font" />₹ 7.00 - 10.00 Lakh
                          </span>
                          <span> Estimated Price</span>
                        </div>
                        <div className="column launch">
                          <span>September 2024</span>
                          <span>Expected Launch</span>
                        </div>
                      </div>
                      <div className="clear" />
                      <p itemProp="description">
                        We expect the new Maruti Dzire to be launched in India
                        in the first half of CY 2024{" "}
                      </p>
                    </div>
                  </li>
                  <li
                    itemProp="item"
                    data-testing-id="upcoming-car-card-0"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                  >
                    <div className="left_block">
                      <img
                        className="cursor-pointer"
                        itemProp="image"
                        title="Upcoming Maruti Suzuki New Dzire"
                        alt="Upcoming Maruti Suzuki New Dzire"
                        loading="lazy"
                        src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/170299/new-dzire-left-front-three-quarter.jpeg?isig=0&q=80"
                      />
                    </div>
                    <div className="right_block">
                      <h3 className="font-22">
                        <a
                          href="/maruti-suzuki-cars/new-dzire/"
                          title="Maruti Suzuki New Dzire"
                          className="color-scarlet"
                        >
                          <span itemProp="name">Maruti Suzuki New Dzire</span>
                        </a>
                      </h3>
                      <div className="row">
                        <div className="column prc">
                          <span>
                            <span className="rupee_font" />₹ 7.00 - 10.00 Lakh
                          </span>
                          <span> Estimated Price</span>
                        </div>
                        <div className="column launch">
                          <span>September 2024</span>
                          <span>Expected Launch</span>
                        </div>
                      </div>
                      <div className="clear" />
                      <p itemProp="description">
                        We expect the new Maruti Dzire to be launched in India
                        in the first half of CY 2024{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div className="news_right">
                  <div className="inpad_right">
                    <div className="tabs_block">
                      <link
                        rel="stylesheet"
                        href="https://stc.aeplcdn.com/staticminv2/css/partials/rightblock-36b98580b6.css"
                        type="text/css"
                      />
                      <div className="featured_cars_container">
                        <div className="featured_cars_title">
                          <h2 className="font-bold font-21 mt-6 ml-3 p-0">
                            Featured Cars
                          </h2>
                        </div>
                        <ul className="featured_cars_tabs nav nav-tabs">
                          <li className="featured_cars_tab nav-item">
                            <a
                              className=" nav-link active"
                              data-bs-toggle="tab"
                              href="#popular"
                              role="tab"
                              aria-selected="true"
                              title="More Cars"
                            >
                              POPULAR
                            </a>
                          </li>
                          <li className="featured_cars_tab nav-item">
                            <a
                              className="font-15 m-0  color-comet font-weight-normal nav-link"
                              data-bs-toggle="tab"
                              href="#latest"
                              role="tab"
                              aria-selected="false"
                              title="More Cars"
                            >
                              LATEST
                            </a>
                          </li>
                        </ul>
                        <div className=" tab-content" id="popular_tab_cars">
                          <div
                            className="featured_cars_body tab-pane active"
                            id="popular"
                          >
                            <a
                              href="/mercedes-cars/eqs-suv/"
                              title="Mercedes-Benz EQS SUV"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/187181/eqs-suv-right-front-three-quarter.jpeg?isig=0&q=80"
                                    alt="Mercedes-Benz EQS SUV"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name my-0">
                                    Mercedes-Benz EQS SUV
                                  </p>
                                  <p className="featured_car_price my-0">
                                    ₹ 1.48 Crore
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details my-0">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/mg-cars/windsor-ev/"
                              title="MG Windsor EV"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                                    alt="MG Windsor EV"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name my-0">
                                    MG Windsor EV
                                  </p>
                                  <p className="featured_car_price my-0">
                                    ₹ 10.57 Lakh
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details my-0">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/hyundai-cars/alcazar/"
                              title="Hyundai Alcazar"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/158925/alcazar-facelift-right-front-three-quarter-3.jpeg?isig=0&q=80"
                                    alt="Hyundai Alcazar"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name my-0">
                                    Hyundai Alcazar
                                  </p>
                                  <p className="featured_car_price my-0">
                                    ₹ 17.42 Lakh
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details my-0">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/mercedes-cars/maybach-eqs-suv/"
                              title="Mercedes-Benz Maybach EQS SUV"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/175203/eqs-maybach-right-front-three-quarter-2.jpeg?isig=0&q=80"
                                    alt="Mercedes-Benz Maybach EQS SUV"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name my-0">
                                    Mercedes-Benz Maybach EQS
                                  </p>
                                  <p className="featured_car_price my-0">
                                    ₹ 2.36 Crore
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details my-0">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a href="/tata-cars/curvv/" title="Tata Curvv">
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/139665/curvv-right-front-three-quarter.jpeg?isig=0&q=80"
                                    alt="Tata Curvv"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name my-0">
                                    Tata Curvv
                                  </p>
                                  <p className="featured_car_price my-0">
                                    ₹ 11.49 Lakh
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details my-0">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/maserati-cars/granturismo/"
                              title="Maserati GranTurismo"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/186193/granturismo-right-front-three-quarter.jpeg?isig=0&q=80"
                                    alt="Maserati GranTurismo"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name my-0">
                                    Maserati GranTurismo
                                  </p>
                                  <p className="featured_car_price my-0">
                                    ₹ 2.72 Crore
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details my-0">
                                    Avg. Ex-Showroom price
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div
                            className="featured_cars_body tab-pane"
                            id="latest"
                          >
                            <a
                              href="/mercedes-cars/eqs-suv/"
                              title="Mercedes-Benz EQS SUV"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/187181/eqs-suv-right-front-three-quarter.jpeg?isig=0&q=80"
                                    alt="Mercedes-Benz EQS SUV"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name">
                                    Mercedes-Benz EQS SUV
                                  </p>
                                  <p className="featured_car_price">
                                    ₹ 1.48 Crore
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/mg-cars/windsor-ev/"
                              title="MG Windsor EV"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/174613/windsor-ev-right-front-three-quarter.jpeg?isig=0&q=80"
                                    alt="MG Windsor EV"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name">
                                    MG Windsor EV
                                  </p>
                                  <p className="featured_car_price">
                                    ₹ 10.57 Lakh
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="/hyundai-cars/alcazar/"
                              title="Hyundai Alcazar"
                            >
                              <div className="featured_car">
                                <div className="featured_car_image">
                                  <img
                                    src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/158925/alcazar-facelift-right-front-three-quarter-3.jpeg?isig=0&q=80"
                                    alt="Hyundai Alcazar"
                                    loading="lazy"
                                  />
                                </div>
                                <div className="featured_car_content">
                                  <p className="featured_car_name">
                                    Hyundai Alcazar
                                  </p>
                                  <p className="featured_car_price">
                                    ₹ 17.42 Lakh
                                    <span className="featured_car_details">
                                      Onwards
                                    </span>
                                  </p>
                                  <p className="featured_car_details">
                                    On-Road Price, Jaipur
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="featured_cars_footer">
                          <a
                            href="/new-cars/best-cars-in-india/"
                            title="All Popular Cars"
                          >
                            <p>
                              <span>All Popular Cars</span>
                              <svg
                                style={{ marginLeft: 4 }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                viewBox="0 0 9 14"
                              >
                                <path
                                  fill="#2d64bc"
                                  fillRule="nonzero"
                                  d="M8.047 6.208a.652.652 0 0 1 0 .934l-5.883 5.883a.74.74 0 0 1-1.051 0 .74.74 0 0 1 0-1.051l4.832-4.832a.652.652 0 0 0 0-.934L1.128 1.376a.74.74 0 0 1 0-1.051.74.74 0 0 1 1.05 0l5.869 5.883z"
                                />
                              </svg>
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inpad_right">
                    <div className="clear" />
                    <div
                      id="popular-brands"
                      className="js-tabs-select brands_widget"
                      style={{ display: "block" }}
                    >
                      <h2 className="car_head">POPULAR UPCOMING BRANDS</h2>
                      <ul className="tabs_section">
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-0"
                        >
                          <div className="left-block">
                            <a
                              href="/upcoming-cars/maruti-suzuki/"
                              title="Maruti Suzuki Cars"
                            >
                              <span className="brand-Maruti Suzuki">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80"
                                  title="Maruti Suzuki"
                                  alt="Maruti Suzuki"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="Maruti Suzuki Upcoming Cars"
                              href="/upcoming-cars/maruti-suzuki/"
                            >
                              Maruti Suzuki
                            </a>
                            <span className="model-count"> 3 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-1"
                        >
                          <div className="left-block">
                            <a href="/upcoming-cars/tata/" title="Tata Cars">
                              <span className="brand-Tata">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80"
                                  title="Tata"
                                  alt="Tata"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="Tata Upcoming Cars"
                              href="/upcoming-cars/tata/"
                            >
                              Tata
                            </a>
                            <span className="model-count"> 7 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-2"
                        >
                          <div className="left-block">
                            <a
                              href="/upcoming-cars/toyota/"
                              title="Toyota Cars"
                            >
                              <span className="brand-Toyota">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80"
                                  title="Toyota"
                                  alt="Toyota"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="Toyota Upcoming Cars"
                              href="/upcoming-cars/toyota/"
                            >
                              Toyota
                            </a>
                            <span className="model-count"> 1 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-3"
                        >
                          <div className="left-block">
                            <a
                              href="/upcoming-cars/hyundai/"
                              title="Hyundai Cars"
                            >
                              <span className="brand-Hyundai">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80"
                                  title="Hyundai"
                                  alt="Hyundai"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="Hyundai Upcoming Cars"
                              href="/upcoming-cars/hyundai/"
                            >
                              Hyundai
                            </a>
                            <span className="model-count"> 6 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-4"
                        >
                          <div className="left-block">
                            <a
                              href="/upcoming-cars/mahindra/"
                              title="Mahindra Cars"
                            >
                              <span className="brand-Mahindra">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80"
                                  title="Mahindra"
                                  alt="Mahindra"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="Mahindra Upcoming Cars"
                              href="/upcoming-cars/mahindra/"
                            >
                              Mahindra
                            </a>
                            <span className="model-count"> 8 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-5"
                        >
                          <div className="left-block">
                            <a href="/upcoming-cars/bmw/" title="BMW Cars">
                              <span className="brand-BMW">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80"
                                  title="BMW"
                                  alt="BMW"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="BMW Upcoming Cars"
                              href="/upcoming-cars/bmw/"
                            >
                              BMW
                            </a>
                            <span className="model-count"> 1 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-6"
                        >
                          <div className="left-block">
                            <a href="/upcoming-cars/kia/" title="Kia Cars">
                              <span className="brand-Kia">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80"
                                  title="Kia"
                                  alt="Kia"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="Kia Upcoming Cars"
                              href="/upcoming-cars/kia/"
                            >
                              Kia
                            </a>
                            <span className="model-count"> 7 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-7"
                        >
                          <div className="left-block">
                            <a
                              href="/upcoming-cars/mercedes-benz/"
                              title="Mercedes-Benz Cars"
                            >
                              <span className="brand-Mercedes-Benz">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80"
                                  title="Mercedes-Benz"
                                  alt="Mercedes-Benz"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="Mercedes-Benz Upcoming Cars"
                              href="/upcoming-cars/mercedes-benz/"
                            >
                              Mercedes-Benz
                            </a>
                            <span className="model-count"> 2 Models </span>
                          </div>
                        </li>
                        <li
                          className="popcars"
                          data-testing-id="popular-brand-card-8"
                        >
                          <div className="left-block">
                            <a href="/upcoming-cars/mg/" title="MG Cars">
                              <span className="brand-MG">
                                <img
                                  src="https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80"
                                  title="MG"
                                  alt="MG"
                                  loading="lazy"
                                />
                              </span>
                            </a>
                          </div>
                          <div className="right-block">
                            <a
                              title="MG Upcoming Cars"
                              href="/upcoming-cars/mg/"
                            >
                              MG
                            </a>
                            <span className="model-count"> 2 Models </span>
                          </div>
                        </li>
                      </ul>
                    </div>{" "}
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

export default UpComingCars;
