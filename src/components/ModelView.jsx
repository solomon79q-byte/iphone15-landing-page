import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense, memo } from "react";

// PERFORMANCE OPTIMIZATION:
// What: Hoist static ThreeJS objects outside the component render function.
// Why: Allocating Vector3 instances on every render cycle increases garbage collection pressure,
//      especially during frequent interactions or camera updates.
// Impact: Reduces heap allocation frequency and prevents GC pauses.
const targetPosition = new THREE.Vector3(0, 0, 0);

// PERFORMANCE OPTIMIZATION:
// What: Wrap ModelView in React.memo().
// Why: Parent component 'Model' re-renders on user drag/rotation events to update rotation states,
//      which causes both heavy ModelView components to re-render completely.
// Impact: Prevents expensive WebGL/Three.js render cycles when rotation states update during/after drag.
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
        target={targetPosition}
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