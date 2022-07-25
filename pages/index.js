import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Button } from "../components/buttons/Button";
import ShowModel from "../components/3dmodels/show-model";
import Bottle from "../components/3dmodels/bottle/";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import snapShotHelper from "../components/3dmodels/helpers/takeSnap";

// push to here --> https://github.com/keef-ui/upload-demo

const SNAPSHOT_STATES = ["blank", "file-selected", "create-image"];

function TakeSnapShot({ snapShot, setSnapShot }) {
  //Take snashot and save file in the local download folder

  const webglDom = useThree((state) => state.gl); // get a copy of the webGl dom
  useEffect(() => {
    if (snapShot === SNAPSHOT_STATES[2]) {
      console.log("Taking snapshot...check download folder for new image");

      snapShotHelper(webglDom);
      //Set the state bake to "file-selected"
      setSnapShot(SNAPSHOT_STATES[1]);
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

  const fileSelect = (event) => {
    // Handle file select on client side
    // ToDo: Needs some validation for acceptable file types
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      setImage(file);
      setImageUrl(URL.createObjectURL(file));
      setSnapShot(SNAPSHOT_STATES[1]);
    }
  };

  const uploadToServer = async (event) => {
    //Handle form upload. Makes a REST call to "/api/file" 
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body,
    });
    console.log("File upload Status: " + response.statusText);
    Router.reload();
  };

  const handleSnapShot = () => {
    console.log("Set snapshot state to create-image ....");
    setSnapShot(SNAPSHOT_STATES[2]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.upload}>
        <img className={styles.img} src={imageUrl} />
      </div>

      <div className={styles.uploadBtns}>
        <h4>Up Load New Label</h4>
        <input type="file" name="myImage" onChange={fileSelect} />
        <Button onClick={uploadToServer} type="submit">
          Change Label
        </Button>
      </div>
      <div className={styles.preview}>
        <ShowModel {...camPosition}>
          <Bottle {...modelPosition} />
          <TakeSnapShot setSnapShot={setSnapShot} snapShot={snapShot} />
        </ShowModel>
      </div>
      <div className={styles.snapshot}>
        <Button onClick={handleSnapShot} type="submit" size="wide">
          Take Snapshot
        </Button>
      </div>
    </div>
  );
}
