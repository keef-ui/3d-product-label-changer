import { useEffect, useState,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch,faRotate,faCamera } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { useThree } from "@react-three/fiber";
import { Button } from "../components/ui/buttons/Button";
import Layout from "../components/layouts/main-basic/MainBasic";
import LabelPreview from "../components/layouts/label-preview/LabelPreview";
import LabelUploadPanel from "../components/layouts/label-upload-panel/LabelUploadPanel";
import LabelUploadForm from "../components/ui/label-upload-form/LabelUploadForm";
import ShowModelEnvironment from "../components/3dmodels/show/show-model-environment";
import Bottle from "../components/3dmodels/bottle/";
import styles from "../styles/Home.module.css";
import snapShotHelper from "../components/3dmodels/helpers/takeSnap";
import ScenePreviewPanel from "../components/layouts/scene-preview-panel/ScenePreviewPanel";
import NarrowFooterPanel from "../components/layouts/narrow-footer-panel/NarrowFooterPanel"

// push to here --> https://github.com/keef-ui/upload-demo

const SNAPSHOT_STATES = ["blank", "file-selected", "create-image"];
const prevStateRef = useRef;

function TakeSnapShot({ snapShot, setSnapShot }) {
  //Take snashot and save file in the local download folder

  const webglDom = useThree((state) => state.gl); // get a copy of the webGl dom
  useEffect(() => {
    if (snapShot === SNAPSHOT_STATES[2]) {
      console.log("Taking snapshot...check download folder for new image");

      snapShotHelper(webglDom);
      //Set the state back to "file-selected" or "blank"
      //Todo: This is quick solution. Need better way to set back to previous state
      setSnapShot(prevStateRef.current);
    }
  }, [snapShot, setSnapShot]);
  return null;
}

export default function Home(props) {
  const [image, setImage] = useState(0); 
  const [imageUrl, setImageUrl] = useState(null); 
  const [snapShot, setSnapShot] = useState(SNAPSHOT_STATES[0]); 
  const camPosition = { camPosX: 0, camPosY: 100, camPosZ: 150 }; //Camera position
  const modelPosition = { modelPosX: 0, modelPosY: -50, modelPosZ: 10 }; //3d Model position


  const handleSnapShot = () => {
    console.log("Set snapshot state to create-image ....");
    setSnapShot(SNAPSHOT_STATES[2]);
    prevStateRef.current=(snapShot);
  };

  return (
    <Layout>
      <LabelPreview>
        <img className={styles.img} src={imageUrl} />
      </LabelPreview>
      <LabelUploadPanel>
        <LabelUploadForm
          setImage={setImage}
          setImageUrl={setImageUrl}
          setSnapShot={setSnapShot}
          snapShot={snapShot}
          SNAPSHOT_STATES={SNAPSHOT_STATES}
          image={image}
        />
      </LabelUploadPanel>
      <ScenePreviewPanel>
        <ShowModelEnvironment {...camPosition}>
          <Bottle {...modelPosition} />
          <TakeSnapShot setSnapShot={setSnapShot} snapShot={snapShot} />
        </ShowModelEnvironment>
      </ScenePreviewPanel>
      <NarrowFooterPanel>
          <Button onClick={handleSnapShot} type="submit" size="wide2" primary>
            <span className={styles.btnIcon}>
              <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
            </span>
            Take Snapshot
          </Button>
      </NarrowFooterPanel>
    </Layout>
  );
}
