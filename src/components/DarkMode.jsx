import { useEffect, useState } from 'react';
import { IconSunglasses } from '@tabler/icons-react';
import { IconEyeglassOff} from '@tabler/icons-react';

const DarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);
    const handleToggleTheme = () => {
     setDarkMode(!darkMode);
      
    };

   useEffect(() => {
     if (darkMode) {
        document.documentElement.classList.add('dark');
     } else {
        document.documentElement.classList.remove('dark');
     }
    }, [darkMode])

  return (
    <div>
      {darkMode ? <IconSunglasses className='text-[#333] bg-white rounded-md' onClick={handleToggleTheme} /> : 
      <IconEyeglassOff className='text-[#333] bg-white rounded-md' onClick={handleToggleTheme} />}
    </div>
  )
}
export default DarkMode