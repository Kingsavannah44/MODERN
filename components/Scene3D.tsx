'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Text3D, Center, useProgress, Html } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'
import { isMobile } from '@/lib/utils'

function FloatingCube({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#6366f1" 
          metalness={0.7} 
          roughness={0.2}
          emissive="#6366f1"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          metalness={0.8} 
          roughness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  )
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-white text-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
        <p>{Math.round(progress)}% loaded</p>
      </div>
    </Html>
  )
}

function Scene() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(isMobile())
    
    const handleResize = () => {
      setMobile(isMobile())
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <ambientLight intensity={mobile ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={mobile ? 0.5 : 1} />
      <pointLight position={[-10, -10, -10]} intensity={mobile ? 0.3 : 0.5} color="#8b5cf6" />
      
      {!mobile && (
        <>
          <FloatingCube position={[-2, 0, 0]} />
          <FloatingSphere position={[2, 0, 0]} />
          <FloatingCube position={[0, 2, -2]} />
          <FloatingSphere position={[0, -2, 2]} />
        </>
      )}
      
      {mobile && (
        <>
          <FloatingCube position={[-1, 0, 0]} />
          <FloatingSphere position={[1, 0, 0]} />
        </>
      )}
      
      <Center>
        <mesh>
          <boxGeometry args={[3, 0.5, 0.2]} />
          <meshStandardMaterial 
            color="#6366f1" 
            metalness={0.7} 
            roughness={0.2}
            emissive="#6366f1"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Center>
      
      <Environment preset="city" />
    </>
  )
}

export default function Scene3D() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(isMobile())
  }, [])

  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 0, mobile ? 6 : 8], fov: 75 }}
        gl={{ 
          antialias: !mobile, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={mobile ? [1, 1.5] : [1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={mobile ? 0.3 : 0.5}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}