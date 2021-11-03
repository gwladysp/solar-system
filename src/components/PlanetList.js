import PlanetCard from "./PlanetCard";

function PlanetList({title, planets}) {

    return <>
        <h2>{title}</h2>
        {planets.map(planet => (
            <PlanetCard key={planet.id} planet={planet}/>
        ))
        }
    </>
}
export default PlanetList;