import Link from "next/link";
import {useState} from "react";

export default function Navbar() {

    const navigation = [
        {
            name: 'The Sun',
            href: '/the-sun',
            icon: 'icon-sun.svg',
        }, {
            name: 'The moon',
            href: '/the-moon',
            icon: 'icon-moon.svg',
        }, {
            name: 'Planets',
            href: '/planets',
            icon: 'icon-planet.svg',
        },
    ]

    let [open, setOpen] = useState(false);

    return (
        <>
            <nav className="border-b-[2px] border-blue shadow-md">
                <div className="app-margin mx-auto my-4 px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <Link href="/" className="flex">
                            <div className="flex items-center justify-between cursor-pointer">
                                <img
                                    className="h-10 w-10 object-cover"
                                    src="/images/logo.svg"
                                    alt=""
                                />
                                <p className="ml-6 text-xl font-semibold">SOLAR SYSTEM</p>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center justify-between gap-8">
                            {navigation.map((item) => (
                                <Link href={item.href} className="mx-12 text-xl font-semibold cursor-pointer" key={item.name}>
                                    <div className="flex items-center justify-between cursor-pointer">
                                        <img
                                            className="h-8 w-8 object-cover"
                                            src={`/images/${item.icon}`}
                                            alt=""
                                        />
                                        <p className="ml-4 text-xl font-semibold">{item.name}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* Mobile opener button */}
                        <button className="md:hidden flex flex-col gap-2 animate-fade-in-down" onClick={() => setOpen(!open)}>
                                    <span className={`w-8 bg-white h-1 block ${open && 'animate-rotate-45deg relative top-[0.75rem]'}`}></span>
                                    <span className={`w-8 bg-white h-1 block ${open && 'bg-transparent'}`}></span>
                                    <span className={`w-8 bg-white h-1 block ${open && 'animate-rotate-135deg relative top-[-0.75rem]'}`}></span>
                        </button>
                    </div>
                    {/* Mobile navigation display */}
                    <div className={`items-center justify-between bg-blue-dark z-10 w-full left-0 border-b-2 border-blue pb-4 ${open ? 'absolute' : 'hidden'}`}>
                        {navigation.map((item) => (
                            <Link href={item.href} className="text-xl font-semibold cursor-pointer cursor-pointer" key={item.name}>
                                <div className="flex items-center justify-start ml-8 pt-2">
                                    <img
                                        className="h-8 w-8 object-cover"
                                        src={`/images/${item.icon}`}
                                        alt=""
                                    />
                                    <p className="ml-4 text-xl font-semibold">{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}
