import { createContext, useContext, useEffect, useState } from "react"

// The context carries an object: the current theme plus a function to change
// it. Any component below the provider can read the value AND update it.
const ThemeContext = createContext(null)

function ThemeLabel() {
  const { theme } = useContext(ThemeContext)
  return <p className="muted">Current theme: {theme}</p>
}

function ThemeToggle() {
  // TODO 1: also pull `toggleTheme` out of the context, alongside `theme`.
  const { theme, toggleTheme } = useContext(ThemeContext)
  // TODO 2: call toggleTheme from the button's onClick below, so this deep
  // component updates the shared theme.
  return (
      <button className="btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"}
      </button>
  )
}

function Toolbar() {
  // Toolbar passes nothing down. Each child reads the context for itself.
  return (
      <div className="stack">
        <ThemeLabel />
        <ThemeToggle />
      </div>
  )
}

function App() {
  const [theme, setTheme] = useState("dark")

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme)
  }, [theme])

  // The `theme` class on the card swaps the look. Because the state lives here,
  // updating it from deep in the tree re-renders App and re-themes the card.
  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`card stack ${theme}`}>
          <h1>Settings</h1>
          <Toolbar />
        </div>
      </ThemeContext.Provider>
  )
}

export default App
