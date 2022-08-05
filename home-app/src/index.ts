import packageJson from "../package.json";

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

const getContainer = (props?: any) =>
  props?.container
    ? props.container.querySelector("#root")
    : document.getElementById("root");

const render = (props?: any) => {
  const h1 = document.createElement("h1");
  h1.textContent = "Home App is mounted!";
  getContainer(props).appendChild(h1);
};

(window as any)[packageJson.name] = {
  bootstrap: async () => {
    console.log(`${packageJson.name} bootstrap`);
  },
  mount: async (props: any) => {
    console.log(`${packageJson.name} mount`, props);
    render(props);
  },
  unmount: async (props: any) => {
    getContainer(props).textContent = "";
    console.log(`${packageJson.name} unmount`, props);
  },
  update: async (props: any) => {
    console.log(`${packageJson.name} update`, props);
  },
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
