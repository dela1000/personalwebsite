import { createContext, useContext, useEffect, useState } from 'react';
import useWindowDimensions from 'contexts/useWindowDimensions';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const { width } = useWindowDimensions();
  const [sharedState, setShareState] = useState({
    themeName: 'light',
    navbarState: false,
    windowType: 'desktop',
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('themeName');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setShareState((prev) => ({ ...prev, themeName: savedTheme }));
    }
  }, []);

  useEffect(() => {
    document.body.className = sharedState.themeName;
  }, [sharedState.themeName]);

  const setWidthToState = (windowType) => {
    setShareState((prev) => ({ ...prev, windowType }));
  };

  useEffect(() => {
    if (width < 768) {
      setWidthToState('mobile');
    } else {
      setWidthToState('desktop');
    }
  }, [width]);

  const toggleTheme = () => {
    const newTheme = sharedState.themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', newTheme);
    setShareState((prev) => ({ ...prev, themeName: newTheme }));
  };

  const toggleNavbar = (close) => {
    setShareState((prev) => ({ ...prev, navbarState: close || !prev.navbarState }));
  };

  return (
    <AppContext.Provider value={{ sharedState, toggleTheme, toggleNavbar }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
