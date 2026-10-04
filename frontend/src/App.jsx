import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Index from './pages/Index'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Domestic from './destination/Domestic'
import International from './destination/International'
import FamilyTours from './Tour Packages/FamilyTours'
import HoneymoonTours from './Tour Packages/HoneymoonTours'
import BachelorTours from './Tour Packages/BachelorTours'
import HotelDetails from './tours/HotelDetails'
import TourDetails from './tours/TourDetails'
import BookMyTrip from './pages/BookMyTrip'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f5f0] text-slate-900">
        <Header />

        <main className="pt-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/destination" element={<Navigate to="/destination/domestic" replace />} />
            <Route path="/destination/domestic" element={<Domestic />} />
            <Route path="/destination/international" element={<International />} />
            <Route path="/tour-packages" element={<Navigate to="/tour-packages/family" replace />} />
            <Route path="/tour-packages/family" element={<FamilyTours />} />
            <Route path="/tour-packages/honeymoon" element={<HoneymoonTours />} />
            <Route path="/tour-packages/bachelor" element={<BachelorTours />} />
            <Route path="/tours" element={<Navigate to="/tours/tour-details" replace />} />
            <Route path="/tours/tour-details" element={<TourDetails />} />
            <Route path="/tours/hotel-details" element={<HotelDetails />} />
            <Route path="/book-my-trip" element={<BookMyTrip />} />
            <Route path="/plan-trip" element={<BookMyTrip />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App