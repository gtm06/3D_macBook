import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { Environment, OrbitControls, ScrollControls} from '@react-three/drei';
import Mac from './Mac';

const App = () => {
  return (
    <Canvas camera={{ fov: 12, position: [0, -10, 220]}}>
      {/* <OrbitControls /> */}
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",]}/>
      <ScrollControls pages={3}>
      <Mac />
      </ScrollControls>
    </Canvas>
  )
}

export default App