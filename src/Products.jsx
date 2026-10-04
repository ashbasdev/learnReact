import { Link } from "react-router-dom"
import { products } from "./products.js"

function Products() {
  return (
    <div className="card stack">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
