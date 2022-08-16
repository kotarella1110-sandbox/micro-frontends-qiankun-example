import App from "./App";
import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import packageJson from "../package.json";

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let root: Root;

const render = (props?: any) => {
  const container = props?.container
    ? props.container.querySelector("#root")
    : document.getElementById("root");
  root = createRoot(container);

  root.render(
    <StrictMode>
      <RecoilRoot>
        <Provider store={store}>
          <App />
        </Provider>
      </RecoilRoot>
    </StrictMode>
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log(`${packageJson.name} bootstrap`);
}

export async function mount(props: any) {
  console.log(`${packageJson.name} mount`, props);
  render(props);
}

export async function unmount(props: any) {
  console.log(`${packageJson.name} unmount`, props);
  root.unmount();
}

export async function update(props: any) {
  console.log(`${packageJson.name} update`, props);
}
