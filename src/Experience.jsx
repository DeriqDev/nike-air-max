import { PresentationControls, OrbitControls, MeshReflectorMaterial, useHelper, Html, Loader, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { Perf } from 'r3f-perf'
import Shoe from './Shoe'
import React, { Suspense, useRef } from 'react'
import Overlay from './Overlay'
import { Canvas } from '@react-three/fiber'
import Light from './Light'
import Letter from './Letter'
import './style.css'

export default function Experience()
{
    return <>
    <Canvas
    
    shadows
    camera={ {
        fov: 50,
        near: 0.1,
        far: 200,
        position: [ 5, 2, 0 ]
    } }
>

    <Suspense>
    {/* <Perf position="top-left" /> */}
    
    {/* <OrbitControls makeDefault /> */}

  <PresentationControls 

  config={{ mass: 2, tension: 500 }}
  snap={{mass: 2, tension: 500}} 
  polar={[0, Math.PI/16]}
  azimuth={[-Math.PI/4, Math.PI/16]}  
  >    
    <Shoe/>
  
  </PresentationControls>
 
  
    <mesh receiveShadow position-y={ - 0.3 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
        <circleGeometry args={[0.2, 128]} />
        <MeshReflectorMaterial
        color="#171720"
          blur={[100, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={3}
            depthScale={1}
            minDepthThreshold={0.85}
            metalness={0}
            roughness={0.8} />
    </mesh>
    </Suspense>
    {/* <Environment preset="night">
   
    </Environment> */}
    <Light />
    <Letter />
   

</Canvas>
<Loader />

<Overlay />
       
    </>
}