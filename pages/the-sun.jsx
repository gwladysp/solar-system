import {sun} from '../data/the-sun.js'
import {planets} from '../data/planets.js'
import PlanetMainStats from "../components/elements/PlanetMainStats";
import SizeComparison from "../components/SizeComparison";
import Sun from "../components/animations/Sun";
import CompositionGraph from "../components/animations/CompositionGraph";

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
                </div>
            </div>
            <PlanetMainStats planet={sun}/>
            <div className="mt-16">
                <h2 className="text-center">What's inside the sun?</h2>
                <div className="xl:flex justify-between items-start mt-16">
                    <div className="mt-8 xl:w-1/3 xl:mt-0">
                        <h3 className="text-lg">What's that shining thing?</h3>
                        <p className="mt-8">
                            The Sun is a glowing sphere of gas in the center of the solar system.
                            Most of this gas is hydrogen and helium <span className="text-sm text-gray-600">(see the graph below)</span>. As times goes on, the Sun has less and less hydrogen, due to the nuclear fusion <span className="text-sm text-gray-600">(see "How does it shine?)</span>.
                        </p>
                    </div>
                    <img src="https://askeyphysics.files.wordpress.com/2016/05/solar-interior.jpg" className="mt-8 md:mt-0 mx-auto xl:w-1/3 xl:mx-8" alt=""/>

                    <div className="mt-8 xl:w-1/3 xl:mt-0">
                        <h3 className="text-lg">How does it shine?</h3>
                        <p className="mt-8">
                            The Sun shines thanks to a process called <strong>nuclear fusion</strong>.
                            Nuclear fusion happens when elements are forced together to become an heavier element.
                            That fusion creates a large amount of energy. In the Sun case, hydrogen elements are fusionning to become helium elements in the core of the Sun.
                            The shining of the Sun is due to the energy release.
                        </p>
                    </div>
                </div>
                <CompositionGraph planet={sun}/>
            </div>
        </div>
        <div className="mx-8 sm:mx-16 mt-16">
            <SizeComparison planets={planets} sun={sun} />
        </div>
        <div className="mt-16 max-w-screen-xl mx-auto xl:flex justify-between">
            <div className="text-center mt-16">
                <h2 className="text-center">Sun spots</h2>
                <div className="mx-8 text-center xl:text-left">
                    <p className="mt-8">
                        Sunspots are darker areas visible on the photosphere, a region of the Sun.
                        Their color is due to their temperature : whereas the photosphere as a temperature of approximately 5800K, those spots have a temperature of about 3800K.
                        That diffence of temperature is due to the magnetic field which is strong enough to prevent the heat from reaching the surface of the sunspots.
                        They are not really dark but that huge difference doesn't allow our eyes to see their true light.
                        Sunspots can be up to 50.000 kilometers in diameter.
                    </p>
                    <p className="mt-8">
                        Sunspots are due to the Sun's magnetic field, they occur over regions of intense magnetic activity.
                        When their energy is released, solar flares erupt from them.
                        The sun's magnetic field is not yet fully understood.
                    </p>
                </div>
            </div>
            <img src="https://cdn.mos.cms.futurecdn.net/ctZ4jzL3eaTdiXNrC7XtHM-970-80.jpg.webp" alt="" className="p-8 xl:mx-auto xl:py-0"/>
        </div>
        <div className="mt-16 max-w-screen-xl mx-auto flex justify-between flex-col-reverse xl:flex-row">
            <img src="https://images.ctfassets.net/cnu0m8re1exe/1RiWk3i0ceklxImgCFDrTD/af90389b5fadb31b7142b9f98247f917/Untitled_design__54_.png?fm=jpg&fl=progressive&w=660&h=433&fit=fill" alt="" className="p-8 xl:mx-auto xl:py-0"/>
            <div className="text-center mt-16">
                <h2 className="text-center">Solar flares</h2>
                <div className="mx-8 text-center xl:text-left">
                    <p className="mt-8">
                        Solar flares erupt from sunspots.
                        They occur because the magnetic field lines are permantently reorganizing and crossing.
                        These movements sometimes suddenly release large amounts of energy.
                    </p>
                    <p className="mt-8">
                        When solar flares are released, a lot of radiations are ejected into space.
                        Sometimes those radiations can even interfere with our radio communications on Earth!
                        Solar flares occur from less than one per week to several per day.
                    </p>
                </div>
            </div>
        </div>
    </>
  );
}

export default TheSun;
