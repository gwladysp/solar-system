import PlanetList from "../components/elements/PlanetList";
import { planets } from "../data/planets";

function Planets() {

  return (
    <>
        <div className="max-w-screen-xl mx-auto px-8">
            <h1 className="my-20">Solar system planets</h1>
            <p>
                Our solar system contains 8 main planets and 6 dwarf planets.
                A planet is a celestial body that is in orbit around the Sun. Planets that 
                orbit around other stars are called exoplanets. 
                A planet has sufficient mass for its self-gravity to overcome body forces so 
                that it assumes a hydrostatic equilibrium shape, and it also has 
                cleared the neighbourhood around its orbit.
            </p>
            <PlanetList title="Main planets" planets={planets} />
        </div>
    </>
  );
}

export default Planets;
