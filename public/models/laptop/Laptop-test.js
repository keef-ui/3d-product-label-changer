/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/laptop-test.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.12, 2.29]} rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <group scale={3.37}>
          <mesh geometry={nodes.Screen.geometry} material={materials['Screen 1']} scale={0.3} />
          <mesh geometry={nodes.Black_Inset.geometry} material={materials['Display Rim']} scale={0.3} />
          <mesh geometry={nodes.Rubber.geometry} material={materials['Display Rubber']} scale={0.3} />
          <mesh geometry={nodes.Screen_Back.geometry} material={materials['Body 1']} scale={0.3} />
        </group>
        <mesh geometry={nodes.Keyboard.geometry} material={materials['Keyboard 1']} />
        <mesh geometry={nodes.Touch_Panel.geometry} material={materials['Touch Bar']} />
        <mesh geometry={nodes.Ports.geometry} material={materials.Ports} />
        <mesh geometry={nodes.Touchpad.geometry} material={materials.Touchpad} />
        <mesh geometry={nodes.Body.geometry} material={materials['Body 1']} />
      </group>
    </group>
  )
}

useGLTF.preload('/laptop-test.glb')
