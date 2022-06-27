import { useState } from "react";
import PreviewModel from "../components/3dmodels/previewBottle" 
import ShowModel from "../components/3dmodels/show-model";
import Bottle from "../components/3dmodels/bottle";
import styles from "../styles/Home.module.css";
import Router from "next/router";


export default function Home(props) {
  const [image, setImage] = useState(0);
  const [createObjectURL, setCreateObjectURL] = useState(null);

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

  return (
    <div className={styles.main}>
      <img className={styles.upload} src={createObjectURL} />
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
        <ShowModel camPosition={[0,120,80]}><Bottle /></ShowModel>
      </div>
    </div>
  );
}
