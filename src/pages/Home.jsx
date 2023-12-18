import { useDispatch } from "react-redux"
import { Footer } from "../components/Footer"
import { Logo } from "../components/logo"
import { setTrainerName } from "../store/slices/trainerName.slice"
import capitalize from "../utils/funtions"
import { useNavigate } from "react-router-dom"

export const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        dispatch(setTrainerName(capitalize(name)))
        navigate("/pokedex")
    }

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div >
                <main className="leading-10 flex flex-col justify-center items-center mx-2">
                    <header className="mb-10">
                        <Logo />
                    </header>
                    <h3 className="font-bold text-[#FE1936] text-[50px] text-center">Hello trainer!</h3>
                    <p className="text-center text-[20px]">Write your name for star ...</p>
                    <form onSubmit={handleSubmit} className="flex mt-5 shadow-xl w-[min(100%,_600px)]">
                        <input autoComplete="off" name="name" placeholder="Your name..." className="outline-none w-full text-[#D3D3D3] px-2" required type="text" />
                        <button type="submit" className="bg-[#FE1936] text-[#ffffff] w-[min(100%,_150px)] hover:bg-[#FF0000] hover:tracking-widest transition-all">Start</button>
                    </form>
                </main>

            </div>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}