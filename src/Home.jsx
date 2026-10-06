import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard.jsx"

function Home() {
  const [pokemon, setPokemon] = useState([])
  const [query, setQuery] = useState("")
  // TODO: add `loading` state (start true) and `error` state (start null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadPokemon() {
      // TODO: wrap this in try / catch / finally:
      //   try:     fetch, check res.ok (throw if not), setPokemon(data.results)
      //   catch:   setError("Could not load Pokemon. Please try again.")
      //   finally: setLoading(false)
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        if  (!res.ok) throw new Error("Request failed")
        const data = await res.json()
        setPokemon(data.results)
      } catch {
        setError("Could not load Pokemon. Please try again.")
      } finally {
        setLoading(false)
      }

    }

    loadPokemon()
  }, [])

  const filtered = pokemon.filter((p) =>
      p.name.includes(query.toLowerCase())
  )

  return (
      <div className="page">
        <div className="search">
          <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Pokemon..."
          />
        </div>

        {/* TODO: while loading, show <p className="notice">Loading Pokemon...</p> */}
        {/* TODO: on error, show <p className="alert">{error}</p> */}
        {/* TODO: when not loading, no error, and filtered.length === 0, show
          <p className="notice">No Pokemon match your search.</p> */}
        {loading && <p className="notice">Loading Pokemon...</p>}
        {error && <p className="alert">{error}</p>}
        {!loading && !error && filtered.length === 0 && (
            <p className="notice">No Pokemon match your search.</p>
        )}

        <div className="pokedex-grid">
          {filtered.map((p) => (
              <PokemonCard pokemon={p} key={p.name} />
          ))}
        </div>
      </div>
  )
}

export default Home
