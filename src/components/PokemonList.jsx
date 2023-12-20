import { PokemonPreview } from "./PokemonPreview"
import {Pagination} from './Pagination'
import {PaginatePokemon} from '../utils/Pagination'
import { useState } from "react"


export const PokemonList = ({ pokemons }) => {
    
   

    const [currentPage, setCurrentPage] = useState(1);
    
    const {pokemonInCurrentPage, lastPage, pagesInCurrentBlock } = PaginatePokemon(pokemons, currentPage);
    

    return (
        <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-cols-4 justify-center max-w-[1200px] gap-5 mx-auto
        mb-10">
            {
                pokemonInCurrentPage.map((pokemon) => (
                    <PokemonPreview key={pokemon.url} pokemonUrl={pokemon.url} />
                ))
            }
        </section>
        <Pagination className="flex justify-center p-8 gap-4" 
           lastPage={lastPage} 
           pagesInCurrentBlock={pagesInCurrentBlock} 
           setCurrentPage={setCurrentPage} 
           currentPage={currentPage}/>
        </div>
    )
}