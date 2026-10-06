import { getPokemonId, getSpriteUrl } from "./api.js"
import {Link} from "react-router-dom"

function PokemonCard({ pokemon }) {
  const id = getPokemonId(pokemon)

  // TODO: make the whole card link to this Pokemon's detail page.
  // Import Link from "react-router-dom" and change the wrapping <div> to:
  //   <Link className="pokemon-card" to={`/pokemon/${pokemon.name}`}> ... </Link>
  return (
      <Link className="pokemon-card" to={`/pokemon/${pokemon.name}`}>
        <span className="pokemon-number">#{id}</span>
        <img crossOrigin="anonymous" src={getSpriteUrl(id)} alt={pokemon.name} />
        <span className="pokemon-name">{pokemon.name}</span>
      </Link>
  )
}

export default PokemonCard
