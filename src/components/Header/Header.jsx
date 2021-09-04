import { useContext } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import { ThemeContext } from '../../contexts/theme';
import './Header.css';

export default function Header() {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  return (
    <div className="w-screen filter drop-shadow-sm items-center py-5 px-5 flex justify-around">
      <h3>HEADER</h3>
      <button
        type="button"
        onClick={toggleTheme}
        className="center btn btn--icon"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </div>
  );
}
