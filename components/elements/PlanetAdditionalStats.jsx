import StatsElement from "./StatsElement";

function PlanetAdditionalStats({ planet }) {
  const elements = [
    {
      title: "Volume",
      value: planet.vol.volValue,
      sup: planet.vol.volExponent,
      unity: "km",
    },
    { title: "Density", value: planet.density, unity: "g/cm" },
    { title: "Surface gravity", value: planet.gravity, unity: "m/s" },
  ];

  return (
    <>
      <dl className="mt-5 grid grid-cols-1 bg-blue-80 overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x mt-16 rounded-lg pt-16">
        {elements.map((element) => {
          return <StatsElement element={element} key={element.value} />;
        })}
      </dl>
    </>
  );
}

export default PlanetAdditionalStats;
