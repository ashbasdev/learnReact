// Small helpers for the Pokemon sprite images. Provided for you.

// The list gives each Pokemon a `url` that ends in its id number, like
// "https://pokeapi.co/api/v2/pokemon/25/". Pull that id back out, because the
// sprite image and the "#number" label are both addressed by it.
export function getPokemonId(pokemon) {
  return pokemon.url.split("/").filter(Boolean).pop()
}

// The sprite images are hosted on GitHub, one PNG per id.
export function getSpriteUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
