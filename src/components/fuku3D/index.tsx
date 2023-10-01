'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, Stage, BakeShadows } from "@react-three/drei";
import { Model } from './Fuku-san';

export const Fuku3D = (props: any) => {
  return (
    <div className='h-[80vh]'>
      <Canvas shadows>
        <Stage environment="city" intensity={0.6}>
          <Model name="huku-san" scale={1} />
          <Model name="HMD" scale={1} />
        </Stage>
        <BakeShadows />
        <OrbitControls makeDefault autoRotate />
      </Canvas>
    </div>
  )
}