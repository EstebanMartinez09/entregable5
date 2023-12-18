import { PokemonPreview } from "./PokemonPreview"

export const PokemonList = ({ pokemons }) => {
    return (
        <section className="grid grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] gap-5 mx-auto">
            {
                pokemons.map((pokemon) => (
                    <PokemonPreview key={pokemon.url} pokemonUrl={pokemon.url} />
                ))
            }
        </section>
    )
}