import { useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import PreviewModel from "../components/3dmodels/previewBottle" 
import ShowModel from "../components/3dmodels/show-model";
import Bottle from "../components/3dmodels/bottle/";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import snapShotHelper from "../components/3dmodels/helpers/takeSnap";


// push to here --> https://github.com/keef-ui/upload-demo


function TakeSnapShot({ snapShot, setSnapShot }) {
  const gl = useThree((state) => state.gl);
  useEffect(() => {
    if (snapShot) {
      console.log("Clicked.....");
    
      snapShotHelper(gl);
      setSnapShot(false);
    }
  }, [snapShot, setSnapShot]);
  return null;
}

export default function Home(props) {
  const [image, setImage] = useState(0);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [snapShot,setSnapShot] = useState(false)

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
       
    }
   
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body,
    });
    console.log(response.statusText);
    image++;
    Router.reload();
  };

  const camPosition = { camPosX: 0, camPosY: 100, camPosZ: 150 };
  const modelPosition = { modelPosX: 0, modelPosY: -50, modelPosZ: 10 };

  const handleSnapShot = () =>{
   console.log('Set snapshot state to true ....')
   setSnapShot(true)
  }



  return (
    <div className={styles.main}>
      <div className={styles.upload}>
        <img className={styles.img} src={createObjectURL} />
        </div>
      
      <div className={styles.uploadBtns}>
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
      <div className={styles.preview}>
        <ShowModel {...camPosition}>
          <Bottle {...modelPosition} />
          <TakeSnapShot setSnapShot={setSnapShot} snapShot={snapShot} />
        </ShowModel>
      </div>
      <div className={styles.snapshot}>
        <button className={styles.large} type="submit" onClick={handleSnapShot}>
          Take snapshot
        </button>
      </div>
    </div>
  );
}
