import PlanetCard from "./PlanetCard";

function PlanetList({title, planets}) {

    return <>
        <h2>{title}</h2>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
            {planets.map(planet => (
                <PlanetCard key={planet.id} planet={planet}/>
            ))
            }
        </div>
    </>
}
export default PlanetList;






