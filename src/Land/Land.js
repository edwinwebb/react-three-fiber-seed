import React, { Suspense } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import MODEL from './Land.glb'

function Box(props) {
  return(
    <mesh {...props}>
      <boxBufferGeometry args={[2,2,2]}/>
      <meshStandardMaterial color={ 'red' }/>
    </mesh>
  )
}

function Asset({url}) {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} />
}

export default function Land(props) {
  return(
    <Suspense fallback={<Box />}>
      <Asset url={MODEL} />
    </Suspense>
  )
}