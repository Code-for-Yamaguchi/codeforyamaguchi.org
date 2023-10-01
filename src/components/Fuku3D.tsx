'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, Stage, BakeShadows } from "@react-three/drei";

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

useGLTF.preload('/models/fuku-san.glb')

function Model({ name, ...props }: any) {
  const { nodes } = useGLTF('/models/fuku-san.glb')
  return <mesh castShadow receiveShadow geometry={nodes[name].geometry} material={nodes[name].material} material-roughness={1} {...props} dispose={null} />
}
