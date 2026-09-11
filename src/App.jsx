import { useState, useRef } from "react"

function App() {
  const [seconds, setSeconds] = useState(0)

  // A ref holds a value that survives renders without causing one. We use it to
  // remember the interval id, so Stop can clear the timer Start created.
  const intervalRef = useRef(null)

  function start() {
    // Ignore extra clicks while a timer is already running.
    if (intervalRef.current !== null) return
    // TODO 1: start an interval that bumps seconds every 1000ms, and save the
    // id it returns in intervalRef.current.
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

  }

  function stop() {
    // TODO 2: stop the timer by clearing the interval id saved in the ref.
    clearInterval(intervalRef.current)

    intervalRef.current = null
  }

  return (
      <div className="card stack">
        <h1>Stopwatch</h1>
        <p>Seconds: {seconds}</p>
        <div>
          <button className="btn" onClick={start}>
            Start
          </button>
          <button className="btn" onClick={stop}>
            Stop
          </button>
        </div>
      </div>
  )
}

export default App
