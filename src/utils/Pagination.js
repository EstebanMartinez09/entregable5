import { useSelector } from "react-redux";

const PaginatePokemon = (pokemon, currentPage) => {
    const pokemon_PerPage = useSelector((store) => store.pokemonNumber);
   
    //? pokemon que se renderizan en la pagina actual

    
    const sliceEnd = currentPage * pokemon_PerPage;
    const sliceStart = sliceEnd - pokemon_PerPage;
    const pokemonInCurrentPage = pokemon.slice(sliceStart, sliceEnd);

    //? ultima pagina o la cantidad de paginas
    
    const lastPage = Math.ceil(pokemon.length / pokemon_PerPage);

    //? bloque actual
    
    const pages_per_block = 7;
    const actualBlock = Math.ceil(currentPage / pages_per_block);

    //? paginas que se renderizan en el bloque actual
    
    const pagesInCurrentBlock = [];
    const maxPage = actualBlock * pages_per_block;
    const minPage = maxPage - pages_per_block + 1;

    for (let i = minPage; i <= maxPage; i++) {
        if(i<=lastPage){
            pagesInCurrentBlock.push(i);
        }
    }

   return {
    pokemonInCurrentPage,
    lastPage,
    pagesInCurrentBlock
   }

};

export {PaginatePokemon};