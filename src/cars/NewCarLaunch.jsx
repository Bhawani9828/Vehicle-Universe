import { Link } from "react-router-dom"
import CarHeader from "../components/CarHeader"


function NewCarLaunch() {
  return (
    <>
    
    
    <section>

        <CarHeader/>

           {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            New Car Launches
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/cars">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">
            New Car Launches
            </li>
          </ol>
        </div>
      </div>
      {/* Header End */}


    </section>

     {/* Product Details Section Begin */}
     <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="heading-car">
                <div className="row">
                  <div className="col-md-12">
                    <div className="pull-left">
                      <h3>Hyundai Santa</h3>
                      <p>
                        <i className="fa fa-map-marker" /> 20/F Green Road,
                        Dhanmondi, Dhaka
                      </p>
                    </div>
                    <div className="p-r">
                      <h3>$420,00</h3>
                      <p>
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src="/public/img/car-1.png"
                    alt=""
                  />
                </div>
                <div className="product__details__pic__slider owl-carousel">
                  <img
                    data-imgbigurl="/public/img/car-2.png"
                    src="/public/img/car-2.png"
                    alt=""
                  />
                  <img
                    data-imgbigurl="/public/img/car-1.png"
                    src="/public/img/car-1.png"
                    alt=""
                  />
                  <img
                    data-imgbigurl="/public/img/car-2.png"
                    src="/public/img/car-2.png"
                    alt=""
                  />
                  <img
                    data-imgbigurl="/public/img/car-1.png"
                    src="/public/img/car-1.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="tab_part">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="product__details__tab">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#tabs-1"
                            role="tab"
                            aria-selected="true"
                          >
                            Vehicle Overview
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#tabs-2"
                            role="tab"
                            aria-selected="false"
                          >
                            Features & Options
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#tabs-3"
                            role="tab"
                            aria-selected="false"
                          >
                            Video
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#tabs-4"
                            role="tab"
                            aria-selected="false"
                          >
                            Location
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#tabs-5"
                            role="tab"
                            aria-selected="false"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane active"
                          id="tabs-1"
                          role="tabpanel"
                        >
                          <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>
                            <p className="dropcap">
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Pellentesque in ipsum
                              id orci porta dapibus. Proin eget tortor risus.
                              Vivamus suscipit tortor eget felis porttitor
                              volutpat. Vestibulum ac diam sit amet quam
                              vehicula elementum sed sit amet dui. Donec rutrum
                              congue leo eget malesuada. Vivamus suscipit tortor
                              eget felis porttitor volutpat. Curabitur arcu
                              erat, accumsan id imperdiet et, porttitor at sem.
                              Praesent sapien massa, convallis a pellentesque
                              nec, egestas non nisi. Vestibulum ac diam sit amet
                              quam vehicula elementum sed sit amet dui.
                              Vestibulum ante ipsum primis in faucibus orci
                              luctus et ultrices posuere cubilia Curae; Donec
                              velit neque, auctor sit amet aliquam vel,
                              ullamcorper sit amet ligula. Proin eget tortor
                              risus.
                            </p>
                            <p>
                              Praesent sapien massa, convallis a pellentesque
                              nec, egestas non nisi. Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Mauris blandit
                              aliquet elit, eget tincidunt nibh pulvinar a. Cras
                              ultricies ligula sed magna dictum porta. Cras
                              ultricies ligula sed magna dictum porta. Sed
                              porttitor lectus nibh. Mauris blandit aliquet
                              elit, eget tincidunt nibh pulvinar a. Vestibulum
                              ac diam sit amet quam vehicula elementum sed sit
                              amet dui. Sed porttitor lectus nibh. Vestibulum ac
                              diam sit amet quam vehicula elementum sed sit amet
                              dui. Proin eget tortor risus.
                            </p>
                          </div>
                        </div>
                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                          <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>
                            <p>
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Pellentesque in ipsum
                              id orci porta dapibus. Proin eget tortor risus.
                              Vivamus suscipit tortor eget felis porttitor
                              volutpat. Vestibulum ac diam sit amet quam
                              vehicula elementum sed sit amet dui. Donec rutrum
                              congue leo eget malesuada. Vivamus suscipit tortor
                              eget felis porttitor volutpat. Curabitur arcu
                              erat, accumsan id imperdiet et, porttitor at sem.
                              Praesent sapien massa, convallis a pellentesque
                              nec, egestas non nisi. Vestibulum ac diam sit amet
                              quam vehicula elementum sed sit amet dui.
                              Vestibulum ante ipsum primis in faucibus orci
                              luctus et ultrices posuere cubilia Curae; Donec
                              velit neque, auctor sit amet aliquam vel,
                              ullamcorper sit amet ligula. Proin eget tortor
                              risus.
                            </p>
                            <p>
                              Praesent sapien massa, convallis a pellentesque
                              nec, egestas non nisi. Lorem ipsum dolor sit amet,
                              consectetur adipiscing elit. Mauris blandit
                              aliquet elit, eget tincidunt nibh pulvinar a. Cras
                              ultricies ligula sed magna dictum porta. Cras
                              ultricies ligula sed magna dictum porta. Sed
                              porttitor lectus nibh. Mauris blandit aliquet
                              elit, eget tincidunt nibh pulvinar a.
                            </p>
                          </div>
                        </div>
                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                          <div className="product__details__tab__desc">
                            <h6>Products Infomation</h6>

                            <p>
                              Aliquam ultricies nunc porta metus interdum
                              mollis. Donec porttitor libero augue, vehicula
                              tincidunt lectus placerat a. Sed tincidunt dolor
                              non sem dictum dignissim. Nulla vulputate orci
                              felis, ac ornare purus ultricies a. Fusce euismod
                              magna orci, sit amet aliquam turpis dignissim ac.
                              In at tortor at ligula pharetra sollicitudin. Sed
                              tincidunt, purus eget laoreet elementum, felis est
                              pharetra ante, tincidunt feugiat libero enim sed
                              risus. Sed at leo sit amet mi bibendum aliquam.
                              Interdum et malesuada fames ac ante ipsum primis
                              in faucibus. Praesent cursus varius odio, non
                              faucibus dui. Nunc vehicula lectus sed velit
                              suscipit aliquam vitae eu ipsum. adipiscing elit.
                            </p>
                            <p>
                              Vestibulum ac diam sit amet quam vehicula
                              elementum sed sit amet dui. Pellentesque in ipsum
                              id orci porta dapibus. Proin eget tortor risus.
                              Vivamus suscipit tortor eget felis porttitor
                              volutpat. Vestibulum ac diam sit amet quam
                              vehicula elementum sed sit amet dui. Donec rutrum
                              congue leo eget malesuada. Vivamus suscipit tortor
                              eget felis porttitor volutpat. Curabitur arcu
                              erat, accumsan id imperdiet et, porttitor at sem.
                              Praesent sapien massa, convallis a pellentesque
                              nec, egestas non nisi. Vestibulum ac diam sit amet
                              quam vehicula elementum sed sit amet dui.
                              Vestibulum ante ipsum primis in faucibus orci
                              luctus et ultrices posuere cubilia Curae; Donec
                              velit neque, auctor sit amet aliquam vel,
                              ullamcorper sit amet ligula. Proin eget tortor
                              risus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="sidebar-right">
                {/* Specifications start */}
                <div className="specifications widget d-none d-xl-block d-lg-block">
                  <h5 className="sidebar-title">Specifications</h5>
                  <ul>
                    <li>
                      <span>Make</span>Toyota
                    </li>
                    <li>
                      <span>Model</span>Maxima
                    </li>
                    <li>
                      <span>Body Style</span>Convertible
                    </li>
                    <li>
                      <span>Condition</span>Brand New
                    </li>
                    <li>
                      <span>Year</span>2018
                    </li>
                    <li>
                      <span>Mileage</span>37,000 mi
                    </li>
                    <li>
                      <span>Transmission</span>6-speed Manual
                    </li>
                    <li>
                      <span>Interior Color</span>Dark Grey
                    </li>
                    <li>
                      <span>Engine</span>3.4L Mid-Engine V6
                    </li>
                    <li>
                      <span>Fuel Type</span>Gasoline Fuel
                    </li>
                    <li>
                      <span>No. of Gears:</span>5
                    </li>
                    <li>
                      <span>Location</span>Toronto
                    </li>
                  </ul>
                </div>
                {/* Follow us start */}
                <div className="follow-us widget">
                  <h5 className="sidebar-title">Follow Us</h5>
                  <ul className="social-list">
                    <li>
                      <a href="#" className="facebook-bg">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter-bg">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google-bg">
                        <i className="fab fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rss-bg">
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin-bg">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Helping center start */}
                <div className="helping-center widget">
                  <div className="media">
                    <i className="fa fa-mobile" />
                    <div className="media-body  align-self-center">
                      <h5 className="mt-0 text-white">Helping Center</h5>
                      <h4>
                        <a className="text-white" href="tel:+0477-85x6-552">
                          +0477 85X6 552
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                {/* Financing calculator  start */}
                <div className="contact-1 financing-calculator widget cmn-mrg-btm">
                  <h5 className="sidebar-title">Financing Calculator</h5>
                  <form action="#" method="GET" encType="multipart/form-data">
                    <div className="form-group">
                      <label className="form-label">Down Payment</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="$36.400"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Interest Rate (%)</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="10%"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Period In Months</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="10 Months"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Down PaymenT</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="$21,300"
                      />
                    </div>
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="btn btn-color btn-md btn-message btn-block"
                      >
                        Cauculate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details Section End */}
      {/* Related Product Section Begin */}
      <section className="related-product mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="/public/img/car-1.png"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>₹5000000.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="/public/img/car-1.png"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>₹4500000.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="/public/img/car-2.png"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>₹5000000.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="/public/img/car-1.png"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>₹4000000.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Product Section End */}
    </>
  )
}

export default NewCarLaunch
