import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense, memo } from "react";

/**
 * ⚡ Bolt Performance Optimization:
 * What: Wrap the heavy ModelView component in React.memo().
 * Why: When the 3D model is rotated, OrbitControls triggers onEnd() which sets the rotation state
 *      (smallRotation/largeRotation) in the parent Model component. Without memoization, updating
 *      this parent state triggers redundant re-renders of BOTH ModelView WebGL canvases and their entire
 *      underlying Three.js/React-Three-Fiber component sub-trees, causing performance/FPS drops during interaction.
 * Impact/Measurement: By memoizing, ModelView re-renders are completely skipped during rotation changes (since its props
 *      index, groupRef, gsapType, controlRef, setRotationState, size, and item remain referentially and value-wise stable).
 *      This reduces rendering overhead of WebGL canvas frames during active interaction/dragging, keeping frames butter-smooth.
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

export default ModelView