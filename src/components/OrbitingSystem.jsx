import {useEffect, useState} from "react";
import OrbitingPlanet from "./OrbitingPlanet";

function OrbitingSystem({planet}) {
    const solarEmSize = 695700 / 80000;

    const [allPlanets, setAllPlanets] = useState([]);
    useEffect(() => {
        const url = 'https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,neq,false';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setAllPlanets(json.bodies);
            } catch (error) {
                console.log('error API ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div id="galaxy">
                <div id="sun" style={{ fontSize: `${solarEmSize}em`, backgroundImage: 'url(/images/sun.svg)'}}>
                </div>
                {allPlanets.map(planets => {
                    console.log(planets.englishName + " " + planet.englishName)
                    if (planets.englishName === planet.englishName) {
                        return <OrbitingPlanet planet={planets} isActive={true}/>
                    } else {
                        return <OrbitingPlanet planet={planets} isActive={false}/>
                    }
                })}
            </div>

        </>
    );
}

export default OrbitingSystem;
