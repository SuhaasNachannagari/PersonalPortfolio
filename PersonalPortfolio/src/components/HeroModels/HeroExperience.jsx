import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Basketball } from './Basketball.jsx'
import { Laptop } from './Laptop.jsx'
import { Cupcake } from './Cupcake.jsx'

const models = [Basketball, Laptop, Cupcake]

const scaleMap = {
  Basketball: 2,
  Laptop: 12,
  Cupcake: 2,
}

const RotatingModel = ({ Component }) => {
  const ref = React.useRef()

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += (Math.PI * 2 / 10) * delta
    }
  })

  // Position offsets per model (tweak Y to lower)
  const positionMap = {
    Basketball: [0, -.25, 0],           // Keep basketball as is
    Laptop: [-6.67854, -.55, -2.04642],  // Lowered Laptop by ~1.5 on Y axis
    Cupcake: [0, -1.0, 0],          // Lower cupcake by ~1.2 on Y axis
  }

  const scaleMap = {
    Basketball: 1.5,
    Laptop: 11,
    Cupcake: 2.0,
  }

  const name = Component.name
  const position = positionMap[name] || [0, 0, 0]
  const scale = scaleMap[name] || 1

  return (
    <group ref={ref} scale={scale}>
      <group position={position}>
        <Component />
      </group>
    </group>
  )
}



const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % models.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const CurrentModel = models[currentIndex]

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <RotatingModel Component={CurrentModel} />
    </Canvas>
  )
}

export default HeroExperience
