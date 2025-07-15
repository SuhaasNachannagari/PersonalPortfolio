import React, { useRef, useState, useEffect, memo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

import { Basketball } from './Basketball.jsx'
import { Laptop } from './Modern_slim_laptop.jsx'
import { Cupcake } from './Cupcake.jsx'
import { Guitar } from './Guitar.jsx'
import Particles from './Particles.jsx'

// List of model components
const models = [Laptop, Guitar, Cupcake, Basketball]

// Transform maps
const scaleMap = {
  Laptop: 10,
  Guitar: 1,
  Cupcake: 2.0,
  Basketball: 1.5,
}

const positionMap = {
  Laptop: [0, -1.5, 0],
  Guitar: [0, -2.25, 0],
  Cupcake: [0, -2.0, 0],
  Basketball: [0, -0.25, 0],
}

const rotationMap = {
  Laptop: [0, 0, 0],
  Guitar: [-0.5, 0, 0.5],
  Cupcake: [0, 0, 0],
  Basketball: [0, 0, 0],
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
  const scaleValue = scaleMap[name] || 1
  const rotation = rotationMap[name] || [0, 0, 0]
  const scale = Array.isArray(scaleValue)
    ? scaleValue
    : [scaleValue, scaleValue, scaleValue]

  return (
    <group ref={ref}>
      <Component scale={scale} position={position} rotation={rotation} />
    </group>
  )
}

// Memoized particle system
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
