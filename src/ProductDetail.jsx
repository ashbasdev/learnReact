import { Link } from "react-router-dom"
// TODO: also import useParams from "react-router-dom".
import {useParams} from "react-router-dom";
import { products } from "./products.js"

function ProductDetail() {
  // TODO: read the id from the URL with useParams, then find the matching
  // product in the products array (match on product.id).
  const {id} = useParams()
  const product = products.find((p) => p.id === id)

      if (!product) {
        return <p>Product not found</p>
      }

      return (
          <div className="card stack">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.blurb}</p>
            <Link to="/">Back to products</Link>
          </div>
      )


  // return (
  //   <div >
  //     <h1>Product</h1>
  //     <p className="muted">Read the id from the URL to show this product.</p>
  //     <Link to="/">Back to products</Link>
  //   </div>
  // )
}

export default ProductDetail
