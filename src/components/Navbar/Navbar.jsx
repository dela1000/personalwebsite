import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Context } from '../../contexts/context';
import useWindowDimensions from '../../contexts/useWindowDimensions';
import './Navbar.css';

const navList = ['home', 'projects', 'resume', 'tech', 'about', 'travel'];

export default function Navbar() {
  const { width } = useWindowDimensions();
  const [currentWidth, setCurrentWidth] = useState(0);
  const history = useHistory();
  const [{ themeName, toggleTheme, navbarState, toggleNavbar }] = useContext(Context);

  useEffect(() => {
    if (currentWidth !== width) {
      toggleNavbar(false);
      setCurrentWidth(width);
    }
  }, [width]);

  const toggleNavList = () => toggleNavbar(!navbarState);
  const closeNavList = () => toggleNavbar(false);

  const navigate = (navigateTo) => {
    history.push(`/${navigateTo}`);
  };

  return (
    <nav className="center">
      <ul
        style={{ display: navbarState ? 'flex' : null }}
        className={navbarState ? 'nav__list h-screen' : 'nav__list'}
      >
        {navList.map((navOption) => (
          <li key={navOption} className="nav-list-item monserrat link link-nav">
            <button
              className="uppercase"
              type="button"
              onClick={() => {
                closeNavList();
                navigate(navOption);
              }}
            >
              {navOption}
            </button>
          </li>
        ))}

        <li className="nav-list-item monserrat link link-nav">
          <a href="#contact">
            <button
              className="uppercase"
              type="button"
              onClick={() => {
                closeNavList();
              }}
            >
              contact
            </button>
          </a>
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
        {navbarState ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
}
