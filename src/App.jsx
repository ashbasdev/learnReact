import { BrowserRouter, Routes, Route } from "react-router-dom"
// TODO: also import NavLink from "react-router-dom".
import {NavLink} from "react-router-dom";
import Home from "./Home.jsx"
import Products from "./Products.jsx"
import Contact from "./Contact.jsx"

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <nav className="card">
        {/* TODO: add a NavLink for each page: / (Home), /products (Products),
            and /contact (Contact). */}
        <NavLink to="/">Home </NavLink>
        <NavLink to="/products">Products </NavLink>
        <NavLink to="/contact">Contact </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
