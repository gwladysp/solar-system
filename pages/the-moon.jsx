import {moon} from '../data/the-moon.js'
import {planets} from '../data/planets.js'
import PlanetAdditionalStats from "../components/elements/PlanetAdditionalStats";
import PlanetMainStats from "../components/elements/PlanetMainStats";
import OrbitingMoon from "../components/animations/OrbitingMoon";
import Loading from "../components/animations/Loading";

export default function TheMoon() {
    let earth = {}
    if (planets) {
        earth = planets.find((item) => item.id === "earth");
    }
    if (moon === undefined) {
        return <Loading />
    }
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <OrbitingMoon moon={moon} planet={earth} />
                    <div>
                        <h1>{moon.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc molestie est nec nunc vulputate blandit. Aliquam ultricies congue felis, a consequat urna eleifend eu. Curabitur maximus, nisl id commodo dictum, enim est ultricies metus, ut accumsan purus ante pretium urna. Donec erat nisi, dapibus eu massa ut, rhoncus pulvinar erat. Sed sed dapibus ante. Proin vehicula libero vitae euismod convallis. Nullam sodales tortor eget est ultrices malesuada. </p>
                    </div>
                </div>
                <PlanetMainStats planet={moon}/>
                <PlanetAdditionalStats planet={moon}/>
                <p>moon phases</p>
                    <img src="https://cdn.slidemodel.com/wp-content/uploads/20868-01-moon-phases-powerpoint-template-1-1.jpg" alt=""/>
                <img src="images/moon.svg" alt="" style={{
                    filter: `drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))`
                }}/>

                <div className="text-center mt-16">
                    <h2>Distance between the Moon and Earth</h2>
                    <p className="mt-8">The Moon is at an average distance of 238,855 miles (384,400 kilometers) away from Earth. That is about the width of 30 Earths. Because the Moon does not orbit Earth in a perfect circle, but instead travels in a slightly elliptical orbit, its distance from Earth varies between 225,700 miles (363,300 kilometers) and 252,000 miles (405,500 kilometers).</p>
                </div>
            </div>
        </>
    );
}
