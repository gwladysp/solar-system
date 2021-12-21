import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Planets from './components/pages/Planets';
import TheSun from './components/pages/TheSun';
import TheMoon from './components/pages/TheMoon';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/sun">
            <TheSun />
          </Route>
          <Route path="/theMoon">
            <TheMoon />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
