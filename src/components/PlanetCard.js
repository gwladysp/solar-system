import {Link, useRouteMatch} from "react-router-dom";

function PlanetCard(props) {
    let match = useRouteMatch();

    return <>
        <div>
            <h3>{props.name}</h3>
            <p>Short planet description</p>
            <Link to={`${match.url}/${props.name}`} planet={props}>Discover</Link>
        </div>
    </>
}

export default PlanetCard;