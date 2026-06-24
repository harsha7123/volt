import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function Scene() {
  const group = useRef()
  useFrame((state) => {
    if (!group.current) return
    const { x, y } = state.pointer
    group.current.rotation.y += (x * 0.45 - group.current.rotation.y) * 0.05
    group.current.rotation.x += (-y * 0.32 - group.current.rotation.x) * 0.05
  })

  return (
    <group ref={group}>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 5, 4]} intensity={1.6} />
      <pointLight position={[-6, -2, 3]} intensity={1.4} color="#9ad36a" />
      <pointLight position={[5, 3, 4]} intensity={1.1} color="#bfe89c" />

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.1}>
        <mesh>
          <sphereGeometry args={[1.55, 128, 128]} />
          <MeshDistortMaterial
            color="#79c443"
            emissive="#2f5c1c"
            emissiveIntensity={0.35}
            distort={0.38}
            speed={1.8}
            roughness={0.12}
            metalness={0.55}
          />
        </mesh>
      </Float>

      <Float speed={2.4} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2.2, 1.25, -1]}>
          <sphereGeometry args={[0.3, 48, 48]} />
          <meshStandardMaterial color="#a7db7c" roughness={0.18} metalness={0.6} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.7}>
        <mesh position={[-2.3, -1.05, -0.4]}>
          <sphereGeometry args={[0.22, 48, 48]} />
          <meshStandardMaterial color="#cdeeb4" roughness={0.22} metalness={0.5} />
        </mesh>
      </Float>
    </group>
  )
}

export default function OrbCanvas() {
  return (
    <Canvas
      className="orb-canvas"
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
    >
      <Scene />
    </Canvas>
  )
}
