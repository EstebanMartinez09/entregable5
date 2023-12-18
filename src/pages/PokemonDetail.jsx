import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"

export const PokemonDetail = () => {

  const [pokemonInfo, setPokemonInfo] = useState(null)
  console.log(pokemonInfo)

  const { id } = useParams()

  const getPercentBarProgress = (stat_value) => {
    const percent = (stat_value * 100) / 255
    return `${percent}%`
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(({ data }) => {
        setPokemonInfo(data)
      })
      .catch((error) => console.log(error))
  }, [id])


  return (

    <>

      <Header />

      <section className="p-2 grid gap-8 mt-20 shadow-md">

        <article className="w-[min(100%,_900px)] mx-auto bg-white p-8">

          <header>
            <img src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
          </header>

          <span>#{pokemonInfo?.id}</span>

          <h3>{pokemonInfo?.name}</h3>

          <div >
            <div>
              <h5>Weight</h5>
              <span>{pokemonInfo?.weight}</span>
            </div>

            <div>
              <h5>Height</h5>
              <span>{pokemonInfo?.height}</span>
            </div>
          </div>

          <section>
            <h4>states</h4>
            <ul className="grid gap-3">
              {
                pokemonInfo?.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    <div className="flex justify-between">
                      <h5 className="capitalize">{stat.stat.name}</h5>
                      <span>{stat.base_stat}/255</span>
                    </div>
                    <div className="h-6 bg-slate-30 rounded-md overflow-hidden">
                      <div style={{ width: getPercentBarProgress(stat.base_stat) }} className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 "></div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>

        </article>

        <section >
          <article className="w-[min(100%,_900px)] mx-auto bg-white  p-8 shadow-md ">
            <div className="flex justify-between items-center">
            <h4 className="text-[#302F2F] text-3xl">Movements</h4>
              <img src="/header/Slice1.svg" alt="" />
            </div>
            <ul className="flex flex-wrap gap-3">
              {
                pokemonInfo?.moves.map((move) => (
                  <li className="bg-[#E5E5E5] rounded-3xl py-2 px-4" key={move.move.name}>{move.move.name}</li>
                ))
              }
            </ul>
          </article>
        </section>

      </section>


    </>
  )
}