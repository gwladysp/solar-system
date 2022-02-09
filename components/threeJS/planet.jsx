import React, {Suspense, useRef, useState} from 'react'
import {useFrame, useLoader} from '@react-three/fiber'
import {IcosahedronGeometry, MeshBasicMaterial, TextureLoader} from "three";
import {Html} from "@react-three/drei";
import Ellipse from "./Ellipse";
import PlanetInfo from "./PlanetInfo";
import PlanetRing from "./PlanetRing";
import {PLANETS_WITH_RING} from "../../data/constants";
import Moon from "./Moon";

export default function Planet({planet, radius, selectedPlanet, setSelectedPlanet}) {
    const [isHovered, setHovered] = useState(false)
    const texture = useLoader(TextureLoader, `images/${planet.id}.svg`);
    const mesh = useRef()
    let size = planet.meanRadius / 1200

    let [angle, setAngle] = useState(Math.random() * 360)
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    useFrame(() => {
        setAngle(angle += 0.001)
        mesh.current.position.z = radius * Math.sin(angle);
        mesh.current.position.x = radius * Math.cos(angle);
        mesh.current.rotation.y += 0.01
    })

    const changePlanetSelected = (e) => {
        e.stopPropagation();
        if (selectedPlanet === planet.id) {
            setSelectedPlanet(null)
        } else {
            setSelectedPlanet(planet.id)
        }
    };

    return (
        <>
            <Ellipse radius={radius} isSelected={selectedPlanet === planet.id} setSelected={changePlanetSelected}
                     isHovered={isHovered}
                     setHovered={setHovered}/>
            {selectedPlanet === planet.id && (
                <PlanetInfo planet={planet} setSelectedPlanet={setSelectedPlanet}/>
            )}
            <group
                ref={mesh}
                position={[x, 0, z]}
                onPointerOut={() => setHovered(false)}
                onPointerOver={() => setHovered(true)}
            >
                <Html center>
                    <div className="content cursor-pointer relative"
                         onClick={changePlanetSelected}
                         onPointerOut={() => setHovered(false)}
                         onPointerOver={() => setHovered(true)}
                    >
                        {planet.id}
                    </div>
                </Html>
                <Suspense fallback={null}>
                    <mesh
                        ref={mesh}
                        onClick={changePlanetSelected}
                        receiveShadow={true}
                    >
                        <sphereGeometry args={[size, 64, 64]}/>
                        {texture && <meshStandardMaterial attach="material" map={texture}/>}
                    </mesh>
                    {(selectedPlanet === planet.id || isHovered) &&
                    <mesh
                        geometry={new IcosahedronGeometry(size * 5, 1)}
                        material={
                            new MeshBasicMaterial({
                                color: 'white',
                                transparent: true,
                                wireframe: true,
                                opacity: isHovered ? 0.1 : 0.2
                            })
                        }
                    />
                    }
                </Suspense>
            </group>
            <Suspense fallback={null}>
                {PLANETS_WITH_RING.includes(planet.id) &&
                <PlanetRing planetName={planet.id} position={[x, 0, z]} radius={size}/>
                }
                {planet.id === "earth" &&
                <Moon position={{'x': x, 'z' : z}} planetRadius={size}/>
                }
            </Suspense>
        </>
    );
}