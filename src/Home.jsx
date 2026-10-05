import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard.jsx"

function Home() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    async function loadPokemon() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      const data = await res.json()
      setPokemon(data.results)
    }

    loadPokemon()
  }, [])

  // Each Pokemon is now rendered by the PokemonCard component, passed down as a
  // prop. Your job this lesson is to build that component (PokemonCard.jsx).
  return (
    <div className="page">
      <div className="pokedex-grid">
        {pokemon.map((p) => (
          <PokemonCard pokemon={p} key={p.name} />
        ))}
      </div>
    </div>
  )
}

export default Home
