import { Link } from "react-router-dom"


function Footer() {
  return (
    <div>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <div className="footer-item">
                  <h4 className="text-white mb-4">About Us</h4>
                  <p className="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                  </div>
                   <div className="position-relative">
                  <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                  <button type="button" className="btn  rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Quick Links</h4>
                <Link to="/cars"><i className="fas fa-angle-right me-2" /> Cars</Link>
                <Link to="/bikes"><i className="fas fa-angle-right me-2" /> Bike</Link>
                <Link to="/cardetails"><i className="fas fa-angle-right me-2" /> Buy</Link>
                <Link to="/insurance"><i className="fas fa-angle-right me-2" /> Insurance</Link>
                <Link to="/accessories"><i className="fas fa-angle-right me-2" /> Accessories</Link>
                <Link to="/repair"><i className="fas fa-angle-right me-2" /> Repair</Link>
                <Link to="#"><i className="fas fa-angle-right me-2" /> Terms &amp; Conditions</Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Business Hours</h4>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Mon - Friday:</h6>
                  <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Saturday:</h6>
                  <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Vacation:</h6>
                  <p className="text-white mb-0">All Sunday is our vacation</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <Link href="#"><i className="fa fa-map-marker-alt me-2" /> Chitrakoot vaishali nagar, Jaipur</Link>
                <Link href="mailto:info@example.com"><i className="fas fa-envelope me-2" /> info@blockverse.com</Link>
                <Link href="tel:+012 345 67890"><i className="fas fa-phone me-2" /> +012 345 67890</Link>
                <Link href="tel:+012 345 67890" className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</Link>
                <div className="d-flex">
                  <Link className="btn  btn-md-square rounded-circle me-3" href><i className="fab fa-facebook-f text-white" /></Link>
                  <Link className="btn  btn-md-square rounded-circle me-3" href><i className="fab fa-twitter text-white" /></Link>
                  <Link className="btn  btn-md-square rounded-circle me-3" href><i className="fab fa-instagram text-white" /></Link>
                  <Link className="btn  btn-md-square rounded-circle me-0" href><i className="fab fa-linkedin-in text-white" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </div>

  )
}

export default Footer
