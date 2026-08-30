import { useState, useEffect } from "react"

function App() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    // Return a cleanup function here that calls clearInterval(id), so the timer
    // stops instead of stacking up another one each time the effect runs.
    return () => clearInterval(id)
  }, [])

  return (
      <div className="card stack">
        <h1>Timer</h1>
        <p>Seconds on screen: {seconds}</p>
      </div>
  )
}

export default App
