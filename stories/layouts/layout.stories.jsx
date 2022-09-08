import Layout from "../../components/layouts/main-basic/MainBasic";
import LabelUploadPanel from "../../components/layouts/label-upload-panel/LabelUploadPanel";
import ScenePreviewPanel from "../../components/layouts/scene-preview-panel/ScenePreviewPanel";
import NarrowFooterPanel from "../../components/layouts/narrow-footer-panel/NarrowFooterPanel";
import LabelPreview from "../../components/layouts/label-preview/LabelPreview";
import styles from "./styles.module.css"

export default {
  title: "Layouts/MainLayout",
  component: Layout,
  subcomponents: { LabelPreview,LabelUploadPanel,ScenePreviewPanel,NarrowFooterPanel,LabelPreview },
};

export const MainLayout = () => (
  <Layout>
    <LabelPreview>
      <div className={styles.label}>Label Preview</div>
    </LabelPreview>
    <LabelUploadPanel>
      <div className={styles.upload}>Label Upload Panel</div>
    </LabelUploadPanel>
    <ScenePreviewPanel>
      <div className={styles.preview}>Scene Preview</div>
    </ScenePreviewPanel>
    <NarrowFooterPanel>
      <div className={styles.narrow}>Narrow Footer Panel</div>
    </NarrowFooterPanel>
  </Layout>
);

