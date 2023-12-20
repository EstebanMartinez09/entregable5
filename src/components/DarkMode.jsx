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
      {darkMode ? <IconSunglasses onClick={handleToggleTheme} /> : <IconEyeglassOff onClick={handleToggleTheme} />}
    </div>
  )
}
export default DarkMode