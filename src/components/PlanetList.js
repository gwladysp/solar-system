import PlanetCard from "./PlanetCard";

function PlanetList({title, planets}) {

    return <>
        <h2>{title}</h2>
        <div>
            {planets.map(planet => (
                <PlanetCard key={planet.id} planet={planet}/>
            ))
            }
        </div>
    </>
}
export default PlanetList;