import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Guitar() {
  const { scene } = useGLTF('/models/guitar.glb')
  return <primitive object={scene} />
}

useGLTF.preload('/models/guitar.glb')
