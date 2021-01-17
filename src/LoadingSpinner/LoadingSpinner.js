import React, {useRef} from 'react';
import { useFrame } from 'react-three-fiber';

export default function LoadingSpinner(props) {
    const mesh = useRef();

    useFrame(()=>{
        mesh.current.rotation.x  = mesh.current.rotation.y  += 0.01;
    })

    return (<mesh 
        {...props}
        ref={mesh}
        >
        <dodecahedronBufferGeometry args={[1,1,1]} />
        <meshBasicMaterial color={"hotpink"} wireframe={true} />
    </mesh>)
}