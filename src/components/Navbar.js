import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <nav className="border-b-[1px]">
        <div className="app-margin mx-auto my-4">
          <div className="relative flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center">
              <img className="h-10 w-10 object-cover" src="/images/logo.svg" alt="" />
              <p className="ml-6 text-xl font-semibold">SOLAR SYSTEM</p>
            </NavLink>
            <div>
              <NavLink to="/sun" className="mx-12 text-xl font-semibold">
                The Sun
              </NavLink>
              <NavLink to="/theMoon" className="mx-12 text-xl font-semibold">
                The Moon
              </NavLink>
              <NavLink to="/planets" className="mx-12 text-xl font-semibold">
                Planets
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
