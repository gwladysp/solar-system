import {useEffect, useState} from "react";

function TheSun() {
    const [sunInfos, setSunInfos] = useState({});
    useEffect(() => {
        const url = "https://api.le-systeme-solaire.net/rest/bodies/sun";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setSunInfos(json);
            } catch (error) {
                console.log("error API ", error);
            }
        };

        fetchData();
    }, []);
    console.log(sunInfos)

    return (
        <> {sunInfos.length !== 0 ? <>
            <div className="flex space-between max-w-screen-xl mx-auto">
                <h1>{sunInfos.englishName}</h1>
                <img src={'/images/sun.svg'} alt="Sun image"/>
            </div>
            <div>
                <p>Surface temperature : {sunInfos.avgTemp === 0 ? "5,778 K" : sunInfos.temperature}</p>
                {sunInfos.mass ?
                    <p>Mass : {(sunInfos.mass).massValue} <sup>{(sunInfos.mass).massExponent}</sup> kg</p>
                    : ""}
                <p>Density : {sunInfos.density}</p>
                <p>Axial tilt : {sunInfos.axialTilt}</p>
                <p>Gravity : {sunInfos.gravity === 0 ? "274 m/s²" : sunInfos.gravity}</p>
            </div>
        </> : ""}
        </>
    )
}

export default TheSun;