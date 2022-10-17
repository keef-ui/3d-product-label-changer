// .storybook/manager.js

import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

// Configure docs links nelow
// https://storybook.js.org/docs/react/configure/overview
// https://storybook.js.org/docs/react/configure/theming

https: addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "right",
  enableShortcuts: true,
  showToolbar: true,
  theme: themes.light,
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    showRoots: false,
    collapsedRoots: ["other"],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
