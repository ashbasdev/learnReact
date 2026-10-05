import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard.jsx"

function Home() {
  const [pokemon, setPokemon] = useState([])
  // TODO: add a `query` state for the search text, starting as ""

  const [query, setQuery] = useState("")

  useEffect(() => {
    async function loadPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const data = await res.json()
      setPokemon(data.results)
    }

    loadPokemon()
  }, [])

  // TODO: build `filtered` from `pokemon`: keep only the ones whose name
  // includes the lowercased query. For now it just shows everything.
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
      <div className="pokedex-grid">
        {filtered.map((p) => (
          <PokemonCard pokemon={p} key={p.name} />
        ))}
      </div>
    </div>
  )
}

export default Home
