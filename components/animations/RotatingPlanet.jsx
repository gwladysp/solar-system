import { PLANETS_WITH_RING } from "../../src/constants";

function RotatingPlanet({ planet }) {
  const bgImage = "/images/" + planet.englishName + ".svg";
  const hasRing = PLANETS_WITH_RING.includes(planet.id);
  const ringColor = {
    uranus: "white",
    saturn: "orange",
  };

  return (
    <>
      <div className="rotating-planet-container">
        <div className="planet" style={{ backgroundImage: `url(${bgImage})` }}>
          <div
            className="clouds"
            style={{ backgroundImage: `url(/images/clouds.svg)` }}
          />
        </div>
        {hasRing ? (
          <div
            className="planet-ring"
            style={{ borderColor: `${ringColor[planet.id]}` }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default RotatingPlanet;
