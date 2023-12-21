import { IconPokeball } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import ButtonList from "../components/ButtonList";
import DarkMode from "../components/DarkMode";
export const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const toggleSettingsMenu = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  const toggleSettingsClose = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="border-b-[30px] border-[#0C0C0C] relative sm:border-b-[45px] ">
      <div className="bg-[#DD1A1A] h-[60px] sm:h-[90px]"></div>
      
      <img
        className="absolute left-[7%] w-[200px] bottom-[-5px] sm:w-[350px] sm:bottom-[-7px]"
        src="/logo/pokedex.svg"
        alt=""
      />
      <button
  className="animationPokeball absolute bottom-[-40px] right-[5%] sm:bottom-[-72px] shadow-gradient-blue-to-red rounded-full"
  onClick={toggleSettingsMenu}
>
  <IconPokeball
    className="bg-white text-[#D93F3F] rounded-full w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
  />
</button>

      {isSettingsOpen && (
        <div
          className="absolute top-6 right-0 h-auto bg-transparent
               rounded-xl text-white p-4 backdrop-blur-2xl
               border-[2px] border-[#cccccc96] z-40"
        >
          <div>
            <IconX onClick={toggleSettingsClose} className="relative top-[10px] right-0 rounded-md
            bg-white text-[#D93F3F] dark:bg-gray-400"  />
          </div>
          <div className="grid place-items-center py-4">
            <DarkMode />
          </div>
          
          <div className="settings-menu">
            <ButtonList />
          </div>
        </div>
      )}
    </div>
  );
};
