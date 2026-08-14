import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { memo, Suspense } from "react";

// Optimization: Hoisted THREE.Vector3 instance to module scope to avoid re-creating Vector3 object on every render frame
// What: Module-level Vector3 constant for OrbitControls target
// Why: Inline instantiation `new THREE.Vector3(0, 0, 0)` causes GC pressure and allocation overhead during renders
// Impact: Prevents GC allocations on re-render cycles
const TARGET_POSITION = new THREE.Vector3(0, 0, 0);

// Optimization: Wrapped ModelView in React.memo
// What: Memoized ModelView component
// Why: Prevents redundant re-renders of the heavy 3D WebGL scene when parent state changes
// Impact: Eliminates unnecessary 3D scene re-renders during state updates
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
        target={TARGET_POSITION}
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

export default ModelView