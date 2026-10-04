import { useState } from "react"
// TODO: also import useNavigate from "react-router-dom".
import {useNavigate} from "react-router-dom";

function Home() {
  const [name, setName] = useState("")
  // TODO: get the navigate function by calling useNavigate().
  const navigate = useNavigate()
  function handleSubmit(event) {
    event.preventDefault()
    // TODO: send the user to `/welcome/${name}` with navigate(...).
    navigate(`welcome/${name}`)
  }

  return (
    <div className="card stack">
      <h1>Sign in</h1>
      <form className="stack" onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Ada"
            required
          />
        </label>
        <button className="btn" type="submit">
          Continue
        </button>
      </form>
    </div>
  )
}

export default Home
