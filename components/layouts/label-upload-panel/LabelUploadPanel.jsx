import React from "react";
import styles from "./LabelUpLoadPanel.module.css";

export default function LabelUploadPanel({ children,props }) {
  return <div className={styles.labelUploadForm}>{children}</div>;
}

