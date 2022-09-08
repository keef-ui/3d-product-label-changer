import React from "react";
import styles from "./ScenePreviewPanel.module.css";

export default function ScenePreviewPanel({ children, props }) {
  return <div className={styles.scenePreview}>{children}</div>;
}
