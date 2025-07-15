import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop() {
  const { scene } = useGLTF('/models/modern_slim_laptop.glb')
  return <primitive object={scene} />
}

useGLTF.preload('/models/modern_slim_laptop.glb')
