import { useState, useEffect } from "react"

// Add a useEffect that logs name after every render. Open the Console tab
// next to Tests to watch it fire.

function App() {
  const [name, setName] = useState("")

  // Add a useEffect here. Inside it, console.log the current name.
  useEffect(()=> {
    console.log(name);
  })

  return (
    <div className="card stack">
      <h1>Name echo</h1>
      <input
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "stranger"}</p>
    </div>
  )
}

export default App
