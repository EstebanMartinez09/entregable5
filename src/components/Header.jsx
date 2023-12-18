export const Header = () => {
  return (
    <div className="border-b-[30px] border-[#0C0C0C] relative sm:border-b-[45px] ">
        <div className="bg-[#DD1A1A] h-[60px] sm:h-[90px]"></div>
        <img className="absolute bottom-[-52px] right-[5%] w-[80px] sm:w-[120px] sm:bottom-[-79px]" src="/header/pokeball.svg" alt="" />
        <img className="absolute left-[7%] w-[200px] bottom-[-5px] sm:w-[350px] sm:bottom-[-7px]" src="/logo/pokedex.svg" alt="" />
    </div>

  )
}