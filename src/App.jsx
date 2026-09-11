import { useState } from "react"

// TODO: make this a real custom hook.
// 1. Hold the boolean in state, starting at initialValue (useState).
// 2. Add a toggle function that flips it.
// 3. Return them as a pair: [value, toggle].
function useToggle(initialValue = false) {
  const [on, setOn] = useState(initialValue);

  function toggle () {
    setOn((current) => !current)
  }
  return [on, toggle]
}

function App() {
  // The component already uses the hook. Once useToggle manages real state,
  // this button starts working.
  const [isOpen, toggle] = useToggle(false)

  return (
      <div className="card stack">
        <h1>Details</h1>
        <button className="btn" onClick={toggle}>
          {isOpen ? "Hide" : "Show"} details
        </button>
        {isOpen && <p className="muted">Here are the details you asked for.</p>}
      </div>
  )
}

export default App
