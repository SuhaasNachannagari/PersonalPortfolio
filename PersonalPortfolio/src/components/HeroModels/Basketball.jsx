import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Basketball() {
  const { scene } = useGLTF('/models/basketball.glb')
  return <primitive object={scene} />
}

useGLTF.preload('/models/basketball.glb')