import React, {useRef} from "react";
import {Point, Stars, Torus} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {BufferGeometry, TextureLoader} from "three";

export default function AsteroidBelt({radius = 1}) {
    const mesh = useRef();

    // random position between min and max
    function randomPos(min, max) {
        return Math.random() * (max - min) + min;
    }

    radius = 450
    let points = []
    // creates a lot of asteroids
    for (let index = 0; index < 128; index++) {
        const angle = (index / 128) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        points.push({'x': x, 'y': randomPos(64, 90), 'z': z});
    }
    points.push(points[0])

    const geometry = new BufferGeometry()

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <meshBasicMaterial
                attach="material"
                color="red"
                opacity={0.5}
            />
            {points.map(point => (
                <sphereGeometry args={[2, 64, 64]} position={[point.x, 150, point.z]}/>
            ))}
        </mesh>
    );
}

/*
*             {points.map(point => (
                <sphereGeometry args={[2, 64, 64]} position={[point.x, 150, point.z]}/>
            ))}
* */

/*
    const texture = useLoader(TextureLoader, `images/sun.svg`);

        <mesh ref={mesh} position={[0, 0, 0]}>
            <Torus radius={100}>
                <meshBasicMaterial attach="material" map={texture}/>
            </Torus>

        </mesh>

 */