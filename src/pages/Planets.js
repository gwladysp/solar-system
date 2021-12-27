import PlanetList from '../components/PlanetList';
import { useEffect, useState } from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Planet from './Planet';
import {FETCH_ALL_API_URL} from "../constants";
import {fetchPlanetsData} from "../resource";

function Planets() {
  const [allPlanets, setAllPlanets] = useState(null);

  let match = useRouteMatch();
  const allPlanetsPromise = fetchPlanetsData(FETCH_ALL_API_URL);

  useEffect(() => {
    allPlanetsPromise.then(data => {
      setAllPlanets(data.bodies);
    });
  }, []);

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:planetName`}>
          <Planet />
        </Route>
        <Route path={`${match.path}/`}>
          <h1 className="app-margin my-20">Solar system planets</h1>
          <p className="app-margin">
            Our solar system contains 8 main planets and 6 dward planets.
          </p>
          <PlanetList title="Main planets" planets={allPlanets} />
        </Route>
      </Switch>
    </>
  );
}

export default Planets;
