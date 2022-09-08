import React from "react";
import styles from "./LabelPreview.module.css";

export default function LabelPreview({ children,props }) {
  return (
    <div className={styles.uploadedLabelPreview}>
      {children}
    </div>
  );
}
