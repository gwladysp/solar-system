import {
    ComposedChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Bar,
} from "recharts";
import Loading from "./Loading";

function Graph({ planet }) {
    if (planet === null) {
        return <Loading />;
    }
    const data = planet.composition;
    return (
        <>
            <div className="relative left-[-1em] mt-16 mx-[-2.5rem]">
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart width={600} height={300} data={data}>
                        <XAxis dataKey="element" />
                        <YAxis type="number" domain={[0, 100]} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="percentage" barSize={30} fill="#c27346">
                        </Bar>
                        <Tooltip />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <span className="block w-full text-center text-[#c27346]">
                    Sun composition
                    <span className="block text-sm text-gray-600">"others" refers to iron, neon, nitrogen, silicon, magnesium and sulphur.</span>
            </span>
        </>
    );
}

export default Graph;