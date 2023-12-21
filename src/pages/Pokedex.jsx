import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { PokemonList } from "../components/PokemonList";
import { useEffect, useState } from "react";
import axios from "axios";


export const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);

  const trainerName = useSelector((store) => store.trainerName.name);
  const pokemonByName = allPokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName.trim())
  );

 
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setPokemonName(e.target.pokemonName.value.toLowerCase());
  };

  const handleChangeType = (e) => {
    const url = e.target.value;
    axios
      .get(url)
      .then(({ data }) => {
        if (url.includes("type")) {
          setAllPokemons(data.pokemon.map((pokemon) => pokemon.pokemon));
        } else {
          setAllPokemons(data.results);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setTypes(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="bg-[#e9e9e9] dark:bg-[#121212]">
      <header>
        <Header  />
      </header>
      <main className="mt-10 px-5 flex flex-col gap-6 mb-8">
        <section className="mx-auto w-full max-w-[1050px] mb-10 z-10 relative">
          <p className="text-[#FE1936] font-semibold text-center mb-5 sm:text-start">
            Welcome {trainerName},{" "}
            <span className="text-[#333333] font-normal">
              here you can adventure in the world of the Pokemon!
            </span>
          </p>
          <div className="">
            <form
              className="grid sm:flex gap-2 justify-center sm:justify-between"
              onSubmit={handleOnSubmit}
            >
              <div className="shadow-md w-full max-w-[500px] items-center flex">
                <input
                  className="p-2 w-full"
                  name="pokemonName"
                  placeholder="Search Pokemon"
                  type="text"
                />
                <button className="bg-[#D93F3F] text-white p-2 w-[80px]">
                  Search
                </button>
              </div>

              <select
                className="shadow-md p-2 bg-white w-full max-w-[470px]"
                onChange={handleChangeType}
                name=""
                id=""
              >
                <option value="https://pokeapi.co/api/v2/pokemon?limit=1292">
                  All
                </option>
                {types.map((type) => (
                  <option
                    className="capitalize"
                    key={type.url}
                    value={type.url}
                  >
                    {type.name}
                  </option>
                ))}
              </select>
            </form>
            
            
          </div>
        </section>
        

        <PokemonList pokemons={pokemonByName} />
      </main>
    </section>
  );
};
