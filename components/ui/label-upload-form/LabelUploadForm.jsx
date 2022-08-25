import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faRotate } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import styles from "./LabelUploadForm.module.css"
import { Button } from "/components/ui/buttons/Button";
import Router from "next/router";

export default function LabelUploadForm(props) {
  const uploadToServer = async (event) => {
    //Handle form upload. Makes a REST call to "/api/file"
    const body = new FormData();
    body.append("file", props.image);
    const response = await fetch("/api/file", {
      method: "POST",
      body,
    });
    console.log("File upload Status: " + response.statusText);
    Router.reload();
  };

  const fileSelect = (event) => {
    // Handle file select on client side
    // ToDo: Needs some validation for acceptable file types
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      props.setImage(file);
      props.setImageUrl(URL.createObjectURL(file));
      props.setSnapShot(props.SNAPSHOT_STATES[1]);
    }
  };

  return (
    <div className={styles.labelUploadForm}>
      <h4>CHANGE LABEL</h4>
      <input type="file" name="myImage" onChange={fileSelect} />
      <div className={styles.uploadBtnContainer}>
        <Button
          onClick={uploadToServer}
          type="submit"
          disabled={props.snapShot === "blank" ? "disabled" : ""}
          size="wide"
          primary
          s
        >
          <span className={styles.btnIcon}>
            <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
          </span>
          Change
        </Button>
      </div>
    </div>
  );
}

