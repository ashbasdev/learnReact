import { useParams, Link } from "react-router-dom"

function Welcome() {
  const { name } = useParams()

  return (
    <div className="card stack">
      <h1>Hello, {name}!</h1>
      <p className="muted">Glad you could make it.</p>
      <Link to="/">Start over</Link>
    </div>
  )
}

export default Welcome
