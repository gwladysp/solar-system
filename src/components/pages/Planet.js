import {useParams} from "react-router-dom";

function Planet() {
    let { planetName } = useParams()
    console.log(planetName)
    return <>
        <h1>planète {planetName}</h1>
    </>
}

export default Planet;