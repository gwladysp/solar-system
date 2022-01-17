import PlanetList from "../components/elements/PlanetList";
import { planets } from "../data/planets";

function Planets() {

  return (
    <>
        <div className="max-w-screen-xl mx-auto px-8">
            <h1 className="my-20">Solar system planets</h1>
            <p>
                Our solar system contains 8 main planets and 6 dward planets.
            </p>
            <PlanetList title="Main planets" planets={planets} />
        </div>
    </>
  );
}

export default Planets;
