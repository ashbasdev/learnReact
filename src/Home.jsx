import { useState, useEffect } from "react"

function Home() {
  // `pokemon` starts empty and holds the list once it loads.
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    async function loadPokemon() {
      // TODO: load the list of Pokemon and store it in state.
      //  1. fetch "https://pokeapi.co/api/v2/pokemon?limit=151"
      //  2. read the JSON with await res.json()
      //  3. the array you want is on data.results, so pass it to setPokemon
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setPokemon(data.results);
    }

    loadPokemon()
  }, [])

  return (
      <div className="page">
        <div className="pokedex-grid">
          {pokemon.map((p) => (
              <div className="pokemon-card" key={p.name}>
                <span className="pokemon-name">{p.name}</span>
              </div>
          ))}
        </div>
      </div>
  )
}

export default Home
