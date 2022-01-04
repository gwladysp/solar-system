import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="border-b-[1px]">
        <div className="app-margin mx-auto my-4">
          <div className="relative flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <div className="flex items-center justify-between">
                <img
                  className="h-10 w-10 object-cover"
                  src="/images/logo.svg"
                  alt=""
                />
                <p className="ml-6 text-xl font-semibold">SOLAR SYSTEM</p>
              </div>
            </Link>
            <div>
              <Link href="/the-sun" className="mx-12 text-xl font-semibold">
                The Sun
              </Link>
              <Link href="/the-moon" className="mx-12 text-xl font-semibold">
                The Moon
              </Link>
              <Link href="/planets" className="mx-12 text-xl font-semibold">
                Planets
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
