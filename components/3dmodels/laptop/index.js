import React, { useEffect, useRef, useMemo} from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";



  
  export default  function Model({ modelPosX, modelPosY, modelPosZ, xRotate}) {
    const group = useRef();

    const { nodes, materials } = useGLTF("/models/laptop/laptop-7.glb");
    //TODO: Change laptop to GOLD set follwoing:

    // console.log(materials["Body 1"]);

    //  materials["Body 1"].color.set("#b09040");
    //  materials["Body 1"].metalness = 1;
    //  materials["Body 1"].roughness = 0;
    // Then add folloing to scene
          // <Environment
          //   frames={Infinity}
          //   resolution={256}
          //   preset={"apartment"}
          // />;

    return (
      <group ref={group} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
          <group
            scale={3.37}
            rotation={[(xRotate * Math.PI) / 180, 0, 0]}
            position={[modelPosX, modelPosY, modelPosZ]}
          >
            <mesh
              geometry={nodes.Screen.geometry}
              material={materials["Screen 1"]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Black_Inset.geometry}
              material={materials["Display Rim"]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Rubber.geometry}
              material={materials["Display Rubber"]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Screen_Back.geometry}
              material={materials["Body 1"]}
              scale={0.3}
            />
          </group>
          <mesh
            geometry={nodes.Keyboard.geometry}
            material={materials["Keyboard 1"]}
          />
          <mesh
            geometry={nodes.Touch_Panel.geometry}
            material={materials["Touch Bar"]}
          />
          <mesh geometry={nodes.Ports.geometry} material={materials.Ports} />
          <mesh
            geometry={nodes.Touchpad.geometry}
            material={materials.Touchpad}
          />
          <mesh geometry={nodes.Body.geometry} material={materials["Body 1"]} />
        </group>
      </group>
    );
  }


  export function LaptopYT({ isOpen, ...props }) {
    const { nodes, materials } = useGLTF("/models/laptop/laptop-yt.glb");
    const variants = {
      open: { rotateX: (0 * Math.PI) / 180, x: -0.03, y: 111.69, z: 2.84 },
      closed: { rotateX: (105 * Math.PI) / 180, x: 0, y: 75, z: 39 },
    };
      //  materials["Body 2"].color.set("#b09040");
  //  materials["Body 2"].metalness = 1;
  //  materials["Body 2"].roughness = 0;

  //   materials["Body 3"].color.set("#b09040");
  //   materials["Body 3"].metalness = 1;
  //   materials["Body 3"].roughness = 0;

    return (
      <group {...props} dispose={null} position={[-0.03, -1, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
          <group
            position={[-0.03, 111.69, 2.84]}
            scale={3.37}
          >
            <mesh
              geometry={nodes.Screen.geometry}
              material={materials.Namibia}
              position={[0.01, -33.13, -0.84]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Black_Inset.geometry}
              material={materials["Display Rim 1"]}
              position={[0.01, -33.13, -0.84]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Rubber.geometry}
              material={materials["Display Rubber 1"]}
              position={[0.01, -33.13, -0.84]}
              scale={0.3}
            />
            <mesh
              geometry={nodes.Screen_Back.geometry}
              material={materials["Body 2"]}
              position={[0.01, -33.13, -0.84]}
              scale={0.3}
            />
          </group>
          <mesh
            geometry={nodes.Keyboard.geometry}
            material={materials["Keyboard 2"]}
          />
          <mesh
            geometry={nodes.Touch_Panel.geometry}
            material={materials["Touch Bar 1"]}
          />
          <mesh
            geometry={nodes.Ports.geometry}
            material={materials["Ports 1"]}
          />
          <mesh
            geometry={nodes.Touchpad.geometry}
            material={materials["Touchpad 1"]}
          />
          <mesh geometry={nodes.Body.geometry} material={materials["Body 3"]} />
        </group>
      </group>
    );
  }


  
export function LaptopMotionYT({ isOpen, ...props }) {
  const { nodes, materials } = useGLTF("/models/laptop/laptop-yt.glb");
  const variants = {
    open: { rotateX: (0 * Math.PI) / 180, x: -0.03, y: 111.69, z: 2.84 },
    closed: { rotateX: (105 * Math.PI) / 180, x: 0, y: 75, z: 39 },
  };

  // To change latop to gold change following:

  //  materials["Body 2"].color.set("#b09040");
  //  materials["Body 2"].metalness = 1;
  //  materials["Body 2"].roughness = 0;

  //   materials["Body 3"].color.set("#b09040");
  //   materials["Body 3"].metalness = 1;
  //   materials["Body 3"].roughness = 0;

  return (
    <group {...props} dispose={null} position={[-0.03, -1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <motion.group
          position={[-0.03, 111.69, 2.84]}
          scale={3.37}
          initial={"closed"}
          animate={isOpen ? "open" : "closed"}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          variants={variants}
        >
          <mesh
            geometry={nodes.Screen.geometry}
            material={materials.Namibia}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
          <mesh
            geometry={nodes.Black_Inset.geometry}
            material={materials["Display Rim 1"]}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
          <mesh
            geometry={nodes.Rubber.geometry}
            material={materials["Display Rubber 1"]}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
          <mesh
            geometry={nodes.Screen_Back.geometry}
            material={materials["Body 2"]}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
        </motion.group>
        <mesh
          geometry={nodes.Keyboard.geometry}
          material={materials["Keyboard 2"]}
        />
        <mesh
          geometry={nodes.Touch_Panel.geometry}
          material={materials["Touch Bar 1"]}
        />
        <mesh geometry={nodes.Ports.geometry} material={materials["Ports 1"]} />
        <mesh
          geometry={nodes.Touchpad.geometry}
          material={materials["Touchpad 1"]}
        />
        <mesh geometry={nodes.Body.geometry} material={materials["Body 3"]} />
      </group>
    </group>
  );
}

export function LaptopGold({ isOpen, ...props }) {
  const { nodes, materials } = useGLTF("/models/laptop/laptop-yt.glb");
  const variants = {
    open: { rotateX: (0 * Math.PI) / 180, x: -0.03, y: 111.69, z: 2.84 },
    closed: { rotateX: (105 * Math.PI) / 180, x: 0, y: 75, z: 39 },
  };

  // To change latop to gold change following:
  // console.log(materials);

  const newMaterial1 = useMemo(()=>materials["Body 2"].clone());
  const newMaterial2 = useMemo(() => materials["Body 3"].clone());

   newMaterial1.color.set("#b09040");
   newMaterial1.metalness = 1;
   newMaterial1.roughness = 0;

    newMaterial2.color.set("#b09040");
    newMaterial2.metalness = 1;
    newMaterial2.roughness = 0;

    console.log(newMaterial1);

  return (
    <group {...props} dispose={null} position={[-0.03, -1, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <motion.group position={[-0.03, 111.69, 2.84]} scale={3.37}>
          <mesh
            geometry={nodes.Screen.geometry}
            material={materials.Namibia}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
          <mesh
            geometry={nodes.Black_Inset.geometry}
            material={materials["Display Rim 1"]}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
          <mesh
            geometry={nodes.Rubber.geometry}
            material={materials["Display Rubber 1"]}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
          <mesh
            geometry={nodes.Screen_Back.geometry}
            material={newMaterial1}
            position={[0.01, -33.13, -0.84]}
            scale={0.3}
          />
        </motion.group>
        <mesh
          geometry={nodes.Keyboard.geometry}
          material={materials["Keyboard 2"]}
        />
        <mesh
          geometry={nodes.Touch_Panel.geometry}
          material={materials["Touch Bar 1"]}
        />
        <mesh geometry={nodes.Ports.geometry} material={materials["Ports 1"]} />
        <mesh
          geometry={nodes.Touchpad.geometry}
          material={materials["Touchpad 1"]}
        />
        <mesh geometry={nodes.Body.geometry} material={newMaterial2} />
      </group>
    </group>
  );
}

