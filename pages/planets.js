import PlanetList from "../components/PlanetList";
import { useEffect, useState } from "react";
import { FETCH_ALL_API_URL } from "../src/constants";
import { fetchPlanetsData } from "../src/resource";

function Planets() {
  const [allPlanets, setAllPlanets] = useState(null);

  const allPlanetsPromise = fetchPlanetsData(FETCH_ALL_API_URL);

  useEffect(() => {
    allPlanetsPromise.then((data) => {
      setAllPlanets(data.bodies);
    });
  }, []);

  return (
    <>
      <h1 className="app-margin my-20">Solar system planets</h1>
      <p className="app-margin">
        Our solar system contains 8 main planets and 6 dward planets.
      </p>
      <PlanetList title="Main planets" planets={allPlanets} />
    </>
  );
}

export default Planets;
