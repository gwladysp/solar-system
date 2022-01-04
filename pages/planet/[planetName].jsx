import OrbitingSystem from "../../components/animations/solarSystem/OrbitingSystem";
import RotatingPlanet from "../../components/animations/RotatingPlanet";
import Graph from "../../components/animations/Graph";
import PlanetMainStats from "../../components/elements/PlanetMainStats";
import PlanetSolarStats from "../../components/elements/PlanetSolarStats";
import PlanetAdditionalStats from "../../components/elements/PlanetAdditionalStats";
import Loading from "../../components/animations/Loading";
import { useRouter } from "next/router";
import { planets } from "../../data/planets";

function PlanetName() {
  const router = useRouter();
  const { planetName } = router.query;
  console.log(planetName);

  if (planetName === undefined) {
    return <Loading />;
  }

  let planet = {}
  if (planets) {
    planet = planets.find((item) => item.name === planetName);
  }

  const planetNameFormatted =
    planetName.charAt(0).toUpperCase() + planetName.slice(1);

  if (planet === null) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex justify-between max-w-screen-xl mx-auto items-center my-16 text-lg">
        <div className="max-w-md">
          <h1 className="my-12">{planetNameFormatted}</h1>
          <div>
            <a
              className="p-4 border-b-1 border-white flex items-center"
              href="#solarSystem"
            >
              <img
                className="h-6 w-6 mr-8 rounded-full object-cover"
                src="/images/sun.svg"
                alt="Sun"
              />
              View in the solar system
            </a>
            <a
              className="p-4 border-b-1 border-white flex items-center"
              href="#moreStatistics"
            >
              <img
                className="h-6 w-6 mr-8 text-white"
                src="/images/chart.svg"
                alt="Sun"
              />
              More stats
            </a>
            <a
              className="p-4 border-1 border-white flex items-center"
              href="#moons"
            >
              <img className="h-6 mr-8" src="/images/moon.svg" alt="Moon" />
              Moons
            </a>
          </div>
        </div>
        <RotatingPlanet planet={planet} />
      </div>
      <div className="max-w-screen-xl mx-auto my-16">
        <PlanetMainStats planet={planet} />
        <hr className="my-16" />
        <div className="mx-16 pt-16" id="solarSystem">
          <h2 className="text-center">
            {planetNameFormatted} into our Solar System
          </h2>
          <OrbitingSystem planet={planet} allPlanets={planets} />
          <PlanetSolarStats planet={planet} />
        </div>

        <div className="mx-16 pt-16" id="moreStatistics">
          <h2 className="text-center">More statistics</h2>
          <Graph
            planet={planet}
            allPlanets={planets}
            dataSorting="gravity"
            dataUnity={"m/s"}
          />
          <PlanetAdditionalStats planet={planet} />
        </div>

        <div className="mt-16" id="moons">
          <h2 className="text-center">{planetNameFormatted} moons</h2>
          <div className="flex items-center my-16 mx-auto">
            <img
              className="planet-moons h-32 mr-12"
              src="/images/moon.svg"
              alt="Moon"
            />
            <div>
              <p className="block">
                {planetNameFormatted} owns{" "}
                {planet.moons ? planet.moons.length : "no"} moons.
              </p>
              <p>
                {planet.moons
                  ? "(" +
                    planet.moons.map((moon, i) => {
                      return (i === 0 ? "" : " ") + moon.moon;
                    }) +
                    ")"
                  : ""}
              </p>
            </div>
          </div>
        </div>

        <div className="flex max-w-md items-center mx-auto">
          {planet.discoveredBy
            ? "<p>" +
              planetNameFormatted +
              "has been discovered in" +
              planet.discoveryDate +
              "by" +
              planet.discoveredBy +
              "." +
              "</p>"
            : ""}
          <img
            className="h-auto w-1/4 mx-auto"
            src="/images/telescop.svg"
            alt={planetName}
          />
        </div>
      </div>
    </>
  );
}

/**/
export default PlanetName;
