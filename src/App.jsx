import { useState } from "react"

// Selects and textareas use value/e.target.value like a text input.
// A checkbox is the exception: it uses checked/e.target.checked.

function App() {
  const [size, setSize] = useState("small")
  const [agree, setAgree] = useState(false)

  return (
    <div className="card stack">
      <h1>Order</h1>
      <label>Size</label>
      {/* 1. Make this select controlled: value from size, update size in
             onChange from e.target.value. */}
      <select value={size} onChange={(e)=>setSize(e.target.value)}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <label>
        {/* 2. Make this checkbox controlled: checked from agree, update agree
               in onChange from e.target.checked. */}
        <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
        I agree to the terms
      </label>
      <p className="muted">
        Size: {size}. Agreed: {agree ? "yes" : "no"}.
      </p>
    </div>
  )
}

export default App
