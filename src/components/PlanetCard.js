import {Link, useRouteMatch} from "react-router-dom";

function PlanetCard(props) {
    let match = useRouteMatch();
    let {planet} = props;
    return <>
        <div>
            <h3>{planet.id.charAt(0).toUpperCase() + planet.id.slice(1)}</h3>
            <p>Short planet description</p>
            <Link to={`${match.url}/${planet.id}`} planet={props}>Discover</Link>
        </div>
    </>
}

export default PlanetCard;