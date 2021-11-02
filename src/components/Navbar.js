import {NavLink} from "react-router-dom";
export default function Navbar() {

    return (
        <>
            <nav>
                <div>
                    <NavLink to="/sun">The Sun</NavLink>
                    <NavLink to="/theMoon">The Moon</NavLink>
                    <NavLink to="/planets">Planets</NavLink>
                </div>
            </nav>
        </>
    )
}