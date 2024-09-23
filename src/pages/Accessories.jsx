import { Link } from "react-router-dom";

function Accessories() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Accessories
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/cars">Home</Link>
            </li>

            <li className="breadcrumb-item active text-primary">Accessories</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      <div className="container-fluid gallery py-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              maxWidth: 800,
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <h1 className="display-5 text-capitalize text-indigo text_shadow mb-3">
              VehicleUniverse Accessories
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <div className="gallery-item">
                <img
                  src="img/gallary-1.webp"
                  className="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div className="search-icon">
                  <a
                    href="img/gallary-1.webp"
                    className="btn  btn-lg-square rounded-circle"
                    data-lightbox="gallary-1"
                  >
                    <i className="fas fa-search-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="gallery-item">
                <img
                  src="img/gallary-2.jpg"
                  className="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div className="search-icon">
                  <a
                    href="img/gallary-2.jpg"
                    className="btn  btn-lg-square rounded-circle"
                    data-lightbox="gallary-2"
                  >
                    <i className="fas fa-search-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <div className="gallery-item">
                <img
                  src="img/Gallary-3.jpg"
                  className="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div className="search-icon">
                  <a
                    href="img/Gallary-3.jpg"
                    className="btn  btn-lg-square rounded-circle"
                    data-lightbox="Gallary-3"
                  >
                    <i className="fas fa-search-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <div className="gallery-item">
                <img
                  src="img/gallary-4.jpg"
                  className="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div className="search-icon">
                  <a
                    href="img/gallary-2.jpg"
                    className="btn  btn-lg-square rounded-circle"
                    data-lightbox="gallary-2"
                  >
                    <i className="fas fa-search-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <div className="gallery-item">
                <img
                  src="img/gallary-5.jpg"
                  className="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div className="search-icon">
                  <a
                    href="img/gallary-5.jpg"
                    className="btn  btn-lg-square rounded-circle"
                    data-lightbox="gallary-2"
                  >
                    <i className="fas fa-search-plus" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 wow fadeInUp"
              data-wow-delay="0.6s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <div className="gallery-item">
                <img
                  src="img/gallary-6.jpg"
                  className="img-fluid rounded w-100 h-100"
                  alt=""
                />
                <div className="search-icon">
                  <a
                    href="img/gallary-6.jpg"
                    className="btn  btn-lg-square rounded-circle"
                    data-lightbox="gallary-6"
                  >
                    <i className="fas fa-search-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accessories;
