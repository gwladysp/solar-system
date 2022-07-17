import RotatingPlanet from "./RotatingPlanet";
import OrbitingPlanet from "./solarSystem/OrbitingPlanet";

function OrbitingMoon({ planet, moon }) {
    return (
        <>
                <div className="w-1/3">
                    <RotatingPlanet planet={planet} size={5} />
                    <div className="relative top-[-2.4rem] child-noanimation moon-rotate-position">
                        <OrbitingPlanet
                            planet={moon}
                            animationDuration={50}
                            size={2}
                        />
                    </div>
                </div>
        </>
    );
}

export default OrbitingMoon;
