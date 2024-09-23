import { Link } from "react-router-dom";
import CarHeader from "../components/CarHeader";

function CarPrice() {
  return (
    <>
    <CarHeader/>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Cars Price
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/cars">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">CarsPrice</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
      <section>
        <div className="container py-5">
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
                              PRICE
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
                            <div className="ct_leftbar price_range">
                              <ul className="pricerange">
                                <li>
                                  <label data-testing-id="budget-0-3">
                                    <span className="label_p">
                                      Upto 3 Lakhs
                                    </span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="0-3"
                                      data-name="3-lakh"
                                      id="price_0-3"
                                      defaultValue="0-3"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-2-5">
                                    <span className="label_p">2-5 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="2-5"
                                      data-name="5-lakh"
                                      id="price_2-5"
                                      defaultValue="2-5"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-5-8">
                                    <span className="label_p">5-8 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="5-8"
                                      data-name="8-lakh"
                                      id="price_5-8"
                                      defaultValue="5-8"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-6-10">
                                    <span className="label_p">6-10 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="6-10"
                                      data-name="10-lakh"
                                      id="price_6-10"
                                      defaultValue="6-10"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-8-12">
                                    <span className="label_p">8-12 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="8-12"
                                      data-name="12-lakh"
                                      id="price_8-12"
                                      defaultValue="8-12"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-10-15">
                                    <span className="label_p">10-15 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="10-15"
                                      data-name="15-lakh"
                                      id="price_10-15"
                                      defaultValue="10-15"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-10-20">
                                    <span className="label_p">10-20 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="10-20"
                                      data-name="20-lakh"
                                      id="price_10-20"
                                      defaultValue="10-20"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-20-30">
                                    <span className="label_p">20-30 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="20-30"
                                      data-name="30-lakh"
                                      id="price_20-30"
                                      defaultValue="20-30"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-30-40">
                                    <span className="label_p">30-40 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="30-40"
                                      data-name="40-lakh"
                                      id="price_30-40"
                                      defaultValue="30-40"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-40-50">
                                    <span className="label_p">40-50 Lakh</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="40-50"
                                      data-name="50-lakh"
                                      id="price_40-50"
                                      defaultValue="40-50"
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label data-testing-id="budget-50-100">
                                    <span className="label_p">50-1 Crore</span>
                                    <input
                                      className="pr_range"
                                      type="checkbox"
                                      name="50-100"
                                      data-name="1-crore"
                                      id="price_50-100"
                                      defaultValue="50-100"
                                    />
                                    <span />
                                  </label>
                                </li>
                              </ul>
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
                              BRANDS{" "}
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
                            <div
                              id="nbot_id"
                              className="ct_leftbar other_features"
                            >
                              <ul className="features">
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_maruti_suzuki"
                                      defaultValue={10}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_maruti_suzuki"
                                    >
                                      Maruti Suzuki
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_hyundai"
                                      defaultValue={8}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_hyundai"
                                    >
                                      Hyundai
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_kia"
                                      defaultValue={70}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_kia"
                                    >
                                      Kia
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_tata"
                                      defaultValue={16}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_tata"
                                    >
                                      Tata
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_toyota"
                                      defaultValue={17}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_toyota"
                                    >
                                      Toyota
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_honda"
                                      defaultValue={7}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_honda"
                                    >
                                      Honda
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_mahindra"
                                      defaultValue={9}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_mahindra"
                                    >
                                      Mahindra
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_renault"
                                      defaultValue={45}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_renault"
                                    >
                                      Renault
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_ford"
                                      defaultValue={5}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_ford"
                                    >
                                      Ford
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_mg"
                                      defaultValue={72}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_mg"
                                    >
                                      MG
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_audi"
                                      defaultValue={18}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_audi"
                                    >
                                      Audi
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_bmw"
                                      defaultValue={1}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_bmw"
                                    >
                                      BMW
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_mercedes_benz"
                                      defaultValue={11}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_mercedes_benz"
                                    >
                                      Mercedes Benz
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_skoda"
                                      defaultValue={15}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_skoda"
                                    >
                                      Skoda
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_nissan"
                                      defaultValue={21}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_nissan"
                                    >
                                      Nissan
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_volkswagen"
                                      defaultValue={20}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_volkswagen"
                                    >
                                      Volkswagen
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_land_rover"
                                      defaultValue={23}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_land_rover"
                                    >
                                      Land Rover
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_jeep"
                                      defaultValue={43}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_jeep"
                                    >
                                      Jeep
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_datsun"
                                      defaultValue={56}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_datsun"
                                    >
                                      Datsun
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_ferrari"
                                      defaultValue={33}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_ferrari"
                                    >
                                      Ferrari
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_jaguar"
                                      defaultValue={44}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_jaguar"
                                    >
                                      Jaguar
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_lamborghini"
                                      defaultValue={30}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_lamborghini"
                                    >
                                      Lamborghini
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_maserati"
                                      defaultValue={36}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_maserati"
                                    >
                                      Maserati
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_mini"
                                      defaultValue={51}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_mini"
                                    >
                                      MINI
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_porsche"
                                      defaultValue={19}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_porsche"
                                    >
                                      Porsche
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_bentley"
                                      defaultValue={22}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_bentley"
                                    >
                                      Bentley
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_citroen"
                                      defaultValue={74}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_citroen"
                                    >
                                      Citroen
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_volvo"
                                      defaultValue={37}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_volvo"
                                    >
                                      Volvo
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_aston_martin"
                                      defaultValue={49}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_aston_martin"
                                    >
                                      Aston Martin
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_lexus"
                                      defaultValue={34}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_lexus"
                                    >
                                      Lexus
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_isuzu"
                                      defaultValue={61}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_isuzu"
                                    >
                                      Isuzu
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_rolls_royce"
                                      defaultValue={25}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_rolls_royce"
                                    >
                                      Rolls Royce
                                    </span>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input
                                      type="checkbox"
                                      className="mukli pull-left brands"
                                      name="make[]"
                                      id="make_mclaren"
                                      defaultValue={77}
                                    />
                                    <span
                                      className="pull-left"
                                      id="checkmark_make_mclaren"
                                    >
                                      McLaren
                                    </span>
                                  </label>
                                </li>
                              </ul>
                              <div className="chk_all cursor-pointer js-check-all">
                                Check All
                              </div>
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
                              VEHICLE TYPE
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
                              className="ct_leftbar vehicletype body_type"
                              id="nbvt_id"
                            >
                              <input
                                name="budget-min"
                                id="budget-min"
                                type="hidden"
                                defaultValue={0}
                              />
                              <input
                                name="budget-max"
                                id="budget-max"
                                type="hidden"
                                defaultValue={0}
                              />
                              <ul>
                                <li>
                                  <label>
                                    <span className="label_p">Hatchback</span>
                                    <input
                                      type="checkbox"
                                      name="hatchback"
                                      id="body_type_hatchback"
                                      defaultValue={3}
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <span className="label_p">Sedan</span>
                                    <input
                                      type="checkbox"
                                      name="sedan"
                                      id="body_type_sedan"
                                      defaultValue={1}
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <span className="label_p">SUV</span>
                                    <input
                                      type="checkbox"
                                      name="suv"
                                      id="body_type_suv"
                                      defaultValue={6}
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <span className="label_p">MPV/MUV</span>
                                    <input
                                      type="checkbox"
                                      name="mpv"
                                      id="body_type_muv"
                                      defaultValue={9}
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <span className="label_p">Coupe</span>
                                    <input
                                      type="checkbox"
                                      name="coupe"
                                      id="body_type_coupe"
                                      defaultValue={2}
                                    />
                                    <span />
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <span className="label_p">Convertible</span>
                                    <input
                                      type="checkbox"
                                      name="convertible"
                                      id="body_type_convertible"
                                      defaultValue={5}
                                    />
                                    <span />
                                  </label>
                                </li>
                              </ul>
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
             <div className="border border-1 ">
             <ul>
                <li>
                  <div className="carModel">
                    <div className="ucarRsltCol-1">
                      <div
                        className="carImageHolder"
                        id="carImageHolder_maruti-suzuki-alto-k10"
                      >
                        <img
                          className="cursor-pointer"
                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80"
                          alt="Maruti Suzuki Alto K10"
                          title="Maruti Suzuki Alto K10 Details"
                          loading="lazy"
                          width={140}
                          height={80}
                          data-role="click-tracking"
                          data-event="CTInteractive"
                          data-cat="FilterPage_Version"
                          data-action="ModelClick"
                        />
                      </div>
                    </div>
                    <div className="text_arearight">
                      <div className="top_section">
                        <div className="ucarRsltCol-2">
                          <h3 className="pb-2">
                            <a
                              className="font-19 font-valhalla color-scarlet"
                              href="/maruti-suzuki-cars/alto-k10/"
                              title="Maruti Suzuki Alto K10"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="ModelClick"
                            >
                              Maruti Suzuki Alto K10
                            </a>
                          </h3>
                          <div className="car_price">
                            <strong>₹ 4.43 - 6.63 Lakh</strong>
                          </div>
                        </div>
                        <a
                          className="var_on_btn"
                          rel="nofollow"
                          id="price_btn_cta_1"
                          data-make="Maruti Suzuki"
                          data-model="Alto K10"
                          data-variantid=""
                        >
                          Check On Road Price
                        </a>
                      </div>
                      <ul className="car_dls">
                        <li className="one">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/reviews/alto-k10-user-reviews/"
                            title="Alto K10 Reviews"
                          >
                            Alto K10 Reviews
                          </a>
                        </li>
                        <li className="two">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/images/"
                            title="Alto K10 Images"
                          >
                            Alto K10 Images
                          </a>
                        </li>
                        <li className="four">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/mileage/"
                            title="Alto K10 Mileage"
                          >
                            Alto K10 Mileage
                          </a>
                        </li>
                      </ul>
                      <div className="clr" />
                    </div>
                    <div className="clr" />
                  </div>

                  <div
                    id="versionsList-maruti-suzuki-alto-k10"
                    className="versionsList"
                    style={{ display: "none", overflow: "hidden", height: 0 }}
                  >
                    <table
                      className="zebra-striped"
                      data-testing-id="version-accordion-1-content"
                    >
                      <thead>
                        <tr className="tr_brdr">
                          <th className="last compare">Select to Compare</th>
                          <th className="first versionName">Variant</th>
                          <th>Fuel type</th>
                          <th>Transmission</th>
                          <th>Mileage (City/Highway)</th>
                          <th className="ncdcitydealer">Avg Ex-Showroom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||Std (O)||18031">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||Std (O)||18031"
                                name="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                                id="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/std-o/"
                              title="Std (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              Std (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 4,87,008
                            <a
                              className="link"
                              id="price_btn_cta_18031"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18031}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"Std (O)"+"ncpvarid"'
                          defaultValue={18031}
                        />
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||LXi (O)||18033"
                                name="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                                id="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/lxi/"
                              title="LXi (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              LXi (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 5,87,132
                            <a
                              className="link"
                              id="price_btn_cta_18033"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18033}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"LXi (O)"+"ncpvarid"'
                          defaultValue={18033}
                        />
                      </tbody>
                    </table>
                  </div>
                  <input
                    type="hidden"
                    name="listrank"
                    id="Hyundai#Grand|i10|Nios"
                    defaultValue={1}
                  />
                </li>
              </ul>
             </div><div className="border border-1 ">
             <ul>
                <li>
                  <div className="carModel">
                    <div className="ucarRsltCol-1">
                      <div
                        className="carImageHolder"
                        id="carImageHolder_maruti-suzuki-alto-k10"
                      >
                        <img
                          className="cursor-pointer"
                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80"
                          alt="Maruti Suzuki Alto K10"
                          title="Maruti Suzuki Alto K10 Details"
                          loading="lazy"
                          width={140}
                          height={80}
                          data-role="click-tracking"
                          data-event="CTInteractive"
                          data-cat="FilterPage_Version"
                          data-action="ModelClick"
                        />
                      </div>
                    </div>
                    <div className="text_arearight">
                      <div className="top_section">
                        <div className="ucarRsltCol-2">
                          <h3 className="pb-2">
                            <a
                              className="font-19 font-valhalla color-scarlet"
                              href="/maruti-suzuki-cars/alto-k10/"
                              title="Maruti Suzuki Alto K10"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="ModelClick"
                            >
                              Maruti Suzuki Alto K10
                            </a>
                          </h3>
                          <div className="car_price">
                            <strong>₹ 4.43 - 6.63 Lakh</strong>
                          </div>
                        </div>
                        <a
                          className="var_on_btn"
                          rel="nofollow"
                          id="price_btn_cta_1"
                          data-make="Maruti Suzuki"
                          data-model="Alto K10"
                          data-variantid=""
                        >
                          Check On Road Price
                        </a>
                      </div>
                      <ul className="car_dls">
                        <li className="one">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/reviews/alto-k10-user-reviews/"
                            title="Alto K10 Reviews"
                          >
                            Alto K10 Reviews
                          </a>
                        </li>
                        <li className="two">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/images/"
                            title="Alto K10 Images"
                          >
                            Alto K10 Images
                          </a>
                        </li>
                        <li className="four">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/mileage/"
                            title="Alto K10 Mileage"
                          >
                            Alto K10 Mileage
                          </a>
                        </li>
                      </ul>
                      <div className="clr" />
                    </div>
                    <div className="clr" />
                  </div>

                  <div
                    id="versionsList-maruti-suzuki-alto-k10"
                    className="versionsList"
                    style={{ display: "none", overflow: "hidden", height: 0 }}
                  >
                    <table
                      className="zebra-striped"
                      data-testing-id="version-accordion-1-content"
                    >
                      <thead>
                        <tr className="tr_brdr">
                          <th className="last compare">Select to Compare</th>
                          <th className="first versionName">Variant</th>
                          <th>Fuel type</th>
                          <th>Transmission</th>
                          <th>Mileage (City/Highway)</th>
                          <th className="ncdcitydealer">Avg Ex-Showroom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||Std (O)||18031">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||Std (O)||18031"
                                name="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                                id="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/std-o/"
                              title="Std (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              Std (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 4,87,008
                            <a
                              className="link"
                              id="price_btn_cta_18031"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18031}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"Std (O)"+"ncpvarid"'
                          defaultValue={18031}
                        />
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||LXi (O)||18033"
                                name="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                                id="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/lxi/"
                              title="LXi (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              LXi (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 5,87,132
                            <a
                              className="link"
                              id="price_btn_cta_18033"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18033}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"LXi (O)"+"ncpvarid"'
                          defaultValue={18033}
                        />
                      </tbody>
                    </table>
                  </div>
                  <input
                    type="hidden"
                    name="listrank"
                    id="Hyundai#Grand|i10|Nios"
                    defaultValue={1}
                  />
                </li>
              </ul>
             </div>
             <div className="border border-1 ">
             <ul>
                <li>
                  <div className="carModel">
                    <div className="ucarRsltCol-1">
                      <div
                        className="carImageHolder"
                        id="carImageHolder_maruti-suzuki-alto-k10"
                      >
                        <img
                          className="cursor-pointer"
                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80"
                          alt="Maruti Suzuki Alto K10"
                          title="Maruti Suzuki Alto K10 Details"
                          loading="lazy"
                          width={140}
                          height={80}
                          data-role="click-tracking"
                          data-event="CTInteractive"
                          data-cat="FilterPage_Version"
                          data-action="ModelClick"
                        />
                      </div>
                    </div>
                    <div className="text_arearight">
                      <div className="top_section">
                        <div className="ucarRsltCol-2">
                          <h3 className="pb-2">
                            <a
                              className="font-19 font-valhalla color-scarlet"
                              href="/maruti-suzuki-cars/alto-k10/"
                              title="Maruti Suzuki Alto K10"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="ModelClick"
                            >
                              Maruti Suzuki Alto K10
                            </a>
                          </h3>
                          <div className="car_price">
                            <strong>₹ 4.43 - 6.63 Lakh</strong>
                          </div>
                        </div>
                        <a
                          className="var_on_btn"
                          rel="nofollow"
                          id="price_btn_cta_1"
                          data-make="Maruti Suzuki"
                          data-model="Alto K10"
                          data-variantid=""
                        >
                          Check On Road Price
                        </a>
                      </div>
                      <ul className="car_dls">
                        <li className="one">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/reviews/alto-k10-user-reviews/"
                            title="Alto K10 Reviews"
                          >
                            Alto K10 Reviews
                          </a>
                        </li>
                        <li className="two">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/images/"
                            title="Alto K10 Images"
                          >
                            Alto K10 Images
                          </a>
                        </li>
                        <li className="four">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/mileage/"
                            title="Alto K10 Mileage"
                          >
                            Alto K10 Mileage
                          </a>
                        </li>
                      </ul>
                      <div className="clr" />
                    </div>
                    <div className="clr" />
                  </div>

                  <div
                    id="versionsList-maruti-suzuki-alto-k10"
                    className="versionsList"
                    style={{ display: "none", overflow: "hidden", height: 0 }}
                  >
                    <table
                      className="zebra-striped"
                      data-testing-id="version-accordion-1-content"
                    >
                      <thead>
                        <tr className="tr_brdr">
                          <th className="last compare">Select to Compare</th>
                          <th className="first versionName">Variant</th>
                          <th>Fuel type</th>
                          <th>Transmission</th>
                          <th>Mileage (City/Highway)</th>
                          <th className="ncdcitydealer">Avg Ex-Showroom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||Std (O)||18031">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||Std (O)||18031"
                                name="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                                id="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/std-o/"
                              title="Std (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              Std (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 4,87,008
                            <a
                              className="link"
                              id="price_btn_cta_18031"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18031}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"Std (O)"+"ncpvarid"'
                          defaultValue={18031}
                        />
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||LXi (O)||18033"
                                name="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                                id="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/lxi/"
                              title="LXi (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              LXi (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 5,87,132
                            <a
                              className="link"
                              id="price_btn_cta_18033"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18033}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"LXi (O)"+"ncpvarid"'
                          defaultValue={18033}
                        />
                      </tbody>
                    </table>
                  </div>
                  <input
                    type="hidden"
                    name="listrank"
                    id="Hyundai#Grand|i10|Nios"
                    defaultValue={1}
                  />
                </li>
              </ul>
             </div>
             <div className="border border-1 ">
             <ul>
                <li>
                  <div className="carModel">
                    <div className="ucarRsltCol-1">
                      <div
                        className="carImageHolder"
                        id="carImageHolder_maruti-suzuki-alto-k10"
                      >
                        <img
                          className="cursor-pointer"
                          src="https://imgd-ct.aeplcdn.com/393x221/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80"
                          alt="Maruti Suzuki Alto K10"
                          title="Maruti Suzuki Alto K10 Details"
                          loading="lazy"
                          width={140}
                          height={80}
                          data-role="click-tracking"
                          data-event="CTInteractive"
                          data-cat="FilterPage_Version"
                          data-action="ModelClick"
                        />
                      </div>
                    </div>
                    <div className="text_arearight">
                      <div className="top_section">
                        <div className="ucarRsltCol-2">
                          <h3 className="pb-2">
                            <a
                              className="font-19 font-valhalla color-scarlet"
                              href="/maruti-suzuki-cars/alto-k10/"
                              title="Maruti Suzuki Alto K10"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="ModelClick"
                            >
                              Maruti Suzuki Alto K10
                            </a>
                          </h3>
                          <div className="car_price">
                            <strong>₹ 4.43 - 6.63 Lakh</strong>
                          </div>
                        </div>
                        <a
                          className="var_on_btn"
                          rel="nofollow"
                          id="price_btn_cta_1"
                          data-make="Maruti Suzuki"
                          data-model="Alto K10"
                          data-variantid=""
                        >
                          Check On Road Price
                        </a>
                      </div>
                      <ul className="car_dls">
                        <li className="one">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/reviews/alto-k10-user-reviews/"
                            title="Alto K10 Reviews"
                          >
                            Alto K10 Reviews
                          </a>
                        </li>
                        <li className="two">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/images/"
                            title="Alto K10 Images"
                          >
                            Alto K10 Images
                          </a>
                        </li>
                        <li className="four">
                          <a
                            href="/maruti-suzuki-cars/alto-k10/mileage/"
                            title="Alto K10 Mileage"
                          >
                            Alto K10 Mileage
                          </a>
                        </li>
                      </ul>
                      <div className="clr" />
                    </div>
                    <div className="clr" />
                  </div>

                  <div
                    id="versionsList-maruti-suzuki-alto-k10"
                    className="versionsList"
                    style={{ display: "none", overflow: "hidden", height: 0 }}
                  >
                    <table
                      className="zebra-striped"
                      data-testing-id="version-accordion-1-content"
                    >
                      <thead>
                        <tr className="tr_brdr">
                          <th className="last compare">Select to Compare</th>
                          <th className="first versionName">Variant</th>
                          <th>Fuel type</th>
                          <th>Transmission</th>
                          <th>Mileage (City/Highway)</th>
                          <th className="ncdcitydealer">Avg Ex-Showroom</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||Std (O)||18031">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||Std (O)||18031"
                                name="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                                id="gogo-Maruti Suzuki||Alto K10||Std (O)||18031"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/std-o/"
                              title="Std (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              Std (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 4,87,008
                            <a
                              className="link"
                              id="price_btn_cta_18031"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18031}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"Std (O)"+"ncpvarid"'
                          defaultValue={18031}
                        />
                        <tr>
                          <td className="last compare">
                            <label htmlFor="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033">
                              <input
                                type="checkbox"
                                defaultValue="Maruti Suzuki||Alto K10||LXi (O)||18033"
                                name="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                                id="gogo-Maruti Suzuki||Alto K10||LXi (O)||18033"
                              />
                              <span data-testing-id="select-to-compare-checkbox-1" />
                            </label>
                          </td>
                          <td className="first versionName">
                            <a
                              className="link"
                              href="/maruti-suzuki-cars/alto-k10/lxi/"
                              title="LXi (O)"
                              data-role="click-tracking"
                              data-event="CTInteractive"
                              data-cat="FilterPage_Version"
                              data-action="VariantClick"
                              data-testing-id="version-name-1"
                            >
                              LXi (O)
                            </a>
                          </td>
                          <td>Petrol</td>
                          <td>Manual</td>
                          <td>24.39</td>
                          <td width={170} className="price_linktext">
                            ₹ 5,87,132
                            <a
                              className="link"
                              id="price_btn_cta_18033"
                              data-make="maruti-suzuki"
                              data-model="alto-k10"
                              data-variantid={18033}
                            >
                              Check On Road Price
                            </a>
                          </td>
                        </tr>
                        <input
                          type="hidden"
                          name="ncpvarid"
                          id='"LXi (O)"+"ncpvarid"'
                          defaultValue={18033}
                        />
                      </tbody>
                    </table>
                  </div>
                  <input
                    type="hidden"
                    name="listrank"
                    id="Hyundai#Grand|i10|Nios"
                    defaultValue={1}
                  />
                </li>
              </ul>
             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarPrice;
