import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense, memo } from "react";

/**
 * @description ModelView component renders a 3D view of the iPhone model.
 *
 * PERFORMANCE OPTIMIZATION (React.memo):
 * - What: Wrap the ModelView component in React.memo to prevent unnecessary re-renders.
 * - Why: The parent `Model` component updates its state (such as `smallRotation` or `largeRotation`)
 *   when the user interacts with/rotates the 3D model. Without memoization, any change to these
 *   rotation states triggers a complete re-render of both ModelView components and their heavy WebGL/Three.js scenes.
 * - Impact/Measurement: By memoizing ModelView, we prevent redundant WebGL re-renders and CPU/GPU spikes during
 *   model rotation, ensuring a smooth 60 FPS interaction experience.
 */
const ModelView = memo(({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
})

export default ModelView