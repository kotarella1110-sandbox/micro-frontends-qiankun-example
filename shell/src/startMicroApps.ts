import { registerMicroApps, start } from "qiankun";

export const startMicroApps = () => {
  registerMicroApps([
    {
      name: "react-app",
      entry: "//localhost:9001",
      container: "#container",
      activeRule: "/react",
    },
  ]);

  start();
};
