import React from "react";
import styles from "./ColorPicker.module.css";
import { CirclePicker } from "react-color";

//TODO: Rewrite this: https://codepen.io/wildbeard/pen/eZZPZr
// https://stackoverflow.com/questions/17541614/use-images-instead-of-radio-buttons
//Not accessible
export const ColorPicker = ({ onChange,colorSwatch,...props }) => {
  return (
    <>
      <h3>Colour Changer</h3>
      <div className={styles.colorPicker}>
        <CirclePicker colors={colorSwatch} onChange={onChange} />
      </div>
    </>
  );
};
