import React, {Suspense, useRef, useState} from 'react'
import {Canvas} from '@react-three/fiber'
import Planet from './planet.jsx'
import {TrackballControls} from '@react-three/drei';
import {planets} from "../../data/planets";
import PlanetInfo from "./PlanetInfo";
import {sun} from "../../data/the-sun";

export default function System() {
    const [selectedPlanet, setSelectedPlanet] = useState(null)

    return (
        <>
            <Canvas
                camera={{fov: 90, near: 0.1, far: 100000, position: [0, 2000, 2500]}}
                color="#000000"
            >
                <TrackballControls/>
                <ambientLight intensity={0.2}/>
                <pointLight position={[0, 0, 0]} distance={8}/>
                <Sun selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet}/>

                <Suspense fallback={null}>
                    {planets.map((planet) => (
                        <mesh key={planet.id}>
                            <Planet planet={planet} radius={planet.semimajorAxis / 700000}
                                    selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet}/>
                            ))
                        </mesh>
                    ))}
                </Suspense>
            </Canvas>
        </>
    );
}

function Sun({selectedPlanet, setSelectedPlanet}) {
    const mesh = useRef()
    return (
        <mesh
            ref={mesh}
            position={[0, 0, 0]}
            glow={10}
            onClick={() => setSelectedPlanet("sun")}
        >
            <ambientLight intensity={1} glow={10}/>
            <pointLight
                distance={25}
                intensity={2}
                color={'white'}/>
            <sphereGeometry args={[40, 64, 64]}/>
            <meshStandardMaterial color={'yellow'} displacementScale={0.5}/>
            <meshPhongMaterial color={"yellow"}/>
            {selectedPlanet === "sun" &&
            <PlanetInfo setSelectedPlanet={setSelectedPlanet} planet={sun} />
            }
        </mesh>
    )
}