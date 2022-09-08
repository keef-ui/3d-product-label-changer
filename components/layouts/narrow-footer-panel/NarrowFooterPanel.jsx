import React from "react";
import styles from "./NarrowFooterPanel.module.css";

export default function ScenePreviewPanel({ children, props }) {
  return <div className={styles.narrowFooter}>{children}</div>;
}
