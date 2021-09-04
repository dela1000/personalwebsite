import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/index';
import Home from './pages/Home/index';
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
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}
