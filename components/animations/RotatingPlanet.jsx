import { PLANETS_WITH_RING } from "../../data/constants";

function RotatingPlanet({ planet, size }) {
  const bgImage = "/images/" + planet.name + ".svg";
  const hasRing = PLANETS_WITH_RING.includes(planet.id);
  const ringColor = {
    uranus: "white",
    saturn: "orange",
  };

  return (
    <>
      <div className="rotating-planet-container">
        <div className="planet mx-auto" style={{ backgroundImage: `url(${bgImage})`,
          width: `${size}vw`,
          height: `${size}vw`
        }}>
          <div
            className="clouds bg-cover"
            style={{ backgroundImage: `url(/images/clouds.svg)`,
              width: `${size}vw`,
              height: `${size}vw`}}
          />
        </div>
        {hasRing ? (
          <div
            className="planet-ring"
            style={{ borderColor: `${ringColor[planet.id]}`,
              border: `solid ${size / 10}vw`
            }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default RotatingPlanet;
