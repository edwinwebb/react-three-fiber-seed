import React, {useRef} from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import Land from './Land/Land'
import Flower from './Flower/Flower'

function SpinGroup(props) {
    const grp = useRef()
    useFrame(()=>{
        grp.current.rotation.y += 0.001;
    })
     return(
        <group
            {...props}
            ref={grp}
        >
            <Land />
            <Flower />
        </group>
    )
}

export default function App() {
    return (<Canvas camera={{position: [6,3,-10], fov: 50}} pixelRatio={window.devicePixelRatio}>
        <color attach="background" args={[0x7ec0ee]} />
        <ambientLight color={ 0x404040 } intensity={0.3} />
        <pointLight position={[0,4,5]} color={0xffffff} distance={10} decay={1} intensity={0.5} />
        <hemisphereLight color={0xffffbb} groundColor={0x080820} intensity={0.33} />
        <spotLight color={0xffffff} intensity={0.8} distance={7} angle={0.8} decay={1} penumbra={1} position={[5, 1, -2]} />
        <SpinGroup />
    </Canvas>)
}
