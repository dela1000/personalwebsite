import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAppContext } from 'contexts/context';
import useWindowDimensions from 'contexts/useWindowDimensions';
import styles from './Navbar.module.css';

import { UseAppContext } from 'types/types';

const navList = ['home', 'projects', 'resume', 'tech', 'about', 'travel'];

export default function Navbar() {
  const router = useRouter();

  const { width } = useWindowDimensions();
  const {
    sharedState: { navbarState, themeName, windowType },
    toggleNavbar,
    toggleTheme,
  }: UseAppContext = useAppContext();
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    if (currentWidth !== width) {
      toggleNavbar('close');
      setCurrentWidth(width);
    }
  }, [width]);

  const toggleNavList = () => toggleNavbar(!navbarState)
  const closeNavList = () => toggleNavbar(false);

  const navigate = (navigateTo) => {
    if (navigateTo === 'home') {
      router.push('/');
      return;
    }
    if (router.pathname === '/' && navigateTo === 'home') {
      return;
    }
    if (router.pathname !== navigateTo.substring(1)) {
      router.push(`/${navigateTo}`);
    }
  };

  const goHome = () => {
    if (router.pathname === '/_error') {
      router.push('/');
    }
  };

  useEffect(() => {
    goHome();
  }, [router.pathname]);

  const setLocation = (navOption) => {
    return router.pathname === `/${navOption}` || (router.pathname === '/' && navOption === 'home') ? styles['currentLocationLink'] : styles['link'];
  }

  return (
    <nav className="center">
      <div
        style={{ display: !navbarState ? 'flex' : null }}
        className={
          (navbarState
            ? windowType === 'desktop' ? styles[`${themeName}_nav__list__background_color h-screen`] : styles['nav__list_mobile']
            : windowType === 'desktop' ? styles[`${themeName}_nav__list__background_color`] : styles['nav__list_mobile'],
          windowType === 'desktop' ? styles['nav__list'] : styles['nav__list_mobile'],
          )
        }
      >
        {navList.map((navOption) => (
          <div
            key={navOption}
            className={`monserrat link-nav mx-0.5 ${setLocation(navOption)} ${ windowType === 'desktop' ? styles['nav-list-item'] : styles['nav-list-item_mobile']}` }
          >
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
          </div>
        ))}

        <div className={`${styles['link']} nav-list-item monserrat link-nav lg:ml-5`}>
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
        </div>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        className="center btn btn-icon mx-2"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <BrightnessLowIcon /> : <BrightnessHighIcon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className={`btn btn-icon ${
          windowType === 'desktop' ? styles['nav__hamburger'] : styles['nav__hamburger_mobile']
        }`}
        aria-label="toggle navigation"
      >
        {navbarState ?  <MenuIcon /> : <CloseIcon />}
      </button>
    </nav>
  );
}
