import { useState, useEffect} from "react";
import Layout from "../../components/layouts/main-basic/MainBasic";
import LabelUploadPanel from "../../components/layouts/label-upload-panel/LabelUploadPanel";
import ScenePreviewPanel from "../../components/layouts/scene-preview-panel/ScenePreviewPanel";
import NarrowFooterPanel from "../../components/layouts/narrow-footer-panel/NarrowFooterPanel";
import LabelPreview from "../../components/layouts/label-preview/LabelPreview";
import styles from "../layouts/styles.module.css";
import Avatar from "../../components/3dmodels/avatar/ready-player/me";
import ShowModel from "../../components/3dmodels/show/show-model";
import { CirclePicker} from "react-color";
import {ColorPicker} from "../../components/ui/color-picker/ColorPicker";


export default {
  title: "Pages/AvatarEditor",
  component: Layout,
  subcomponents: {
    LabelPreview,
    LabelUploadPanel,
    ScenePreviewPanel,
    NarrowFooterPanel,
    LabelPreview,
    Avatar, 
    ShowModel
  },
};

const color_swatch = ["gray","red", "blue", "green",'hotpink','black']

export const MainLayout = () => {

    const [color, setColor] = useState(null)

    const handlColorChange = (color, e) => {
      // Change color
      setColor(color.hex);
    };

     useEffect(()=>console.log(color))

    return (
            <Layout>
                <LabelPreview>
                <div className={styles.label}>Label Preview</div>
                </LabelPreview>
                <LabelUploadPanel align="center">
                    <ColorPicker onChange={handlColorChange} colorSwatch={color_swatch}/>
                </LabelUploadPanel>
                <ScenePreviewPanel>
                <div className={styles.preview}>
                    <ShowModel camPosX={0} camPosY={0} camPosZ={3}>
                    <Avatar modelPosX={0} modelPosY={-1} modelPosZ={0} color={color}/>
                    </ShowModel>
                </div>
                </ScenePreviewPanel>
                <NarrowFooterPanel>
                <div className={styles.narrow}>Narrow Footer Panel</div>
                </NarrowFooterPanel>
            </Layout>
            );
    }
