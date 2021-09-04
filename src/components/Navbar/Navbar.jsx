import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeContext } from '../../contexts/theme';
import useWindowDimensions from '../../adapters/useWindowDimensions';
import './Navbar.css';

const navList = ['home', 'projects', 'resume', 'tech', 'about', 'travel'];

export default function Navbar() {
  const { width } = useWindowDimensions();
  const [currentWidth, setCurrentWidth] = useState(0);
  const history = useHistory();
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  useEffect(() => {
    if (currentWidth !== width) {
      setShowNavList(false);
      setCurrentWidth(width);
    }
  }, [width]);

  const toggleNavList = () => setShowNavList(!showNavList);
  const closeNavList = () => setShowNavList(false);

  const navigate = (navigateTo) => {
    history.push(`/${navigateTo}`);
  };

  return (
    <nav className="center">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className={showNavList ? 'nav__list h-screen' : 'nav__list'}
      >
        {navList.map((navOption) => (
          <li key={navOption} className="nav-list-item link link-nav">
            <button className="uppercase" type="button" onClick={() => navigate(navOption)}>
              {navOption}
            </button>
          </li>
        ))}

        <li className="nav-list-item">
          <button type="button" onClick={closeNavList}>
            <a href="#contact" className="link link-nav uppercase">
              contact
            </a>
          </button>
        </li>
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="center btn btn--icon"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}
