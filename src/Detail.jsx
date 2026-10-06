import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

function Detail() {
  // useParams reads the dynamic part of the URL. The route is /pokemon/:name,
  // so this gives you the name of the Pokemon that was clicked.
  const { name } = useParams() // "bulbasaur"
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function loadPokemon() {
      // TODO: fetch `https://pokeapi.co/api/v2/pokemon/${name}`,
      // read the JSON, and store it with setPokemon.
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await res.json();
      setPokemon(data)
    }

    loadPokemon()
  }, [name])

  // Until the data arrives, `pokemon` is null. Show a placeholder.
  if (!pokemon) {
    return (
        <div className="page">
          <p className="notice">Loading...</p>
        </div>
    )
  }

  // The large picture lives at a nested path on the response. The key has a
  // hyphen, so it is read with brackets, not a dot.
  const artwork = pokemon.sprites.other["official-artwork"].front_default

  return (
      <div className="page">
        <Link className="back-link" to="/">
          ← Back to Pokedex
        </Link>
        <div className="detail">
          <span className="pokemon-number">#{pokemon.id}</span>
          <img crossOrigin="anonymous" src={artwork} alt={pokemon.name} />
          <h1>{pokemon.name}</h1>
        </div>
      </div>
  )
}

export default Detail
