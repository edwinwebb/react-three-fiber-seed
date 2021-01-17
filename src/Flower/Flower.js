import React, { Suspense } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Asset({url}) {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} />
}

export default function Land() {
  return(
    <Suspense fallback={<LoadingSpinner />}>
      <Asset url={'flower.gltf'} />
    </Suspense>
  )
}