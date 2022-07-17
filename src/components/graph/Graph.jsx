import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Bar,
} from "recharts";
import Loading from "../animations/Loading";

function Graph({ planet, allPlanets, dataSorting, dataUnity }) {
  const data = allPlanets;
  const planetNameFormatter = (planetName) => {
    return planetName.replace(/[0-9]/g, "").trim();
  };

  if (allPlanets === null) {
    return <Loading />;
  }
  return (
    <>
      <div className="relative left-[-1em] mt-16">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart width={600} height={300} data={data}>
            <XAxis dataKey="name" tickFormatter={planetNameFormatter} />
            <YAxis />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey={dataSorting} barSize={30} fill="#000000" animationDuration={2000}>
              {data.map((entry, index) => {
                return (
                  <Cell

                    key={`cell-${index}`}
                    fill={
                      entry.name === planet.name
                        ? "#8884d8"
                        : "#82ca9d"
                    }
                  />
                );
              })}
            </Bar>
            <Tooltip />
          </ComposedChart>
        </ResponsiveContainer>
        <span className="block w-full text-center">
          All solar system planets {dataSorting} ({dataUnity})
        </span>
      </div>
    </>
  );
}

export default Graph;
