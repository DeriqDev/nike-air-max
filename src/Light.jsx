import React, { Suspense, useRef } from 'react'


export default function Light(){
    const spotlight1 = useRef()
    // useHelper(spotlight1, THREE.SpotLightHelper, 'aliceblue')


    const directionalLight1 = useRef()
    // useHelper(directionalLight1, THREE.DirectionalLightHelper, 1)

    const directionalLight2 = useRef()
    // useHelper(directionalLight2, THREE.DirectionalLightHelper, 1)
    return <>

        {/* Directional Light */}
        <directionalLight ref={directionalLight1} castShadow position={ [ 0, 2, 0 ] } intensity={ 0.5 } shadow-normalBias={ 0.05 }/>
        <directionalLight ref={directionalLight2}  
        color={'#c99c6c'}
        position={ [ 4, 2, 0 ] } 
        intensity={ 0.5 } shadow-normalBias={ 0.05 } 
        rotation={[-Math.PI * 0.5, 0, 0]}/>

        {/* Ambient Light */}
        <ambientLight intensity={ 0.5 } />

        {/* PointLight  */}
        <pointLight ref={spotlight1} position={[-20, 5, -20]} color={'#98652e'}/>
       <pointLight position={[20, 5, -20]} color={'#c99c6c'}/>
       <pointLight position={[-20, 5, 20]} color={'#c99c6c'}/>

       </>
}