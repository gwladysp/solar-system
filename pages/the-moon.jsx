import {moon} from '../data/the-moon.js'
import {planets} from '../data/planets.js'
import PlanetAdditionalStats from "../components/stats/PlanetAdditionalStats";
import PlanetMainStats from "../components/stats/PlanetMainStats";
import Loading from "../components/animations/Loading";
import CompositionGraph from "../components/graph/CompositionGraph";
import Image from "../components/animations/Image";
import AnchorLink from "../components/elements/AnchorLink";
import RotatingPlanet from "../components/animations/RotatingPlanet";
import OrbitingPlanet from "../components/animations/solarSystem/OrbitingPlanet";

function OrbitingMoon({ planet, moon }) {
    return (
        <>
            <div className="w-1/3">
                <RotatingPlanet planet={planet} size={5} />
                <div className="relative top-[-2.4rem] child-noanimation moon-rotate-position">
                    <OrbitingPlanet
                        planet={moon}
                        animationDuration={50}
                        size={2}
                    />
                </div>
            </div>
        </>
    );
}

export default function TheMoon() {
    let earth = {}
    if (planets) {
        earth = planets.find((item) => item.id === "earth");
    }
    if (moon === undefined) {
        return <Loading/>
    }
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <div className="md:flex justify-between items-center pt-16 mb-16 p-8">
                    <OrbitingMoon moon={moon} planet={earth}/>
                    <div className="md:w-1/2 mt-8 mx-auto">
                        <h1>{moon.name}</h1>
                        <p className="mt-8">
                            {moon.description}
                        </p>
                        <p>
                            Recent studies indicates that the moon formed after a huge collision between Earth and an
                            object the size of Mars.
                            Earth and the moon are really close in composition.
                            Meanwhile there are many other theories about the Moon formation.
                        </p>
                        <ul className="mt-8 text-gray-300">
                            <AnchorLink anchor="#moonInfos" text="What's inside the moon?" imageAlt="Moon"
                                        imageName="moon.svg"/>
                            <AnchorLink anchor="#explorationMissions" text="Moon exploration missions"
                                        imageAlt="Footprint icon" imageName="icon-footprint.svg"/>
                            <AnchorLink anchor="#moonEffects" text="Moon effects" imageAlt="Wave icon"
                                        imageName="icon-wave.svg"/>
                        </ul>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-8">
                    <PlanetMainStats planet={moon}/>
                </div>
                <section className="text-center pt-16">
                    <h2>Moon phases</h2>
                    <img src="/images/moon-phases.svg" alt="Moon phases" className="mt-8 px-8"/>
                </section>

                <section className="text-center pt-16 px-8" id="moonInfos">
                    <h2>What's inside the moon?</h2>
                    <div className="xl:flex justify-between items-start mt-8">
                        <div className="mx-8 text-center text-left">
                            <p className="mt-8">
                                The moon is divided into three parts : <strong>the mantle, the core and the
                                crust</strong>.
                                His core is really small and rich in iron. The middle part is solid while the outer part
                                is made of liquid iron.
                                It is thought to come from a crystallized global magma ocean.

                                That crystallization would have also created the mantle rich in iron and magnesium.
                                Rocks on the moon's surface, which come from floods of lava, are a proof of the mantle
                                composition.

                                On his surface, the moon has <strong>many craters</strong>. They are due to asteroids and comets
                                colliding with the lunar surface.

                                <strong>Liquid water cannot persist</strong> on the moon's surface, but some theories assume that water
                                brought by foreign objects is present ephemerally.
                            </p>
                            <p className="pt-6">
                                The moon has a very thin atmosphere, not preventing temperatures to vary.
                                (from approximatly 120K to 400K (-150°C to 135°C))
                                A permanent cloud of dust exists around the Moon, generated by particles from comets.
                            </p>
                        </div>
                        <img src="/images/moon-structure.svg" alt="The moon structure" className="mx-auto mt-8 xl:mt-0"/>
                    </div>
                    <CompositionGraph planet={moon}/>
                    <div className="max-w-screen-xl mx-auto text-left">
                        <PlanetAdditionalStats planet={moon}/>
                    </div>
                </section>
                <section className="pt-16 xl:flex justify-between items-center" id="explorationMissions">
                    <div className="px-8">
                        <h2 className="text-center">Moon exploration missions</h2>
                        <p className="mt-8">
                            Since the moon is the closest orbiting object, it has always been a focus of
                            fascination. <br/>
                            The earliest explorations were due to <strong>the Cold War</strong>, when the US and Soviet Union were
                            fighting to be the first moon explorators.
                        </p>
                        <ul className="moon-list pt-6">
                            <li>In 1959, the Soviet Union sent <strong>the first spacecraft</strong>. The first managed to leave Earth's
                                gravity,
                                the second crashed into the moon's surface and the third took the very first - blurry -
                                near-moon photo.
                            </li>
                            <li>
                                From 1961, the US sent many spacecraft to take more precise photographs.
                            </li>
                            <li>
                                In 1966, the Soviet Union sent the first spacecraft to land on the moon's surface and
                                then the first to orbit the moon.
                            </li>
                            <li>
                                On July 20, 1969, Neil Armstrong and Edwin Aldrin were <strong>the first astronauts to walk on
                                the moon.</strong>
                            </li>
                        </ul>

                        <h3 className="text-lg mt-8 font-semibold">The future of moon's exploration</h3>
                        <p className="mt-6">
                            Only 12 people have since set foot on the moon floor, the moon having been abandoned due to
                            poor life possibilities.
                            Today, lunar exploration has become <strong>very commercial</strong>: one of the ideas would be to create
                            space bases in which humans could visit and live.
                        </p>
                    </div>
                    <div className="p-8 mx-auto xl:py-0 xl:max-w-xl">
                        <Image image="moon-first-landing-mission.jpg"
                               legendText="Astronaut Buzz Aldrinn poses for a photograph during the first moon landing mission. Photo by NASA"/>
                        <div className="border-yellow-600 border-b-4 border-t-4 p-4 m-6 rounded-lg text-center">
                            <q>That’s one small step for a man, one giant leap for mankind.</q>
                            <span className="block text-right text-gray-400 text-sm">Neil Armstrong - 1969</span>
                        </div>
                    </div>
                </section>
                <section className="pt-16 flex flex-col-reverse xl:flex-row justify-between items-center"
                         id="moonEffects">
                    <Image image="moon-effects.jpeg"
                           legendText="Full moon over the ocean. Photo by Gabriel Tovar, Santa Cruz (USA), 2020"
                           additionalCSS="max-w-md xl:max-w-xl lg:top-[4em] mt-8 xl:mt-0"/>
                    <div className="px-8">
                        <h2 className="text-center">Moon effects</h2>
                        <p className="mt-8">
                            Moon has many effects on Earth's weather and climate.
                        </p>
                        <ul className="moon-list mt-6">
                            <li>
                                Firstly, the moon's gravity pulls at the Earth. It causes predictables rises and falls
                                in sea levels called <strong>tides</strong>.
                                A less known fact : those tides also occur in lakes, in the atmosphere and within the
                                Earth's crust.
                            </li>
                            <li>
                                That first effect (combined with many other factors) <strong>causes the weather to vary</strong> :
                                the variations of atmospheric pressure and tides are the origin of weather phenomena.
                            </li>
                            <li>
                                The moon is slightly <strong>slowing the Earth's rotation</strong> (about 2 milliseconds per century).
                                That energy loss is increasing the distance between us and the moon (about 4 centimeters
                                per year).
                            </li>
                            <li>
                                The moon is thought to <strong>affect polar temperatures</strong>. Poles temperatures are 0.55°C warmer
                                during full moons.
                            </li>
                        </ul>
                        <p className="mt-8">Moon also has effects on the living elements on Earth. </p>
                        <ul className="moon-list mt-6">
                            <li>
                                <strong>Calendar months</strong> are equal to the time it takes between two full moons, on which our life
                                is organized
                            </li>
                            <li>
                                Lunar cycle could have an effect on humain fertility, reproduction menstruation, and
                                birth rate.
                                Some theories tell us that admittance to hospitals, crimes, accidents... are correlated
                                too.
                                However it's likely to be faiths since studies found no correlation between lunar cycles
                                and human reproduction or admittance to clinics.
                            </li>
                            <li>
                                The moon is probably impacting <strong>immune response and hormonal changes</strong> in humans and other
                                living animals.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}
