/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 macbook_laptop.glb 
Author: Issac Ghazanfar (https://sketchfab.com/sheshhh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/macbook-laptop-7ceb46a1425b475fa7f6bf192e01ed74
Title: MacBook Laptop
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/macbook_laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[667.854, 40.894, 204.642]} rotation={[Math.PI, 0, 0]} scale={[9.059, 7.172, 9.059]}>
          <group position={[0.001, -1.421, 1.468]} rotation={[1.386, 0, 0]} scale={[11.038, 11.143, 13.86]}>
            <mesh geometry={nodes.Cube_Material004_0.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Cube_Material002_0.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Cube_Material003_0.geometry} material={materials['Material.003']} />
          </group>
          <mesh geometry={nodes.Cube001_Material002_0.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Keyboard_Material001_0.geometry} material={materials['Material.001']} position={[0.024, -0.032, 0.48]} rotation={[Math.PI / 2, 0, 0]} scale={[0.976, 0.976, 0.978]} />
          <mesh geometry={nodes.Cube002_Material002_0.geometry} material={materials['Material.002']} position={[-0.01, -0.047, -0.739]} rotation={[Math.PI / 2, 0, 0]} scale={[1.035, 0.972, 0.968]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/macbook_laptop.glb')
