import { useState } from "react"

// Validation is derived from state: compute whether the value is valid during
// render, show an error when it is not, and disable submit until it is good.

function App() {
  const [email, setEmail] = useState("")

  // 1. Compute emailError: true when something is typed but it has no "@".
  const emailError = email.length > 0 && !email.includes("@")
  const canSubmit = email.includes("@")

  function handleSubmit(e) {
    e.preventDefault()
    setEmail("")
  }

  return (
    <div className="card stack">
      <h1>Sign up</h1>
      <form className="stack" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* 2. When emailError is true, show a <p className="error"> message. */}
        {emailError ? <p className="error">Please enter a valid email.</p> : ''}
        <button className="btn" type="submit" disabled={!canSubmit}>
          Sign up
        </button>
      </form>
    </div>
  )
}

export default App
