import StatsElement from "./StatsElement";
import { UNITY_CONVERSION_AU_TO_KM } from "../../data/constants";

function PlanetSolarStats({ planet }) {
  const elements = [
    {
      title: "Tiniest distance between " + planet.id + " and the sun",
      value: (planet.semimajorAxis * UNITY_CONVERSION_AU_TO_KM).toFixed(4),
      unity: "AU",
    },
    {
      title: "Sideral rotation",
      value: planet.sideralRotation,
      unity: "hours",
    },
  ];

  return (
    <>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-blue-80 overflow-hidden shadow divide-y divide-blue-dark md:grid-cols-2 md:divide-y-0 md:divide-x">
        {elements.map((element) => {
          return <StatsElement element={element} key={element.value}/>;
        })}
      </dl>
    </>
  );
}

export default PlanetSolarStats;
