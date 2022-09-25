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
    const isDark = localStorage.getItem('themeName') === 'light';
    if (isDark) sharedState.themeName = 'light';
  }, []);

  const setWidthToState = (windowType) => {
    const sharedStateTemp = { ...sharedState };
    sharedStateTemp.windowType = windowType;
    setShareState(sharedStateTemp);
  };

  useEffect(() => {
    if (width < 768) {
      setWidthToState('mobile');
    } else {
      setWidthToState('desktop');
    }
  }, [width]);

  const toggleTheme = () => {
    const name = sharedState.themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    const sharedStateTemp = { ...sharedState };
    sharedStateTemp.themeName = name;
    setShareState(sharedStateTemp);
  };

  const toggleNavbar = (close) => {
    const sharedStateTemp = { ...sharedState };
    sharedStateTemp.navbarState = close || !sharedState.navbarState;
    setShareState(sharedStateTemp);
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
