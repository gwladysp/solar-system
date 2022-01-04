import PlanetCard from "./PlanetCard";
import Loading from "./animations/Loading";

function PlanetList({ title, planets }) {
  if (planets === null) {
    return <Loading />;
  }
  return (
    <>
      <h2 className="mt-16">{title}</h2>
      <div className="mt-12 max-w-screen-xl mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {planets.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
    </>
  );
}
export default PlanetList;
