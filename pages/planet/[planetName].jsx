import OrbitingSystem from "../../components/animations/solarSystem/OrbitingSystem";
import RotatingPlanet from "../../components/animations/RotatingPlanet";
import Graph from "../../components/graph/Graph";
import PlanetMainStats from "../../components/stats/PlanetMainStats";
import PlanetSolarStats from "../../components/stats/PlanetSolarStats";
import PlanetAdditionalStats from "../../components/stats/PlanetAdditionalStats";
import Loading from "../../components/animations/Loading";
import {useRouter} from "next/router";
import {planets} from "../../data/planets";
import AnchorLink from "../../components/elements/AnchorLink";
import Image from "../../components/animations/Image";
import {PLANETS_SPECIAL_FACT_PHOTO_DESCRIPTION} from "../../data/constants";

function PlanetName() {
    const router = useRouter();
    const {planetName} = router.query;
    if (planetName === undefined) {
        return <Loading/>;
    }

    let planet = {}
    if (planets) {
        planet = planets.find((item) => item.name === planetName);
    }

    const planetNameFormatted =
        planetName.charAt(0).toUpperCase() + planetName.slice(1);

    if (planet === null) {
        return <Loading/>;
    }
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row justify-between max-w-screen-xl mx-auto items-center m-16 text-lg px-8">
                <div className="max-w-md">
                    <h1 className="my-12 text-center md:text-left">{planetNameFormatted}</h1>
                    <div>
                        <p>{planet.description}</p>
                        <ul className="mt-8 text-gray-300">
                            <AnchorLink anchor="#solarSystem" text="View in the solar system" imageAlt="Solar system logo"
                                        imageName="logo.svg"/>
                            <AnchorLink anchor="#moreStatistics" text="More stats" imageAlt="More stats icon"
                                        imageName="icon-statistics.svg"/>
                            <AnchorLink anchor="#moons" text="Moons" imageAlt="Moon" imageName="moon.svg"/>
                        </ul>
                    </div>
                </div>
              <div className="md:mr-12 xl:mr-0">
                <RotatingPlanet planet={planet} size={20}/>
              </div>
            </div>
            <div className="max-w-screen-xl mx-auto my-16 px-8">
                <PlanetMainStats planet={planet}/>
                <hr className="mt-16"/>

                {planet.specialFactName ?
                    <>
                        <div className="flex justify-center items-center pt-16 mx-16">
                            <span
                                className="uppercase text-4xl relative left-[8rem] w-0 vertical-text rotate-180 opacity-25">Special fact</span>

                            <div className="mx-auto text-center">
                                <h2>{planet.specialFactName}</h2>
                                <p className="pt-8 max-w-2xl">{planet.specialFactDescription}</p>
                                <Image image={`${planet.id}-special-fact.jpg`}
                                       legendText={PLANETS_SPECIAL_FACT_PHOTO_DESCRIPTION[planet.id]}
                                       additionalCSS="mx-auto sm:h-56 mt-12"/>
                            </div>
                        </div>
                        <hr className="mt-16"/>
                    </>
                    : ""}


                <div className="xl:mx-16 pt-16" id="solarSystem">
                    <h2 className="text-center">
                        {planetNameFormatted} into our Solar System
                    </h2>
                    <OrbitingSystem planet={planet} allPlanets={planets}/>
                    <PlanetSolarStats planet={planet}/>
                </div>

                <div className="xl:mx-16 pt-16" id="moreStatistics">
                    <h2 className="text-center">More statistics</h2>
                    <Graph
                        planet={planet}
                        allPlanets={planets}
                        dataSorting="gravity"
                        dataUnity={"m/s"}
                    />
                    <PlanetAdditionalStats planet={planet}/>
                </div>

                <div className="mt-16" id="moons">
                    <h2 className="text-center">{planetNameFormatted} moons</h2>
                    <div className="flex flex-col md:flex-row items-center my-16 mx-auto">
                        <img
                            className="planet-moons h-32 md:mr-12"
                            src="/images/moon.svg"
                            alt="Moon"
                        />
                        <div className="mt-8 md:mt-0">
                            <p className="block">
                                {planet.moons ?
                                    planetNameFormatted + " owns " + planet.moons.length + (planet.moons.length > 1 ? " moons." : " moon.")
                                    :
                                    planetNameFormatted + "owns no moons."
                                }
                            </p>
                            {planet.moons ?
                                <p className="flex flex-wrap ml-[-0.75rem]">
                                    {planet.moons.map(moon => {
                                        return <span
                                            className="rounded-md px-4 py-1 mx-2 mt-2 bg-blue-900 text-sm">{moon}</span>;
                                    })}
                                </p>
                                : ""}

                        </div>
                    </div>
                </div>
                {planet.discoveredBy
                    ?
                    <div className="flex max-w-md items-center mx-auto">
                        <p className="mr-8">
                            {planetNameFormatted} has been discovered in {planet.discoveryDate} by {planet.discoveredBy}.
                        </p>

                        <img
                            className="h-auto w-1/4 mx-auto"
                            src="/images/telescop.svg"
                            alt={planetName}
                        />
                    </div>
                    : ""}
            </div>
        </>
    );
}

/**/
export default PlanetName;
