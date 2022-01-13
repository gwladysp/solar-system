import RotatingPlanet from "./animations/RotatingPlanet";
import Sun from "./animations/Sun";
import Loading from "./animations/Loading";

function SizeComparison({sun, planets}) {

    if (planets === undefined || sun === undefined) {
        return <Loading />
    }

    return (
        <>
            <div className="mt-16 text-center">
                <h2>Sun size compared to planets sizes</h2>
                <p className="text-sm mt-8">To facilitate visualization, the size of the sun is reduced by three.</p>
                <p>Even though the sun is only a medium-sized star in the Milky Way, you could line up <span className="font-semibold">109 Earths</span> across the face of the sun! In terms of volume, <span className="font-semibold">1.3 millions Earths</span> could fit in it.</p>
                <div className="flex items-center justify-between flex-col lg:flex-row mt-16 w-[80%] mx-auto">
                    <Sun size={sun.meanRadius / 30000}/>
                    <div className="flex items-center justify-between flex-wrap md:flex-row w-full lg:w-3/5">
                        {planets.map(planet => {
                            return <div className="flex flex-col items-center mt-2"  key={planet.name}>
                                <RotatingPlanet planet={planet} size={planet.meanRadius / 10000}/>
                                <p className="text-center text-sm 2xl:text-md text-gray-500 mt-2">{planet.name}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SizeComparison;
