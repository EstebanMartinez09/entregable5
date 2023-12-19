import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { gradientsByType } from "../constants/pokemon"

export const PokemonDetail = () => {

  const [pokemonInfo, setPokemonInfo] = useState(null)

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

      <section className="p-2 grid gap-8 mt-20  ">

        <article className="w-[min(100%,_900px)] mx-auto bg-white">

          <header className={`flex justify-center relative h-[185px] w-full ${gradientsByType[pokemonInfo?.types[0].type.name]}`}>
            <img className="absolute bottom-0 w-[300px]" src={pokemonInfo?.sprites.other["official-artwork"].front_default} alt="" />
          </header>

          <div className="grid gap-2 pb-16 px-16 text-center mt-5">
            <span className="text-[#416460] font-semibold text-xl border-[1px] border-[#9F9F9F] px-2 py-1 mx-auto">#{pokemonInfo?.id}</span>

            <div className="flex justify-center items-center gap-4">
              <div className="bg-[#E5E5E5] rounded-3xl h-[3px] flex-1 w-full"></div>
              <h3 className="capitalize text-3xl text-[#416460] font-medium">{pokemonInfo?.name}</h3>
              <div className="bg-[#E5E5E5] rounded-3xl h-[3px] flex-1 w-full"></div>
            </div>

            <div className="flex justify-center items-center gap-8 mb-5">
              <div>
                <h5 className="capitalize text-[9px] text-[#0F0F2D]">Weight</h5>
                <span className="text-[#0F0F2D]">{pokemonInfo?.weight}</span>
              </div>

              <div>
                <h5 className="capitalize text-[9px] text-[#0F0F2D]">Height</h5>
                <span className="text-[#0F0F2D]">{pokemonInfo?.height}</span>
              </div>
            </div>

            <section className="grid grid-cols-[1fr_1fr] gap-4 items-center mb-10">

              <div className="flex flex-col gap-4">
                <h5>Type</h5>
                <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 ">
                  {
                    pokemonInfo?.types.map((type) => (
                      <li key={type.type.name} className={` ${gradientsByType[type.type.name]} capitalize  max-w-[150px] w-full text-white`}>
                        {type.type.name}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h5>Abilities</h5>
                <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 ">
                  {
                    pokemonInfo?.abilities.map((ability) => (
                      <li key={ability.ability.name} className=" capitalize text-[#0F0F2D] max-w-[150px] w-full border">{ability.ability.name}</li>
                    ))
                  }
                </ul>
              </div>
            </section>

            <section>
              <div className="flex gap-4 justify-between items-center">
                <h4 className="text-[#302F2F] text-3xl">Stats</h4>
                <div className="flex items-center gap-3 w-full">
                  <div className="bg-[#E5E5E5] rounded-3xl h-[3px] flex-1 w-full"></div>
                  <img src="/header/pokeball2.svg" alt="" />
                </div>
              </div>
              <ul className="grid mt-4 gap-3">
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
          </div>

        </article>

        <section >
          <article className="w-[min(100%,_900px)] mx-auto bg-white  p-8 shadow-md ">
            <div className="flex gap-4 justify-between items-center">
              <h4 className="text-[#302F2F] text-3xl">Movements</h4>
              <div className="flex items-center gap-3 w-full">
                <div className="bg-[#E5E5E5] rounded-3xl h-[3px] flex-1 w-full"></div>
                <img src="/header/pokeball2.svg" alt="" />
              </div>
            </div>
            <ul className="flex flex-wrap gap-3 mt-4">
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