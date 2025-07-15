import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop({ scale = 1000, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF('/models/modern_slim_laptop.glb')
  return (
    <group scale={scale} position={position} rotation={rotation}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/models/modern_slim_laptop.glb')
