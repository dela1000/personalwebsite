import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import ScrollToTop from './components/ScrollToTop/index';
import Home from './pages/Home/index';
import Resume from './pages/Resume/index';
import Tech from './pages/Tech/index';
import About from './pages/About/index';
import Travel from './pages/Travel/index';
import Projects from './pages/Projects/index';
import { Context } from './contexts/context';
import useWindowDimensions from './contexts/useWindowDimensions';
import './tailwind.css';
import './App.css';

export default function App() {
  const [{ themeName, navbarState }] = useContext(Context);
  const { width } = useWindowDimensions();
  const [windowType, setWindowType] = useState('desktop');

  useEffect(() => {
    if (width < 800) {
      setWindowType('mobile');
    } else {
      setWindowType('desktop');
    }
  }, [width]);

  return (
    <div id="top" className={`${themeName} app`}>
      <Router>
        <Header />
        <main style={{ display: navbarState ? 'none' : 'block' }}>
          <Switch>
            <Route exact path="/">
              <Home windowType={windowType} />
            </Route>
            <Route exact path="/projects">
              <Projects windowType={windowType} />
            </Route>
            <Route exact path="/resume">
              <Resume windowType={windowType} />
            </Route>
            <Route exact path="/tech">
              <Tech windowType={windowType} />
            </Route>
            <Route exact path="/about">
              <About windowType={windowType} />
            </Route>
            <Route exact path="/travel">
              <Travel windowType={windowType} />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
          <ScrollToTop />
          <Footer />
        </main>
      </Router>
    </div>
  );
}
