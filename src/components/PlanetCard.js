import { Link, useRouteMatch } from 'react-router-dom';

function PlanetCard(props) {
  let match = useRouteMatch();
  let { planet } = props;

  let planetName = planet.englishName.replace(/[0-9]/g, '').trim();

  return (
    <>
      <div key={planet.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-2/3 object-cover object-center"
            src={'/images/' + planetName + '.svg'}
            alt={planetName}
          />
        </div>
        <div className="flex-1 bg-blue-light p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">Main planets</p>
            <div>
              <p className="text-xl font-semibold text-gray-200">
                {planetName.charAt(0).toUpperCase() + planetName.slice(1)}
              </p>
              <p className="mt-3 text-base text-gray-500">
                Short planet description of approximatly two or three lines giving basics
                informations about the planet
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
            >
              <Link to={`${match.url}/${planetName}`} planet={props}>
                Discover
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanetCard;

/* 
        <div>
            <h3>{planet.id.charAt(0).toUpperCase() + planet.id.slice(1)}</h3>
            <p>Short planet description</p>
        </div>
        */
