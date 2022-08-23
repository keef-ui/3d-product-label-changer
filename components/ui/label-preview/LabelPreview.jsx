import React from "react";
import styles from "./LabelPreview.module.css";

export default function LabelPreview({ imageUrl,props }) {
  return (
    <div className={styles.uploadedLabelPreview}>
      <img className={styles.img} src={imageUrl} />
    </div>
  );
}
