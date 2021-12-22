import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Bar,
} from 'recharts';

function Graph({ planet, allPlanets }) {
  const data = allPlanets.bodies;
  return (
    <>
      {allPlanets.length !== 0 ? (
        <div className="relative left-[-1em]">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart width={600} height={300} data={data}>
              <XAxis dataKey="id" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="gravity" barSize={30} fill="#000000">
                {data.map((entry, index) => {
                  if (entry.englishName === planet.englishName) {
                    return <Cell key={`cell-${index}`} fill="#8884d8" />;
                  }
                  return <Cell key={`cell-${index}`} fill="#82ca9d" />;
                })}
              </Bar>
              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
          <span className="block w-full text-center">All solar system planets density</span>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Graph;
