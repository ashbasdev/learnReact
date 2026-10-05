import { getPokemonId, getSpriteUrl } from "./api.js"

// One card in the grid. The grid passes it a single `pokemon` as a prop.
function PokemonCard({ pokemon }) {
  const id = getPokemonId(pokemon)

  // TODO: return the card. Inside <div className="pokemon-card"> show, stacked:
  //   1. the number:  <span className="pokemon-number">#{id}</span>
  //   2. the picture: <img crossOrigin="anonymous" src={getSpriteUrl(id)} alt={pokemon.name} />
  //   3. the name:    <span className="pokemon-name">{pokemon.name}</span>
  return (
    <div className="pokemon-card">
      <span className="pokemon-number">#{id}</span>
      <img crossOrigin="anonymous" src={getSpriteUrl(id)} alt={pokemon.name} />
      <span className="pokemon-name">{pokemon.name}</span>
    </div>
  )
}

export default PokemonCard
