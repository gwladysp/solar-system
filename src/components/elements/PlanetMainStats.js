import StatsElement from "./StatsElement";
import {UNITY_CONVERSION_KELVIN_TO_CELSIUS} from "../../constants";

function PlanetMainStats({ planet }) {
    const elements = [
        { title: "Average temperature",
            value: planet.avgTemp,
            unity: "K",
            conversion: (planet.avgTemp - UNITY_CONVERSION_KELVIN_TO_CELSIUS).toFixed(1),
            conversion_unity: "°C"
        },
        { title: "Mass",
            value: planet.mass.massValue,
            sup: planet.mass.massExponent,
            unity: "kg"
        },
        { title: "Radius",
            value: planet.meanRadius,
            unity: "km"
        },
        {
            title: "Sideral Orbit",
            value: planet.sideralOrbit,
            unity: "days"
        },
    ]

    return (
        <>
            <dl className="mt-5 grid grid-cols-1 rounded-lg bg-blue-80 overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
                {elements.map(element => {
                    return <StatsElement element={element} key={element.value}/>
                })}
            </dl>
        </>
    );
}

export default PlanetMainStats;
