import React, { useRef, useState, useEffect, memo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

import { Basketball } from './Basketball.jsx'
import { Laptop } from './Modern_slim_laptop.jsx'
import { Cupcake } from './Cupcake.jsx'
import { Guitar } from './Guitar.jsx'
import Particles from './Particles.jsx'

// Your model list
const models = [Laptop, Guitar, Cupcake, Basketball]

const scaleMap = {
  Basketball: 1.5,
  Laptop: 100,
  Cupcake: 2.0,
  Guitar: 1
}

const positionMap = {
  Basketball: [0, -0.25, 0],
  Laptop: [0, -1.5, 0],
  Cupcake: [0, -4.0, 0],
  Guitar: [0, -2.25, 0]
}

const rotationMap = {
  Basketball: [0, 0, 0],
  Laptop: [0, 0, 0],
  Cupcake: [0, 0, 0],
  Guitar: [0, 0, 0.5]
}

const RotatingModel = ({ Component }) => {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += (Math.PI * 2 / 30) * delta
    }
  })

  const name = Component.name
  const position = positionMap[name] || [0, 0, 0]
  const scale = scaleMap[name] || 1
  const rotation = rotationMap[name] || [0, 0, 0]

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Uncomment to debug origin and axes */}
      {/* <axesHelper args={[2]} /> */}
      <Component />
    </group>
  )
}

// Memoize Particles so it doesn’t remount
const PersistentParticles = memo(() => <Particles count={100} />)

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % models.length)
    }, 7500)
    return () => clearInterval(interval)
  }, [])

  const CurrentModel = models[currentIndex]

  const isLaptop = CurrentModel.name === 'Laptop'

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* Lights */}
      <ambientLight intensity={isLaptop ? 1.0 : 0.4} color="#ffffff" />
      <directionalLight
        position={[4, 10, 6]}
        intensity={isLaptop ? 15 : 1}
        castShadow
        color="#ffffff"
      />
      <directionalLight
        position={[-4, -2, -4]}
        intensity={isLaptop ? 5 : 0.5}
        color="#eeeeff"
      />

      {/* Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Background Particles */}
      <PersistentParticles />

      {/* Suspense for smooth loading */}
      <Suspense fallback={null}>
        <RotatingModel Component={CurrentModel} />
      </Suspense>
    </Canvas>
  )
}

export default HeroExperience
