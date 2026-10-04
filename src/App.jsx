import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./Products.jsx"
import ProductDetail from "./ProductDetail.jsx"

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* TODO: add a dynamic route. The path "/products/:id" should render
            <ProductDetail />. The :id part is a placeholder that matches any
            value, like /products/keyboard or /products/mouse. */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
