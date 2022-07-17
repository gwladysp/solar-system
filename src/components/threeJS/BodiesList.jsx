import {ALL_BODIES_NAMES} from "/src/data/constants";
import { Html } from "@react-three/drei";
import React, {Suspense, useRef, useState} from 'react'
import { useThree } from "@react-three/fiber";

export default function BodiesList({ setSelectedPlanet, selectedPlanet }) {
    const mesh = useRef();
    let { size } = useThree();
    const [show, setShow] = useState(true);

    return (
        <Html
        ref={mesh}
        className="m-4"
        style={{
          position: "absolute",
          top: -size.height / 2,
          right: -size.width / 2,
          width: "10rem",
          height: size.height,
        }}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-lg">Bodies list</h2>
                <span onClick={() => setShow(!show)} className="cursor-pointer">
                    <svg className="w-6 h-6 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                </span>
            </div>
            {show &&
            <div className="w-full bg-black bg-opacity-25">
                {ALL_BODIES_NAMES.map(body => {
                    return <button onClick={() => setSelectedPlanet(body)} className={`${selectedPlanet === body ? "" : "opacity-25"} block text-white rounded`}>{body}</button>
                })}
            </div>
            }
        </Html>
    );
};