import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import Favourites from './components/Favourites' 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <header className="bg-dark text-white py-3 shadow-sm">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="text-white text-decoration-none">
           🏠 Home
          </Link>
          <Link to="/favourites" className="text-white text-decoration-none">
            ⭐ Favourites
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourites />} /> 
      </Routes>
    </BrowserRouter>
  )
}
export default App
