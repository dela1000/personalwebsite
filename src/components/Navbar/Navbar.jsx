import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { ThemeContext } from '../../contexts/theme';
import './Navbar.css';

const navList = ['home', 'projects', 'resume', 'tech', 'about', 'travel'];

export default function Navbar() {
  const history = useHistory();
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowNavList(false);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {navList.map((navButton) => (
          <li className="nav-list-item">
            <button type="button" onClick={closeNavList}>
              <a
                href={navButton}
                onClick={() => navigate(navButton)}
                className="link link-nav uppercase"
              >
                {navButton}
              </a>
            </button>
          </li>
        ))}
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
