import React, {useRef} from "react";
import {DoubleSide, TextureLoader} from "three";
import {useLoader} from "@react-three/fiber";

export default function PlanetRing({position, radius = 1}) {
    const mesh = useRef();
    const texture = useLoader(TextureLoader, "https://pngimage.net/wp-content/uploads/2018/06/planet-ring-png-7.png");

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