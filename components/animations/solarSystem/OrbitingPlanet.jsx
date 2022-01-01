import {
  PLANETS_WITH_RING,
  SOLAR_SIZE_IN_EM,
  SOLAR_SIZE_IN_KM,
} from "../../../src/constants";

function OrbitingSystem({ planet, isActive }) {
  let planetSize = (planet.meanRadius / SOLAR_SIZE_IN_KM) * 400;
  let speed = planet.sideralOrbit / 100;
  const bgImage = "/images/" + planet.englishName + ".svg";

  const hasRing = PLANETS_WITH_RING.includes(planet.id);
  const ringColor = {
    uranus: "white",
    saturn: "orange",
  };

  const sunDistance = {
    mercure: 15,
    venus: 23,
    terre: 32,
    mars: 40,
    jupiter: 61,
    saturne: 69,
    uranus: 77,
    neptune: 85,
  };

  if (planetSize > SOLAR_SIZE_IN_EM) {
    planetSize = planetSize / 8;
  }

  return (
    <>
      <div
        className="orbit"
        style={{
          width: `${sunDistance[planet.id]}vw`,
          height: `${sunDistance[planet.id]}vw`,
          marginTop: `-${sunDistance[planet.id] / 2}vw`,
          marginLeft: `-${sunDistance[planet.id] / 2}vw`,
          animationDuration: `${speed}s`,
        }}
      >
        <div className="pos" style={{ animationDuration: `${speed}s` }}>
          <div
            className="orbitingPlanet"
            style={{
              fontSize: `${planetSize}vw`,
              backgroundImage: `url(${bgImage})`,
              animationDuration: `${speed}s`,
              filter: !isActive ? "grayscale(100%)" : "",
            }}
          />
          {hasRing ? (
            <div
              className="planet-ring orbiting-ring"
              style={{
                borderColor: `${ringColor[planet.id]}`,
                filter: !isActive ? "grayscale(100%)" : "",
                top: `0.5vw`,
                left: `0.1vw`,
                borderWidth: `10px`,
                width: `${planetSize * 2}vw`,
              }}
            />
          ) : (
            ""
          )}

          <p
            className="relative z-10"
            style={{ top: `-${planetSize / 2 + 1}vw` }}
          >
            {planet.englishName}
          </p>
        </div>
      </div>
    </>
  );
}

export default OrbitingSystem;
