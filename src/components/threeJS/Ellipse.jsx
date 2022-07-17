import * as THREE from "three";
import React from "react";

export default function Ellipse({ radius = 1, isSelected, setSelected, isHovered, setHovered }) {
  const points = [];
  for (let index = 0; index < 128; index++) {
    const angle = (index / 128) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}
          onPointerOut={() => setHovered(false)}
          onPointerEnter={() => setHovered(true)}
    onClick={setSelected}>
      <lineBasicMaterial
        attach="material"
        color={isHovered || isSelected ? "#de3c3c" : "#3a414d"}
        linewidth={10}
      />
    </line>
  );
}
