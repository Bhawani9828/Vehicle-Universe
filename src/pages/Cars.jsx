import { Link } from "react-router-dom"
import CategoriesSlider from "../components/CategoriesSlider"


function Cars() {
  return (
    <>
    {/* Header Start */}
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: 900 }}>
        <h4
          className="text-white display-4 mb-4 wow fadeInDown"
          data-wow-delay="0.1s"
        >
          Our Cars
        </h4>
        <ol
          className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <li className="breadcrumb-item">
            <Link to="/cars">Home</Link>
          </li>
          
          <li className="breadcrumb-item active text-primary">Cars</li>
        </ol>
      </div>
    </div>
    {/* Header End */}

    <CategoriesSlider/>
  </>
  
  )
}

export default Cars
