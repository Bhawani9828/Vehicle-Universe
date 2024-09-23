import { Link } from "react-router-dom";
import CarHeader from "../components/CarHeader";
import { useState } from "react";

function CarLoan() {
  const [showMore, setShowMore] = useState(false);

  const toggleRedmore = () => {
    setShowMore((prew) => !prew);
  };
  return (
    <>
      <CarHeader />

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumbloan">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
             Cars Loan
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/cars">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">Cars Loan</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      <div className=" container o-bWHzMb o-ducbvd o-cglRxs Phu9vg o-fpkJwH o-dCyDMp ">
        <div className="" style={{ maxWidth: "1050px", margin: "auto" }}>
          <div className="o-fznJEv o-chNNuk o-fznJFh o-cPFhqO">
            <h2 className="o-fznVme o-emXQxE o-fzpilz o-fbEoQZ o-dOKno o-bNCMFw o-cJrNdO mt-4">
              Used &amp; New Car Loan, Get Best EMI for Auto Loan - CarTrade
            </h2>
            <div className="undefined o-brXWGL">
              <div className=" o-bfyaNx o-bNxxEB o-bqHweY">
                <div className="my-2">
                  <p className="o-bkmzIL o-zmksK o-fyWCgU o-etYwwd o-fzoTzs">
                    Get up to 90% financing from leading banks for used car and
                    new car at best Interest Rates, EMI. Apply online in a few
                    simple steps and get easy car loan approval for your dream
                    car purchase.
                    {showMore ? (
                      <>
                        <div className=" zt0zkQ f6IUJZ o-eFudgX o-eKWNKE o-fBNTVC o-bqHweY hA6xji h660np o-bIMsfE o-ItVGT cUqdiL ">
                          <table className="o-fBNTVC o-bfyaNx o-bTcQuC hMQpsf undefined o-eFudgX  table table-bordered  ">
                            <thead className=" o-qqdXv o-cJrNdO o-eqqVmt o-bkmzIL p5CL49 ">
                              <tr className=" o-lIIwF   cfVszm table-info">
                                <th
                                  className=" o-fzpimw o-fzpibK o-fznJzu o-fznJPk"
                                  colSpan={2}
                                >
                                  <p className="o-eemiLE o-cYdrZi o-fmSMPH o-zmksK o-eqqVmt o-TNyGU">
                                    Car Loan Details
                                  </p>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="o-chzWeu lM1ngv">
                              <tr className=" o-lIIwF   cfVszm">
                                <td className=" o-fzpimw o-fzpibK o-fznJzu o-fznJPk">
                                  <div className="o-bUVylL o-cpnuEd d-flex justify-content-between">
                                    <p className="o-fzptZU o-bkmzIL o-cJrNdO mb-0">
                                      New Car Interest Rate
                                    </p>
                                    <p className="o-fzptOu o-bkmzIL o-cJrNdO mb-0">
                                      8% Onwards
                                    </p>
                                  </div>
                                </td>
                                <td className=" o-fzpimw o-fzpibK o-fznJzu o-fznJPk">
                                  <div className="o-bUVylL o-cpnuEd d-flex justify-content-between ">
                                    <p className="o-fzptZU o-bkmzIL o-cJrNdO mb-0">
                                      New Car Loan Tenure
                                    </p>
                                    <p className="o-fzptOu o-bkmzIL o-cJrNdO mb-0">
                                      1 to 7 years
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className=" o-lIIwF   cfVszm">
                                <td className=" o-fzpimw o-fzpibK o-fznJzu o-fznJPk">
                                  <div className="o-bUVylL o-cpnuEd d-flex justify-content-between">
                                    <p className="o-fzptZU o-bkmzIL o-cJrNdO mb-0">
                                      Used Car Interest Rate
                                    </p>
                                    <p className="o-fzptOu o-bkmzIL o-cJrNdO mb-0">
                                      12.5% Onwards
                                    </p>
                                  </div>
                                </td>
                                <td className=" o-fzpimw o-fzpibK o-fznJzu o-fznJPk">
                                  <div className="o-bUVylL o-cpnuEd d-flex justify-content-between">
                                    <p className="o-fzptZU o-bkmzIL o-cJrNdO mb-0">
                                      Used Car Loan Tenure
                                    </p>
                                    <p className="o-fzptOu o-bkmzIL o-cJrNdO mb-0">
                                      1 to 4 years
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className=" o-lIIwF   cfVszm">
                                <td className=" o-fzpimw o-fzpibK o-fznJzu o-fznJPk">
                                  <div className="o-bUVylL o-cpnuEd d-flex justify-content-between">
                                    <p className="o-fzptZU o-bkmzIL o-cJrNdO mb-0">
                                      Processing Fees
                                    </p>
                                    <p className="o-fzptOu o-bkmzIL o-cJrNdO mb-0">
                                      Varies with bank
                                    </p>
                                  </div>
                                </td>
                                <td className=" o-fzpimw o-fzpibK o-fznJzu o-fznJPk">
                                  <div className="o-bUVylL o-cpnuEd d-flex justify-content-between ">
                                    <p className="o-fzptZU o-bkmzIL o-cJrNdO mb-0">
                                      Collateral/Security Requirement
                                    </p>
                                    <p className="o-fzptOu o-bkmzIL o-cJrNdO mb-0">
                                      None
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p
                          data-skin="text"
                          className="o-KxopV o-zmksK o-fzpihx"
                        >
                          Interest rates applicable on monthly reducing balance.
                        </p>
                      </>
                    ) : null}
                    <div
                      aria-label="Read More"
                      aria-expanded="false"
                      role="button"
                      className="o-frwuxB d-flex justify-content-end text-primary   o-fzoTnS o-eemiLE o-eqqVmt o-cHfWwD o-ccrPDo "
                      onClick={toggleRedmore}
                    >
                      {showMore ? "-less" : "+more"}
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section
            className="  o-fzptVd o-fzptYr o-brXWGL "
            data-skin="section"
          >
            <header className="o-fznJDS o-ckGLSv o-fznJFI o-cMwvCl o-fzpihY o-fzpilm o-brXWGL mb-5 ">
              <h2
                className="o-eqqVmt o-cJrNdO o-Hyyko o-bPYcRG mb-5 "
                data-skin="title"
              >
                How does this work?
              </h2>
            </header>
            <div className=" container  o-fznJDS o-ckGLSv o-fznJFI o-cMwvCl o-fzpihY o-fzpilm o-brXWGL mb-lg-5 mb-3   ">
              <div className="o-ItVGT o-bIMsfE o-eFudgX o-czEIGQ o-eKWNKE o-fBNTVC o-qqdXv row ">
                <div
                  className=" col-lg-4  border border-1  d-flex align-items-center o-fcaNGp o-dsiSgT o-fzptVd o-fzptYr o-fzokkA o-fzokeS o-cRSqer o-dbKqqe o-cKSifp o-ItVGT o-eFudgX o-bfyaNx QG4yEZ p-2"
                  style={{ background: "#f5f5f5" }}
                >
                  <div className="o-fzptOu o-eoatGj o-fsdsjy o-chOnzP">
                    <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                      <img
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/cartrade/approval.svg"
                        alt="Fill in your details once"
                        title="Fill in your details once"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="o-zmksK o-bkmzIL mb-0">
                      Fill in your details once
                    </p>
                  </div>
                </div>
                <div
                  className="  col-lg-4 border border-1 d-flex align-items-center o-fcaNGp o-dsiSgT o-fzptVd o-fzptYr o-fzokkA o-fzokeS o-cRSqer o-dbKqqe o-cKSifp o-ItVGT o-eFudgX o-bfyaNx QG4yEZ p-2"
                  style={{ background: "#f5f5f5" }}
                >
                  <div className="o-fzptOu o-eoatGj o-fsdsjy o-chOnzP">
                    <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                      <img
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/cartrade/credit-report.svg"
                        alt="Get Free, No impact credit report"
                        title="Get Free, No impact credit report"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="o-zmksK o-bkmzIL mb-0">
                      Get Free, No impact credit report
                    </p>
                  </div>
                </div>
                <div
                  className="  col-lg-4 d-flex align-items-center o-fcaNGp o-dsiSgT o-fzptVd o-fzptYr o-fzokkA o-fzokeS o-cRSqer o-dbKqqe  o-ItVGT o-eFudgX o-bfyaNx QG4yEZ border border-1 p-2"
                  style={{ background: "#f5f5f5" }}
                >
                  <div className="o-fzptOu o-eoatGj o-fsdsjy o-chOnzP">
                    <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                      <img
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/cartrade/on-road-price.svg"
                        alt="Get approval voucher"
                        title="Get approval voucher"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="o-zmksK o-bkmzIL mb-0">
                      Get approval voucher
                    </p>
                  </div>
                </div>
                <div
                  className="  col-lg-4 d-flex align-items-center o-fcaNGp o-dsiSgT o-fzptVd o-fzptYr o-fzokkA o-fzokeS o-cRSqer  o-cKSifp o-ItVGT o-eFudgX o-bfyaNx QG4yEZ border border-1 p-2"
                  style={{ background: "#f5f5f5" }}
                >
                  <div className="o-fzptOu o-eoatGj o-fsdsjy o-chOnzP">
                    <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                      <img
                        className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                        src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/cartrade/compare.svg"
                        alt="Visit dealer to buy car"
                        title="Visit dealer to buy car"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="o-zmksK o-bkmzIL mb-0">
                      Visit dealer to buy car
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h2 className="o-fznVme o-fznJEv o-chNNuk o-fznJFh o-cPFhqO o-fzoTzs o-dKUdmM o-Hyyko o-bPYcRG">
            Looking for a Car Loan?
          </h2>
          <div className="">
            <div className="">
              <div
                className="  o-brXWGL o-cWRslo o-chzWeu o-eMOUEg o-dbKqqe o-OAYdd o-eFudgX o-czEIGQ  o-dRalCs"
                data-skin="sticky-tabs-wrapper"
              >
                <ul className="o-cpnuEd o-bmFSid o-eEgygU o-forcxc o-aLrhU o-bVSleT o-dMAfbA o-bxvtPy  o-bKsToU nav nav-tabs   RcNLBl">
                  <li
                    className="o-eqqVmt o-flVtyy o-fzoTsT o-fzoTpF plA2mn Sc3XvC
                  o-gqhuJ  nav-item"
                    data-index={0}
                  >
                    <a
                      className="o-brXWGL o-bqHweY o-flVtyy o-frwuxB b5G7MI   o-bfyaNx nav-link active"
                      data-bs-toggle="tab"
                      href="#usedcar"
                      role="tab"
                      aria-selected="true"
                      title="USED CAR"
                    >
                          USED CAR
                    
                      
                    </a>
                  </li>
                  <li
                    className="o-eqqVmt o-flVtyy o-fzoTsT o-fzoTpF plA2mn Sc3XvC
                  o-zmksK nav-item"
                    data-index={1}
                  >
                    <a
                      className="o-brXWGL o-bqHweY o-flVtyy o-frwuxB b5G7MI   o-bfyaNx nav-link"
                      data-bs-toggle="tab"
                      href="#newdcar"
                      role="tab"
                      aria-selected="false"
                      title="NEW CAR"
                    >
                       NEW CAR
                    </a>
                  </li>
                </ul>
                <div className=" tab-content o-chzWeu o-ItVGT o-eFudgX o-czEIGQ o-fbEicu o-eELcQX o-bIMsfE o-eUqSLf o-fwwghB o-eNlUkX  o-biKUts o-dfUwye o-fznVCs o-bqHweY o-cpnuEd">
                  <div className="tab-pane active" id="usedcar">
                    <div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div
                            className="p-2"
                            style={{ background: "#f5f5f5" }}
                          >
                            <form>
                              {/* Car Selection */}
                              <div className="mb-3">
                                <label htmlFor="car" className="form-label">
                                  Car <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="car"
                                    placeholder="Select Your Car"
                                    readOnly=""
                                  />
                                  <button
                                    className=" btn-outline-secondary"
                                    type="button"
                                  >
                                    &gt;
                                  </button>
                                </div>
                              </div>
                              {/* City Selection */}
                              <div className="mb-3">
                                <label htmlFor="city" className="form-label">
                                  City <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    defaultValue="Mumbai"
                                    readOnly=""
                                  />
                                  <button
                                    className=" btn-outline-secondary"
                                    type="button"
                                  >
                                    &gt;
                                  </button>
                                </div>
                              </div>
                              {/* Full Name */}
                              <div className="mb-3">
                                <label
                                  htmlFor="fullName"
                                  className="form-label"
                                >
                                  Full Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <select
                                    className="form-select"
                                    aria-label="Title"
                                  >
                                    <option selected="">Mr</option>
                                    <option value={1}>Ms</option>
                                    <option value={2}>Mrs</option>
                                  </select>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    placeholder="Full Name as per PAN card"
                                  />
                                </div>
                              </div>
                              {/* Mobile Number */}
                              <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">
                                  Mobile <span className="text-danger">*</span>{" "}
                                  <span className="text-muted">
                                    (Please enter number that will be used for
                                    registering Car)
                                  </span>
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">+91</span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    placeholder="Enter Mobile Number"
                                  />
                                </div>
                              </div>
                              {/* Submit Button */}
                              <div className="d-grid gap-2">
                                <button
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  Get Started
                                </button>
                              </div>
                              {/* Terms and Conditions */}
                              <div className="mt-3 text-muted small">
                                By proceeding ahead you agree to{" "}
                                <a href="#">CarTrade Visitor Agreement</a>,{" "}
                                <a href="#">Privacy Policy</a> and{" "}
                                <a href="#">Terms and Conditions</a>. This site
                                is protected by reCAPTCHA and{" "}
                                <a href="#">Google Terms of Service</a> apply.
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <h3 className="my-3">Our Lending Partners</h3>
                          <div>
                            <div className="row">
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/axis-bank-logo-2x.png"
                                      alt="Axis Bank"
                                      title="Axis Bank"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">Axis Bank</p>
                                </div>
                              </div>
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/chola.svg"
                                      alt="Cholamandalam Finance"
                                      title="Cholamandalam Finance"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">
                                    Cholamandalam Finance
                                  </p>
                                </div>
                              </div>
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/hdb-bank-02.png"
                                      alt="HDB Financial Services"
                                      title="HDB Financial Services"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">
                                    HDB Financial Services
                                  </p>
                                </div>
                              </div>
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/icici-bank-logo-with-bg-v2.png"
                                      alt="ICICI Bank"
                                      title="ICICI Bank"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">ICICI Bank</p>
                                </div>
                              </div>

                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/yes-bank-v2.svg"
                                      alt="Yes Bank"
                                      title="Yes Bank"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">Yes Bank</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane " id="newdcar">
                    <div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div
                            className="p-2"
                            style={{ background: "#f5f5f5" }}
                          >
                            <form>
                              {/* Car Selection */}
                              <div className="mb-3">
                                <label htmlFor="car" className="form-label">
                                  New Car <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="car"
                                    placeholder="Select Your Car"
                                    readOnly=""
                                  />
                                  <button
                                    className=" btn-outline-secondary"
                                    type="button"
                                  >
                                    &gt;
                                  </button>
                                </div>
                              </div>
                              {/* City Selection */}
                              <div className="mb-3">
                                <label htmlFor="city" className="form-label">
                                  City <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    defaultValue="Mumbai"
                                    readOnly=""
                                  />
                                  <button
                                    className=" btn-outline-secondary"
                                    type="button"
                                  >
                                    &gt;
                                  </button>
                                </div>
                              </div>
                              {/* Full Name */}
                              <div className="mb-3">
                                <label
                                  htmlFor="fullName"
                                  className="form-label"
                                >
                                  Full Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                  <select
                                    className="form-select"
                                    aria-label="Title"
                                  >
                                    <option selected="">Mr</option>
                                    <option value={1}>Ms</option>
                                    <option value={2}>Mrs</option>
                                  </select>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    placeholder="Full Name as per PAN card"
                                  />
                                </div>
                              </div>
                              {/* Mobile Number */}
                              <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">
                                  Mobile <span className="text-danger">*</span>{" "}
                                  <span className="text-muted">
                                    (Please enter number that will be used for
                                    registering Car)
                                  </span>
                                </label>
                                <div className="input-group">
                                  <span className="input-group-text">+91</span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    placeholder="Enter Mobile Number"
                                  />
                                </div>
                              </div>
                              {/* Submit Button */}
                              <div className="d-grid gap-2">
                                <button
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  Get Started
                                </button>
                              </div>
                              {/* Terms and Conditions */}
                              <div className="mt-3 text-muted small">
                                By proceeding ahead you agree to{" "}
                                <a href="#">CarTrade Visitor Agreement</a>,{" "}
                                <a href="#">Privacy Policy</a> and{" "}
                                <a href="#">Terms and Conditions</a>. This site
                                is protected by reCAPTCHA and{" "}
                                <a href="#">Google Terms of Service</a> apply.
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <h3 className="my-3">Our Lending Partners</h3>
                          <div>
                            <div className="row">
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/axis-bank-logo-2x.png"
                                      alt="Axis Bank"
                                      title="Axis Bank"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">Axis Bank</p>
                                </div>
                              </div>
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/chola.svg"
                                      alt="Cholamandalam Finance"
                                      title="Cholamandalam Finance"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">
                                    Cholamandalam Finance
                                  </p>
                                </div>
                              </div>
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/hdb-bank-02.png"
                                      alt="HDB Financial Services"
                                      title="HDB Financial Services"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">
                                    HDB Financial Services
                                  </p>
                                </div>
                              </div>
                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/icici-bank-logo-with-bg-v2.png"
                                      alt="ICICI Bank"
                                      title="ICICI Bank"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">ICICI Bank</p>
                                </div>
                              </div>

                              <div
                                className="col-md-6 border d-flex align-items-center justify-content-center "
                                style={{ background: "" }}
                              >
                                <div className="o-dsiSgT o-efHQCX o-cpnuEd text-center">
                                  <div className="o-bfyaNx o-brXWGL o-bqHweY rNjoTC  ">
                                    <img
                                      className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                      src="https://imgd.aeplcdn.com/0x0/cw/static/icons/bank-logos/yes-bank-v2.svg"
                                      alt="Yes Bank"
                                      title="Yes Bank"
                                    />
                                  </div>
                                  <p className="o-cNwRuH o-zmksK">Yes Bank</p>
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
            </div>
            <div className="o-brXWGL">
              <div className="o-dJmcbh">
                <div className="">
                  <section
                    className="  o-fzptVd o-fzptYr o-brXWGL "
                    data-skin="section"
                  >
                    <h2
                      className="o-eqqVmt o-cJrNdO o-Hyyko o-bPYcRG mb-5 "
                      data-skin="title"
                    >
                      Why Choose CarTrade?
                    </h2>

                    <div className="  container  mb-lg-5 mb-3   ">
                      <div className=" row ">
                        <div
                          className=" col-lg-4  border border-1  d-flex align-items-center p-2"
                          style={{ background: "#f5f5f5" }}
                        >
                          <div className="o-fzptOu o-eoatGj o-fsdsjy o-chOnzP">
                            <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                              <img
                                className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/cartrade/clock-tick.svg"
                                alt="Instant approval in minutes"
                                title="Instant approval in minutes"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="o-zmksK o-bkmzIL mb-0">
                              Instant approval in minutes
                            </p>
                          </div>
                        </div>
                        <div
                          className="  col-lg-4 border border-1 d-flex align-items-center o-fcaNGp o-dsiSgT o-fzptVd o-fzptYr o-fzokkA o-fzokeS o-cRSqer o-dbKqqe o-cKSifp o-ItVGT o-eFudgX o-bfyaNx QG4yEZ p-2"
                          style={{ background: "#f5f5f5" }}
                        >
                          <div className="o-fzptOu o-eoatGj o-fsdsjy o-chOnzP">
                            <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                              <img
                                className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/cartrade/calculator.svg"
                                alt="Affordable and flexible EMI"
                                title="Affordable and flexible EMI"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="o-zmksK o-bkmzIL mb-0">
                              Affordable and flexible EMI
                            </p>
                          </div>
                        </div>
                        <div
                          className="  col-lg-4 d-flex align-items-center o-fcaNGp o-dsiSgT o-fzptVd o-fzptYr o-fzokkA o-fzokeS o-cRSqer o-dbKqqe  o-ItVGT o-eFudgX o-bfyaNx QG4yEZ border border-1 p-2"
                          style={{ background: "#f5f5f5" }}
                        >
                          <div className="o-fzptOu o-eoatGj o-fsdsjy o-chOnzP">
                            <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                              <img
                                className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/cartrade/compare-2.svg"
                                alt="Compare and choose your best offers"
                                title="Compare and choose your best offers"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="o-zmksK o-bkmzIL mb-0">
                              Compare and choose your best offers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="o-fzptVd o-fzptYr o-brXWGL o-cWzten"
                    data-skin="section"
                  >
                    <div
                      className="o-fznJDS o-ckGLSv o-fznJFI o-cMwvCl o-fzoHBq o-fzpilm o-brXWGL "
                      style={{ background: "#f5f5f5" }}
                    >
                      <div className="d-flex align-items-center o-dsiSgT o-fzptVd o-fzptYr o-fzptZB o-czsMOo o-fzpibK o-dxEDsE o-siHiz o-eFudgX o-czEIGQ o-qqdXv o-OAYdd o-dbKqqe o-djSZRV o-eCFISO  o-cpnuEd p-3">
                        <div className="o-eemiLE o-fyWCgU o-fzptOP o-cMwvCl o-fzptOu o-chHXDb o-epNxYl o-zmksK">
                          Share via
                        </div>
                        <div>
                          <ul className=" o-cpnuEd d-flex">
                            <li className="o-chOnzP o-fzpibr o-cJEFgL">
                              <a
                                href="http://m.facebook.com/sharer.php?u=https://www.cartrade.com/car-loan/?utm_source=share&t=Car Loan"
                                rel="noopener"
                                target="_blank"
                                aria-label="Share on facebook"
                              >
                                <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                                  <img
                                    className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                    src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/socialshare/facebook.svg?v"
                                    alt="facebook"
                                    title="facebook"
                                  />
                                </div>
                              </a>
                            </li>
                            <li className="o-chOnzP o-fzpibr o-cJEFgL">
                              <a
                                href="https://twitter.com/share?url=https://www.cartrade.com/car-loan/?utm_source=share&t=Car Loan"
                                rel="noopener"
                                target="_blank"
                                aria-label="Share on twitter"
                              >
                                <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                                  <img
                                    className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                    src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/socialshare/twitter.svg?v"
                                    alt="twitter"
                                    title="twitter"
                                  />
                                </div>
                              </a>
                            </li>
                            <li className="o-chOnzP o-fzpibr o-cJEFgL">
                              <a
                                href="https://mail.google.com/mail?view=cm&tf=0&to=contact@carwale.com&su=Car Loan&body=https://www.cartrade.com/car-loan/?utm_source=share"
                                rel="noopener"
                                target="_blank"
                                aria-label="Share on gmail"
                              >
                                <div className="o-bfyaNx o-brXWGL o-bqHweY   sfDWSv">
                                  <img
                                    className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
                                    src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/socialshare/gmail.svg?v"
                                    alt="gmail"
                                    title="gmail"
                                  />
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section
                    className="o-fzptVd o-fzptYr o-brXWGL "
                    data-skin="section"
                  >
                    <div className="container py-5">
                      <div
                        className=" wow fadeIn"
                        data-wow-delay="0.1s"
                        style={{
                          maxWidth: 500,
                          visibility: "visible",
                          animationDelay: "0.1s",
                          animationName: "fadeIn",
                        }}
                      >
                        <h1 className="mb-4  text-start">FAQs</h1>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="accordion" id="accordionFAQ1">
                            <div
                              className="accordion-item wow fadeIn"
                              data-wow-delay="0.1s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.1s",
                                animationName: "fadeIn",
                              }}
                            >
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="false"
                                  aria-controls="collapseOne"
                                >
                                  What are the benefits of applying for a car
                                  loan with CarTrade?
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionFAQ1"
                                style={{}}
                              >
                                <div className="accordion-body">
                                  When you fill your basic details into CarTrade
                                  car loan eligibility tool, we provide you with
                                  all available options based on the information
                                  submitted. After you get the complete list of
                                  lenders who might suit your specific
                                  requirement you can compare the various loan
                                  options based on tenure, interest rate,
                                  maximum loan amount as well as other factors.
                                  You can then go ahead and zero in on the offer
                                  that is best suited to your specific
                                  requirement.
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item wow fadeIn"
                              data-wow-delay="0.2s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.2s",
                                animationName: "fadeIn",
                              }}
                            >
                              <h2 className="accordion-header" id="headingTwo">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Can I get a loan to purchase a used car?
                                </button>
                              </h2>
                              <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionFAQ1"
                              >
                                <div className="accordion-body">
                                  The maximum loan amount approved may vary from
                                  one bank to the other. Usually, banks approve
                                  loan amounts that range from 80%–90% of the
                                  car’s on-road price. Few banks even lend 100%
                                  of the car’s ex-showroom price. In addition to
                                  these criteria, the percentage of financing
                                  offered depends on the price, type of car
                                  (standard/ premium) and whether you are
                                  applying for a new or pre-owned car.
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item wow fadeIn"
                              data-wow-delay="0.3s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeIn",
                              }}
                            >
                              <h2
                                className="accordion-header"
                                id="headingThree"
                              >
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  What documents do I need to submit when
                                  applying for a car loan?
                                </button>
                              </h2>
                              <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionFAQ1"
                              >
                                <div className="accordion-body">
                                  Like any other loan that you apply for, a car
                                  loan application requires self attested
                                  supporting documents such as income (last
                                  three pay slips/last acknowledged ITR),
                                  address and identity proof documents along
                                  with you PAN card. Other documentation
                                  requirements, if any, tend to differ from one
                                  lender to another.
                                </div>
                              </div>
                            </div>
                            <div
                              className="accordion-item wow fadeIn"
                              data-wow-delay="0.4s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.4s",
                                animationName: "fadeIn",
                              }}
                            >
                              <h2 className="accordion-header" id="headingFour">
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseFour"
                                  aria-expanded="true"
                                  aria-controls="collapseFour"
                                >
                                  What is the typical tenure of a car loan?
                                </button>
                              </h2>
                              <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#accordionFAQ1"
                              >
                                <div className="accordion-body">
                                  The tenure of a typical car loan ranges from 1
                                  year to 5 years. The shorter the loan tenure,
                                  the higher is the EMI payable. Currently, a
                                  small number of lenders are engaged in
                                  providing car loans for longer durations of up
                                  to 7 years also.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarLoan;
