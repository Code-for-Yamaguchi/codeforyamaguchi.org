'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, Stage, BakeShadows, AccumulativeShadows, RandomizedLight, Center } from "@react-three/drei";
import { Model } from './Fuku-san';
import { ReactNode, useRef } from 'react';
import { easing } from 'maath'

export const Fuku3D = ({ position = [0, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      shadows
      camera={{ position, fov }}
      gl={{ preserveDrawingBuffer: true }}
      //eventSource={document.getElementById('root')}
      eventPrefix="client"
      //className='touch-none w-full h-full m-0 p-0 overflow-hidden user-select-none'
    >
      <ambientLight intensity={0.5} />
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />

      <CameraRig>
        {/*<Backdrop />*/}
        <Center>
          <Model scale={0.3} />
        </Center>
      </CameraRig>
    </Canvas>
  )
  /*return (
    <div className='h-[80vh]'>
      <Canvas shadows>
        <Stage environment="city" intensity={0.6}>
          <Model name="huku-san" scale={1} />
          <Model name="HMD" scale={1} />
          <Caustics
            backfaces
            color={[1, 0.8, 0.8]}
            focus={[0, -1.2, 0]}
            lightSource={[-2, 2.5, -2.5]}
            frustum={1.75}
            intensity={0.005}
            worldRadius={0.66 / 10}
            ior={0.6}
            backfaceIor={1.26}>
            <mesh castShadow receiveShadow geometry={nodes.glass.geometry}>
              <MeshTransmissionMaterial thickness={0.2} chromaticAberration={0.05} anisotropy={1.5} clearcoat={1} clearcoatRoughness={0.2} envMapIntensity={3} />
            </mesh>
          </Caustics>
        </Stage>
        <BakeShadows />
        <OrbitControls makeDefault autoRotate />
      </Canvas>
    </div>
  )*/
}

function Backdrop() {
  const shadows = useRef()
  useFrame((state, delta) => easing.dampC(shadows.current.getMesh().material.color, state.color, 0.25, delta))
  return (
    <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={10} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.14]}>
      <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]} />
      <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
    </AccumulativeShadows>
  )
}

type RigType = {
  children: ReactNode
}

function CameraRig({ children }: RigType) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [-state.viewport.width / 4, 0, 2], 0.25, delta)
    //FIXME: 動いてない
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta)
  })
  return <group ref={group}>{children}</group>
}