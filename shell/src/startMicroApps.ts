import { registerMicroApps, start } from "qiankun";
import homeAppPackageJson from "../../home-app/package.json";
import react17AppPackageJson from "../../react17-app/package.json";
import react18AppPackageJson from "../../react18-app/package.json";

export const startMicroApps = () => {
  registerMicroApps(
    [
      {
        name: homeAppPackageJson.name,
        entry: "//localhost:9001",
        container: "#container",
        activeRule: (location) => location.pathname === "/",
      },
      {
        name: react17AppPackageJson.name,
        entry: "//localhost:9002",
        container: "#container",
        activeRule: "/react17",
      },
      {
        name: react18AppPackageJson.name,
        entry: "//localhost:9003",
        container: "#container",
        activeRule: "/react18",
      },
    ],
    {
      beforeLoad: async (app) => {
        console.log("[LifeCycle] before load", app.name);
      },
      beforeMount: async (app) => {
        console.log("[LifeCycle] before mount", app.name);
      },
      afterMount: async (app) => {
        console.log("[LifeCycle] after mount", app.name);
      },
      beforeUnmount: async (app) => {
        console.log("[LifeCycle] before unmount", app.name);
      },
      afterUnmount: async (app) => {
        console.log("[LifeCycle] after unmount", app.name);
      },
    }
  );

  start({ prefetch: false });
};
