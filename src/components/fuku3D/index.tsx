'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, Stage, BakeShadows, AccumulativeShadows, RandomizedLight, Center, Lightformer, Billboard, Sparkles, Shadow, Sky } from "@react-three/drei";
import { Model } from './Fuku-san';
import { ReactNode, useRef, useState } from 'react';
import { easing } from 'maath'

export const Fuku3D = ({ position = [0, 0, 2.5], fov = 25 }: any) => {
  const [perfSucks, degrade] = useState(true)

  return (
    <Canvas
      shadows
      camera={{ position, fov }}
      gl={{ preserveDrawingBuffer: true }}
      eventPrefix="client"
      //className='touch-none w-full h-full m-0 p-0 overflow-hidden user-select-none'
    >
      <Env perfSucks={perfSucks} />
      <CameraRig>
        {/*<Backdrop />*/}
        <Center>
          <Model scale={0.3} />
          <Shadow rotation={[-Math.PI / 2, 0, 0]} scale={0.3} position={[0, -0.3, 0]} color={"black"} opacity={0.5} />
          <Sparkles count={20} scale={0.3 * 2} size={6} speed={0.4} />
        </Center>
      </CameraRig>
      <Sky distance={450000} sunPosition={[0, 1, 0.8]} inclination={0} azimuth={0.25} />
    </Canvas>
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

type EnvProps = {
  perfSucks: boolean
}

function Env({ perfSucks }: EnvProps) {
  return (
    <Environment frames={perfSucks ? 1 : Infinity} preset="sunset" resolution={256} background blur={0.8}>
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
      <group rotation={[Math.PI / 2, 1, 0]}>
        {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
          <Lightformer key={i} intensity={1} rotation={[Math.PI / 4, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
        ))}
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
        <Lightformer intensity={0.5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
      <group>
        <Lightformer intensity={5} form="ring" color="silver" rotation-y={Math.PI / 2} position={[-5, 2, -1]} scale={[10, 10, 1]} />
      </group>
    </Environment>
  )
}
