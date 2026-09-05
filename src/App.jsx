import { useState } from "react"

const FRUITS = [
  "Apple",
  "Banana",
  "Cherry",
  "Grapefruit",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
]

// SearchInput and Results are siblings. Neither can see the other's state, so
// the shared `query` lives in their common parent, App, and flows down as props.
// The `= ""` / `= () => {}` defaults are just fallbacks so the un-wired starter
// renders; App's real props take over once you wire them.
function SearchInput({ query = "", onQueryChange = () => {} }) {
  return (
      <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search fruit..."
          aria-label="Search fruit"
      />
  )
}

function Results({ query = "" }) {
  const matches = FRUITS.filter((fruit) =>
      fruit.toLowerCase().includes(query.toLowerCase()),
  )
  return (
      <ul>
        {matches.map((fruit) => (
            <li key={fruit}>{fruit}</li>
        ))}
      </ul>
  )
}

function App() {
  const [query, setQuery] = useState("")

  return (
      <div className="card stack">
        <h1>Fruit finder</h1>
        {/* The query state is lifted up here, but neither child is wired to it yet:
          the box will not type and the list will not filter. Connect both.
          1. SearchInput needs the value AND the setter: query={query} and
             onQueryChange={setQuery}.
          2. Results needs the value: query={query}. */}
        <SearchInput query={query} onQueryChange={setQuery}/>
        <Results query={query}/>
      </div>
  )
}

export default App
