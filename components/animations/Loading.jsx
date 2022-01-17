import { SOLAR_SIZE_IN_EM } from "../../data/constants";

function Loading() {
  return (
    <>
      <div id="galaxy" className="mt-16 max-w-lg mx-auto no-3d">
        <div
          id="sun"
          style={{
            fontSize: `${SOLAR_SIZE_IN_EM}vw`,
            backgroundImage: "url(/images/sun.svg)",
          }}
          className="no-3d"
        />
        <div
          className="orbit"
          style={{
            width: `15vw`,
            height: `15vw`,
            marginTop: `-7.5vw`,
            marginLeft: `-7.5vw`,
            animationDuration: `5s`,
            border: `none`,
          }}
        >
          <div className="pos" style={{ animationDuration: `5s` }}>
            <div
              className="orbitingPlanet"
              style={{
                fontSize: `3vw`,
                backgroundImage: `url(images/earth.svg)`,
                animationDuration: `8s`,
                transform: `rotate3d(1, 0, 0, 90deg)`,
              }}
            />
          </div>
        </div>
        <span className="absolute left-[44%] bottom-[-2vw]">Loading...</span>
      </div>
    </>
  );
}

export default Loading;
