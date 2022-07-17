import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import RotatingPlanet from "../animations/RotatingPlanet";
import {PLANETS_NAMES} from "/src/data/constants";

export default function PlanetInfo({ setSelectedPlanet, planet }) {
  const mesh = useRef();
  let { size } = useThree();
  return (
    <>
        <Html
          ref={mesh}
          className="m-4"
          style={{
            position: "absolute",
            top: -size.height / 2,
            left: -size.width / 2,
            width: "20rem",
            height: size.height,
          }}
        >
          <div className="content p-4 bg-blue rounded">
            <div className="flex items-center justify-between">
              <h3>{planet.name}</h3>
              <svg onClick={() => setSelectedPlanet(null)} className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
            <div className="mt-4">
              <div className="w-1/2 mx-auto">
                <RotatingPlanet planet={planet} size={4.5} />
              </div>
              <p className="text-sm mt-4">{planet.description}</p>
              <a
                className="mt-4 bg-blue-900 px-2 py-1 flex items-center justify-between rounded"
                href={`${PLANETS_NAMES.includes(planet.id) ? `/planet/${planet.name}` : `the-${planet.id}`}`}
              >
                <p className="text-sm">Discover {planet.name}</p>
                <svg
                  className="w-4 h-4 ml-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Html>
    </>
  );
}
