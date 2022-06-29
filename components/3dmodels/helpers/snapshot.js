import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

//Resources: 
// Snapshot: https://codesandbox.io/s/basic-demo-forked-rnuve?file=/src/App.js:1540-1580

export default function SnapShotButton() {
  // remeber to set following on the canvas <Canvas gl={{ preserveDrawingBuffer: true }}>
  const gl = useThree((state) => state.gl);
  const takeSnapShot = () => {
    const link = document.createElement("a");
    link.setAttribute("download", "canvas.png");
    link.setAttribute(
      "href",
      gl.domElement
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    link.click();
  };

  return (
    <Html className="content" position={[0, 50, 20]}>
      <button onClick={takeSnapShot} type="button">
        Button...
      </button>
    </Html>
  );
}
