import {Link, useRouteMatch} from "react-router-dom";

function PlanetCard(props) {
    let match = useRouteMatch();
    let {planet} = props;

    return <>
        <div>
            <h3>{planet.name}</h3>
            <p>Short planet description</p>
            <Link to={`${match.url}/${planet.englishName}`} planet={props}>Discover</Link>
        </div>
    </>
}

export default PlanetCard;