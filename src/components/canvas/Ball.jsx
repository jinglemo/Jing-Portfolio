import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
// Decal: A component that allows you to add decals to your 3D objects in Three.js. Decals are small images or textures that can be applied to the surface of an object to add detail, such as scratches or logos.

// Float: A component that allows you to create floating elements in your 3D scene. This can be useful for creating floating labels, tooltips, or other UI elements that are positioned relative to a specific object in the scene.

// OrbitControls: A set of camera controls that allow you to orbit around a specific point in your 3D scene. This can be useful for creating interactive experiences where users can explore the 3D environment.

// Preload: A component that allows you to preload assets such as textures, models, and fonts before they are used in the scene. This can improve performance and reduce loading times by ensuring that assets are available when they are needed.

// useTexture: A hook that allows you to load and manipulate textures in your 3D scene. This can be used to apply textures to objects, create animations, and more.

import CanvasLoader  from '../Loader'


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial 
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading/>
        <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]} 
        flatShading
        map={decal}/>
        </mesh> 
    </Float>
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
      </Suspense>
    <Preload all/>
    </Canvas>
  )
}

export default BallCanvas

