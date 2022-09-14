import React from "react";
import styles from "./LabelUpLoadPanel.module.css";

export default function LabelUploadPanel({ children,props,align='start' }) {

  //Accepts flex align "start", "end", "center","stretch"
  // Defaults start
  const ALIGN = ["start", "end", "center", "stretch"];
  let isAlignSet = ALIGN.indexOf(align);

  return (
    <div
      className={
        `${isAlignSet}`
          ? `${styles.labelUploadForm} ${styles[align]}`
          : `${styles.labelUploadForm}`
      }
    >
      {children}
    </div>
  );

}

