import { useSelector } from "react-redux"
import { Header } from "../components/Header"
import { PokemonList } from "../components/PokemonList"
import { useEffect, useState } from "react"
import axios from "axios"

export const Pokedex = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [types, setTypes] = useState([])

  const trainerName = useSelector((store) => store.trainerName.name)

  const pokemonByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName.trim()))

  

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value.toLowerCase())
  }

  const handleChangeType = (e) => {
    const url = e.target.value
    axios
    .get(url)
    .then(({ data }) => {
      if (url.includes("type") ) {
        setAllPokemons(data.pokemon.map((pokemon) => pokemon.pokemon))
      } else {
        setAllPokemons(data.results)
      }
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=250")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setTypes(data.results))
      .catch((error) => console.log(error))
  }, [])
  


  return (
    <section>
      <header>
        <Header />
      </header>
      <main className="mt-5 px-5">
        <div>
          <p className="text-[#FE1936] font-semibold">Welcome {trainerName}, <span className="text-[#333333] font-normal">here you can adventure in the world of the Pokemon!</span></p>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div>
            <input name="pokemonName" placeholder="Search Pokemon" type="text" />
            <button>Search</button>
          </div>
          <select onChange={handleChangeType} name="" id="">
            <option value="https://pokeapi.co/api/v2/pokemon?limit=250">All</option>
            {
              types.map((type) => (
                <option className="capitalize" key={type.url} value={type.url}>{type.name}</option>
              ))
            }
          </select>
        </form>
        <PokemonList pokemons={pokemonByName} />
      </main>
    </section>
  )
}