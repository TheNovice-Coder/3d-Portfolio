// this file is used to render and style the computer model

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      {/* Hemisphere light to make the element visible */}
      <hemisphereLight intensity={1.15} groundColor="black" />
      {/* Glare or sparkle on the screen */}
      <pointLight intensity={1} />

      {/* Render the 3D computer model on web page*/}
      <primitive object={computer.scene}
                  scale={0.80}
                  position={[0,-3.25,-1.5]}
                  rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  );
};
const ComputersCanvas = () => {
  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
    >
      {/* allows to load the model */}
      <Suspense fallback={<CanvasLoader/>}>

        {/* Below controls the rotation of 3d model */}
        <OrbitControls 
          
          enableZoom={false}
          // allows to rotate only to specific angles
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />
        <Computers />
      </Suspense> 
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;
