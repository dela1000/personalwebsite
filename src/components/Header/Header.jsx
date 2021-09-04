import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import './Header.css';

export default function Header() {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  return (
    <div>
      <h3>HEADER</h3>
      <button
        type="button"
        onClick={toggleTheme}
        className="center btn btn--icon"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <div>WbSunnyRoundedIcon</div> : <div>Brightness2Icon</div>}
      </button>
    </div>
  );
}
