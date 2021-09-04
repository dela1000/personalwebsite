import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home/index';
import Resume from './pages/Resume/index';
import Tech from './pages/Tech/index';
import About from './pages/About/index';
import Travel from './pages/Travel/index';
import Projects from './pages/Projects/index';
import { ThemeContext } from './contexts/theme';
import './tailwind.css';
import './App.css';

export default function App() {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <div className="h-screen">
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
              <Route exact path="/tech">
                <Tech />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/travel">
                <Travel />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Router>
        </div>
      </main>
    </div>
  );
}
