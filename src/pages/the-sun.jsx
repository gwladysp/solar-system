import {sun} from "/src/data/the-sun.js"
import {planets} from "/src/data/planets.js"
import PlanetMainStats from "../components/stats/PlanetMainStats";
import SizeComparison from "../components/animations/SizeComparison";
import Sun from "../components/animations/Sun";
import CompositionGraph from "../components/graph/CompositionGraph";
import Image from "../components/animations/Image";
import AnchorLink from "../components/elements/AnchorLink";

function TheSun() {
    return (
        <>
            <div className="max-w-screen-xl mx-auto px-8">
                <div className="md:flex justify-between items-center mt-16 mb-16">
                    <div className="mx-auto flex justify-center">
                        <Sun size={25}/>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                        <h1>{sun.name}</h1>
                        <p className="mt-16">{sun.description}</p>
                        <ul className="mt-8 text-gray-300">
                            <AnchorLink anchor="#sunInfos" text="What's inside the sun?" imageAlt="Sun composition icon"
                                        imageName="icon-sun.svg"/>
                            <AnchorLink anchor="#sunSize" text="Sun size compared to planets sizes"
                                        imageAlt="Solar system logo" imageName="logo.svg"/>
                            <AnchorLink anchor="#specialFacts" text="Some sun particularities" imageAlt="Wen icon"
                                        imageName="icon-wen.svg"/>
                        </ul>
                    </div>
                </div>
                <PlanetMainStats planet={sun}/>
                <section className="pt-16" id="sunInfos">
                    <h2 className="text-center">What's inside the sun?</h2>
                    <div className="xl:flex justify-between items-center mt-16">
                        <div className="mt-8 xl:mt-0 xl:w-1/2">
                            <h3 className="text-lg font-semibold">What's that shining thing?</h3>
                            <p className="mt-6">
                                The Sun is a glowing sphere of <strong>gas</strong> in the center of the solar system.
                                Most of this gas is <strong>hydrogen and helium</strong> <span className="text-sm text-gray-600">(see the graph below)</span>.
                                As times goes on, the Sun has less and less hydrogen, due to the nuclear fusion <span
                                className="text-sm text-gray-600">(see "How does it shine?)</span>.
                            </p>
                            <h3 className="text-lg mt-8 font-semibold">How does it shine?</h3>
                            <p className="mt-6">
                                The Sun shines thanks to a process called <strong>nuclear fusion</strong>.
                                Nuclear fusion happens when elements are forced together to become an heavier element.
                                That fusion creates a large amount of energy. In the Sun case, hydrogen elements are
                                fusionning to become helium elements in the core of the Sun.
                                The shining of the Sun is due to the energy release.
                            </p>

                        </div>
                        <img src="/images/sun-structure.svg" className="mt-8 md:mt-0 mx-auto xl:mx-8"
                             alt="The sun structure"/>

                    </div>
                    <CompositionGraph planet={sun}/>
                </section>
            </div>
            <section className="mx-8 sm:mx-16 pt-16" id="sunSize">
                <SizeComparison planets={planets} sun={sun}/>
            </section>
            <section className="mt-16 max-w-screen-xl mx-auto xl:flex justify-between items-center">
                <div className="text-center mt-16">
                    <h2 className="text-center">Sun spots</h2>
                    <div className="mx-8 text-center xl:text-left">
                        <p className="mt-8">
                            Sunspots are <strong>darker areas</strong> visible on the <strong>photosphere</strong>, a region of the Sun.
                            Their color is due to their temperature : whereas the photosphere as a temperature of
                            approximately 5800K, those spots have a temperature of about 3800K.
                            That diffence of temperature is due to the magnetic field which is strong enough to prevent
                            the heat from reaching the surface of the sunspots.
                            They are not really dark but that huge difference doesn't allow our eyes to see their true
                            light.
                            Sunspots can be up to 50.000 kilometers in diameter.
                        </p>
                        <p className="mt-8">
                            Sunspots are due to the Sun's magnetic field, they occur over regions of intense magnetic
                            activity.
                            When their energy is released, <strong>solar flares</strong> erupt from them.
                            The sun's magnetic field is not yet fully understood.
                        </p>
                    </div>
                </div>
                <Image image="sun-spot.jpg" legendText="Sun spot. Photo taken in 2010 by BBSO"
                       additionalCSS="min-w-lg md:max-w-md relative top-[4em]"/>
            </section>
            <section className="pt-16 max-w-screen-xl mx-auto flex justify-between flex-col-reverse xl:flex-row"
                     id="specialFacts">
                <Image image="solar-flare.jpg" legendText="Solar flare in 2017. Photo by NASA"
                       additionalCSS="md:max-w-md lg:w-1/2 mt-8 xl:mt-0"/>
                <div className="text-center mt-16">
                    <h2 className="text-center">Solar flares</h2>
                    <div className="mx-8 text-center xl:text-left">
                        <p className="mt-8">
                            <strong>Solar flares erupt from sunspots.</strong>
                            They occur because the magnetic field lines are permantently reorganizing and crossing.
                            These movements sometimes <strong>suddenly release large amounts of energy.</strong>
                        </p>
                        <p className="mt-8">
                            When solar flares are released, a lot of <strong>radiations</strong> are ejected into space.
                            Sometimes those radiations can even interfere with our radio communications on Earth!
                            Solar flares occur from less than one per week to several per day.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TheSun;
