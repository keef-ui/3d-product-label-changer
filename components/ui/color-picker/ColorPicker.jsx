import React from "react";
import styles from "./ColorPicker.module.css";
import { CirclePicker } from "react-color";

export const ColorPicker = ({ ...props }) => {
  return (
    <>
     
      <h3>Colour Changer</h3>
      <div className={styles.colorPicker}>
         <CirclePicker colors={["#f44336", "#e91e63", "#9c27b0"]} />
      </div>
    </>
  );
};
