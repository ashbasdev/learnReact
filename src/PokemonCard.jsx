import { getPokemonId, getSpriteUrl } from "./api.js"

// One card in the grid. The grid passes it a single `pokemon` as a prop.
function PokemonCard({ pokemon }) {
  const id = getPokemonId(pokemon)

  return (
    <div className="pokemon-card">
      <span className="pokemon-number">#{id}</span>
      <img crossOrigin="anonymous" src={getSpriteUrl(id)} alt={pokemon.name} />
      <span className="pokemon-name">{pokemon.name}</span>
    </div>
  )
}

export default PokemonCard
