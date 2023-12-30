import { Canvas, CanvasProps } from '@react-three/fiber'

type Props = CanvasProps & {
  position?: [number, number, number]
  fov?: number
}

export const CustomCanvas = ({
  children,
  className,
  position = [0, 0, 2.5],
  fov = 25,
}: Props) => {
  return (
    <Canvas
      shadows
      camera={{ position, fov }}
      gl={{ preserveDrawingBuffer: true }}
      eventPrefix="client"
      style={{
        minWidth: '10px',
      }}
      onPointerDown={(e) => {
        e.preventDefault()
      }}
      className={className}
    >
      {children}
    </Canvas>
  )
}
