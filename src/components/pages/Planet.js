import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Planet() {
    let { planetName } = useParams()
    const [planet, setPlanet] = useState([]);
    const KmEquivalentInAU = 0.00000000668;
    const KelvinToCelsius = 273.15;

    useEffect(() => {
        const url = "https://api.le-systeme-solaire.net/rest/bodies/" + planetName;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setPlanet(json);
            } catch (error) {
                console.log("error API ", error);
            }
        };
        fetchData();
    }, []);

    return <> {planet.length !== 0 ? <>
        <h1>{planetName.charAt(0).toUpperCase() + planetName.slice(1)}</h1>
        <img src={'/images/' + planetName + '.svg'} alt={planetName}/>
        <p>Average temperature {planet.avgTemp} K ({(planet.avgTemp - KelvinToCelsius).toFixed(1)} °C)</p>
        <p>Density : {planet.density} g/cm</p>
        <p>Discovered in {planet.discoveryDate} by {planet.discoveredBy}</p>
        <p>Radius : {planet.meanRadius} km</p>
        <p>Surface gravity : {planet.gravity} m/s</p>
        <p>Tiniest distance between {planetName} and the Sun : {(planet.semimajorAxis * KmEquivalentInAU).toFixed(4)} AU</p>
        <p>Moons : {planet.moons ? planet.moons.length: "none"}
            {planet.moons ?
                " ("
                + planet.moons.map((moon, i, moons) => {
                    return moon.moon + (i < moons.length - 1 ? ', ' : '');
                })
                + ")"
            : ""}
        </p>
        <p>Mass : {planet.mass.massValue}<sup>{planet.mass.massExponent}</sup> kg</p>
        <p>Volume : {planet.vol.volValue}<sup>{planet.vol.volExponent}</sup> km</p>
        <p>Sideral orbit : {planet.sideralOrbit} days</p>
        <p>Sideral rotation : {planet.sideralRotation} hours</p>
        </> : ""}
    </>
}
/**/
export default Planet;