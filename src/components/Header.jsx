
import { IconPokeball } from "@tabler/icons-react";
import { useState } from "react";
import ButtonList from "../components/ButtonList";
import DarkMode from "../components/DarkMode";
export const Header = () => {
  
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettingsMenu = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  return (
    <div className="border-b-[30px] border-[#0C0C0C] relative sm:border-b-[45px] ">
        <div className="bg-[#DD1A1A] h-[60px] sm:h-[90px]"></div>
        <img className="absolute bottom-[-52px] right-[5%] w-[80px] sm:w-[120px] sm:bottom-[-79px]" src="/header/pokeball.svg" alt="" />
        <img className="absolute left-[7%] w-[200px] bottom-[-5px] sm:w-[350px] sm:bottom-[-7px]" src="/logo/pokedex.svg" alt="" />
        <button
              className="absolute botton-0 right-0 translate-x-[-54px]"
              onClick={toggleSettingsMenu}
            >
              <IconPokeball className="bg-white text-[#D93F3F] 
              rounded-full w-[40px] h-[40px]" />
            </button>

            {isSettingsOpen && (
              <div className="absolute top-6 right-0 h-auto bg-transparent
               rounded-xl text-white p-4 backdrop-blur-2xl
               border-[2px] border-[#cccccc96] z-40">
                <div className="settings-menu">
                  <ButtonList  />
                </div>
                <div className="grid place-items-center py-4">
                  <DarkMode />
                </div>
              </div>
            )}
    </div>

  )
}