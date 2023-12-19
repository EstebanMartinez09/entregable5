import { PokemonPreview } from "./PokemonPreview"

export const PokemonList = ({ pokemons }) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-[1200px] gap-5 mx-auto">
            {
                pokemons.map((pokemon) => (
                    <PokemonPreview key={pokemon.url} pokemonUrl={pokemon.url} />
                ))
            }
        </section>
    )
}