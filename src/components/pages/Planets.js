import PlanetList from '../PlanetList';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Planet from './Planet';

function Planets() {
  const [allPlanets, setAllPlanets] = useState([]);
  const planetsNames = [
    'uranus',
    'neptune',
    'jupiter',
    'mars',
    'mercure',
    'saturne',
    'terre',
    'venus',
  ];
  let match = useRouteMatch();
  useEffect(() => {
    const url = 'https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,neq,false';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setAllPlanets(json.bodies);
      } catch (error) {
        console.log('error API ', error);
      }
    };

    fetchData();
  }, []);

  let planetsList = allPlanets.filter((planet) => planetsNames.includes(planet.id));
  let dwarfPlanetsList = allPlanets.filter((planet) => !planetsNames.includes(planet.id));

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
          <PlanetList title="Main planets" planets={planetsList} />
          <PlanetList title="Dwarf planets" planets={dwarfPlanetsList} />
        </Route>
      </Switch>
    </>
  );
}

export default Planets;
