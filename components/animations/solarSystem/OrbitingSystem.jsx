import OrbitingPlanet from "./OrbitingPlanet";
import { SOLAR_SIZE_IN_EM } from "../../../data/constants";
import Loading from "../Loading";
import AsteroidBelt from "./AsteroidBelt";

function OrbitingSystem({ planet, allPlanets }) {
  if (allPlanets === null) {
    return <Loading />;
  }
  return (
    <>
      <div id="galaxy" className="mt-16 max-w-lg mx-auto">
        <div
          id="sun"
          style={{
            fontSize: `${SOLAR_SIZE_IN_EM}vw`,
            backgroundImage: "url(/images/sun.svg)",
          }}
        />
        {allPlanets.map((planets) => (
          <OrbitingPlanet
            key={"orbiting-" + planets.name}
            planet={planets}
            isActive={planets.name === planet.name}
          />
        ))}
        <AsteroidBelt />
      </div>
    </>
  );
}

export default OrbitingSystem;
