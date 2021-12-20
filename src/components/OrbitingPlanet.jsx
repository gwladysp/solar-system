import {useEffect} from "react";

function OrbitingSystem({planet, isActive}) {
    const solarEmSize = 695700 / 80000;
    //let sunDistance = planet.sideralOrbit * 0.1;
    let sunDistance = 1;
    let planetSize = (planet.meanRadius / 695700) * 400
    let speed = planet.sideralOrbit / 100;
    const bgImage = '/images/uranus.svg';

    if (planetSize > solarEmSize) {
        planetSize = planetSize / 8
    }

    if (planet.sideralOrbit < 200) {
        sunDistance = planet.sideralOrbit / 5.5
    } else if (planet.sideralOrbit < 600) {
       sunDistance = planet.sideralOrbit / 10.5
    } else if (planet.sideralOrbit < 1500) {
        sunDistance = planet.sideralOrbit / 15
    } else if (planet.sideralOrbit < 2000) {
        sunDistance = planet.sideralOrbit / 30
    } else if (planet.sideralOrbit < 5000) {
        sunDistance = planet.sideralOrbit / 80
    } else if (planet.sideralOrbit < 12000) {
        sunDistance = planet.sideralOrbit / 180
    } else if (planet.sideralOrbit < 200000) {
        sunDistance = planet.sideralOrbit / 1500
    } else {
        sunDistance = planet.sideralOrbit / 2000
    }
console.log(planet.englishName + " " + planet.sideralOrbit)
    // Distance rectification if too short or out of screen
    // sunDistance = (sunDistance < 25) ? 25 : sunDistance;
    // sunDistance = (sunDistance > 80) ? 80 : sunDistance;

    useEffect(() => {
        const url = 'https://api.le-systeme-solaire.net/rest/bodies/';

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
            } catch (error) {
                console.log('error API ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="orbit" style={{ width: `${sunDistance}em`, height: `${sunDistance}em`, marginTop: `-${sunDistance / 2}em`, marginLeft: `-${sunDistance / 2}em`, animationDuration: `${speed}s` }}>
                <div className="pos" style={{ animationDuration: `${speed}s` }}>
                    {isActive ?
                        <div className="orbitingPlanet" style={{fontSize: `${planetSize}em`, backgroundImage: `url(${bgImage})`, animationDuration: `${speed}s`}}/>
                        :
                        <div className="orbitingPlanet" style={{fontSize: `${planetSize}em`, backgroundImage: `url(${bgImage})`, animationDuration: `${speed}s`, filter: `grayscale(100%)`}}/>
                    }
                    <p className="relative z-10" style={{ top: `-${planetSize / 2 + 1}em`}}>{planet.englishName}</p>
                </div>
            </div>
        </>
    );
}

export default OrbitingSystem;
