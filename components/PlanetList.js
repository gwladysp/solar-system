import PlanetCard from "./PlanetCard";
import Loading from "./animations/Loading";

function PlanetList({ title, planets }) {
  if (planets === null) {
    return <Loading />;
  }
  return (
    <>
      <h2 className="m-16 app-margin">{title}</h2>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none app-margin">
        {planets.map((planet) => (
          <PlanetCard key={planet.id} planet={planet} />
        ))}
      </div>
    </>
  );
}
export default PlanetList;
