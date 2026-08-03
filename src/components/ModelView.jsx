import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense, memo } from "react";

/**
 * @file ModelView.jsx
 *
 * OPTIMIZATION SUMMARY
 * --------------------
 * What: Wrapped the ModelView component in React.memo to prevent unnecessary re-renders.
 * Why: The Model component updates its rotation state (smallRotation and largeRotation) via
 *      setSmallRotation/setLargeRotation during or at the end of orbit interactions.
 *      Without memoization, these state updates force both ModelView instances (index 1 & 2)
 *      to re-render completely on every gesture/rotation update, which is highly expensive
 *      due to the complex Three.js/WebGL canvas contexts.
 * Impact/Measurement: Stops redundant, CPU-intensive canvas and 3D sub-component re-renders
 *                      when only rotation/camera state is updated, leading to smoother
 *                      60FPS rotation interactions and lower CPU/GPU overhead.
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
});

ModelView.displayName = 'ModelView';

export default ModelView;