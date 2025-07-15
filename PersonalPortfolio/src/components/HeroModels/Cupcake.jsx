import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cupcake() {
  const { scene } = useGLTF('/models/oreo_cupcake.glb')
  return <primitive object={scene} />
}

useGLTF.preload('/models/oreo_cupcake.glb')
