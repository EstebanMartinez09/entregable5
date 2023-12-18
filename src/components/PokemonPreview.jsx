import axios from "axios"
import { useEffect, useState } from "react"
import capitalize from "../utils/funtions"
import { gradientsByType } from "../constants/pokemon"
import { Link } from "react-router-dom"

export const PokemonPreview = ({ pokemonUrl }) => {

    const [pokemonInfo, setPokemonInfo] = useState(null)



    useEffect(() => {
        axios
            .get(pokemonUrl)
            .then(({ data }) => setPokemonInfo(data))
            .catch((error) => console.log(error))
    }, [pokemonUrl])
    return (
        <Link to={`/pokedex/${pokemonInfo?.id}`} className={`p-3 ${gradientsByType[pokemonInfo?.types[0].type.name]} rounded-lg text-center `}>

            <header className=" relative h-[140px]">
                {pokemonInfo?.sprites.other["official-artwork"].front_default ? (
                    <img
                        className="absolute bottom-0 translate-y-[35%] w-full p-12"
                        src={pokemonInfo.sprites.other["official-artwork"].front_default}
                        alt="imagen pokemon"
                    />
                ) : (
                    <div className="absolute bottom-0 translate-y-[35%] w-full p-12">
                        <img src="/loading/loading.gif" alt="Loading..." />
                    </div>
                )}
            </header>

            <main className=" bg-white pt-10 grid gap-2 rounded-b-lg">

                <h3 className="capitalize text-lg font-bold">{pokemonInfo?.name}</h3>

                <h4 className="text-sm text-[#4F4F4F]">

                    {pokemonInfo?.types.map((type) => capitalize(type.type.name)).join(" / ")}
                </h4>

                <h5 className="text-xs text-[#9F9F9F]">type</h5>

                <hr />

                <ul className="grid grid-cols-2 gap-2 p-2">
                    {
                        pokemonInfo?.stats.map((stat) => (
                            <li key={stat.stat.name}>
                                <h5 className="uppercase text-xs">{stat.stat.name}</h5>
                                <span className="text-sm font-bold">{stat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>

            </main>

        </Link>
    )
}