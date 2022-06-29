/*
 * Helper function that accesses the WebGL canvas then creates png file snapshot 
 *
 * Accepts input for the WebGL canvas dom : webGlCanvas
 *
 */
export default function takeSnap(webGlCanvas) {
  const link = document.createElement("a");
  link.setAttribute("download", "canvas.png");
  link.setAttribute(
    "href",
    webGlCanvas.domElement
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream")
  );
  link.click();
}
