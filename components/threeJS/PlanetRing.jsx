import React, {useRef} from "react";
import {DoubleSide, TextureLoader} from "three";
import {useLoader} from "@react-three/fiber";

export default function PlanetRing({planetName, position, radius = 1}) {
    const mesh = useRef();
    const texture = useLoader(TextureLoader, "/images/" + planetName + "-ring.svg");
    return (
        <mesh
            position={position}
            rotation={[200, 0, 200]}
            ref={mesh}>
            <ringBufferGeometry args={[radius * 2, radius * 10, 64]}/>
            <meshBasicMaterial attach="material" map={texture} side={DoubleSide}/>
        </mesh>
    );
}