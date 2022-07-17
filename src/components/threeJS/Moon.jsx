import React, {useRef} from "react";
import {TextureLoader} from "three";
import {useFrame, useLoader} from "@react-three/fiber";
import {moon} from "/src/data/the-moon";

export default function Moon({position, planetRadius}) {
    const mesh = useRef();
    const texture = useLoader(TextureLoader, `images/icon-moon.svg`);
    const size = moon.meanRadius / 1200;
    useFrame(() => {
        mesh.current.position.z += 1
        mesh.current.position.x += 1
        mesh.current.position.y += 1
    })
    return (
        <mesh
            position={[position.x + planetRadius * 2, 0, position.z]}
            ref={mesh}>
            <meshStandardMaterial attach="material" map={texture} color={"#ffffff"}/>
            <sphereGeometry args={[size * 20, 64, 64]}/>
        </mesh>
    );
}