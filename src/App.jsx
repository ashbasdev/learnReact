import { useState, useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  // This effect has no dependency array, so it runs after EVERY render,
  // including each keystroke in the name field. Add a dependency array so it
  // runs only when count changes. Watch it in the Console tab.
  useEffect(() => {
    console.log("count is now", count)
  }, [count]) // <-- added [count] here

  return (
      <div className="card stack">
        <h1>Dependencies</h1>
        <input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button className="btn" onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>
  )
}

export default App
