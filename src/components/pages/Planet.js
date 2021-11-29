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
        <div className="flex justify-between max-w-screen-xl mx-auto items-center">
            <div className="max-w-md">
                <h1 className="my-12">{planetName.charAt(0).toUpperCase() + planetName.slice(1)}</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit eu tellus quis laoreet. Donec sit amet nulla eu dolor sodales aliquet eget at augue.</p>
            </div>
            <img className="h-86" src={'/images/' + planetName + '.svg'} alt={planetName}/>
        </div>
        <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between">
                <div className="p-6 border-4 border-light-blue-500">
                    <p className="mr-24 text-xl font-bold">
                        <span className="planet-info-title block">Average temperature</span>
                        {planet.avgTemp} K ({(planet.avgTemp - KelvinToCelsius).toFixed(1)} °C)
                    </p>
                </div>
                <div className="p-6 border-4 border-light-blue-500">
                    <p className="mr-24 text-xl font-bold">
                        <span className="planet-info-title block">Mass</span>
                        {planet.mass.massValue}<sup>{planet.mass.massExponent}</sup> kg
                    </p>
                </div>
                <div className="p-6 border-4 border-light-blue-500">
                    <p className="mr-24 text-xl font-bold">
                        <span className="planet-info-title block">Radius</span>
                        {planet.meanRadius} km
                    </p>
                </div>
                <div className="p-6 border-4 border-light-blue-500">
                    <p className="mr-24 text-xl font-bold">
                        <span className="planet-info-title block">Sideral orbit</span>
                        {planet.sideralOrbit} days
                    </p>
                </div>
            </div>



            <hr className="my-16"/>
            <h3 className="mb-12 text-xl">Other informations</h3>

            <div className="flex items-center justify-center mx-auto">
                <p className="mr-24 text-xl font-bold">
                    <span className="planet-info-title block">Tiniest distance between {planetName} and the Sun</span>
                    {(planet.semimajorAxis * KmEquivalentInAU).toFixed(4)} AU
                </p>
                <img className="h-32 max-w-sm" src="/images/sun-distance.svg" alt={planetName}/>
            </div>

            <p>
                {planet.englishName} has been discovered in {planet.discoveryDate} by {planet.discoveredBy}.
            </p>
            <p>Density : {planet.density} g/cm</p>
            <p>Surface gravity : {planet.gravity} m/s</p>

            <div className="flex items-center justify-between">
                <img className="h-32 mr-12" src="/images/moons.svg" alt={planetName}/>
                <div>
                    <p className="block">
                        {planet.englishName} owns {planet.moons ? planet.moons.length: "no"} moons.
                    </p>
                    <p>
                        {planet.moons ?
                            "("
                            + planet.moons.map((moon, i) => {
                                console.log(i)
                            console.log(moon.moon)
                                return (i === 0 ? '' : ' ') + moon.moon ;
                            })
                            + ")"
                            : ""}
                    </p>
                </div>
            </div>
            <p>Sideral rotation : {planet.sideralRotation} hours</p>
            <div className="p-6 border-4 border-light-blue-500">
                <p className="mr-24 text-xl font-bold">
                    <span className="planet-info-title block">Volume</span>
                    {planet.vol.volValue}<sup>{planet.vol.volExponent}</sup> km
                </p>
            </div>
        </div>
    </> : ""}
    </>
}
/**/
export default Planet;