import { registerMicroApps, start } from "qiankun";

export const startMicroApps = () => {
  registerMicroApps(
    [
      {
        name: "home-app",
        entry: "//localhost:9001",
        container: "#container",
        activeRule: (location) => location.pathname === "/",
      },
      {
        name: "react-app",
        entry: "//localhost:9002",
        container: "#container",
        activeRule: "/react",
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

  start();
};
