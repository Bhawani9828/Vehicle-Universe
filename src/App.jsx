
import { Route, Routes } from 'react-router-dom'
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

function App() {
 

  return (
    <>
    <Header/>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/cars" element={<Cars />} />
   <Route path="/car-details" element={<CarDetails />} />
   <Route path="/bikes" element={<Bikes />} />
   <Route path="/insurance" element={<Insurance />} />
   <Route path="/accessories" element={<Accessories />} />
   <Route path="/repair" element={<Repair />} />
   <Route path="/contact" element={<Contact />} />
   </Routes>

   <Footer/>
    </>
  )
}

export default App
