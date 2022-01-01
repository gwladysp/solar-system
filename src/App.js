import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Planets from './pages/Planets';
import TheSun from './pages/TheSun';
import TheMoon from './pages/TheMoon';

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
