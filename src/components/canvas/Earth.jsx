import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Preload,useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

// below code is to render the earth component 
const Earth = () => {
  const earth=useGLTF('./planet/scene.gltf')
  
  return (
    // below tag renders the 3d image on screen
    <primitive 
    object={earth.scene}
    scale={1.8}
    />
  )
}
const EarthCanvas = () => {
  return(
    <Canvas
      shadows 
      frameloop="demand"
      gl={{preserveDrawingBuffer:true}}
      camera={{fov:50}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
      />
      <Earth/>
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas;