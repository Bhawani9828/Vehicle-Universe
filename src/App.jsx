
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import Bikes from './pages/Bikes'
import Insurance from './pages/Insurance'
import Accessories from './pages/Accessories'
import Repair from './pages/Repair'
import Contact from './pages/Contact'
import AllCars from './cars/AllCars'
import CarPrice from './cars/CarPrice'
import UpComingCars from './cars/UpComingCars'
import NewCarLaunch from './cars/NewCarLaunch'
import UseCarByCity from './cars/UseCarByCity'
import CarLoan from './cars/CarLoan'
import CarsNews from './cars/CarsNews'
import AllBikes from './bike/AllBikes'

function App() {
 
  const location = useLocation();

  const isallcarspage =location.pathname=== '/allcars';
  const iscarprice =location.pathname=== '/carprice';
  const isupcomingcars =location.pathname=== '/upcomingcars';
  const isnewcarlaunch =location.pathname=== '/newcarlaunch';
  const isusecarbycity =location.pathname=== '/usecarbycity';
  const iscarloan =location.pathname=== '/carloan';
  const iscarsnew =location.pathname=== '/carsnews';

  return (
    <>
    {!isallcarspage && !iscarprice && !isupcomingcars && !isnewcarlaunch && !isusecarbycity && !iscarloan && !iscarsnew && <Header/> }
    
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/cars" element={<Cars />} />
   <Route path="/car-details" element={<CarDetails />} />
   <Route path="/bikes" element={<Bikes />} />
   <Route path="/insurance" element={<Insurance />} />
   <Route path="/accessories" element={<Accessories />} />
   <Route path="/repair" element={<Repair />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/allcars" element={<AllCars />} />
   <Route path="/carprice" element={<CarPrice />} />
   <Route path="/upcomingcars" element={<UpComingCars />} />
   <Route path="/newcarlaunch" element={<NewCarLaunch />} />
   <Route path="/usecarbycity" element={<UseCarByCity />} /> 
   <Route path="/carloan" element={<CarLoan />} /> 
   <Route path="/carsnews" element={<CarsNews />} /> 
   <Route path="/allbikes" element={<AllBikes />} /> 
   </Routes>

   <Footer/>
    </>
  )
}

export default App
